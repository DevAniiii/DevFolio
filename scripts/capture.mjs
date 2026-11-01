import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const baseURL = "http://localhost:3100";
const outDir = ".screenshots";

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();

async function settle(page) {
  await page.evaluate(async () => {
    await document.fonts.ready;
    document.documentElement.style.scrollBehavior = "auto";
    await new Promise((resolve) => setTimeout(resolve, 350));
    const step = Math.round(window.innerHeight * 0.6);
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo({ top: y, behavior: "instant" });
      await new Promise((resolve) => setTimeout(resolve, 90));
    }
    window.scrollTo({ top: 0, behavior: "instant" });
    await new Promise((resolve) => setTimeout(resolve, 400));
  });
  await page.waitForTimeout(1000);
}

async function capture(name, path, viewport, options = {}) {
  const page = await browser.newPage({
    viewport,
    deviceScaleFactor: 1,
    reducedMotion: options.reducedMotion ? "reduce" : "no-preference",
  });
  const errors = [];
  page.on("pageerror", (error) => errors.push(`pageerror: ${error.message}`));
  page.on("console", (message) => {
    if (message.type() === "error") {
      errors.push(`console: ${message.text()}`);
    }
  });

  await page.goto(`${baseURL}${path}`, { waitUntil: "networkidle" });
  await settle(page);
  if (options.action) {
    await options.action(page);
  }
  await page.screenshot({
    path: `${outDir}/${name}.png`,
    fullPage: options.fullPage ?? true,
  });
  console.log(`${name}: ${errors.length ? errors.join(" | ") : "ok"}`);
  await page.close();
}

await capture("home-desktop", "/", { width: 1440, height: 900 });
await capture("home-desktop-fold", "/", { width: 1440, height: 900 }, { fullPage: false });
await capture("home-mobile", "/", { width: 390, height: 844 });
await capture("home-mobile-fold", "/", { width: 390, height: 844 }, { fullPage: false });
await capture("home-mobile-menu", "/", { width: 390, height: 844 }, {
  fullPage: false,
  action: async (page) => {
    await page.getByRole("button", { name: "Menu", exact: false }).click();
    await page.waitForTimeout(500);
  },
});
await capture("research-desktop", "/research", { width: 1440, height: 900 });
await capture("article-desktop", "/research/the-object-not-the-endpoint", {
  width: 1440,
  height: 900,
});
await capture("recognition-desktop", "/recognition", { width: 1440, height: 900 });
await capture("methodology-desktop", "/methodology", { width: 1440, height: 900 });
await capture("about-desktop", "/about", { width: 1440, height: 900 });
await capture("contact-desktop", "/contact", { width: 1440, height: 900 });
await capture("research-mobile", "/research", { width: 390, height: 844 });
await capture("article-mobile", "/research/the-object-not-the-endpoint", {
  width: 390,
  height: 844,
});
await capture("contact-mobile", "/contact", { width: 390, height: 844 });
await capture("home-reduced-motion", "/", { width: 1440, height: 900 }, {
  reducedMotion: true,
});
await capture("tablet-home", "/", { width: 768, height: 1024 });

await browser.close();

import { email } from "../../lib/consts";

const CONTACT = {
  heading: "OPEN TO COLLABORATION",
  subHeading: "Contact",
  description:
    "Open to discussing new ideas, exciting projects, and collaboration opportunities. Currently looking for a Full Stack / MERN Stack internship where I can contribute, learn, and grow.",
  title: ["Let's build", "something", "impactful."],
  body:
    "I'm actively seeking internship opportunities and enjoy building modern, scalable web applications. Whether you have a project, an opportunity, or simply want to connect, I'd be happy to hear from you.",
};

const SOCIALS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/anirbanbanerjeee",
  },
  {
    name: "GitHub",
    href: "https://github.com/DevAniiii",
  },
];

export default function Contact() {
  const stopSpacePropagation = (
    e: React.KeyboardEvent<HTMLFormElement>
  ) => {
    const target = e.target;

    const isInput =
      target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement ||
      target instanceof HTMLSelectElement ||
      (target instanceof HTMLElement && target.isContentEditable);

    if (isInput && e.key === " ") {
      e.stopPropagation();
    }
  };

  return (
    <section id="contact" className="contact relative overflow-hidden px-0 pt-[clamp(56px,8vw,90px)] pb-[clamp(24px,6vw,40px)] font-sans text-white">
      <div className="contact__bg pointer-events-none absolute -inset-[20%] opacity-90 blur-[6px]" aria-hidden />

      <header className="contact-header mx-auto flex w-[min(92vw,1100px)] flex-col items-center justify-center gap-[clamp(16px,3vw,28px)] pt-[clamp(16px,3.5vw,36px)] text-center font-sans">
        <div className="sectionHeader mx-auto mb-[42px] w-[min(1200px,92%)] text-center">
          <p className="sectionTitle m-0 text-lg font-semibold font-[font2] leading-tight tracking-[-0.02em] max-[900px]:mx-auto max-[900px]:max-w-[16ch]">
                 <span className="inline-flex rounded-full border border-[#667eea40] bg-[#667eea1a] shadow-[0_0_4px_#1F64A7] px-6 py-2">
                   {CONTACT.subHeading}
                 </span>
          </p>
          <h2 className="m-8 max-w-[18ch] break-words font-[font4] text-[clamp(2.2rem,6.5vw,5.25rem)] leading-[0.92] text-white max-[420px]:text-[clamp(2rem,10vw,2.8rem)]">{CONTACT.heading}</h2>
          <p className="sectionSub mx-auto mt-4 max-w-[70ch] text-[clamp(0.95rem,1.35vw,1.05rem)] leading-[1.7] text-white/55">
                {CONTACT.description}
               </p>
             </div>
      </header>

      <div className="contact__container relative mx-auto mt-[clamp(28px,6vw,60px)] flex w-[min(1200px,92vw)] items-start justify-between gap-[clamp(24px,5vw,64px)] pb-[clamp(40px,7vw,80px)] max-[900px]:flex-col max-[900px]:items-stretch max-[900px]:gap-[24px]">
        <div className="contact__left min-w-0 max-w-[680px] flex-[1_1_58%] max-[900px]:max-w-none">
          <h2 className="contact__title mb-[clamp(14px,3vw,22px)] font-[font4] text-[clamp(2.2rem,5.2vw,5.4rem)] font-extrabold leading-[0.92] tracking-[-0.03em]">
            {CONTACT.title[0]}
            <br />
            {CONTACT.title[1]}
            <br />
            <span className="contact__titleAccent font-extrabold text-[#2167AB]">
              {CONTACT.title[2]}
            </span>
          </h2>

          <p className="contact__desc mb-[clamp(18px,4vw,34px)] max-w-[56ch] text-[clamp(0.95rem,1.4vw,1rem)] leading-[1.7] text-white/65">{CONTACT.body}</p>

          <div className="contact__info mt-[18px] flex flex-col gap-[10px]">
            <a className="contact__email w-fit border-b border-white/25 pb-[6px] text-[clamp(1.05rem,3.2vw,1.35rem)] text-white/90 transition-colors hover:border-[#2167AB]/60 hover:text-[#2167AB] max-[420px]:text-[1.05rem]" href={`mailto:${email}`}>
              {email}
            </a>
          </div>
        </div>

        <div className="contact__card w-full max-w-[420px] flex-[0_0_420px] rounded-[18px] border border-white/8 bg-[rgba(20,20,20,0.55)] p-[clamp(16px,4vw,22px)] shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-[10px] max-[900px]:max-w-none max-[900px]:flex-none">
          <form
            className="contact__form flex flex-col gap-4"
            action="https://usebasin.com/f/bedb6c6ee3d7"
            method="POST"
            onKeyDownCapture={stopSpacePropagation}
          >
            <label className="field flex flex-col gap-2">
              <span className="field__label text-[11px] tracking-[0.22em] text-[#2167AB]/80">
                NAME
              </span>
              <input
                className="field__input w-full rounded-[10px] border border-white/8 bg-[rgba(8,8,8,0.55)] px-3 py-3 text-[14px] text-white/90 outline-none placeholder:text-white/30 focus:border-white/20"
                type="text"
                name="name"
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </label>
          
            <label className="field flex flex-col gap-2">
              <span className="field__label text-[11px] tracking-[0.22em] text-[#2167AB]/80">
                EMAIL
              </span>
              <input
                className="field__input w-full rounded-[10px] border border-white/8 bg-[rgba(8,8,8,0.55)] px-3 py-3 text-[14px] text-white/90 outline-none placeholder:text-white/30 focus:border-white/20"
                type="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </label>
          
            <label className="field flex flex-col gap-2">
              <span className="field__label text-[11px] tracking-[0.22em] text-[#2167AB]/80">
                MESSAGE
              </span>
              <textarea
                className="field__textarea min-h-[120px] w-full resize-none rounded-[10px] border border-white/8 bg-[rgba(8,8,8,0.55)] p-3 text-[14px] text-white/90 outline-none placeholder:text-white/30 focus:border-white/20"
                name="message"
                rows={5}
                placeholder="Tell me about your project, internship, or opportunity..."
                required
              />
            </label>
          
            <button
              type="submit"
              className="contact__btn mt-[6px] h-[52px] w-full cursor-pointer rounded-[10px] border border-[#2167AB]/30 bg-[#2167AB] text-[12px] font-bold tracking-[0.12em] text-white transition-all duration-150 hover:-translate-y-[1px] hover:border-[#2167AB]/60 hover:shadow-[0_0_24px_rgba(33,103,171,0.4)] active:translate-y-0"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>

      <footer className="contact__footer relative mx-auto w-[min(1200px,92vw)] border-t border-white/8 pt-[22px]">
        <div className="contact__footerInner flex items-center justify-between gap-4 text-[12px] text-white/45 max-[900px]:flex-col max-[900px]:items-start">
          <p className="contact__copyright">
            © {new Date().getFullYear()} Anirban Banerjee. All rights
            reserved.
          </p>

          <nav className="contact__links flex gap-[18px]">
            {SOCIALS.map(({ name, href }) => (
              <a
                className="text-white/45 transition-colors hover:text-white/70"
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
              >
                {name}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </section>
  );
}
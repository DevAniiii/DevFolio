"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent } from "react";

interface Surface {
  id: string;
  label: string;
  title: string;
  description: string;
  x: number;
  y: number;
}

const surfaces: Surface[] = [
  {
    id: "request",
    label: "Request",
    title: "API request",
    description:
      "A request is not a fact. Route, identifiers, and state arrive from the client; the server decides which of them become authority.",
    x: 14.4,
    y: 50,
  },
  {
    id: "identity",
    label: "Identity",
    title: "Identity",
    description:
      "Authentication binds the request to an actor. Sessions, tokens, and privilege changes determine whose authority the next check inherits.",
    x: 39.6,
    y: 50,
  },
  {
    id: "authorize",
    label: "Authorize",
    title: "Authorization",
    description:
      "The check must connect the actor to the object and the action. Route guards alone cannot answer whether this actor may touch this record.",
    x: 61.1,
    y: 50,
  },
  {
    id: "object",
    label: "Object",
    title: "Ownership",
    description:
      "Ownership is the consequence. Reads, changes, and shares should be decided against the record’s owner, tenant, and relationships.",
    x: 84.8,
    y: 50,
  },
];

const links = [
  { from: "request", to: "identity", label: "authenticate" },
  { from: "identity", to: "authorize", label: "evaluate" },
  { from: "authorize", to: "object", label: "allow / deny" },
] as const;

const nodePositions: Record<string, { x: number; y: number }> = {
  request: { x: 78, y: 165 },
  identity: { x: 214, y: 165 },
  authorize: { x: 330, y: 165 },
  object: { x: 458, y: 165 },
};

export function SurfaceMap() {
  const [activeId, setActiveId] = useState("authorize");
  const mapRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const active =
    surfaces.find((surface) => surface.id === activeId) ?? surfaces[2];
  const activeIndex = surfaces.findIndex((surface) => surface.id === active.id);

  function moveFocus(currentIndex: number, direction: number) {
    const nextIndex =
      (currentIndex + direction + surfaces.length) % surfaces.length;
    const next = surfaces[nextIndex];
    setActiveId(next.id);
    buttonRefs.current[next.id]?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      moveFocus(index, 1);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      moveFocus(index, -1);
    } else if (event.key === "Home") {
      event.preventDefault();
      setActiveId(surfaces[0].id);
      buttonRefs.current[surfaces[0].id]?.focus();
    } else if (event.key === "End") {
      event.preventDefault();
      const last = surfaces[surfaces.length - 1];
      setActiveId(last.id);
      buttonRefs.current[last.id]?.focus();
    }
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const map = mapRef.current;
    if (!map) {
      return;
    }
    const rect = map.getBoundingClientRect();
    map.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    map.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <figure className="surface-panel border border-line">
      <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3">
        <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-mist">
          Fig. 01 / Request path
        </span>
        <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-mist/80">
          Illustrative
        </span>
      </div>

      <div
        ref={mapRef}
        onPointerMove={handlePointerMove}
        className="relative aspect-[1.45/1] min-h-[258px] overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(41,49,43,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(41,49,43,0.4) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), rgba(183,243,107,0.075), transparent 72%)",
          }}
        />

        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 540 330"
          preserveAspectRatio="none"
        >
          <g
            stroke="#29312B"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            fill="none"
          >
            <path
              pathLength={1}
              className="surface-draw"
              d="M-24 282 C 90 214, 188 326, 312 268 S 472 154, 570 216"
              opacity="0.7"
            />
            <path
              pathLength={1}
              className="surface-draw-delayed"
              d="M-18 92 C 86 154, 236 48, 352 82 S 474 190, 566 156"
              opacity="0.4"
            />

            <line
              x1="150"
              y1="64"
              x2="150"
              y2="292"
              stroke="#556157"
              strokeDasharray="3 7"
              opacity="0.95"
            />
            <path
              d="M143 64 H157 M143 292 H157"
              stroke="#556157"
              opacity="0.9"
            />
            <rect
              x="146.5"
              y="161.5"
              width="7"
              height="7"
              transform="rotate(45 150 165)"
              fill="#080A09"
              stroke="#B7F36B"
            />

            <line
              x1="78"
              y1="165"
              x2="458"
              y2="165"
              strokeDasharray="2 6"
              opacity="0.8"
            />

            {links.map((link) => {
              const from = nodePositions[link.from];
              const to = nodePositions[link.to];
              const isActive =
                active.id === link.from || active.id === link.to;

              return (
                <g
                  key={`${link.from}-${link.to}`}
                  stroke={isActive ? "#B7F36B" : "#29312B"}
                  opacity={isActive ? 0.9 : 0.65}
                  style={{ transition: "stroke 300ms ease, opacity 300ms ease" }}
                >
                  <line
                    x1={from.x + 14}
                    y1={from.y}
                    x2={to.x - 16}
                    y2={to.y}
                  />
                  <path
                    d={`M ${to.x - 23} ${to.y - 4} L ${to.x - 16} ${to.y} L ${to.x - 23} ${to.y + 4}`}
                  />
                </g>
              );
            })}
          </g>

          <g
            fill="#929B91"
            fontFamily="ui-monospace, SFMono-Regular, monospace"
            fontSize="8.5"
            letterSpacing="0.9"
          >
            <text x="18" y="26">REQ / 001</text>
            <text x="522" y="26" textAnchor="end">TRUST SURFACE / 04</text>
            <text x="522" y="314" textAnchor="end">NOT A LIVE SYSTEM</text>
            <text x="150" y="48" textAnchor="middle" fill="#B7F36B">
              TRUST BOUNDARY
            </text>
            <text x="78" y="310" textAnchor="middle">UNTRUSTED</text>
            <text x="345" y="310" textAnchor="middle">TRUSTED</text>
          </g>

          <g
            fill="#929B91"
            fontFamily="ui-monospace, SFMono-Regular, monospace"
            fontSize="9"
            letterSpacing="0.7"
            opacity="0.85"
          >
            <text x="146" y="130" textAnchor="middle">authenticate</text>
            <text x="272" y="130" textAnchor="middle">evaluate</text>
            <text x="394" y="130" textAnchor="middle">allow / deny</text>
          </g>

          <g stroke="#556157" strokeWidth="1" opacity="0.6">
            <path d="M18 34 L18 48 M12 40 L24 40" />
            <path d="M522 292 L522 306 M516 298 L528 298" />
          </g>
        </svg>

        <div
          role="tablist"
          aria-label="Application request path"
          className="absolute inset-0"
        >
          {surfaces.map((surface, index) => {
            const selected = surface.id === active.id;
            return (
              <button
                key={surface.id}
                ref={(element) => {
                  buttonRefs.current[surface.id] = element;
                }}
                type="button"
                role="tab"
                id={`surface-tab-${surface.id}`}
                aria-selected={selected}
                aria-controls="surface-detail"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveId(surface.id)}
                onFocus={() => setActiveId(surface.id)}
                onMouseEnter={() => setActiveId(surface.id)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                className="group absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 px-1 py-1.5 focus-visible:outline-offset-2"
                style={{ left: `${surface.x}%`, top: `${surface.y}%` }}
              >
                <span className="relative flex h-6 w-6 items-center justify-center">
                  <span
                    aria-hidden="true"
                    className={`absolute h-6 w-6 border border-dashed transition-colors ${
                      selected ? "border-acid/50" : "border-transparent"
                    }`}
                  />
                  <span
                    aria-hidden="true"
                    className={`absolute h-px w-5 transition-colors ${
                      selected ? "bg-acid/60" : "bg-mist/30"
                    }`}
                  />
                  <span
                    aria-hidden="true"
                    className={`absolute h-5 w-px transition-colors ${
                      selected ? "bg-acid/60" : "bg-mist/30"
                    }`}
                  />
                  <span
                    aria-hidden="true"
                    className={`relative h-2 w-2 border transition-all duration-300 ${
                      selected
                        ? "border-acid bg-acid"
                        : "border-mist/70 bg-obsidian group-hover:border-acid"
                    }`}
                  />
                </span>
                <span
                  className={`font-mono text-[0.625rem] uppercase tracking-[0.1em] transition-colors ${
                    selected
                      ? "text-acid"
                      : "text-mist group-hover:text-bone"
                  }`}
                >
                  {surface.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div
        id="surface-detail"
        role="tabpanel"
        aria-labelledby={`surface-tab-${active.id}`}
        tabIndex={0}
        className="border-t border-line px-4 py-4 focus-visible:outline-offset-[-2px]"
      >
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-acid">
            Active / {active.title}
          </span>
          <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-mist/80">
            0{activeIndex + 1} / 04
          </span>
        </div>
        <p className="mt-2.5 min-h-[4.5rem] text-sm leading-relaxed text-bone/80">
          {active.description}
        </p>
      </div>

      <figcaption className="border-t border-line px-4 py-2.5 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-mist/75">
        A conceptual request path, not a live system.
      </figcaption>
    </figure>
  );
}

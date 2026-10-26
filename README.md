# IMDX — India Mobility Data Exchange

IMDX is a responsive, single-page website created for the Website Development
Internship assignment at Tecmotiv Solutions Pvt. Ltd. It presents an India-focused
mobility data exchange initiative and explains how trusted, interoperable data could
connect vehicle, battery, charging, fleet, and urban-transport ecosystems.

The website intentionally distinguishes prospective architecture from deployed
capabilities. IMDX is presented as an initiative in development, not as a live data
exchange platform.

## Contents

- [Website preview](#website-preview)
- [Key features](#key-features)
- [Technology stack](#technology-stack)
- [Project structure](#project-structure)
- [Website sections](#website-sections)
- [Local setup](#local-setup)
- [Available scripts](#available-scripts)
- [Implementation details](#implementation-details)
- [Assignment compliance](#assignment-compliance)
- [Testing and validation](#testing-and-validation)
- [Design and accessibility](#design-and-accessibility)
- [Known limitations](#known-limitations)
- [Future improvements](#future-improvements)
- [Repository and submission information](#repository-and-submission-information)

## Website preview

### Desktop homepage

![IMDX desktop homepage](./screenshots/desktop.png)

### Mobile homepage

![IMDX mobile homepage](./screenshots/mobile.png)

These are captures of the running application. The desktop image was captured at
1440 × 900 and the mobile image at 548 × 723. The headless browser used for the
desktop capture did not decode the background video, so that image shows the intended
dark fallback state behind the hero content. The local browser experience loads the
video when media playback is available.

## Key features

- Cinematic hero section with a local background video, layered gradients, noise
  texture, responsive typography, and primary ecosystem CTA.
- Responsive navigation with active section highlighting, hide-on-scroll behavior,
  and a menu button that opens a dedicated navigation panel.
- About IMDX section describing data fragmentation, sovereignty, interoperability,
  and governance principles.
- Benefits section with standards, sovereignty, and ecosystem collaboration pillars.
- Mobility use-case section covering connected vehicles, battery traceability, and
  urban mobility planning.
- Scroll-linked orbital progress line with a moving node and reduced-motion support.
- Collaboration CTA and footer navigation.
- Contact modal with native required/email validation, dialog semantics, Escape-to-close,
  and body scroll locking.
- Use-case detail modal with responsive overflow handling and keyboard closing.
- Responsive layouts for desktop, tablet, and mobile breakpoints.

The contact form is presentation-only. It does not send or persist inquiries because
the project has no configured backend, recipient address, or submission service.

## Technology stack

| Technology | Use in this project |
|---|---|
| React 19 | Component-based page composition and local UI state |
| TypeScript | Typed React components and application checks |
| Vite 8 | Development server and production bundling |
| Tailwind CSS 4 | Utility-first responsive styling and design tokens |
| `@tailwindcss/vite` | Tailwind integration in the Vite pipeline |
| Motion for React | Hero, scroll, modal, and viewport animations |
| Lucide React | Navigation, modal, CTA, and UI icons |
| `clsx` and `tailwind-merge` | Class name composition in shared utilities |
| `tsx` and Node test runner | Execution of pure logic tests |

The package manifest also contains packages retained from the original project
environment. Only dependencies used by the current application should be considered
part of its active runtime surface.

## Project structure

```text
IMDX/
├── public/
│   └── assets/
│       ├── aistudio/             # Hero video and supporting local visual assets
│       └── mobility/             # Mobility use-case SVG artwork
├── screenshots/                  # Verified desktop and mobile captures
├── src/
│   ├── components/
│   │   ├── ui/                  # Reusable visual primitives
│   │   ├── AboutSection.tsx
│   │   ├── AnimatedLetter.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── CollaborationCTA.tsx
│   │   ├── ContactModal.tsx
│   │   ├── DetailModal.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── ScrollProgressLine.tsx
│   │   ├── UseCasesSection.tsx
│   │   └── WordsPullUpMultiStyle.tsx
│   ├── lib/
│   │   └── utils.ts              # Shared class-name utility
│   ├── App.tsx                   # Single-page composition and contact state
│   ├── main.tsx                  # React entry point
│   ├── index.css                 # Global styles, tokens, and motion rules
│   └── imdx-logic.test.ts        # Pure logic tests
├── .env.example                  # Environment reference retained from source project
├── .gitignore                    # Ignore rules for local/generated files
├── bun.lock                      # Existing Bun lockfile
├── components.json               # Component alias configuration
├── index.html                    # Metadata, fonts, and root element
├── metadata.json                 # Project metadata
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript and `@/*` path mapping
├── vite.config.ts                # Vite, Tailwind, and source alias setup
└── README.md                     # Project documentation
```

Generated directories such as `node_modules/` and `dist/` are local build artifacts
and are excluded from GitHub submission.

## Website sections

### 1. Hero

Introduces IMDX with the headline “Connecting India’s Mobility Ecosystem”, supporting
copy about trusted data and open standards, a CTA to the ecosystem section, and a
scroll indicator. The hero uses the local mobility video when the browser permits
autoplay and media decoding.

### 2. About IMDX / ecosystem

Explains that mobility is connected while its data remains fragmented. The section
describes the initiative's India-focused, sovereign, interoperable direction and
shows three principles: data sovereignty, open standardisation, and neutral
governance.

### 3. Key benefits

Presents interoperability and open standards, trusted and sovereign exchange, and
mobility ecosystem collaboration. It references Catena-X, Tractus-X, IDS principles,
EDC patterns, and related prospective architecture without claiming deployment.

### 4. Mobility use cases

Provides exploratory cards for connected vehicle telemetry, battery data and
traceability, and urban mobility and planning. Each card opens a detail dialog with
objectives and development-status context.

### 5. Collaboration CTA

Invites OEMs, battery manufacturers, charging operators, municipal authorities, and
technology innovators to explore collaboration with IMDX.

### 6. Footer

Contains IMDX identity, navigation anchors, primary use cases, contact action, and a
smooth back-to-top control.

### 7. Interactive dialogs

The contact dialog captures local form state only. The use-case detail dialog displays
prospective objectives and can be closed through its close controls, backdrop, or
Escape key.

## Local setup

### Prerequisites

- Node.js 20 or newer
- npm 11 or Bun

### Install dependencies

The repository includes an existing `bun.lock`. With Bun:

```bash
bun install
```

With npm, the current Vite 8 and declared `esbuild` ranges produce a peer-resolution
conflict. Install without replacing the existing lockfile:

```bash
npm install --legacy-peer-deps
```

### Start development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production preview

```bash
npm run build
npm run preview
```

## Available scripts

| Script | Command | Purpose |
|---|---|---|
| `dev` | `vite --port=3000 --host=0.0.0.0` | Starts the Vite development server |
| `build` | `vite build` | Creates the production bundle in `dist/` |
| `preview` | `vite preview` | Serves the production bundle locally |
| `clean` | `rm -rf dist server.js` | Removes generated output on Unix-like shells |
| `lint` | `tsc --noEmit` | Runs the TypeScript compiler without emitting files |
| `test` | `tsx --test src/imdx-logic.test.ts` | Runs the pure logic tests |

The `clean` script uses Unix shell syntax and may require Git Bash, WSL, or an
equivalent shell on Windows.

## Implementation details

### Component organisation

`App.tsx` composes the page sections and owns the shared contact-modal open state.
Page-specific sections live in `src/components/`, reusable visual primitives live in
`src/components/ui/`, and shared class-name helpers live in `src/lib/`.

### Navigation

`Navbar.tsx` tracks the active section from scroll position. Its scroll work is
scheduled with `requestAnimationFrame`, and the previous scroll position is stored in
a ref. The hamburger button opens a navigation panel rather than opening the contact
form. The panel includes section links and a separate `Contact IMDX` action.

### Modals

`ContactModal.tsx` uses controlled React state for fields and submission presentation.
It exposes dialog semantics, locks body scrolling while open, closes on Escape, and
restores the previous body overflow value on cleanup.

`DetailModal.tsx` follows the same keyboard and scroll-lock pattern for exploratory
use-case details.

### Scroll animation

`ScrollProgressLine.tsx` uses Motion's `useScroll`, `useSpring`, and `useTransform`
values. Orbital SVG paths are generated once, while the active clip height and moving
node update through Motion values instead of React state on every scroll frame. This
keeps the animation lightweight during page scrolling.

### Responsive styling

Tailwind breakpoints adjust hero padding and type scale, collapse benefit and use-case
grids, resize modal content, and stack the footer on narrow screens. The orbital line
is fixed in a narrow left rail and has `pointer-events: none` so it cannot block UI.

### Background media

The hero references a local MP4 under `public/assets/aistudio/`. It is configured with
`autoPlay`, `loop`, `muted`, and `playsInline`. Gradient overlays maintain text
readability when the video is visible; a dark background remains available when media
playback is blocked.

## Assignment compliance

The original `Web_Development_Interns_Assignment.docx` was not available in the
workspace. The following provisional matrix is based on the requirements established
for this project and the supplied completion brief. It must not be treated as a
replacement for the original assignment document.

| Requirement | Implementation | Source | Verification |
|---|---|---|---|
| Preserve the IMDX visual identity | Dark cinematic theme, cream typography, amber accents, local assets | `src/index.css`, `src/components/` | Source review and production build — PASS |
| Present a mobility data exchange concept | Ecosystem, benefits, use cases, and collaboration content | `AboutSection.tsx`, `BenefitsSection.tsx`, `UseCasesSection.tsx` | Content review — PASS |
| Provide responsive layouts | Tailwind breakpoint utilities and responsive grids | Section components and `index.css` | Desktop/mobile captures and overflow check — PASS |
| Include meaningful JavaScript interaction | Navigation panel, contact dialog, use-case detail dialog | `Navbar.tsx`, `ContactModal.tsx`, `DetailModal.tsx` | Browser execution — PASS |
| Support keyboard-friendly dialogs | Dialog roles, labels, Escape close, scroll restoration | `ContactModal.tsx`, `DetailModal.tsx` | Browser execution and accessibility snapshot — PASS |
| Use scroll-based visual behavior | Orbital progress line and active section navigation | `ScrollProgressLine.tsx`, `Navbar.tsx` | Browser scroll execution — PASS |
| Document and validate the submission | README, screenshots, scripts, checks | `README.md`, `screenshots/` | File and command verification — PASS |
| Verify exact original assignment criteria | Original DOCX unavailable | Workspace document search | BLOCKED — original document still required |

## Testing and validation

The following checks were executed against the current codebase:

- `npm run lint` — passed.
- `npm test` — passed; 3 pure logic tests.
- `npm run build` — passed.
- Desktop render — captured at 1440 × 900 with headless Edge.
- Mobile render — captured at 548 × 723 with headless Edge.
- Mobile horizontal overflow — not present.
- Navigation panel — opens from the hamburger button, closes with Escape, and exposes
  section links plus a separate contact action.
- Contact dialog — opens from `Contact IMDX`, closes with Escape, and restores body
  scrolling.
- Use-case detail dialog — opens from a use-case card and closes with Escape.
- Vite configuration — uses an ESM-safe project-root calculation; the previous
  `__dirname` warning is resolved.

The original npm peer-resolution mismatch remains. The verified npm installation
command is `npm install --legacy-peer-deps`; no blanket dependency upgrade was made.

## Design and accessibility

The visual direction combines a dark cinematic background, warm cream typography,
restrained amber accents, rounded panels, subtle noise, and editorial serif headings.
The design uses existing assets and avoids unnecessary visual redesign.

Accessibility-related implementation includes:

- Semantic `header`, `nav`, `main`, `section`, `footer`, and button elements.
- Descriptive labels for icon-only controls.
- `aria-expanded` and `aria-controls` on the navigation trigger.
- `aria-current` for the active navigation item.
- `role="dialog"`, `aria-modal`, and labelled headings for modal surfaces.
- Native required and email input validation.
- Keyboard Escape handling for menus and dialogs.
- Body scroll locking while dialogs are open.
- `prefers-reduced-motion` rules in `src/index.css`.

## Known limitations

- The contact form has no backend and does not transmit or persist submissions.
- The original assignment DOCX was unavailable, so exact assignment compliance cannot
  be certified.
- The npm dependency graph has a Vite/esbuild peer-range mismatch and requires
  `--legacy-peer-deps` for npm installation.
- The desktop screenshot's headless browser did not decode the background video.
- No Git repository has been initialized and no remote has been created.
- A complete focus trap is not implemented inside the custom dialogs.

## Future improvements

These are not implemented features; they are possible next steps:

- Connect the contact form to a secure backend or approved form service.
- Add automated browser tests for desktop, tablet, mobile, and reduced-motion modes.
- Add focus trapping and initial-focus management to custom dialogs.
- Replace retained template-only dependencies after confirming they are unused.
- Add a real project favicon and social preview image.
- Add a formal assignment requirements document to the repository if permitted.

## Repository and submission information

This project is ready for manual GitHub upload. The repository has not been
initialized, pushed, or published automatically.

For a clean submission, include:

- `src/`
- `public/assets/`
- `screenshots/`
- `package.json`
- `bun.lock`
- `index.html`
- `vite.config.ts`
- `tsconfig.json`
- `components.json`
- `.gitignore`
- `README.md`

Exclude local/generated content such as `node_modules/`, `dist/`, `.aistudio/`, caches,
logs, and private environment files. Keep `.env.example` only as a reference; the
current frontend does not require runtime environment variables.

---
name: Npire Digital
colors:
  surface: '#0e1321'
  surface-dim: '#0e1321'
  surface-bright: '#343948'
  surface-container-lowest: '#090e1c'
  surface-container-low: '#161b2a'
  surface-container: '#1a1f2e'
  surface-container-high: '#252a39'
  surface-container-highest: '#303444'
  on-surface: '#dee2f6'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#dee2f6'
  inverse-on-surface: '#2b303f'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#d8ffe7'
  on-tertiary: '#003824'
  tertiary-container: '#65f2b5'
  on-tertiary-container: '#006d4a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#0e1321'
  on-background: '#dee2f6'
  surface-variant: '#303444'
typography:
  headline-xl:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max: 1280px
---

## Brand & Style
The design system is engineered for a high-stakes blockchain environment where security, precision, and futuristic innovation intersect. The brand personality is "Web3 Professional"—a blend of institutional reliability and decentralized transparency. 

The visual style utilizes **Glassmorphism** and **Corporate Minimalism** to create a sophisticated digital experience. By layering translucent surfaces over deep, expansive backgrounds, the UI evokes a sense of infinite depth and high-tech elegance. The atmosphere is calm yet energetic, utilizing vibrant light-emitting accents to guide the user through complex cryptographic workflows.

## Colors
The palette is built on a "Deep Space" foundation to ensure maximum contrast for high-visibility data. 

- **Primary (Electric Cyan):** Used for primary actions, focus states, and representing "active" blockchain connections.
- **Secondary (Vibrant Purple):** Used for supplementary features, staking, and rewards to differentiate value-add actions from utility actions.
- **Neutral (Deep Navy & Charcoal):** The background layers use `#0A0F1D` for the base and `#111827` for elevated containers, providing a sturdy, secure environment.
- **Success (Emerald):** A sharp green used for confirmed transactions and secure status indicators.

Gradients should be used sparingly, primarily as subtle background glows (radial) or linear strokes on glass containers to simulate light refraction.

## Typography
The typography system prioritizes legibility and technical character. 

- **Sora** is utilized for headlines to provide a geometric, futuristic feel that aligns with the "Npire" aesthetic.
- **Inter** handles all functional body text, providing the neutral, systematic clarity required for financial interfaces.
- **JetBrains Mono** is reserved for wallet addresses, transaction hashes, and data points, reinforcing the developer-grade security and precision of the platform.

All headlines should use a slightly tighter letter-spacing to feel more "constructed" and architectural.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid Grid**. On desktop, content is constrained to a 1280px container to ensure data density remains manageable and professional. 

A strict 8px spatial scale governs all padding and margins. 
- **Desktop:** 12-column grid with 24px gutters.
- **Tablet:** 8-column grid with 20px gutters.
- **Mobile:** 4-column grid with 16px gutters and 16px side margins.

Containers and sections should use generous vertical padding (64px+) to create a "breathable" high-end feel, contrasting with the high-density data tables found within them.

## Elevation & Depth
Depth is achieved through **Glassmorphism** and **Luminous Outlines** rather than traditional shadows.

1.  **Level 0 (Base):** The foundation is the darkest neutral color (`#0A0F1D`).
2.  **Level 1 (Glass Surface):** Containers use a semi-transparent fill (`rgba(255, 255, 255, 0.03)`) with a `backdrop-filter: blur(12px)`.
3.  **Level 2 (Active/Floating):** Higher elevation elements use a slightly brighter fill and a subtle `1px` solid border in a low-opacity primary color to simulate a "light-trapped" edge.

Avoid heavy black shadows. If a shadow is necessary for legibility, use a diffused primary-tinted glow (`rgba(0, 240, 255, 0.15)`) to suggest the element is emitting light.

## Shapes
The shape language is "Softly Technical." We use a base roundedness of **0.5rem (8px)** for most UI components (cards, buttons, inputs) to bridge the gap between friendly consumer apps and rigid enterprise software.

Large dashboard cards may use `rounded-xl` (24px) to create a distinct framing effect. Icons and illustrative elements should follow the same corner radii to maintain a cohesive visual melody.

## Components

- **Buttons:** Primary buttons feature a solid Cyan fill with black text for maximum contrast. Secondary buttons use a "Ghost" style with a 1px Cyan border and a subtle hover glow.
- **Glass Cards:** All main content areas sit inside glass containers with a subtle `1px` border (Top-left: 20% opacity white, Bottom-right: 5% opacity white) to create a 3D glass effect.
- **Input Fields:** Backgrounds are slightly darker than the card they sit on. Focus states must trigger a `2px` Primary color border and a subtle outer glow.
- **Transaction Lists:** Use high-contrast dividers (`rgba(255,255,255,0.05)`) and utilize the Mono font for all numerical values and hashes.
- **Status Chips:** Small, pill-shaped indicators. "Success" uses a soft emerald glow, "Pending" uses a pulsating purple, and "Failed" uses a sharp coral/red.
- **Security Badge:** A persistent, high-quality icon (shield or lock) using a subtle gradient fill to indicate the "Npire" vault is active and secure.
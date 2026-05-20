---
name: Organic Vitality
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#434842'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#737971'
  outline-variant: '#c3c8bf'
  surface-tint: '#4c644e'
  primary: '#4c644e'
  on-primary: '#ffffff'
  primary-container: '#89a389'
  on-primary-container: '#223925'
  inverse-primary: '#b3ceb2'
  secondary: '#685e31'
  on-secondary: '#ffffff'
  secondary-container: '#f1e3a9'
  on-secondary-container: '#6e6436'
  tertiary: '#6f5a4f'
  on-tertiary: '#ffffff'
  tertiary-container: '#b1978a'
  on-tertiary-container: '#423026'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ceeacd'
  primary-fixed-dim: '#b3ceb2'
  on-primary-fixed: '#09200e'
  on-primary-fixed-variant: '#354c37'
  secondary-fixed: '#f1e3a9'
  secondary-fixed-dim: '#d4c78f'
  on-secondary-fixed: '#211b00'
  on-secondary-fixed-variant: '#4f471b'
  tertiary-fixed: '#faddce'
  tertiary-fixed-dim: '#ddc1b3'
  on-tertiary-fixed: '#271810'
  on-tertiary-fixed-variant: '#564338'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Manrope
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md-mobile:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '700'
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
  margin-desktop: 64px
  margin-mobile: 20px
  max-width: 1280px
---

## Brand & Style

The core of this design system is "Organic Modernism." It bridges the gap between the raw, earth-bound nature of sugarcane and the high-efficiency expectations of a modern health brand. The UI must feel as refreshing as the product itself—breathable, vibrant, and meticulously clean.

We employ a **Minimalist** foundation enriched with **Tonal Layers**. This ensures the interface never feels "clinical" or cold. Instead, it evokes a sense of well-being and natural energy. Visual weight is distributed to favor whitespace, allowing the lush colors to act as the primary drivers of brand personality. Every interaction should feel effortless, reflecting the "efficient" pillar of the brand.

## Colors

This design system utilizes a palette inspired by the sugarcane harvest. 

- **Sage Green (#89A389):** The primary driver. Used for growth, health, and primary actions. It is a muted, sophisticated green that avoids the "artificial" neon tones of standard tech.
- **Wheat (#F3E5AB):** The secondary highlight. It represents the inner pulp of the cane and provides a soft, sunny warmth to the UI.
- **Deep Mocha (#4E3B31):** The grounding element. Used for high-contrast typography and structural borders. It provides a rich, organic alternative to pure black.
- **Canvas (#F9F7F2):** Our off-white neutral. It keeps the interface feeling "paper-like" and natural rather than digital and sterile.

Color should be applied in a 60-30-10 ratio: 60% Canvas/Neutral, 30% Sage/Wheat, and 10% Mocha for emphasis and readability.

## Typography

The typographic hierarchy is built for clarity and approachability. 

**Manrope** is reserved for headlines and display text. Its balanced, modern proportions provide a professional "health-tech" feel while remaining friendly. Use tighter letter-spacing for large display sizes to create a "logo-like" presence.

**DM Sans** is utilized for body copy and labels. Its low-contrast, geometric shapes ensure maximum readability even at smaller sizes or on mobile screens. For labels and buttons, use the Bold weight with a slight tracking increase to improve scannability in high-efficiency tasks (like ordering).

## Layout & Spacing

This design system employs a **Fixed Grid** for desktop and a **Fluid Grid** for mobile devices. 

- **Desktop (1440px+):** A 12-column grid with a max-width container of 1280px. Gutters are fixed at 24px to provide a spacious, premium feel.
- **Mobile (< 600px):** A 4-column fluid grid with 20px side margins. 

Spacing follows a strict 8px rhythm. Components should use 16px, 24px, or 32px padding to maintain internal consistency. Content blocks should be separated by larger vertical intervals (64px+) to reinforce the minimalist, refreshing aesthetic.

## Elevation & Depth

To maintain the "organic" feel, we avoid harsh drop shadows. Instead, this design system uses **Tonal Layers** and **Ambient Shadows**.

Depth is conveyed through:
1.  **Subtle Surface Shifts:** Using a slightly lighter tint of the neutral background to elevate cards.
2.  **Soft Earth-Tone Shadows:** Shadows should not be black. Instead, use the Deep Mocha color at extremely low opacity (4–8%) with a high blur radius (20px+) to create a soft "lift."
3.  **Flat Stacking:** Elements like buttons often live on a single plane but are distinguished by their high-contrast color fills (Sage on Canvas).

Avoid heavy borders; let the color transitions define the edges of the container.

## Shapes

The shape language reflects the cylindrical and smooth nature of the sugarcane plant. We utilize **Rounded** (Level 2) corners as the standard.

- **Primary Components:** 0.5rem (8px) radius for standard cards and input fields.
- **Large Elements:** 1.5rem (24px) for hero containers or promotional banners.
- **Pill Shapes:** Always used for buttons and tags to emphasize the "friendly and efficient" nature of the brand.

This roundedness helps soften the grid-based layout, making the interface feel more approachable and natural.

## Components

### Buttons
Primary buttons use a solid **Sage Green** fill with **Wheat** text to ensure high visibility. Secondary buttons use a **Wheat** fill with **Deep Mocha** text. All buttons should be pill-shaped with a height of 48px for better touch-targets.

### Input Fields
Inputs use the **Canvas** neutral background with a 1px **Sage Green** border on focus. Labels are always **Deep Mocha** in `label-sm` style, positioned above the field for clarity.

### Cards
Cards are the primary container for product listings. They should use a 1px soft border in a lightened Sage Green or a very subtle Ambient Shadow. Ensure a minimum of 24px internal padding to keep the "breathable" feel.

### Chips/Tags
Used for "Organic," "Cold Pressed," or "Vegan" indicators. These should be small, pill-shaped, and use a light Wheat background with Deep Mocha text.

### Progress Indicators
For the ordering process, use a thin Sage Green line. It should be minimalist and unobtrusive, reinforcing the "efficiency" of the service.
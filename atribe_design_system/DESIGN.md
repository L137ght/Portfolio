---
version: alpha
name: Atribe Nocturne
colors:
  surface: '#1b1015'
  surface-dim: '#1b1015'
  surface-bright: '#43363b'
  surface-container-lowest: '#150b10'
  surface-container-low: '#24181e'
  surface-container: '#281c21'
  surface-container-high: '#33272c'
  surface-container-highest: '#3e3137'
  on-surface: '#f2dde4'
  on-surface-variant: '#dbbfca'
  inverse-surface: '#f2dde4'
  inverse-on-surface: '#3a2d32'
  outline: '#a38a94'
  outline-variant: '#55414a'
  surface-tint: '#ffafd6'
  primary: '#ffafd6'
  on-primary: '#620043'
  primary-container: '#8f0164'
  on-primary-container: '#ff99ce'
  inverse-primary: '#aa247a'
  secondary: '#e2bdcb'
  on-secondary: '#422934'
  secondary-container: '#5a3f4b'
  on-secondary-container: '#cfacb9'
  tertiary: '#99d776'
  on-tertiary: '#123800'
  tertiary-container: '#1f5500'
  on-tertiary-container: '#8cca6b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffd8e8'
  primary-fixed-dim: '#ffafd6'
  on-primary-fixed: '#3c0028'
  on-primary-fixed-variant: '#8a0060'
  secondary-fixed: '#ffd8e7'
  secondary-fixed-dim: '#e2bdcb'
  on-secondary-fixed: '#2a151f'
  on-secondary-fixed-variant: '#5a3f4b'
  tertiary-fixed: '#b4f490'
  tertiary-fixed-dim: '#99d776'
  on-tertiary-fixed: '#082100'
  on-tertiary-fixed-variant: '#1d5200'
  background: '#1b1015'
  on-background: '#f2dde4'
  surface-variant: '#3e3137'
  midnight-violet-base: '#120a0e'
  midnight-violet-elevated: '#1d1116'
  dark-raspberry: '#8f0164'
  alabaster-grey: '#d7dedc'
  outline-muted: '#55414a'
typography:
  display:
    fontFamily: Newsreader
    fontSize: 4.5rem
    fontWeight: '300'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h1:
    fontFamily: Newsreader
    fontSize: 3rem
    fontWeight: '400'
    lineHeight: '1.2'
  h2:
    fontFamily: Newsreader
    fontSize: 2.25rem
    fontWeight: '400'
    lineHeight: '1.3'
  h3:
    fontFamily: Newsreader
    fontSize: 1.5rem
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Manrope
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.7'
  body-md:
    fontFamily: Manrope
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Manrope
    fontSize: 0.75rem
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 0.5rem
  sm: 1rem
  md: 1.5rem
  lg: 2.5rem
  xl: 4rem
  gutter: 24px
  margin: max(5vw, 24px)
---

## Overview
Atribe’s current design system is a dark, mobile-first commerce workspace that supports three audiences: shoppers, creators, and brands. The style should feel practical and trustworthy rather than editorial or experimental. It keeps the original Nocturne color family, but the UI now prioritizes task flow, compact navigation, and readable cards over manifesto-style presentation.

The visual language is:
- dark surfaces with subtle elevation steps
- a restrained pink accent for primary actions
- green used sparingly for active/success states
- high-contrast, low-noise interfaces that work on narrow mobile viewports
- one-screen-at-a-time task flows with clear next actions

## Colors
The palette remains rooted in the Nocturne system, but the intent is now functional:
- Use `surface` / `background` for the page base
- Use `surface-container-low` through `surface-container-highest` for cards, sheets, and stacked panels
- Use `primary` and `dark-raspberry` for CTAs, active tabs, and selected states
- Use `tertiary` for successful connections, active campaigns, and positive status indicators
- Use `outline` and `outline-muted` for separators rather than heavy borders

Avoid introducing new bright accent colors unless they already exist in the app shell or current routes.

## Typography
Typography should stay simple and readable:
- `Newsreader` is reserved for the brand wordmark and major display headings
- `Manrope` handles the actual product UI, forms, helper text, and navigation
- Headlines should be short and task-oriented
- Body copy should explain what happens next, not describe the system

Do not bring back long-form editorial prose, magazine-style pull quotes, or oversized hero treatments for routine flows.

## Layout & Spacing
The current app behaves best when designed as a compact workspace:
- Prefer stacked cards and single-column layouts on mobile
- Keep consistent 24px page gutters and 16px internal padding as the default rhythm
- Use the 4px/8px grid for internal spacing, chip gaps, and control groups
- Put primary actions close to the content they operate on
- Use horizontal tab rows only when they remain legible at mobile widths; otherwise collapse them into wrapped chips or a scrollable row

Desktop mockups can still exist, but they should read like expanded versions of the mobile flow rather than separate editorial layouts.

## Elevation & Depth
Depth should be communicated with tone, not shadow:
- background → base page layer
- `surface-container-low` → default cards
- `surface-container` / `surface-container-high` → active panels, selected sections, and modal-style content
- `surface-container-highest` → top bars, persistent nav, and higher-priority sheets

Keep shadows minimal. Thin borders and slightly lighter surfaces are enough for separation.

## Shapes
The shape language remains restrained:
- Buttons and inputs should keep the small, crisp radii already used in the app
- Large surface cards can use `rounded-lg`
- Tabs, pills, and counters should feel tight and utilitarian
- Avoid highly rounded playful shapes that would clash with the current product tone

## Components
Use the component vocabulary already present in the app surface:
- Primary buttons: filled `dark-raspberry` / `primary` actions
- Secondary buttons: outlined controls with subtle borders
- Cards: compact, information-dense panels with clear headings and status text
- Inputs: dark filled fields with strong focus states
- Tabs / chips: used for route switching and filters
- Status badges: use `tertiary` for active / connected / live states and muted surfaces for neutral states
- Empty states: keep copy short and actionable

Current screens that should influence mockups:
- Login
- Locale picker
- Landing
- Intent selection
- Creator onboarding
- Creator dashboard
- Creator discovery
- Creator selection
- Add affiliate links
- Connect socials
- Connect brands
- Creator share story
- Creator bio public page
- Creator bio page
- Settings
- Brand onboarding
- Brand connecting
- Brand shopify success
- Brand home
- Campaign gate
- Create campaign
- Campaign success
- Brand program web view
- Share route
- Web view screen
- Fallback state
- Feedback

## Do’s and Don’ts
Do:
- Keep copy aligned to the current route and action
- Prefer simple task language like “Connect”, “Launch”, “Save”, and “Continue”
- Show mobile-safe layouts as the default reference
- Use the existing dark palette consistently across all mockups

Don’t:
- Reintroduce the old editorial / magazine / manifesto UI
- Keep screens that duplicate obsolete login or onboarding variants
- Show outdated routes, old role-specific home variants, or placeholder-only brand samples
- Add unsupported social networks or brand systems that no longer exist in the app
- Use copy about “Nocturne editorial compliance” or other legacy framing

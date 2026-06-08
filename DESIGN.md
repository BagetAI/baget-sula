---
version: alpha
colors:
  primary: "#1C1C1C"       # Deep Charcoal
  secondary: "#D4CFC9"     # Warm Gray / Matte Cream
  accent: "#8F9779"        # Soft Sage Green
  background: "#F9F8F6"    # Warm Off-White Linen
  surface: "#FFFFFF"       # Clean White
  text: "#1C1C1C"          # Dark Charcoal
  text-muted: "#6B6A67"    # Muted Gray-Brown
typography:
  primary: "Cormorant Garamond, serif"
  secondary: "Inter, sans-serif"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "2rem"
  xl: "4rem"
rounded:
  sm: "2px"
  md: "4px"
  lg: "8px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.background}"
    padding: "0.75rem 2rem"
    rounded: "{rounded.sm}"
    fontFamily: "{typography.secondary}"
    fontSize: "0.875rem"
    letterSpacing: "0.1em"
    textTransform: "uppercase"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.background}"
  card:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.secondary}"
    padding: "{spacing.lg}"
    rounded: "{rounded.md}"
elevation:
  sm: "0 1px 3px rgba(0,0,0,0.05)"
  md: "0 4px 6px rgba(0,0,0,0.02)"
---

# Sula Design System

This design system establishes the visual identity of Sula, an eco-luxury home fragrance brand. Designed to capture the strategic intersection of rigorous ingredient safety and premium editorial design, the system prioritizes tactile warm-neutral surfaces, soft organic sage, and deep charcoal.

## Typography Guidelines
- **Headings (H1, H2, H3)**: Set in `Cormorant Garamond` with light weights and generous letter-spacing.
- **Body & Technical Text**: Set in `Inter` with regular weights for optimal readability across DTC and package labeling interfaces.

## Packaging Label System
- All physical packaging must integrate the mandatory licensing marking:
  *Pat. www.lumetique.com/patents* for the patented FSC-certified wooden wicks.
- Containers use a centered, high-contrast typography layout inspired by modern Swiss-editorial publishing.

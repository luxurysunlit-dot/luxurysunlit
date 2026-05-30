# Luxury Sunlit - Design System

## Brand Identity

**Brand Name**: Luxury Sunlit
**Tagline**: Where Radiant Living Begins
**Essence**: Premium, Trust, Global, Radiant

## Color Palette

### Primary Colors
- **Gold**: `#D4AF37` (Primary brand color, luxury accent)
- **Black**: `#1A1A1A` (Premium dark background)
- **White**: `#FFFFFF` (Clean, spacious feel)

### Secondary Colors
- **Silver**: `#C0C0C0` (Elegant accents)
- **Light Gray**: `#F5F5F5` (Background, cards)
- **Dark Gray**: `#333333` (Text, borders)
- **Gold Light**: `#E8D5B3` (Hover states)

### Status Colors
- **Success**: `#10B981` (Green)
- **Warning**: `#F59E0B` (Amber)
- **Error**: `#EF4444` (Red)
- **Info**: `#3B82F6` (Blue)

## Typography

### Font Families
- **Headlines**: "Playfair Display" (Serif) - Elegant, premium
- **Subheadings**: "Montserrat" (Sans-serif) - Modern, sophisticated
- **Body**: "Inter" or "Roboto" (Sans-serif) - Clean, readable
- **Accents**: "Cormorant Garamond" (Serif) - Luxury feel

### Font Sizes
- **H1**: 48px (2rem) - Hero titles
- **H2**: 36px (1.5rem) - Section titles
- **H3**: 28px (1.25rem) - Subsections
- **Body**: 16px (1rem) - Regular text
- **Small**: 14px (0.875rem) - Secondary text
- **Caption**: 12px (0.75rem) - Labels, meta info

## Spacing

Based on 8px grid:
- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px
- **2xl**: 48px
- **3xl**: 64px

## Shadows & Elevation

```css
/* Subtle shadow for cards */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

/* Medium shadow for hover states */
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

/* Premium shadow for premium sections */
box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);
```

## Components

### Buttons
- **Primary**: Gold background, white text, no border
- **Secondary**: White background, black text, gold border
- **Tertiary**: Transparent, black text, hover gold
- **Danger**: Red background, white text
- **Disabled**: Gray background, gray text

### Cards
- White background with subtle shadow
- Rounded corners (8px)
- Hover: Elevation increase, slight scale
- Padding: 24px

### Forms
- Input: White background, black border (1px), gold focus
- Label: Black text, 12px, semi-bold
- Error: Red border, red text
- Placeholder: Light gray text

### Navigation
- Clean horizontal layout
- Gold underline for active items
- Hover: Gold text transition
- Mobile: Hamburger menu, full-width items

## Animation Standards

### Transitions
- **Quick**: 150ms (hover states)
- **Normal**: 300ms (modal opens, transitions)
- **Slow**: 500ms (page transitions)
- **Easing**: `ease-in-out` for smooth feel

### Effects
- **Fade**: opacity transition
- **Slide**: transform translateX/Y
- **Scale**: transform scale
- **Bounce**: spring easing for playful elements

### Micro-interactions
- Button hover: scale 1.05, shadow increase
- Input focus: gold border, shadow glow
- Product hover: shadow increase, price highlight gold
- Load animation: subtle pulsing

## Responsive Breakpoints

- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px - 1440px
- **Wide**: 1441px+

## Accessibility

- Contrast ratio: 4.5:1 minimum for text
- Focus states: Clear, visible borders
- Alt text: All images described
- Semantic HTML: Proper heading hierarchy
- ARIA labels: For dynamic content

## Dark Mode

### Color Adjustments
- Background: `#0F0F0F`
- Cards: `#1A1A1A`
- Text: `#F5F5F5`
- Borders: `#333333`
- Accents: Gold remains `#D4AF37`

## Logo Usage

- Full logo: Hero sections, footer
- Icon: Navigation, favicons
- Clear space: 1/3 of logo height around
- Minimum size: 32px
- Color: Gold on white, white on dark backgrounds

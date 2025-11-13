# Design Document - Investor Relations Page UI Redesign

## Overview

This document outlines the technical design for enhancing the Investor Relations page UI. The redesign focuses on creating a modern, professional, and user-friendly interface while maintaining all existing functionality.

## Architecture

### Component Structure

```
InvestorRelations.tsx
├── Hero Banner Section
│   ├── Background Image with Overlays
│   ├── Animated Content
│   ├── BSE Badge
│   ├── Heading with Gradient
│   ├── Description
│   ├── CTA Buttons
│   └── Scroll Indicator
│
├── Documents Section
│   ├── Search Bar (Glass-morphism)
│   ├── Category Tabs (Horizontal Scroll)
│   ├── Quarter-Grouped Documents
│   │   ├── Quarter Header (with icon, count)
│   │   └── Document Grid (3-col responsive)
│   └── Documents without Quarter
│
└── Leadership Section (existing)
```

## Design System

### Color Palette
```css
Primary: #3B82F6 (Blue)
Secondary: #A855F7 (Purple)
Accent: #EC4899 (Pink)
Background: #000000 to #111827 (Black to Gray-900)
Text: #FFFFFF (White)
Muted: #9CA3AF (Gray-400)
Border: #1F2937 (Gray-800)
```

### Typography
```css
Headings: font-serif, font-black
Body: font-sans, font-normal
Buttons: font-bold, uppercase tracking
```

### Spacing Scale
```css
xs: 0.25rem (4px)
sm: 0.5rem (8px)
md: 1rem (16px)
lg: 1.5rem (24px)
xl: 2rem (32px)
2xl: 3rem (48px)
```

## Components and Interfaces

### 1. Hero Banner

**Design:**
- Full viewport height (70vh minimum)
- Background image with gradient overlays
- Animated entrance (fade + slide up)
- Floating particle effects
- Scroll indicator at bottom

**Styling:**
```tsx
- Background: Image + Black gradient overlay
- Content: Max-width 3xl, left-aligned
- Badge: Blue glow, pulse animation
- Heading: 4xl to 6xl responsive
- Buttons: Gradient + Glass-morphism
```

### 2. Search Bar

**Design:**
- Glass-morphism effect (backdrop-blur)
- Full-width with max-width constraint
- Search icon on left, clear button on right
- Smooth focus state with border glow

**Styling:**
```tsx
className="w-full max-w-2xl px-6 py-4 
  bg-gray-900/50 backdrop-blur-xl 
  border border-gray-800 rounded-2xl
  focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
```

### 3. Category Tabs

**Design:**
- Horizontal scrollable container
- Pill-shaped buttons
- Active state: Gradient background
- Inactive state: Transparent with border
- Smooth transition animations

**Styling:**
```tsx
Active: "bg-gradient-to-r from-blue-600 to-purple-600 
         text-white shadow-lg shadow-blue-500/50"
Inactive: "bg-gray-900/50 text-gray-400 
           hover:text-white hover:bg-gray-800/50"
```

### 4. Quarter Section Headers

**Design:**
- Flex layout with icon, text, divider, count
- Calendar icon on left
- Gradient background badge
- Decorative divider line
- Document count on right

**Styling:**
```tsx
<div className="flex items-center gap-3 mb-4">
  <div className="flex items-center gap-2 px-4 py-2 
    bg-gradient-to-r from-blue-600/20 to-purple-600/20 
    border border-blue-500/30 rounded-xl">
    <CalendarIcon />
    <h3>{quarter}</h3>
  </div>
  <div className="flex-1 h-px bg-gradient-to-r 
    from-blue-500/50 to-transparent" />
  <span>{count} documents</span>
</div>
```

### 5. Document Cards

**Design:**
- Glass-morphism background
- Document icon top-left, download icon top-right
- Title with line-clamp (2 lines max)
- "View Document" CTA at bottom
- Hover: Scale up + glow effect

**Styling:**
```tsx
className="group relative rounded-2xl overflow-hidden
  bg-gray-900/50 backdrop-blur-xl 
  border border-gray-800 
  hover:border-blue-500/50 
  hover:scale-102 hover:shadow-xl hover:shadow-blue-500/20
  transition-all duration-300"
```

## Data Models

### Document Interface
```typescript
interface Document {
  id?: number | string;
  head: string;
  link: string;
  quarter?: string;
}
```

### Category Interface
```typescript
interface Category {
  id: number;
  header: string;
  text: Document[];
}
```

### Grouped Documents
```typescript
type GroupedDocuments = {
  [quarter: string]: Document[];
};
```

## Animations

### Entrance Animations
```tsx
// Hero content
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}

// Document cards
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: index * 0.05 }}
```

### Hover Animations
```tsx
// Cards
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}

// Buttons
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

### Scroll Indicator
```tsx
animate={{ y: [0, 8, 0] }}
transition={{ duration: 1.5, repeat: Infinity }}
```

## Responsive Breakpoints

```css
Mobile: < 768px
  - Hero: h-[60vh]
  - Grid: 1 column
  - Tabs: Horizontal scroll
  - Search: Full width

Tablet: 768px - 1024px
  - Hero: h-[65vh]
  - Grid: 2 columns
  - Tabs: Wrap if needed

Desktop: > 1024px
  - Hero: h-[70vh]
  - Grid: 3 columns
  - Tabs: Single row
```

## Error Handling

### Empty States
```tsx
{filteredDocuments.length === 0 && (
  <div className="text-center py-12">
    <FileText className="w-16 h-16 text-gray-700 mx-auto mb-4" />
    <p className="text-gray-500 text-lg">No documents found</p>
    <p className="text-gray-600 text-sm">
      Try adjusting your search or category filter
    </p>
  </div>
)}
```

### Loading States
```tsx
{loading && (
  <div className="flex items-center justify-center py-12">
    <div className="animate-spin rounded-full h-12 w-12 
      border-t-2 border-b-2 border-blue-500" />
  </div>
)}
```

## Testing Strategy

### Visual Testing
- Test on Chrome, Firefox, Safari, Edge
- Test on mobile (375px), tablet (768px), desktop (1920px)
- Verify animations are smooth
- Check color contrast ratios

### Functional Testing
- Search filters documents correctly
- Category tabs switch content
- Quarter grouping works properly
- Document links open correctly
- Hover states work on all interactive elements

### Accessibility Testing
- Keyboard navigation works
- Focus states are visible
- Screen reader compatibility
- Color contrast meets WCAG AA
- Reduced motion respected

## Performance Optimization

### Image Optimization
- Use WebP format for hero image
- Lazy load document images
- Implement blur placeholder

### Code Splitting
- Lazy load leadership section
- Defer non-critical animations

### Bundle Size
- Use tree-shaking for icons
- Minimize CSS with Tailwind purge
- Compress assets

## Implementation Notes

### Key Improvements
1. Glass-morphism effects throughout
2. Consistent gradient theme (blue-purple-pink)
3. Smooth animations on all interactions
4. Better visual hierarchy
5. Professional spacing and typography

### Existing Functionality Preserved
- All document categories remain
- Quarter grouping logic unchanged
- Search functionality intact
- Firebase integration maintained
- Leadership section untouched

### New Visual Elements
- Animated particles in hero
- Scroll indicator
- Gradient dividers
- Glow effects on hover
- Badge components

## Deployment Considerations

- No breaking changes to data structure
- Backward compatible with existing data
- No new dependencies required
- CSS-only improvements (Tailwind)
- Progressive enhancement approach

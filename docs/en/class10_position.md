# CSS Position

> **Recommendation**: ⭐⭐⭐⭐☆ (4/5)
> Supplementary positioning skill, **recommended to master**, mainly used for fine-tuning, modals, fixed elements in specific scenarios (core layout handled by Flexbox/Grid)

---

## What is the position Property?

The `position` property controls how elements are positioned on the page and is key to implementing complex layouts. It determines how elements are positioned relative to their normal position, ancestor elements, or browser window.

```css
/* Static positioning (default value) */
div {
  position: static;
}

/* Relative positioning */
div {
  position: relative;
}

/* Absolute positioning */
div {
  position: absolute;
}

/* Fixed positioning */
div {
  position: fixed;
}

/* Sticky positioning */
div {
  position: sticky;
}
```

---

## 1. position: static (Static Positioning)

> 💡 **Default value**, elements arranged in normal document flow

**Recommendation**: ⭐⭐⭐⭐☆ (4/5)
**Usage Frequency**: **High** ⭐ Default for all elements, but rarely explicitly used
**Use Cases**: Reset elements covered by other positioning

### Features of Static Positioning

- Elements arranged in **normal document flow**
- `top`, `right`, `bottom`, `left`, `z-index` properties are **ineffective**
- **Default value** for all elements
- Cannot use `transform` for displacement

### Example

```css
/* Static positioning by default */
div {
  position: static;
  margin: 10px;
  padding: 15px;
}

/* Under static positioning, z-index is ineffective */
.box {
  position: static;
  z-index: 999; /* Ineffective */
}
```

### Practical Applications

```css
/* Reset elements covered by absolute positioning */
.element {
  position: static;  /* Cancel positioning */
}

/* Normal document flow layout */
.container {
  position: static;
  max-width: 1200px;
  margin: 0 auto;
}
```

---

## 2. position: relative (Relative Positioning)

> 💡 **Positioned relative to own position**, does not leave document flow

**Recommendation**: ⭐⭐⭐⭐☆ (4/5)
**Usage Frequency**: **High** ⭐ Mainly used as absolute positioning reference and fine-tuning
**Use Cases**: Fine-tune element position, create overlap effects, as absolute positioning reference

### Features of Relative Positioning

- Element **offset relative to its original position**
- Element **does not leave document flow**, still occupies original space
- After offset, **original position is retained** (other elements cannot occupy)
- Can use `top`, `right`, `bottom`, `left` for offset
- Can use `z-index` to control stacking order

### Offset Properties

```css
/* Offset direction and value */
.box {
  position: relative;
  top: 10px;      /* Offset down 10px (positive = down) */
  right: 20px;    /* Offset left 20px (positive = left) */
  bottom: 10px;   /* Offset up 10px (positive = up) */
  left: 20px;     /* Offset right 20px (positive = right) */
}

/* Equivalent: only set offset directions needed */
.box {
  position: relative;
  top: -10px;     /* Offset up 10px */
  left: 30px;     /* Offset right 30px */
}
```

### Example

```css
/* Relative positioning fine-tuning */
.btn-arrow {
  position: relative;
  top: 2px;       /* Move arrow slightly down */
}

/* Create card hover effect */
.card {
  position: relative;   /* Maintain positioning context */
  transition: all 0.3s; /* Smooth transition animation */
  cursor: pointer;      /* Show pointer cursor */
}

.card:hover {
  position: relative;
  top: -5px;                       /* Move up 5px, create hover feel */
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);  /* Add shadow, enhance 3D effect */
}

/* Create overlapping label */
.badge {
  position: relative;
  top: -10px;
  right: 10px;
}
```

### Practical Applications

```css
/* Icon and text alignment */
.icon {
  position: relative;
  top: 2px;       /* Fine-tune vertical position */
}

/* Create tooltip arrow */
.tooltip::before {
  content: '';
  position: relative;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  border: 4px solid transparent;
  border-bottom-color: #333;
}

/* As absolute positioning reference (important!) */
.parent {
  position: relative;  /* Key: as reference for child absolute positioning */
  width: 300px;
  height: 200px;
}

.child {
  position: absolute;
  top: 0;
  left: 0;
}
```

### ⚠️ Important: Why commonly use relative as absolute reference?

> 💡 **Core concept**: Absolute positioned elements **look up** for the first ancestor with `position` (non-static) as positioning reference.
>
> **Note**: Not required to use `relative`, any non-static positioning (`fixed`, `absolute`, `sticky`) can be reference. But in practice, **`relative` is the best choice**.

```css
/* ✅ Best practice: parent sets relative */
.parent {
  position: relative;  /* 👈 Doesn't leave document flow, safest choice */
}

.child {
  position: absolute;
  top: 0;
  left: 0;  /* Positions relative to parent */
}

/* ⚠️ Risk: no positioned ancestor, absolute positions relative to browser window */
.parent {
  /* No position set */
}

.child {
  position: absolute;
  top: 0;
  left: 0;  /* Positions relative to browser window ❌容易位置错乱 */
}
```

**Why `relative` is preferred in practice?**

| Reference | Pros | Cons |
|-----------|------|------|
| `relative` | Doesn't leave document flow, doesn't affect layout, safe | Requires manual setting |
| `absolute` | Already leaves document flow | May cause nesting confusion |
| `fixed` | Fixed relative to viewport | Fixed when scrolling, not flexible |
| `sticky` | Fixed when scrolling | Requires threshold, limited use cases |

**Conclusion**: In 90%+ of cases, using `position: relative` as reference for absolute elements is the most reliable approach.

---

## 3. position: absolute (Absolute Positioning)

> 💡 **Completely leaves document flow**, positions relative to nearest positioned ancestor

**Recommendation**: ⭐⭐⭐⭐☆ (4/5)
**Usage Frequency**: **High** ⭐ Essential in specific scenarios (modals, badges, dropdowns)
**Use Cases**: Modals, card badges, dropdown menus, floating buttons, complex layouts

### Features of Absolute Positioning

- Element **completely leaves document flow**, doesn't occupy space
- Positions relative to **nearest non-static positioned ancestor element**
- If no positioned ancestor, positions relative to **initial containing block** (usually browser window)
- Can use `top`, `right`, `bottom`, `left` for precise positioning
- Absolute positioned element dimensions default to content-determined

### Reference Rules

```css
/* Important: absolute positioning needs reference */

/* ✅ Correct: parent sets relative */
.parent {
  position: relative;  /* As reference */
  width: 300px;
  height: 200px;
}

.child {
  position: absolute;
  top: 0;
  left: 0;
}

/* ❌ Wrong: no positioned ancestor, positions relative to browser window */
.parent {
  width: 300px;
  height: 200px;
  /* No position */
}

.child {
  position: absolute;
  top: 0;  /* Relative to browser window */
}
```

### Positioning Values

```css
/* Position to parent's four corners */
.box {
  position: absolute;
  top: 0;
  left: 0;
  /* Position at top-left */
}

.box {
  position: absolute;
  top: 0;
  right: 0;
  /* Position at top-right */
}

.box {
  position: absolute;
  bottom: 0;
  left: 0;
  /* Position at bottom-left */
}

.box {
  position: absolute;
  bottom: 0;
  right: 0;
  /* Position at bottom-right */
}

/* Center positioning */
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* Center horizontally and vertically */
}
```

### Example

```css
/* Fixed size positioning */
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 300px;
  transform: translate(-50%, -50%);
}

/* Fill parent element */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Close button at top-right */
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
}

/* Label on card */
.badge {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 4px 8px;
  background: #e74c3c;
  color: white;
  border-radius: 4px;
}

/* Dropdown menu */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 200px;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
```

### Practical Applications

```css
/* Floating button (fixed at bottom-right of page) */
.floating-btn {
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #3498db;
  color: white;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
}

/* Carousel indicators */
.carousel-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

/* Sidebar */
.sidebar {
  position: absolute;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background: #2c3e50;
}

/* Content area follows */
.content {
  position: absolute;
  top: 0;
  left: 250px;
  right: 0;
  height: 100vh;
}
```

---

## 4. position: fixed (Fixed Positioning)

> 💡 **Positions relative to browser window**, element position unchanged when page scrolls

**Recommendation**: ⭐⭐⭐⭐☆ (4/5)
**Usage Frequency**: **High** ⭐ Fixed navigation, floating buttons commonly used
**Use Cases**: Fixed navigation bar, back-to-top button, sidebar, floating ads, modal background

### Features of Fixed Positioning

- Element **positions relative to browser window**
- When page scrolls, element **always stays in same position**
- Element **leaves document flow**, doesn't occupy space
- Doesn't require parent element to set `position`
- Commonly used for **fixed navigation** and **floating buttons**

### Example

```css
/* Fixed navigation bar at top */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  z-index: 1000;
}

/* Fixed toolbar at bottom */
.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: #2c3e50;
}

/* Back to top button */
.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #3498db;
  color: white;
  cursor: pointer;
  z-index: 999;
}

/* Fixed table of contents */
.toc {
  position: fixed;
  top: 100px;
  right: 30px;
  width: 200px;
}

/* Fixed ad banner */
.ad-banner {
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 200px;
  height: 150px;
}
```

### Practical Applications

```css
/* Fixed header navigation (common practice) */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: white;
  z-index: 1000;
}

/* Fix fixed positioning covering content */
body {
  padding-top: 60px;  /* Equals header height */
}

/* Fixed sidebar */
.sidebar {
  position: fixed;
  top: 60px;
  left: 0;
  width: 240px;
  height: calc(100vh - 60px);
  overflow-y: auto;
}

/* Main content area leaves sidebar space */
.main-content {
  margin-left: 240px;
  padding-top: 60px;
}
```

---

## 5. position: sticky (Sticky Positioning)

> 💡 **Normal before threshold, fixed after scrolling past threshold**

**Recommendation**: ⭐⭐⭐⭐☆ (4/5)
**Usage Frequency**: **Medium** ⭐⭐⭐ Used in specific scenarios
**Use Cases**: Table header fixed, grouped headers, category navigation bars, elements fixed when page scrolls to specific position

### Features of Sticky Positioning

- Element in **normal document flow**, occupies space
- When page scrolls to element's **threshold position**, element becomes fixed positioning
- Requires setting one of `top`, `right`, `bottom`, `left` to take effect
- Positions relative to **nearest scrollable ancestor**

### Threshold Setting

```css
/* Top fixed threshold */
.sticky-header {
  position: sticky;
  top: 0;  /* Fixed when scrolled to 0px from top */
  z-index: 100;
}

/* Fixed when 10px from top */
.sticky-element {
  position: sticky;
  top: 10px;
}

/* Bottom fixed (less commonly used) */
.sticky-footer {
  position: sticky;
  bottom: 0;
}
```

### Example

```css
/* Table header fixed */
.table-header {
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
}

/* Grouped header */
.section-header {
  position: sticky;
  top: 0;
  background: #f5f5f5;
  z-index: 5;
}

/* Category navigation bar */
.category-nav {
  position: sticky;
  top: 60px;  /* Below fixed navigation bar */
  display: flex;
  gap: 20px;
  background: white;
  z-index: 99;
}

/* Sidebar fixed when scrolling */
.sidebar-sticky {
  position: sticky;
  top: 80px;
}
```

### Practical Applications

```css
/* Complete sticky navigation example */
.sticky-nav {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  z-index: 100;
}

/* Table headers fixed when scrolling */
.scrollable-table {
  max-height: 400px;
  overflow-y: auto;
}

.scrollable-table th {
  position: sticky;
  top: 0;
  background: #3498db;
  color: white;
}

/* Section titles fixed when scrolling */
.section-title {
  position: sticky;
  top: 0;
  margin: 0;
  padding: 10px;
  background: linear-gradient(to bottom, white, #f5f5f5);
  z-index: 10;
}
```

---

## 6. position Values Quick Reference

| Value | Recommendation | Frequency | Positioning Reference | Leaves Document Flow | Description |
|-------|----------------|-----------|----------------------|---------------------|-------------|
| `static` | ⭐⭐⭐⭐☆ | High | None | No | Default, normal document flow |
| `relative` | ⭐⭐⭐⭐☆ | High | Own original position | No | Offset relative to self, reference |
| `absolute` | ⭐⭐⭐⭐☆ | High | Nearest positioned ancestor | Yes | Modals, badges, dropdowns |
| `fixed` | ⭐⭐⭐⭐☆ | High | Browser window | Yes | Fixed navigation, floating buttons |
| `sticky` | ⭐⭐⭐⭐☆ | Medium | Nearest scrollable ancestor | No | Header fixed, scroll fixed |

---

## 7. Positioning Practical Tips

### Centering Positioning

```css
/* Method 1: transform centering (recommended) */
.center-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 150px;
}

/* Method 2: negative margin centering */
.center-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 150px;
  margin-left: -100px;  /* Half of width */
  margin-top: -75px;    /* Half of height */
}

/* Method 3: four-value positioning (only suitable for fixed or 100% size) */
.center-box {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 200px;
  height: 150px;
}
```

### Full-screen Overlay

```css
/* Overlay */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 999;
}

/* Full-screen modal */
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  background: white;
  border-radius: 8px;
  z-index: 1000;
}
```

### Fixed Positioning with Shadow Effect

```css
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  z-index: 1000;
}
```

---

## 8. Common Problem Solutions

### Problem 1: Absolute Positioning Fails

```css
/* ❌ Wrong: parent has no positioning */
.parent {
  width: 300px;
  height: 200px;
}

.child {
  position: absolute;
  top: 0;
  left: 0;  /* Relative to browser window */
}

/* ✅ Correct: parent sets relative */
.parent {
  position: relative;  /* Key! */
  width: 300px;
  height: 200px;
}

.child {
  position: absolute;
  top: 0;
  left: 0;  /* Relative to parent */
}
```

### Problem 2: Fixed Positioning Covered

```css
/* ❌ Fixed element covered */
.fixed-element {
  position: fixed;
  top: 0;
  z-index: 1;  /* z-index too small */
}

/* ✅ Increase z-index */
.fixed-element {
  position: fixed;
  top: 0;
  z-index: 1000;  /* Sufficiently large value */
}
```

### Problem 3: Sticky Positioning Not Working

```css
/* ❌ Sticky positioning not working */
.sticky {
  position: sticky;
  /* No top/bottom/left/right set */
}

/* ✅ Must set one offset value */
.sticky {
  position: sticky;
  top: 0;  /* Must set */
}
```

### Problem 4: body Scrolling with fixed Positioning

```css
/* Handle body scrolling after fixed positioning */
body {
  overflow-x: hidden;  /* Prevent horizontal scrolling */
}

/* Mobile bottom navigation */
.mobile-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: white;
  z-index: 1000;
}

/* Make space for bottom fixed navigation */
body {
  padding-bottom: 60px;
}
```

---

## 9. Positioning and Layout Selection Guide

### When to Use static?

- Element needs no positioning
- Reset accidentally set positioning
- Normal document flow layout

### When to Use relative?

- Fine-tune element position (a few pixels)
- Create hover effect (move up)
- As absolute positioning reference (important!)
- Need to keep original space occupied

### When to Use absolute?

- Modals, tooltips
- Badges, corner markers on cards
- Dropdown menus
- Any element positioned relative to parent
- Need precise element position control

### When to Use fixed?

- Fixed navigation bar
- Back to top button
- Floating ads
- Fixed sidebar
- Modal background

### When to Use sticky?

- Table header fixed
- Category navigation bar
- Titles that need fixing when scrolling
- Elements that need fixing only when scrolled to specific position

---

## 10. Learning Suggestions

> 🎯 **Learning Suggestion**: position is a supplementary skill, mainly used in specific scenarios (modals, fixed navigation, fixed headers), core layout handled by Flexbox/Grid

### Daily Practice

| Priority | Topic | Recommendation | Frequency | Scenario |
|----------|-------|----------------|-----------|----------|
| 🔴 Important | position: relative | ⭐⭐⭐⭐☆ | High | As absolute reference |
| 🔴 Important | position: absolute | ⭐⭐⭐⭐☆ | High | Modals, badges, dropdowns |
| 🔴 Important | position: fixed | ⭐⭐⭐⭐☆ | High | Fixed navigation, floating buttons |
| 🟠 Common | position: sticky | ⭐⭐⭐⭐☆ | Medium | Table headers, category navigation |
| 🟡 Basic | position: static | ⭐⭐⭐⭐☆ | High | Reset positioning (rarely explicit) |

---

## 11. Summary

### Core position Concepts

| Positioning Type | Reference | Leaves Document Flow | Use Cases |
|------------------|-----------|---------------------|-----------|
| static | Normal document flow | No | Default layout |
| relative | Own original position | No | Fine-tuning, as absolute reference |
| absolute | Nearest positioned ancestor | Yes | Modals, badges, dropdowns |
| fixed | Browser window | Yes | Fixed navigation, floating buttons |
| sticky | Scrollable ancestor | No | Table headers, category navigation |

### 💡 Practical Work Suggestions

1. **Absolute always pairs with relative** - Parent sets position: relative (most important!)
2. **Fixed positioning note z-index** - Ensure not covered by other elements
3. **Sticky positioning needs threshold** - Must set top/bottom properties
4. **Fixed navigation leaves body padding** - Make space for fixed elements
5. **position is supplementary skill** - Core layout with Flexbox/Grid, position for specific scenarios

### 🎯 Actual Usage Frequency

**Essential in specific scenarios**:
- `position: relative + absolute` - Card badges, modals, dropdown menus
- `position: fixed` - Fixed navigation bars, back to top buttons
- `position: sticky` - Table headers, category navigation

**Not core layout method**:
Modern page layout 90%+ can be done with Flexbox/Grid, position mainly used for:
- Precise positioning within UI components (badges, close buttons)
- Interaction effects (floating buttons, back to top)
- Scroll fixing (headers, sidebars)

---

## Next Steps

After mastering position positioning, next topic: **Pseudo-classes and Pseudo-elements**

# Display Property

> 📊 **Recommended Rating**: ⭐⭐⭐⭐⭐
> Core layout property, **must master**, controls how elements display and arrange with other elements

---

## What is the Display Property?

The `display` property is one of the most fundamental layout properties in CSS. It determines how an element is displayed and how it interacts with other elements on the page.

```css
/* Make an element inline */
span {
  display: inline;
}

/* Make an element block-level */
div {
  display: block;
}

/* Make an element inline-block */
img {
  display: inline-block;
}
```

---

## 1. display: block (Block-level Elements)

> 💡 **Core concept**, block elements are the foundation of layout

**Rating**: ⭐⭐⭐⭐⭐ (5/5)
**Frequency**: **Very High** ⭐ Most commonly used
**Scenario**: Page layout containers, card components, page sectioning

### Block-level Element Characteristics

- Default occupies full row width (width: 100%)
- Height is determined by content (can set height)
- Can set all box model properties (margin, padding, border)
- Block elements **occupy a full line** (automatic line break)
- Default display: block elements: `div`, `p`, `h1-h6`, `ul`, `li`, `header`, `footer`, `section`, etc.

### Example

```css
/* Block element default behavior */
div {
  display: block;
  width: 200px;
  height: 100px;
  margin: 10px;
  padding: 15px;
  border: 1px solid #333;
}
```

### Practical Applications

```css
/* Card component */
.card {
  display: block;
  width: 300px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

/* Page layout container */
.container {
  display: block;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
```

---

## 2. display: inline (Inline Elements)

> 💡 **Text elements**, cannot be used for layout blocks

**Rating**: ⭐⭐⭐⭐⭐ (5/5)
**Frequency**: **Very High** ⭐
**Scenario**: Text decoration, links, emphasized text, small icons

### Inline Element Characteristics

- Width and height are determined by **content**, setting width/height has no effect
- Horizontally **arrange in sequence**, no automatic line break
- Can only set horizontal margin and padding (margin-left/right, padding-left/right)
- Vertical margin and padding **do not affect layout**
- Default display: inline elements: `span`, `a`, `strong`, `em`, `i`, `b`, `small`, etc.

### Example

```css
/* Inline elements */
span.highlight {
  display: inline;
  color: red;
  background-color: yellow;
  padding: 2px 5px;
}

/* Note: The following styles have no effect on inline elements */
span.warning {
  display: inline;
  width: 200px;   /* No effect */
  height: 50px;   /* No effect */
  margin-top: 10px; /* No effect */
}
```

### Practical Applications

```css
/* Link buttons (simulate button effects on inline elements) */
a.inline-btn {
  display: inline;
  color: white;
  background: #3498db;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
}

/* Emphasized text */
em.important {
  display: inline;
  font-style: italic;
  color: #e74c3c;
}
```

---

## 3. display: inline-block (Inline-block Elements)

> 💡 **Layout magic**, combines advantages of block and inline

**Rating**: ⭐⭐⭐⭐⭐ (5/5)
**Frequency**: **Very High** ⭐ Modern layout essential
**Scenario**: Horizontal menus, image排列, button groups, list items

### Inline-block Element Characteristics

- Elements **arrange in sequence on one line** (like inline elements)
- Can set **complete box model properties** (width, height, margin, padding all work)
- Elements have **whitespace gap** by default (because HTML line breaks are treated as spaces)
- Best choice for creating **horizontal navigation bars** and **button groups**

### Example

```css
/* Inline-block elements */
.nav-item {
  display: inline-block;
  width: 100px;
  height: 40px;
  padding: 10px;
  margin: 5px;
  background: #3498db;
  color: white;
  text-align: center;
}

/* Button group */
.btn {
  display: inline-block;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
```

### Solving Whitespace Gaps

```css
/* Method 1: Set font-size: 0 on parent */
.nav {
  font-size: 0;
}
.nav-item {
  display: inline-block;
  font-size: 16px; /* Restore font size */
}

/* Method 2: No line breaks in HTML */
<!-- <div class="nav-item">item1</div><div class="nav-item">item2</div> -->
```

---

## 4. display: none (Hidden Elements)

> 💡 **Complete hide**, element takes no space

**Rating**: ⭐⭐⭐⭐⭐ (5/5)
**Frequency**: **Very High** ⭐
**Scenario**: Dynamic show/hide, Tab switching, accordion panels, modals

### none Characteristics

- Element is completely **not displayed**
- Element **takes no space**
- Element **does not participate in layout**
- Screen readers also **cannot read** (use visibility: hidden if accessibility is needed)

### Example

```css
/* Hidden element */
.hidden {
  display: none;
}

/* Visible element */
.visible {
  display: block;
}

/* Dynamic toggle class */
.modal {
  display: none;
}
.modal.active {
  display: block;
}
```

### Practical Applications

```css
/* Tab content switching */
.tab-content {
  display: none;
}
.tab-content.active {
  display: block;
}

/* Accordion panel */
.accordion-item {
  display: block;
}
.accordion-item.collapsed {
  display: none;
}

/* Responsive hiding */
@media (max-width: 768px) {
  .hide-mobile {
    display: none;
  }
}
```

### Difference from visibility: hidden

| Feature | display: none | visibility: hidden |
|---------|---------------|-------------------|
| Space occupied | No space | Occupies space |
| Child inheritance | All hidden | Children can show separately |
| Transition animation | Not supported | Supported |
| Screen reader | Not readable | Not readable |

---

## 5. display: flex (Flexbox Layout)

> 💡 **Modern layout first choice**, best solution for one-dimensional layout

**Rating**: ⭐⭐⭐⭐⭐ (5/5)
**Frequency**: **Very High** ⭐
**Scenario**: Horizontal/vertical centering, navigation menus, card lists, responsive layouts

### Flexbox Concepts

- Container becomes **flex container**
- Children become **flex items**
- Can easily achieve **horizontal/vertical centering**
- Can control item **direction**, **alignment**, **distribution ratio**

### Basic Usage

```css
/* Parent becomes flex container */
.flex-container {
  display: flex;
}

/* Children automatically become flex items */
.flex-item {
  /* Auto arrange, no extra settings needed */
}
```

### Common Applications

```css
/* Horizontal and vertical centering */
.center-box {
  display: flex;
  justify-content: center;   /* Horizontal center */
  align-items: center;       /* Vertical center */
  height: 200px;
}

/* Navigation bar */
.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

/* Card list */
.card-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
```

---

## 6. display: grid (Grid Layout)

> 💡 **Two-dimensional layout**, best for complex pages

**Rating**: ⭐⭐⭐⭐☆ (4/5)
**Frequency**: **High** - Popular scenario
**Scenario**: Page overall layout, gallery grids, form layouts

### Grid Layout Characteristics

- **Two-dimensional layout system**, controls both rows and columns
- Can define **grid tracks** and **grid areas**
- Suitable for complex **page overall layouts**
- Can be used with flexbox

### Basic Usage

```css
/* Parent becomes grid container */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal-width columns */
  gap: 20px; /* Grid gap */
}
```

### Common Applications

```css
/* Simple grid */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
}

/* Page layout */
.page-layout {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
}
```

---

## 7. Display Values Quick Reference

| Value | Rating | Frequency | Description |
|-------|--------|-----------|-------------|
| `block` | ⭐⭐⭐⭐⭐ | Very High | Block element, full line |
| `inline` | ⭐⭐⭐⭐⭐ | Very High | Inline element, horizontal arrange |
| `inline-block` | ⭐⭐⭐⭐⭐ | Very High | Inline-block, width/height available |
| `none` | ⭐⭐⭐⭐⭐ | Very High | Completely hidden, no space |
| `flex` | ⭐⭐⭐⭐⭐ | Very High | Flexbox, one-dimensional layout |
| `grid` | ⭐⭐⭐⭐☆ | High | Grid, two-dimensional layout |

---

## 8. Element Type Conversion Practice

### Block to Inline

```css
/* Convert div to inline (use with caution) */
div.inline {
  display: inline;
  margin-right: 10px;
}
```

### Inline to Block

```css
/* Convert span to block */
span.block {
  display: block;
  width: 100%;
  padding: 10px;
}
```

### Responsive Switching

```css
/* Mobile: inline-block arrangement */
.list {
  display: inline-block;
  width: calc(50% - 10px);
}

/* Desktop: block arrangement */
@media (min-width: 768px) {
  .list {
    display: block;
    width: 200px;
  }
}
```

---

## 9. Common Problem Solutions

### Problem 1: inline elements width/height has no effect

```css
/* ❌ Wrong approach */
span {
  display: inline;
  width: 100px;  /* No effect */
}

/* ✅ Correct approach */
span {
  display: inline-block;  /* Change to inline-block */
  width: 100px;  /* Works */
}
```

### Problem 2: Whitespace between inline-block elements

```css
/* HTML line breaks create whitespace */

/* ✅ Solution 1: Set font-size: 0 on parent */
.parent {
  font-size: 0;
}
.child {
  display: inline-block;
  font-size: 16px;  /* Restore font size */
}

/* ✅ Solution 2: No line breaks in tags */
<!-- <div class="child"></div><div class="child"></div> -->
```

### Problem 3: display:none cannot transition animation

```css
/* display:none does not support transition animation */
.element {
  display: none;
  opacity: 0;
}
.element.show {
  display: block;
  opacity: 1;  /* No transition effect */
}

/* Use visibility and opacity for animation */
.element {
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s;
}
.element.show {
  visibility: visible;
  opacity: 1;
}
```

---

## 10. Display and Layout Selection Guide

### When to use block?

- Page main containers
- Cards, modal bodies
- Elements that need to occupy a full line

### When to use inline?

- Emphasized text within paragraphs
- Link buttons
- Small icons

### When to use inline-block?

- Horizontal navigation menus
- Image排列
- Button groups
- List items

### When to use none?

- Dynamic show/hide
- Responsive hiding
- Tab switching content

### When to use flex?

- Horizontal/vertical centering
- Equal height column layouts
- Navigation bars
- Flexible lists

### When to use grid?

- Page overall layout
- Gallery grids
- Complex two-dimensional layouts

---

## 11. Learning Suggestions

> 🎯 **Learning suggestion**: Display is the foundation of layout, flex and grid are the core of modern layouts

### Daily Practice

| Priority | Topic | Rating | Frequency | Scenario |
|----------|-------|--------|-----------|----------|
| 🔴 Highest | display: block | ⭐⭐⭐⭐⭐ | Very High | Block element layout |
| 🔴 Highest | display: inline | ⭐⭐⭐⭐⭐ | Very High | Inline element usage |
| 🔴 Highest | display: inline-block | ⭐⭐⭐⭐⭐ | Very High | Horizontal arrange + width/height |
| 🔴 Highest | display: flex | ⭐⭐⭐⭐⭐ | Very High | Modern one-dimensional layout |
| 🟠 High | display: none | ⭐⭐⭐⭐⭐ | Very High | Dynamic show/hide |
| 🟠 High | display: grid | ⭐⭐⭐⭐☆ | High | Two-dimensional grid layout |

---

## 12. Summary

### Display Core Concepts

| Type | Arrangement | Width/Height | Margin/Padding | Typical Elements |
|------|-------------|--------------|----------------|------------------|
| block | Full line | Valid | All valid | div, p, h1 |
| inline | Horizontal | Invalid | Horizontal valid | span, a, em |
| inline-block | Horizontal | Valid | All valid | img, button |
| none | Not display | No space | No space | Hidden element |

### 💡 Practical Work Suggestions

1. **Use block for page layout** - Basic container elements
2. **Use inline-block for horizontal menus** - Navigation bars, button groups
3. **Use flex for centering** - Simple one-dimensional layouts
4. **Use grid for complex layouts** - Page overall structure
5. **Use none for dynamic hiding** - Tab switching, modals
6. **Don't mix float and display** - Modern layouts only use flex/grid

### 🎯 Hot Scenarios Summary

**Hot scenarios (used daily)**:
- `display: block` - Cards, containers, page sections
- `display: inline-block` - Navigation menus, button groups
- `display: flex` - Centering layouts, navigation bars, lists
- `display: none` - Responsive hiding, Tab switching

**Advanced scenarios (frequently used)**:
- `display: grid` - Page overall layout, grid systems
- `display: subgrid` - Nested grid alignment (CSS Grid Level 2)

---

## Next Steps

After mastering display property, next topic: **Flexbox Layout**

---

## Reference: Chinese Version

To view the Chinese version, please visit: `docs/zh/class3_display属性.md`

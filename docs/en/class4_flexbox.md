# Flexbox Layout

> **Recommendation | 推荐指数**: ⭐⭐⭐⭐⭐
>
> The core of modern CSS layout, **Must Master**, the best solution for one-dimensional layouts

---

## What is Flexbox?

Flexbox (Flexible Box) is a one-dimensional layout model for arranging elements along a single axis. It easily achieves common layout needs such as horizontal/vertical arrangement, centering, and equal spacing distribution.

```
┌─────────────────────────────────────────────────────────┐
│                    Flex Container                        │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐    │
│  │  Item 1 │  │  Item 2 │  │  Item 3 │  │  Item 4 │    │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘    │
│                                                         │
│  Main Axis: The primary direction for element arrangement│
│  Cross Axis: The direction perpendicular to the main axis│
└─────────────────────────────────────────────────────────┘
```

**Two parts of Flexbox**:
- **Flex Container**: The parent element containing child elements, set `display: flex`
- **Flex Item**: Direct children of the container

---

## 1. Flex Container Properties

### 1.1 display

**Recommendation | 推荐指数**: ⭐⭐⭐⭐⭐（5/5）
**Usage Frequency**: **Very High**
**Use Case**: Enable Flexbox layout

```css
/* Block-level flex container */
.container {
  display: flex;
}

/* Inline flex container */
.container {
  display: inline-flex;
}
```

**Difference**:
- `display: flex`: Container is a block-level element (独占一行)
- `display: inline-flex`: Container is an inline element (与其他行内元素同行)

---

### 1.2 flex-direction

**Recommendation | 推荐指数**: ⭐⭐⭐⭐⭐（5/5）
**Usage Frequency**: **Very High**
**Use Case**: Set main axis direction (horizontal/vertical)

```css
.container {
  flex-direction: row;             /* Default: horizontal, left to right */
  flex-direction: row-reverse;     /* Horizontal, right to left */
  flex-direction: column;          /* Vertical, top to bottom */
  flex-direction: column-reverse;  /* Vertical, bottom to top */
}
```

**Visual**:

```
row:           row-reverse:        column:          column-reverse:
┌───┐┌───┐┌───┐  ┌───┐┌───┐┌───┐    ┌───┐           ┌───┐
│ 1 ││ 2 ││ 3 │  │ 3 ││ 2 ││ 1 │    │ 1 │           │ 3 │
└───┘└───┘└───┘  └───┘└───┘└───┘    │ 2 │           │ 2 │
                                    │ 3 │           │ 1 │
                                    └───┘           └───┘
```

---

### 1.3 justify-content

**Recommendation | 推荐指数**: ⭐⭐⭐⭐⭐（5/5）
**Usage Frequency**: **Very High**
**Use Case**: Alignment along the main axis

```css
.container {
  justify-content: flex-start;     /* Default: towards the start */
  justify-content: flex-end;       /* Towards the end */
  justify-content: center;         /* Center */
  justify-content: space-between;  /* Distribute with equal space between items */
  justify-content: space-around;   /* Equal space on both sides (half at edges) */
  justify-content: space-evenly;   /* Equal space everywhere */
}
```

**Visual**:

```
flex-start:    flex-end:      center:        space-between:  space-around:
┌───┐┌───┐┌───┐  ┌───┐┌───┐┌───┐  ┌───┐┌───┐┌───┐  ┌───┐┌───┐┌───┐  ┌───┐┌───┐┌───┐
│ 1 ││ 2 ││ 3 │  │ 1 ││ 2 ││ 3 │  │ 1 ││ 2 ││ 3 │  │ 1 ││ 2 ││ 3 │  │ 1 ││ 2 ││ 3 │
└───┘└───┘└───┘  └───┘└───┘└───┘  └───┘└───┘└───┘  └───┘└───┘└───┘  └───┘└───┘└───┘
```

**space-around vs space-evenly**:

```
space-around:        space-evenly:
┌───┐┌───┐┌───┐      ┌───┐┌───┐┌───┐
│ 1 ││ 2 ││ 3 │      │ 1 ││ 2 ││ 3 │
└───┘└───┘└───┘      └───┘└───┘└───┘
  ▲─│─▲   │─▲          ▲──│──▲──│──▲
     │                         │
  Edge spacing is half item spacing    All spacing equal
```

---

### 1.4 align-items

**Recommendation | 推荐指数**: ⭐⭐⭐⭐⭐（5/5）
**Usage Frequency**: **Very High**
**Use Case**: Alignment along the cross axis

```css
.container {
  align-items: stretch;      /* Default: stretch to fill container */
  align-items: flex-start;   /* Towards the cross axis start */
  align-items: flex-end;     /* Towards the cross axis end */
  align-items: center;       /* Center */
  align-items: baseline;     /* Align by item baselines */
}
```

**Visual** (when container height is greater than item height):

```
flex-start:    flex-end:      center:        stretch:       baseline:
┌───────┐      ┌───────┐      ┌───────┐      ┌───────┐      ┌───────┐
│ 1     │      │       │      │       │      │ 1     │      │ 1     │
│ 2     │      │       │      │   2   │      │ 2     │      │ 2     │
│ 3     │      │       │      │       │      │ 3     │      │ 3     │
└───────┘      └───────┘      └───────┘      └───────┘      └───────┘
```

---

### 1.5 flex-wrap

**Recommendation | 推荐指数**: ⭐⭐⭐⭐☆（4/5）
**Usage Frequency**: **High**
**Use Case**: Whether items wrap

```css
.container {
  flex-wrap: nowrap;        /* Default: no wrapping, items shrink */
  flex-wrap: wrap;          /* Wrap */
  flex-wrap: wrap-reverse;  /* Wrap with first row at bottom */
}
```

**Visual**:

```
nowrap:         wrap:          wrap-reverse:
┌───────┐       ┌───────┐       ┌───────┐
│ 1 │ 2 │       │ 1 │ 2 │       │ 4 │ 5 │
├───────┤       │ 3 │ 4 │       │ 1 │ 2 │
│ 3 │ 4 │       └───────┘       └───────┘
├───────┤       ┌───────┐
│ 5     │       │ 5     │
└───────┘       └───────┘
```

---

### 1.6 align-content

**Recommendation | 推荐指数**: ⭐⭐⭐☆☆（3/5）
**Usage Frequency**: **Medium**
**Use Case**: Multi-line alignment on cross axis (only works with flex-wrap: wrap)

```css
.container {
  align-content: flex-start;   /* Towards start */
  align-content: flex-end;     /* Towards end */
  align-content: center;       /* Center */
  align-content: space-between; /* Distribute with equal space between lines */
  align-content: space-around; /* Equal space around lines */
  align-content: stretch;      /* Default: stretch to fill */
}
```

---

### 1.7 gap

**Recommendation | 推荐指数**: ⭐⭐⭐⭐⭐（5/5）
**Usage Frequency**: **Very High**
**Use Case**: Space between items

```css
.container {
  gap: 10px;              /* All directions same */
  gap: 10px 20px;         /* Row gap column gap */
  row-gap: 10px;          /* Row gap only */
  column-gap: 20px;       /* Column gap only */
}
```

---

## 2. Flex Item Properties

### 2.1 flex-grow

**Recommendation | 推荐指数**: ⭐⭐⭐⭐☆（4/5）
**Usage Frequency**: **High**
**Use Case**: Growth factor

```css
.item {
  flex-grow: 0;     /* Default: don't grow */
  flex-grow: 1;     /* Take remaining space */
  flex-grow: 2;     /* Growth ratio is twice as much as 1 */
}
```

**Example**:

```css
/* Three items with ratio 1:2:1 */
.item:nth-child(1) { flex-grow: 1; }
.item:nth-child(2) { flex-grow: 2; }
.item:nth-child(3) { flex-grow: 1; }
```

---

### 2.2 flex-shrink

**Recommendation | 推荐指数**: ⭐⭐⭐☆☆（3/5）
**Usage Frequency**: **Medium**
**Use Case**: Shrink factor

```css
.item {
  flex-shrink: 1;   /* Default: can shrink */
  flex-shrink: 0;   /* Cannot shrink */
  flex-shrink: 2;   /* Larger shrink ratio */
}
```

---

### 2.3 flex-basis

**Recommendation | 推荐指数**: ⭐⭐⭐☆☆（3/5）
**Usage Frequency**: **Medium**
**Use Case**: Base size of item

```css
.item {
  flex-basis: auto;     /* Default: based on width/height */
  flex-basis: 200px;    /* Base size 200px */
  flex-basis: 50%;      /* Base size 50% */
}
```

---

### 2.4 flex (Shorthand)

**Recommendation | 推荐指数**: ⭐⭐⭐⭐⭐（5/5）
**Usage Frequency**: **Very High**
**Use Case**: Set grow, shrink, and basis together

```css
.item {
  flex: 0 1 auto;       /* Default: don't grow, can shrink, based on size */
  flex: 1;              /* flex-grow: 1; flex-shrink: 1; flex-basis: 0% */
  flex: auto;           /* flex-grow: 1; flex-shrink: 1; flex-basis: auto */
  flex: none;           /* flex-grow: 0; flex-shrink: 0; flex-basis: auto */
}
```

**Recommended approach**:

```css
/* Equal distribution */
.item {
  flex: 1;
}

/* Fixed + adaptive */
.sidebar {
  flex: 0 0 200px;  /* Don't grow, don't shrink, fixed 200px */
}

.content {
  flex: 1;          /* Take remaining space */
}
```

---

### 2.5 order

**Recommendation | 推荐指数**: ⭐⭐⭐☆☆（3/5）
**Usage Frequency**: **Medium**
**Use Case**: Change item order

```css
.item {
  order: 0;     /* Default value */
  order: -1;    /* Comes before */
  order: 1;     /* Comes after */
}
```

**Example**:

```html
<div style="order: 3">A</div>
<div style="order: 1">B</div>
<div style="order: 2">C</div>

<!-- Display order: B → C → A -->
```

---

### 2.6 align-self

**Recommendation | 推荐指数**: ⭐⭐⭐⭐☆（4/5)
**Use Case**: Individual item alignment on cross axis (overrides container's align-items)

```css
.item {
  align-self: auto;        /* Default: inherit from container */
  align-self: flex-start;  /* Towards cross axis start */
  align-self: flex-end;    /* Towards cross axis end */
  align-self: center;      /* Center */
  align-self: stretch;     /* Stretch */
  align-self: baseline;    /* Baseline align */
}
```

---

## 3. Main Axis and Cross Axis Explained

Understanding main axis and cross axis is key to mastering Flexbox:

```
When flex-direction: row (default):
    Main Axis →→→→→→→→→→→→→→→→→→→→→→
    Cross Axis ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

When flex-direction: column:
    Main Axis ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    Cross Axis →→→→→→→→→→→→→→→→→→→
```

**Core Rules**:
- `justify-content` always works on the **Main Axis**
- `align-items` always works on the **Cross Axis**

---

## 4. Common Layout Patterns

### 4.1 Horizontal and Vertical Centering

```css
.container {
  display: flex;
  justify-content: center;  /* Horizontal centering */
  align-items: center;      /* Vertical centering */
  height: 100vh;            /* Need height */
}
```

### 4.2 Navigation Bar

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background: #3498db;
}

.nav-links {
  display: flex;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
}
```

### 4.3 Three-Column Layout

```css
.layout {
  display: flex;
}

.sidebar-left {
  flex: 0 0 200px;
}

.content {
  flex: 1;
}

.sidebar-right {
  flex: 0 0 300px;
}
```

### 4.4 Card Grid

```css
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 1 1 300px;  /* Minimum 300px, auto wrap */
  max-width: 400px;
}
```

### 4.5 Equal Height Cards

```css
.cards {
  display: flex;
  gap: 20px;
}

.card {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-content {
  flex: 1;  /* Auto-fill remaining space */
}
```

---

## 5. Flexbox Quick Reference

> 📋 **For Reference**

| Property | Recommendation | Usage Frequency | Description |
|----------|----------------|-----------------|-------------|
| `display: flex` | ⭐⭐⭐⭐⭐ | Very High | Enable Flexbox |
| `flex-direction` | ⭐⭐⭐⭐⭐ | Very High | Main axis direction |
| `justify-content` | ⭐⭐⭐⭐⭐ | Very High | Main axis alignment |
| `align-items` | ⭐⭐⭐⭐⭐ | Very High | Cross axis alignment |
| `flex-wrap` | ⭐⭐⭐⭐☆ | High | Wrap control |
| `gap` | ⭐⭐⭐⭐⭐ | Very High | Item spacing |
| `flex` | ⭐⭐⭐⭐⭐ | Very High | Growth/shrink shorthand |
| `flex-grow` | ⭐⭐⭐⭐☆ | High | Growth factor |
| `order` | ⭐⭐⭐☆☆ | Medium | Order |
| `align-self` | ⭐⭐⭐⭐☆ | High | Individual item alignment |

---

## 6. Common Issues and Solutions

### 6.1 Items Overflow Container Without Wrapping

**Issue**: Container width exceeds expectation with `width: 100%`

**Cause**: Default `flex-wrap: nowrap`, items get compressed

**Solution**:

```css
/* ❌ Problem code */
.container {
  display: flex;
  /* Default nowrap, items get compressed */
}

/* ✅ Solution */
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
```

### 6.2 justify-content and align-items Don't Work

**Issue**: Items not centered

**Cause**: Container has no fixed height, or misunderstanding main/cross axis

**Solution**:

```css
/* ❌ Wrong: only main axis centered, no height */
.container {
  display: flex;
  justify-content: center;
  /* Missing height, no cross axis space */
}

/* ✅ Correct: need height */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;  /* Key: provide cross axis space */
}
```

### 6.3 flex-basis and width Both Set

**Issue**: Item size not as expected

**Cause**: `flex-basis` has higher priority than `width`

**Solution**:

```css
/* Understanding priority */
.item {
  flex-basis: 200px;  /* Base size */
  width: 300px;       /* Overridden by flex-basis (unless flex-basis: auto) */
}

/* For precise control, use flex: 0 0 200px */
.item {
  flex: 0 0 200px;  /* Don't grow, don't shrink, fixed 200px */
}
```

### 6.4 flex-grow Doesn't Work

**Issue**: `flex: 1` but items don't distribute space equally

**Cause**: `flex-grow` only distributes **remaining space**, won't work if items have fixed size

**Solution**:

```css
/* ❌ Wrong: items have fixed size */
.item {
  width: 100px;     /* Fixed size */
  flex: 1;          /* Only distributes remaining space */
}

/* ✅ Correct: use flex-basis: 0 */
.item {
  flex: 1;          /* flex-basis: 0%, distributes all space */
}
```

---

## 7. Best Practices

### 7.1 Recommended

```css
/* ✅ Recommended: centering */
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* ✅ Recommended: equal distribution */
.equal-distribution {
  display: flex;
  gap: 20px;
}

.equal-distribution > * {
  flex: 1;
}

/* ✅ Recommended: responsive cards */
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 1 1 300px;
  max-width: 400px;
}
```

### 7.2 Not Recommended

```css
/* ❌ Avoid: using margin for equal spacing */
.item {
  margin: 0 10px;
}

.item:first-child { margin-left: 0; }
.item:last-child { margin-right: 0; }

/* ✅ Recommended: use gap */
.container {
  display: flex;
  gap: 20px;
}
```

---

## 8. Learning Tips

> 🎯 **Learning Tips**: Flexbox is the core of modern layout, practice with online exercises

### Online Practice Resources

| Resource | Link | Description |
|----------|------|-------------|
| Flexbox Froggy | https://flexboxfroggy.com/ | Game-based learning |
| CSS-Tricks Flexbox | https://css-tricks.com/snippets/css/a-guide-to-flexbox/ | Complete guide |

### Practice Priority

| Priority | Topic | Recommendation | Usage Frequency |
|----------|-------|----------------|-----------------|
| 🔴 Highest | display: flex | ⭐⭐⭐⭐⭐ | Very High |
| 🔴 Highest | justify-content | ⭐⭐⭐⭐⭐ | Very High |
| 🔴 Highest | align-items | ⭐⭐⭐⭐⭐ | Very High |
| 🔴 Highest | flex | ⭐⭐⭐⭐⭐ | Very High |
| 🟠 High | flex-wrap | ⭐⭐⭐⭐☆ | High |
| 🟠 High | gap | ⭐⭐⭐⭐⭐ | Very High |
| 🟡 Medium | flex-grow | ⭐⭐⭐⭐☆ | High |
| 🟡 Medium | align-self | ⭐⭐⭐⭐☆ | High |

---

## 9. Summary

### Flexbox Core Concepts

```
Flex Container
├── display: flex
├── flex-direction (main axis)
├── justify-content (main axis alignment)
├── align-items (cross axis alignment)
├── flex-wrap (wrap)
└── gap (spacing)

Flex Item
├── flex (grow/shrink/basis)
├── flex-grow (growth factor)
├── flex-shrink (shrink factor)
├── order (arrangement)
└── align-self (individual alignment)
```

### Centering Layout (Most Common)

```css
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### 💡 Work Recommendations

1. **Always use `gap`** - Simpler than margin
2. **Prefer `flex: 1`** - For equal distribution
3. **Understand main/cross axis** - Avoid confusing justify and align
4. **Use with flex-wrap** - For responsive wrapping
5. **Use align-self wisely** - Individual item control

### 🎯 Common Use Cases

- Navigation bar layout
- Card components
- Horizontal and vertical centering
- Equal height columns
- Responsive grid
- Form layout

---

## Next Steps

After mastering Flexbox one-dimensional layout, next topic: **CSS Units**

Learn about sizing units for different scenarios (px, rem, em, vw/vh, etc.) for responsive design.

Or learn **Grid Layout** (Day 14-15) for two-dimensional layout solutions.

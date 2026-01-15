# CSS Units

> 📊 **Recommendation** ⭐⭐⭐⭐⭐ (5/5)  
> Mastering `px`, `rem`, `em`, `vw/vh`, and `%` is the foundation of modern responsive UIs. **Must know.**

---

## 1. Absolute Units vs Relative Units

> 💡 **Core concept**: understanding absolute vs relative is key to adapting across screens

### 1.1 Absolute Unit: px (pixel)

**Recommendation**: ⭐⭐⭐☆☆ (3/5)  
**Frequency**: **High** - Common  
**Best for**: border widths, shadows, tiny tweaks, fixed-size non-responsive components

`px` (pixel) is the most basic unit. It represents a logical pixel on screen (on high-DPI devices, one CSS pixel may map to multiple physical pixels).

- **Pros**: fixed size; not affected by browser font settings or parent elements.
- **Cons**: not flexible for responsive layouts; does not scale with user font preferences.

```css
.box {
    width: 200px;
    height: 100px;
    border: 1px solid #000;
}
```

### 1.2 Relative Unit: rem (Root EM)

**Recommendation**: ⭐⭐⭐⭐⭐ (5/5)  
**Frequency**: **Very High** ⭐ Must learn  
**Best for**: **typography, spacing (margin/padding), component sizing**

`rem` is relative to the font size of the **root element (`html`)**.

- **How it works**: `1rem` = computed `html` `font-size` (default is usually 16px).
- **Why `html`**: `html` is the root of the DOM tree. Unlike `em`, `rem` does not compound through parent nesting; it reads the baseline directly from the root, so it stays stable even in deeply nested components.
- **Formula**: `px` = `rem value` × `html font-size (px)`.
- **Tip**: many developers set `html { font-size: 62.5%; }` (10px) to make mental math easy (`1.4rem = 14px`).

```css
html { font-size: 16px; }
.box {
    width: 10rem;      /* 160px */
    font-size: 1.5rem; /* 24px */
}
```

### 1.3 Relative Unit: em

**Recommendation**: ⭐⭐☆☆☆ (2/5)  
**Frequency**: **Lower** - Niche  
**Best for**: local scaling inside a component (e.g., icon size relative to button text)

`em` is relative to the font size of the **parent element**.

- **How it works**: `1em` = parent `font-size`.
- **Pitfall**: with deep nesting, sizes compound (“compound interest”), making it harder to control.

```css
.parent { font-size: 16px; }
.child {
    font-size: 2em; /* 16px * 2 = 32px */
}
```

---

## 2. Viewport Units (Viewport Units)

> 💡 **Responsive powerhouse**: scales with the screen (viewport) size

### 2.1 vw and vh

**Recommendation**: ⭐⭐⭐⭐☆ (4/5)  
**Frequency**: **High** - Common  
**Best for**: full-screen hero sections, responsive large headings, modal height limits

- **vw (Viewport Width)**: 1% of viewport width
- **vh (Viewport Height)**: 1% of viewport height

```css
/* Full-screen hero */
.hero {
    height: 100vh;
    width: 100vw;
}

/* Responsive heading */
h1 {
    font-size: 5vw;
}
```

### 2.2 vmin and vmax

**Recommendation**: ⭐☆☆☆☆ (1/5)  
**Frequency**: **Very Low** - Niche  
**Best for**: special portrait/landscape adaptations on mobile (keeping min/max side ratio)

- **vmin**: the smaller of `vw` and `vh`
- **vmax**: the larger of `vw` and `vh`

---

## 3. Percentage (%)

> 💡 **The basis of fluid layouts**, even better with Flexbox/Grid

**Recommendation**: ⭐⭐⭐⭐☆ (4/5)  
**Frequency**: **High** - Common  
**Best for**: fluid widths, grid systems

Percentages are relative to **the parent element**.

- **width/height**: relative to the parent width/height
- **font-size**: relative to the parent font size

**Note**: if the parent has no explicit height, `height: 100%` on the child may not work.

---

## 4. Best Practices

> 🎯 **Avoid pitfalls**: choosing the right unit

### ❌ Avoid
- Don’t overuse `px` for large layout sizing (can overflow on mobile).
- Avoid using `em` for general typography unless you fully understand inheritance.

### ✅ Recommended
1. **Typography**: use `rem`.
2. **Spacing**: use `rem` (`margin`, `padding`).
3. **Layout width**: use `%` or `flex`/`grid`, together with `max-width` (often `rem` or `px`).
4. **Borders/Shadows**: use `px`.
5. **Full-screen blocks**: use `vh`.

---

## 5. Quick Reference Table

> 📋 **Save for later**

| Unit | Full Name | Reference | Recommendation | Typical Use |
|------|-----------|-----------|----------------|-------------|
| `rem` | Root EM | root font size | ⭐⭐⭐⭐⭐ | **typography, spacing, sizing (primary unit)** |
| `vw/vh` | Viewport | viewport size | ⭐⭐⭐⭐☆ | full-screen background, responsive headings |
| `%` | Percent | parent size | ⭐⭐⭐⭐☆ | fluid layouts, widths |
| `px` | Pixels | CSS pixels | ⭐⭐⭐☆☆ | borders, shadows, precise details |
| `em` | Element EM | parent font size | ⭐⭐☆☆☆ | local component scaling |
| `vmin` | Viewport Min | min viewport side | ⭐☆☆☆☆ | special mobile adaptations |

---

## 6. FAQ

> ❓ **Common questions**

### Q: Why doesn’t `height: 100%` work?

A: The parent must have an explicit height (e.g., a concrete `px/rem`, or inherited from an ancestor). If the parent height is `auto` (content-driven), the child’s percentage height cannot be calculated. Fix it by setting a height on the parent, or using `vh`.

### Q: How can I set `html` font-size for easier rem math?

A: A popular approach is `html { font-size: 62.5%; }`. Since the default is often 16px, `16px * 62.5% = 10px`. Then `1.4rem = 14px` and `2.0rem = 20px`, which is easy to compute.


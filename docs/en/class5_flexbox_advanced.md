# Flexbox Items Advanced

> **Recommendation | Recommended Index**: ⭐⭐⭐⭐☆
>
> Flex Items (Flex Items) advanced properties practice, **Proficient**, solving real layout problems

---

## 1. order Property Details

### 1.1 What is order?

The `order` property controls the **display order** of Flex Items in the container. It does not change the DOM structure HTML order, only the visual arrangement.

```css
.item {
    order: 0;     /* Default value */
    order: -1;    /* Negative values come first */
    order: 1;     /* Positive values come later */
}
```

**Core Features**:
- Smaller `order` values appear first
- Default is 0, supports negative values
- Does not affect DOM structure, accessibility follows HTML order

### 1.2 order Basic Usage

```html
<div class="container">
    <div style="order: 3">A</div>
    <div style="order: 1">B</div>
    <div style="order: 2">C</div>
</div>

<!-- HTML order: A → B → C -->
<!-- Display order: B → C → A -->
```

### 1.3 order Practical Application Scenarios

#### Mobile-First Display

```css
/* E-commerce product card */
.product-card {
    display: flex;
    flex-direction: column;
}

.product-image { order: 2; }
.product-title { order: 3; }
.product-price { order: 4; }
.buy-button { order: 1; }  /* Button priority display */

/* Desktop restore original order */
@media (min-width: 768px) {
    .product-card > * {
        order: 0;
    }
}
```

#### Navbar Ordering

```css
.navbar {
    display: flex;
    justify-content: space-between;
}

.logo { order: 0; }
.nav-links { order: 1; }
.login-btn { order: -1; }  /* Login button first */
```

---

## 2. align-self Property Details

### 2.1 What is align-self?

The `align-self` property is used to control the alignment of a **single item** on the cross axis, and can override the container's `align-items` setting.

```css
.item {
    align-self: auto;        /* Inherit align-items */
    align-self: flex-start;  /* Cross axis start */
    align-self: center;      /* Cross axis center */
    align-self: flex-end;    /* Cross axis end */
    align-self: stretch;     /* Stretch */
    align-self: baseline;    /* Baseline alignment */
}
```

### 2.2 align-self Basic Usage

```css
.container {
    display: flex;
    align-items: flex-start;  /* All items top aligned */
    height: 200px;
}

.special-item {
    align-self: center;       /* Single item centered */
}
```

### 2.3 align-self Practical Application Scenarios

#### Notification Icon Alignment

```css
.notification {
    display: flex;
    align-items: center;
}

.notification-icon {
    align-self: flex-start;  /* Icon top aligned */
}
```

#### Form Baseline Alignment

```css
.form-row {
    display: flex;
    align-items: baseline;  /* Baseline alignment */
}
```

---

## 3. flex Property Advanced Usage

### 3.1 flex Complete Form

```css
.item {
    /* flex-grow | flex-shrink | flex-basis */
    flex: 0 1 auto;       /* Default value */
    flex: 1;              /* flex: 1 1 0% */
    flex: auto;           /* flex: 1 1 auto */
    flex: none;           /* flex: 0 0 auto */
}
```

### 3.2 Responsive Card Grid

```css
.card-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    flex: 1 1 280px;     /* Minimum 280px, auto expand */
    max-width: 400px;
}
```

### 3.3 Fixed + Adaptive Layout

```css
.layout {
    display: flex;
}

.sidebar {
    flex: 0 0 200px;  /* Fixed 200px */
}

.content {
    flex: 1;          /* Takes remaining space */
}
```

---

## 4. Common Issues and Solutions

### 4.1 order Does Not Affect Accessibility

**Issue**: Screen reader order incorrect after using order

**Solution**: Do not use order to change content logic order, only for visual adjustments

```css
/* ❌ Wrong approach */
.important-content { order: -1; }
/* Search engines and screen readers still follow HTML order */

/* ✅ Correct approach */
Put important content first in HTML, use order for fine-tuning
```

### 4.2 align-self: stretch Not Working

**Issue**: stretch set but item not stretched

**Solution**: stretch requires item without fixed height

```css
/* ❌ Wrong: fixed height */
.item {
    align-self: stretch;
    height: 100px;  /* Overridden by fixed height */
}

/* ✅ Correct: no fixed height or use max-height */
.item {
    align-self: stretch;
    height: auto;   /* Auto height */
}
```

### 4.3 flex-basis and width Priority

**Issue**: Size not as expected when both flex-basis and width set

**Solution**: flex-basis has higher priority

```css
.item {
    flex-basis: 200px;  /* Base size */
    width: 300px;       /* Overridden (unless flex-basis: auto) */
}

/* ✅ For precise control */
.item {
    flex: 0 0 200px;  /* No grow, no shrink, fixed 200px */
}
```

---

## 5. Practice Case Summary

### 5.1 Payment Method Selection Cards

```css
.payment-methods {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.payment-card {
    flex: 1 1 120px;
    text-align: center;
    padding: 15px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
}
```

### 5.2 Responsive Form

```css
.form-group {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}

.form-field {
    flex: 1 1 200px;
}

.form-field.wide {
    flex: 2 1 400px;
}
```

### 5.3 Step Indicator

```css
.step-indicator {
    display: flex;
    justify-content: space-between;
}

.step-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    position: relative;
}

.step-item::after {
    content: '';
    position: absolute;
    top: 20px;
    left: 50%;
    width: 100%;
    height: 2px;
    background: #e0e0e0;
}
```

---

## 6. Quick Reference

| Property | Recommendation | Usage Frequency | Description |
|----------|----------------|-----------------|-------------|
| `order` | ⭐⭐⭐☆☆ | Medium | Item order |
| `align-self` | ⭐⭐⭐⭐☆ | High | Single item alignment |
| `flex` | ⭐⭐⭐⭐⭐ | Very High | Flex shorthand |
| `flex-grow` | ⭐⭐⭐⭐☆ | High | Growth factor |
| `flex-shrink` | ⭐⭐⭐☆☆ | Medium | Shrink factor |
| `flex-basis` | ⭐⭐⭐☆☆ | Medium | Base size |

---

## 7. Summary

### Core Points

1. **order only affects visual order**, does not affect DOM and accessibility
2. **align-self overrides align-items**, used for special alignment of single items
3. **flex: 1** for equal distribution, **flex: 0 0 fixed** for fixed width
4. Combine with **flex-wrap** for responsive wrapping layouts

### Best Practices

```css
/* ✅ Recommended: responsive card grid */
.cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    flex: 1 1 280px;
}

/* ✅ Recommended: fixed + adaptive layout */
.layout {
    display: flex;
}

.sidebar { flex: 0 0 200px; }
.content { flex: 1; }
```

---

## Next Steps

After mastering Flex Items advanced properties, next topic: **CSS Units**

Learn about sizing units for different scenarios (px, rem, em, vw/vh, etc.) for responsive design foundation.

# Advanced Responsive Design

> **Recommendation**: ⭐⭐⭐⭐☆ (4/5)
> Master container queries, aspect ratios, fluid design and other modern CSS techniques, **essential for advancement**.

---

## 1. Container Queries Overview

> 💡 **Next-generation responsive technology**, based on parent container instead of viewport

Container queries are a major upgrade to responsive design, allowing elements to adjust styles based on their parent container's size rather than viewport size. This is especially important for component-based development.

### 1.1 Why Container Queries Are Needed

Limitations of media queries:
- Can only respond based on viewport
- Same component behaves the same in different page locations
- Difficult to achieve true component reuse

Advantages of container queries:
- Respond based on parent container size
- Components can adapt to different scenarios
- More flexible component-based design

```css
/* Traditional media query - based on viewport */
@media (min-width: 768px) {
    .card {
        display: flex;
    }
}

/* Container query - based on parent container */
.card-container {
    container-type: inline-size;
    container-name: card;
}

@container card (min-width: 400px) {
    .card {
        display: flex;
    }
}
```

### 1.2 Basic Usage of Container Queries

**Recommendation**: ⭐⭐⭐⭐⭐ (5/5)
**Frequency**: **High** ⭐ Must Learn
**Use Case**: Component-based responsive design

```css
/* 1. Define container */
.card-wrapper {
    container-type: inline-size;
    container-name: card;
}

/* 2. Use container query */
@container card (min-width: 300px) {
    .card {
        flex-direction: row;
    }
}

@container card (min-width: 500px) {
    .card {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}
```

---

## 2. Aspect Ratio

> 💡 **Modern CSS solution**, easily maintain element proportions

The `aspect-ratio` property lets you easily create elements that maintain specific aspect ratios, perfect for images, videos, and card layouts.

### 2.1 Basic Usage

**Recommendation**: ⭐⭐⭐⭐⭐ (5/5)
**Frequency**: **Very High** ⭐ Must Learn
**Use Case**: Image containers, video players, card thumbnails

```css
/* Maintain 16:9 aspect ratio */
.video-container {
    aspect-ratio: 16 / 9;
    width: 100%;
}

/* Maintain square */
.square {
    aspect-ratio: 1 / 1;
}

/* Maintain 4:3 */
.photo-frame {
    aspect-ratio: 4 / 3;
}

/* Responsive ratio - use narrower ratio on small screens */
.portrait-card {
    aspect-ratio: 3 / 4;
}

@media (min-width: 768px) {
    .portrait-card {
        aspect-ratio: 16 / 9;
    }
}
```

### 2.2 Using with object-fit

```css
/* Image fills container while maintaining ratio */
.responsive-image {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    object-position: center;
}

/* Responsive video */
.video-wrapper {
    width: 100%;
    max-width: 800px;
    aspect-ratio: 16 / 9;
}

.video-wrapper video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

### 2.3 Complex Aspect Ratio Scenarios

```css
/* Common social media card ratios */
.instagram-post {
    aspect-ratio: 1 / 1;           /* Square */
}

.twitter-card {
    aspect-ratio: 16 / 9;          /* Landscape 16:9 */
}

.story-format {
    aspect-ratio: 9 / 16;          /* Portrait 9:16 */
}

/* Responsive gallery card */
.gallery-item {
    aspect-ratio: 4 / 3;
    overflow: hidden;
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.gallery-item:hover img {
    transform: scale(1.05);
}
```

---

## 3. min()/max()/clamp() Advanced Applications

> 💡 **Core fluid design functions**, goodbye to fixed breakpoints

These three CSS math functions let you create truly fluid, adaptive layouts without relying on fixed breakpoints.

### 3.1 clamp() Function Details

**Recommendation**: ⭐⭐⭐⭐⭐ (5/5)
**Frequency**: **Very High** ⭐ Must Learn
**Use Case**: Fluid typography, responsive spacing, elastic sizing

```css
/* Basic syntax */
clamp(min, preferred, max)

/* Fluid typography - scales between 1rem and 2rem based on viewport */
h1 {
    font-size: clamp(1.5rem, 5vw, 3rem);
}

/* Fluid padding */
.card {
    padding: clamp(1rem, 3vw, 2rem);
}

/* Fluid width */
.container {
    width: clamp(300px, 90vw, 1200px);
}

/* Fluid line height */
body {
    line-height: clamp(1.5, 2vw + 0.5, 1.8);
}
```

### 3.2 min() Function

```css
/* Take smaller value - limit max size */
.box {
    width: min(50%, 500px);
    /* Takes smaller of 50% and 500px */
}

/* Responsive margin */
.content {
    margin-left: min(5vw, 40px);
}

/* Fluid grid column width */
.grid-item {
    width: min(300px, 100%);
}
```

### 3.3 max() Function

```css
/* Take larger value - ensure min size */
.box {
    width: max(50%, 300px);
    /* Takes larger of 50% and 300px */
}

/* Minimum reading width */
.article {
    max-width: 70ch;
    width: max(90%, 320px);
}

/* Ensure clickable area */
button {
    padding: max(0.5rem, 2vh) max(1rem, 4vw);
}
```

### 3.4 Combined Usage

```css
/* Complex fluid layout */
.card {
    /* Width between 280px and 600px, adaptive based on viewport */
    width: clamp(280px, 60vw, 600px);

    /* Padding between 1rem and 2rem */
    padding: clamp(1rem, 2vw, 2rem);

    /* Font size between 0.875rem and 1.125rem */
    font-size: clamp(0.875rem, 0.5vw + 0.75rem, 1.125rem);

    /* Border radius adjusts with viewport, max 16px */
    border-radius: clamp(4px, 1vw, 16px);
}

/* Responsive Hero section */
.hero {
    min-height: min(80vh, 600px);
    padding: max(2rem, 5vh);
}
```

---

## 4. Responsive Typography System

> 💡 **Build complete fluid typography system**, one setting, multi-device adaptation

### 4.1 Viewport-Based Fluid Typography

```css
/* Base setup - use vw unit for fluid typography */
html {
    font-size: calc(16px + 0.5vw);
}

body {
    font-size: 1rem;
    line-height: 1.6;
}

/* Fluid typography for all heading levels */
h1 {
    font-size: clamp(2rem, 5vw, 4rem);
    line-height: 1.1;
}

h2 {
    font-size: clamp(1.5rem, 4vw, 3rem);
    line-height: 1.2;
}

h3 {
    font-size: clamp(1.25rem, 3vw, 2rem);
    line-height: 1.3;
}

h4 {
    font-size: clamp(1rem, 2vw, 1.5rem);
}
```

### 4.2 Elastic Spacing System

```css
/* Use CSS variables to establish spacing system */
:root {
    --space-xs: clamp(0.25rem, 1vw, 0.5rem);
    --space-sm: clamp(0.5rem, 2vw, 1rem);
    --space-md: clamp(1rem, 3vw, 1.5rem);
    --space-lg: clamp(1.5rem, 4vw, 2rem);
    --space-xl: clamp(2rem, 6vw, 3rem);
    --space-2xl: clamp(3rem, 8vw, 4rem);
}

/* Apply spacing */
.section {
    padding: var(--space-lg) var(--space-md);
}

.card {
    padding: var(--space-md);
    margin-bottom: var(--space-md);
}

.button {
    padding: var(--space-sm) var(--space-md);
}
```

### 4.3 Responsive Font Scaling

```css
/* Fine control for small text */
.caption {
    font-size: clamp(0.75rem, 1.5vw, 0.875rem);
    line-height: 1.4;
}

/* Body content */
.body-text {
    font-size: clamp(1rem, 2vw, 1.125rem);
    line-height: 1.6;
    max-width: 65ch; /* Optimal reading width */
}

/* Lead text */
.lead {
    font-size: clamp(1.125rem, 2.5vw, 1.5rem);
    font-weight: 500;
}
```

---

## 5. Mobile Safe Areas

> 💡 **Adapt to notch screens and rounded corners**, ensure content isn't obscured

### 5.1 CSS Environment Variables

```css
/* iPhone notch and rounded corner safe areas */
.safe-area {
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
}

/* Global adaptation */
body {
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
}

/* Fixed positioning element adaptation */
.fixed-bottom {
    position: fixed;
    bottom: 0;
    padding-bottom: env(safe-area-inset-bottom);
}
```

### 5.2 Complete Mobile Adaptation

```css
/* Viewport adaptation - disable default zoom */
@viewport {
    width: device-width;
    zoom: 1;
}

/* Touch optimization */
.touch-target {
    min-height: 44px;  /* iOS recommended min touch area */
    min-width: 44px;
}

/* Button touch area */
.button {
    padding: 12px 24px;
    min-height: 44px;
}

/* Prevent touch delay */
touch-action {
    touch-action: manipulation;
}

/* Adapt to iPhone Notch */
.header {
    padding-top: env(safe-area-inset-top);
    background: #fff;
    position: sticky;
    top: 0;
    z-index: 100;
}

/* Adapt to bottom gesture bar */
.bottom-nav {
    padding-bottom: env(safe-area-inset-bottom);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
}
```

### 5.3 Dynamic Viewport Units

```css
/* Most modern browsers support */
.dynamic-viewport {
    /* svh - smallest viewport height (address bar expanded) */
    height: 100svh;

    /* lvh - largest viewport height (address bar collapsed) */
    height: 100lvh;

    /* dvh - dynamic viewport height */
    height: 100dvh;
}

/* Recommended usage - ensure content always visible */
.fullscreen {
    min-height: 100svh;
}

/* Handle keyboard popup */
.modal {
    max-height: 100svh;
    overflow-y: auto;
}
```

---

## 6. Container Query Practice

> 💡 **Best practices for component-based responsiveness**

### 6.1 Responsive Card Component

```css
/* Define card container */
.card-list {
    container-type: inline-size;
    container-name: card-list;
}

/* Card base styles */
.card {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Container query breakpoints */
@container card-list (max-width: 300px) {
    .card {
        flex-direction: row;
        align-items: center;
    }

    .card-image {
        width: 80px;
        height: 80px;
        flex-shrink: 0;
    }

    .card-content {
        padding-left: 1rem;
    }
}

@container card-list (min-width: 300px) and (max-width: 500px) {
    .card {
        display: grid;
        grid-template-columns: 120px 1fr;
    }
}

@container card-list (min-width: 500px) {
    .card-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1rem;
    }
}
```

### 6.2 Responsive Form Component

```css
.form-container {
    container-type: inline-size;
    container-name: form;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.form-label {
    font-weight: 500;
}

.form-input {
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
}

/* Small container: label and input side by side */
@container form (max-width: 400px) {
    .form-group {
        flex-direction: row;
        align-items: center;
    }

    .form-label {
        width: 80px;
        flex-shrink: 0;
    }

    .form-input {
        flex: 1;
    }
}

/* Medium container: two column layout */
@container form (min-width: 400px) {
    .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
}

/* Large container: three column layout */
@container form (min-width: 700px) {
    .form-row {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

### 6.3 Responsive Navigation Component

```css
.nav-container {
    container-type: inline-size;
    container-name: nav;
}

.nav-menu {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    list-style: none;
    padding: 0;
    margin: 0;
}

.nav-item a {
    display: block;
    padding: 0.5rem 1rem;
    color: #333;
    text-decoration: none;
}

/* Small container: icons only */
@container nav (max-width: 300px) {
    .nav-item a::before {
        content: attr(data-icon);
        font-size: 1.25rem;
    }

    .nav-item span {
        display: none;
    }
}

/* Medium container: icon + text */
@container nav (min-width: 300px) {
    .nav-item a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
}

/* Large container: expanded navigation */
@container nav (min-width: 600px) {
    .nav-menu {
        flex-wrap: nowrap;
        justify-content: center;
    }
}
```

---

## 7. Print Style Adaptation

> 💡 **Make web pages more professional when printing**

```css
/* Print styles base setup */
@media print {
    /* Hide non-print content */
    .no-print,
    .header,
    .footer,
    .sidebar,
    .nav {
        display: none !important;
    }

    /* Reset layout */
    body {
        font-size: 12pt;
        line-height: 1.5;
        color: #000;
        background: #fff;
        margin: 0;
        padding: 0;
    }

    /* Show URL for links */
    a[href^="http"]::after {
        content: " (" attr(href) ")";
        font-size: 0.8em;
        color: #666;
    }

    /* Images prevent page break */
    img {
        max-width: 100% !important;
        page-break-inside: avoid;
    }

    /* Headings not at page bottom */
    h1, h2, h3, h4 {
        page-break-after: avoid;
    }

    /* Table setup */
    table {
        width: 100%;
        border-collapse: collapse;
    }

    td, th {
        border: 1px solid #000;
        padding: 0.5rem;
    }

    /* Code block handling */
    pre {
        page-break-inside: avoid;
        white-space: pre-wrap;
    }
}
```

---

## 8. Performance Optimization Tips

> 💡 **Fast loading is the best user experience**

### 8.1 Reduce Reflows and Repaints

```css
/* Use transform and opacity for animation optimization */
.animated-element {
    will-change: transform, opacity;
    transform: translateZ(0); /* Enable hardware acceleration */
}

/* Avoid forced synchronous layout */
.bad-example {
    width: calc(100% - 50px); /* May trigger reflow */
}

.good-example {
    width: 100%;
    margin-right: -50px; /* Use negative margin instead */
}
```

### 8.2 Image Optimization

```css
/* Use srcset for responsive images */
.responsive-img {
    max-width: 100%;
    height: auto;
    display: block;
}

/* Lazy load images */
.lazy-img {
    loading: lazy;
    decoding: async;
}

/* Reserve space to avoid layout shift */
.image-placeholder {
    aspect-ratio: 16 / 9;
    background: #f0f0f0;
}

.image-placeholder img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

---

## 9. Quick Reference

> 📋 **Save for reference**

| Technique | Recommendation | Use Case |
|-----------|----------------|----------|
| `@container` | ⭐⭐⭐⭐⭐ | Component-based responsive design |
| `aspect-ratio` | ⭐⭐⭐⭐⭐ | Maintain element proportions |
| `clamp()` | ⭐⭐⭐⭐⭐ | Fluid typography and sizing |
| `min()` | ⭐⭐⭐⭐☆ | Limit max values |
| `max()` | ⭐⭐⭐⭐☆ | Ensure min values |
| `env(safe-area-*)` | ⭐⭐⭐☆☆ | Mobile safe areas |
| `100svh/100dvh` | ⭐⭐⭐☆☆ | Dynamic viewport height |
| `@media print` | ⭐⭐☆☆☆ | Print styles |

---

## 10. FAQ

> ❓ **Troubleshooting**

### Q: How to choose between container queries and media queries?

A: **Media queries** are suitable for overall page layout and viewport-related design; **container queries** are suitable for independent component adaptation in different containers. It's recommended to use both together - media queries for page-level layout, container queries for component internal styles.

### Q: How is browser compatibility?

A: Container queries and aspect-ratio are well supported in modern browsers. For older browsers, you can use `@supports` for fallback:

```css
.card {
    /* Modern browsers */
    container-type: inline-size;
    container-name: card;
}

/* Older browser fallback */
@supports not (container-type: inline-size) {
    .card {
        display: flex;
        flex-wrap: wrap;
    }
}
```

### Q: What if clamp() calculation expressions are too complex?

A: You can use CSS variables to simplify:

```css
:root {
    --fluid-scale: 0.5vw;
}

h1 {
    font-size: calc(2rem + var(--fluid-scale));
    /* or */
    font-size: clamp(2rem, 2rem + var(--fluid-scale), 4rem);
}
```

### Q: How to test mobile safe areas?

A: Enable device simulation in Chrome DevTools, select iPhone or notch screen device, and observe the actual effect of safe-area-inset-*. You can also use BrowserStack for real device testing.

---

## 11. Advanced Practice: Complete Responsive Page Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced Responsive Design Template</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }

        /* ========== Base Setup ========== */
        :root {
            --primary-color: #3498db;
            --text-color: #333;
            --bg-color: #f5f5f5;
        }

        body {
            font-family: system-ui, -apple-system, sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            background: var(--bg-color);
            padding: env(safe-area-inset-left) env(safe-area-inset-right);
        }

        /* ========== Container Query Cards ========== */
        .card-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: clamp(1rem, 2vw, 2rem);
            padding: clamp(1rem, 3vw, 2rem);
        }

        .card-wrapper {
            container-type: inline-size;
            container-name: card;
        }

        .card {
            background: white;
            border-radius: clamp(4px, 1vw, 12px);
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .card-image {
            width: 100%;
            aspect-ratio: 16 / 9;
            object-fit: cover;
        }

        .card-content {
            padding: clamp(1rem, 2vw, 1.5rem);
        }

        .card-title {
            font-size: clamp(1.125rem, 2vw, 1.5rem);
            margin-bottom: 0.5rem;
        }

        .card-text {
            font-size: clamp(0.875rem, 1.5vw, 1rem);
            color: #666;
        }

        /* Container query response */
        @container card (max-width: 300px) {
            .card {
                display: flex;
                flex-direction: row;
            }

            .card-image {
                width: 100px;
                aspect-ratio: 1;
            }
        }

        /* ========== Responsive Form ========== */
        .form-section {
            padding: clamp(1rem, 3vw, 2rem);
            max-width: 800px;
            margin: 0 auto;
        }

        .form-wrapper {
            container-type: inline-size;
            container-name: form;
        }

        .form-group {
            margin-bottom: clamp(1rem, 2vw, 1.5rem);
        }

        .form-label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
        }

        .form-input {
            width: 100%;
            padding: clamp(0.5rem, 1.5vw, 0.75rem);
            border: 1px solid #ddd;
            border-radius: clamp(4px, 0.5vw, 8px);
            font-size: clamp(0.875rem, 1.5vw, 1rem);
        }

        @container form (min-width: 500px) {
            .form-row {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 1rem;
            }
        }

        /* ========== Responsive Navigation ========== */
        .header {
            background: white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            padding: 1rem;
            padding-top: calc(1rem + env(safe-area-inset-top));
        }

        .nav-wrapper {
            container-type: inline-size;
            container-name: nav;
        }

        .nav-list {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            list-style: none;
        }

        .nav-link {
            display: block;
            padding: 0.5rem 1rem;
            color: var(--text-color);
            text-decoration: none;
            border-radius: 4px;
            transition: background 0.2s;
        }

        .nav-link:hover {
            background: #f0f0f0;
        }

        @container nav (max-width: 400px) {
            .nav-list {
                justify-content: center;
            }

            .nav-link {
                padding: 0.375rem 0.75rem;
                font-size: 0.875rem;
            }
        }

        @container nav (min-width: 600px) {
            .nav-list {
                justify-content: flex-end;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <div class="nav-wrapper" style="max-width: 1200px; margin: 0 auto;">
            <nav>
                <ul class="nav-list">
                    <li><a href="#" class="nav-link">Home</a></li>
                    <li><a href="#" class="nav-link">Products</a></li>
                    <li><a href="#" class="nav-link">Services</a></li>
                    <li><a href="#" class="nav-link">About</a></li>
                    <li><a href="#" class="nav-link">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <section class="card-grid" style="max-width: 1200px; margin: 0 auto;">
            <div class="card-wrapper">
                <article class="card">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='225' viewBox='0 0 400 225'%3E%3Crect fill='%233498db' width='400' height='225'/%3E%3Ctext fill='white' font-family='sans-serif' font-size='24' x='50%25' y='50%25' text-anchor='middle'%3ECard 1%3C/text%3E%3C/svg%3E" alt="Card 1" class="card-image">
                    <div class="card-content">
                        <h2 class="card-title">Responsive Card 1</h2>
                        <p class="card-text">This card uses container queries and fluid design, automatically adjusting layout based on container width.</p>
                    </div>
                </article>
            </div>
            <div class="card-wrapper">
                <article class="card">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='225' viewBox='0 0 400 225'%3E%3Crect fill='%2327ae60' width='400' height='225'/%3E%3Ctext fill='white' font-family='sans-serif' font-size='24' x='50%25' y='50%25' text-anchor='middle'%3ECard 2%3C/text%3E%3C/svg%3E" alt="Card 2" class="card-image">
                    <div class="card-content">
                        <h2 class="card-title">Responsive Card 2</h2>
                        <p class="card-text">Try resizing the browser window and observe how the card layout changes.</p>
                    </div>
                </article>
            </div>
            <div class="card-wrapper">
                <article class="card">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='225' viewBox='0 0 400 225'%3E%3Crect fill='%23e67e22' width='400' height='225'/%3E%3Ctext fill='white' font-family='sans-serif' font-size='24' x='50%25' y='50%25' text-anchor='middle'%3ECard 3%3C/text%3E%3C/svg%3E" alt="Card 3" class="card-image">
                    <div class="card-content">
                        <h2 class="card-title">Responsive Card 3</h2>
                        <p class="card-text">The aspect-ratio property ensures images always maintain a 16:9 ratio.</p>
                    </div>
                </article>
            </div>
        </section>

        <section class="form-section">
            <div class="form-wrapper">
                <form>
                    <h2 style="margin-bottom: 1.5rem;">Contact Form</h2>
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label">Name</label>
                            <input type="text" class="form-input" placeholder="Enter your name">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-input" placeholder="Enter your email">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Message</label>
                        <textarea class="form-input" rows="4" placeholder="Enter your message"></textarea>
                    </div>
                    <button type="submit" class="form-input" style="background: var(--primary-color); color: white; border: none; cursor: pointer; font-weight: 500;">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    </main>
</body>
</html>
```

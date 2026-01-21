# Responsive Design (响应式设计)

> **Recommendation Rating**: ⭐⭐⭐⭐⭐ (5/5)
> Mastering media queries and mobile-first design is essential for modern web development, **must be proficient**.

---

## 1. What is Responsive Design

> Core Concept: Let websites automatically adapt to different screen sizes

Responsive design is a web design approach that allows websites to automatically adapt to different device screen sizes (from phones to desktop monitors) for the best browsing experience.

- **Core Principle**: "Mobile First"
- **Technical Methods**: Media Queries, Flexible Layouts (Flexbox/Grid), Relative Units
- **Design Goal**: One codebase, multi-device adaptation

```css
/* Most basic responsive layout example */
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Adjust layout on small screens */
@media (max-width: 768px) {
    .container {
        padding: 0 15px;
    }
}
```

---

## 2. Media Queries

> Core Weapon for Responsiveness: Apply different styles based on conditions

### 2.1 Media Query Syntax

**Recommendation Rating**: ⭐⭐⭐⭐⭐ (5/5)
**Usage Frequency**: **Very High** - Must Learn
**Applicable Scenarios**: Adjust styles based on screen size and device features

```css
/* Basic syntax */
@media media_type and (media_feature) {
    /* Styles applied when conditions are met */
}
```

### 2.2 Common Media Features

| Media Feature | Description | Example |
|---------------|-------------|---------|
| `max-width` | Viewport width less than or equal to | `@media (max-width: 768px)` |
| `min-width` | Viewport width greater than or equal to | `@media (min-width: 768px)` |
| `max-height` | Viewport height less than or equal to | `@media (max-height: 600px)` |
| `min-height` | Viewport height greater than or equal to | `@media (min-height: 600px)` |
| `orientation` | Screen orientation | `@media (orientation: portrait)` |
| `prefers-color-scheme` | Preferred color theme | `@media (prefers-color-scheme: dark)` |

```css
/* Mobile devices */
@media (max-width: 480px) {
    .sidebar {
        display: none; /* Hide sidebar on phones */
    }
}

/* Tablet devices */
@media (min-width: 481px) and (max-width: 768px) {
    .sidebar {
        width: 200px;
    }
}

/* Desktop devices */
@media (min-width: 769px) {
    .sidebar {
        width: 300px;
    }
}

/* Landscape mode */
@media (orientation: landscape) {
    .banner {
        height: 200px;
    }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
    body {
        background: #1a1a1a;
        color: #fff;
    }
}
```

### 2.3 Where to Place Media Queries

**Method 1: In inline styles**
```html
<style>
    @media (max-width: 768px) {
        .menu { display: none; }
    }
</style>
```

**Method 2: External CSS file (conditional loading)**
```html
<link rel="stylesheet" media="(max-width: 768px)" href="mobile.css">
```

**Method 3: Inside CSS file (recommended)**
```css
/* main.css */
.desktop-only { ... }

@media (max-width: 768px) {
    .desktop-only { display: none; }
    .mobile-menu { display: block; }
}
```

---

## 3. Mobile First

> Best Practice: Design for mobile first, then expand to desktop

### 3.1 Why Choose Mobile First

- **User Experience**: More and more users on mobile devices
- **Performance**: Mobile-first means less code and faster loading
- **Maintainability**: Building from simple to complex is easier than the reverse

### 3.2 Mobile First Writing

```css
/* Base styles (Mobile) */
.card {
    width: 100%;
    padding: 15px;
    margin-bottom: 10px;
}

/* Tablet and above */
@media (min-width: 768px) {
    .card {
        width: calc(50% - 20px);
        padding: 20px;
    }
}

/* Desktop and above */
@media (min-width: 1024px) {
    .card {
        width: calc(33.333% - 20px);
        padding: 25px;
    }
}
```

### 3.3 Desktop First (Not Recommended)

```css
/* Base styles (Desktop) */
.card {
    width: 33.333%;
    padding: 25px;
}

/* Tablet and below */
@media (max-width: 1024px) {
    .card {
        width: 50%;
        padding: 20px;
    }
}

/* Mobile */
@media (max-width: 768px) {
    .card {
        width: 100%;
        padding: 15px;
    }
}
```

---

## 4. Common Breakpoints

> Industry Convention: Choose breakpoints suitable for your project

### 4.1 Recommended Breakpoint Settings

| Breakpoint Name | Screen Width | Device Type |
|-----------------|--------------|-------------|
| xs | < 576px | Extra small (phone portrait) |
| sm | ≥ 576px | Phone landscape / Small tablet |
| md | ≥ 768px | Tablet portrait |
| lg | ≥ 992px | Tablet landscape / Small desktop |
| xl | ≥ 1200px | Desktop monitor |
| xxl | ≥ 1400px | Large desktop |

### 4.2 TailwindCSS-style Breakpoints

```css
/* sm: 576px */
@media (min-width: 576px) { ... }

/* md: 768px */
@media (min-width: 768px) { ... }

/* lg: 992px */
@media (min-width: 992px) { ... }

/* xl: 1200px */
@media (min-width: 1200px) { ... }

/* 2xl: 1400px */
@media (min-width: 1400px) { ... }
```

### 4.3 Practical Application Examples

```css
/* Responsive navbar */
.navbar {
    display: flex;
    flex-direction: column;
}

@media (min-width: 768px) {
    .navbar {
        flex-direction: row;
        justify-content: space-between;
    }
}

/* Responsive card grid */
.card-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

@media (min-width: 576px) {
    .card-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 992px) {
    .card-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (min-width: 1200px) {
    .card-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}
```

---

## 5. Responsive Images

> Performance Optimization: Load appropriate image sizes based on screen

### 5.1 srcset Attribute

```html
<img
    src="image-800.jpg"
    srcset="image-400.jpg 400w,
            image-800.jpg 800w,
            image-1200.jpg 1200w"
    sizes="(max-width: 600px) 400px,
           (max-width: 1200px) 800px,
           1200px"
    alt="Responsive image"
>
```

### 5.2 Picture Element

```html
<picture>
    <!-- Mobile image -->
    <source media="(max-width: 576px)" srcset="mobile.jpg">
    <!-- Tablet image -->
    <source media="(max-width: 992px)" srcset="tablet.jpg">
    <!-- Default desktop image -->
    <img src="desktop.jpg" alt="Responsive image">
</picture>
```

### 5.3 CSS Background Image Responsive

```css
.hero {
    background-image: url('mobile.jpg');
}

@media (min-width: 768px) {
    .hero {
        background-image: url('tablet.jpg');
    }
}

@media (min-width: 1200px) {
    .hero {
        background-image: url('desktop.jpg');
    }
}
```

---

## 6. Responsive Typography

> User Experience: Make text comfortable to read on all screens

### 6.1 Using clamp() for Fluid Typography

```css
/* Fluid typography: Automatically scales between min and max */
h1 {
    font-size: clamp(2rem, 5vw, 4rem);
}

p {
    font-size: clamp(1rem, 2.5vw, 1.5rem);
}
```

### 6.2 Using calc() for Font Size

```css
/* Viewport-based fluid typography */
html {
    font-size: calc(16px + 0.5vw);
}

body {
    font-size: 1rem;
    line-height: 1.6;
}
```

### 6.3 Responsive Line Height and Spacing

```css
/* Mobile compact layout */
body {
    line-height: 1.5;
    padding: 1rem;
}

@media (min-width: 768px) {
    body {
        line-height: 1.6;
        padding: 2rem;
    }
}
```

---

## 7. Best Practices Guide

> Pitfall Avoidance: Write high-quality responsive code

### ❌ Avoid

1. **Don't use fixed pixel values for layout widths** - Use percentages, `vw`, or `max-width`
2. **Don't hide important content** - Mobile users also need core functionality
3. **Don't ignore landscape mode** - Tablets and foldable devices rotate
4. **Don't forget to test on real devices** - Simulators don't fully represent real experience

### ✅ Recommended

1. **Use relative units** - `rem`, `em`, `%`, `vw/vh`
2. **Use Flexbox/Grid** - Naturally suited for responsive layouts
3. **Use CSS custom properties** - Manage breakpoints and values consistently
4. **Use Chrome DevTools** - Test different screen sizes
5. **Progressive enhancement** - Ensure basic functionality first, then enhance experience

```css
:root {
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;

    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 2rem;
}

.container {
    padding: var(--spacing-sm);
}

@media (min-width: var(--breakpoint-md)) {
    .container {
        padding: var(--spacing-md);
    }
}

@media (min-width: var(--breakpoint-lg)) {
    .container {
        padding: var(--spacing-lg);
    }
}
```

---

## 8. Quick Reference

> For your collection

| Technique | Rating | Use Case |
|-----------|--------|----------|
| `@media (max-width)` | ⭐⭐⭐⭐⭐ | Mobile first, adapt from large to small |
| `@media (min-width)` | ⭐⭐⭐⭐⭐ | Desktop first, adapt from small to large |
| `flex-wrap` | ⭐⭐⭐⭐☆ | Automatic wrap responsive layout |
| `grid-template-columns` | ⭐⭐⭐⭐☆ | Responsive grid system |
| `clamp()` | ⭐⭐⭐⭐☆ | Fluid typography and sizing |
| `srcset` | ⭐⭐⭐☆☆ | Responsive images |
| `@media (orientation)` | ⭐⭐⭐☆☆ | Portrait/landscape adaptation |

---

## 9. FAQ

> Troubleshooting: Solve daily development confusion

### Q: How to choose between `max-width` and `min-width`?

A: **Mobile First** uses `min-width` (start from small screens, progressively enhance); **Desktop First** uses `max-width` (start from large screens, progressively simplify). Mobile first is recommended.

### Q: Why aren't media queries working?

A: Check the following:
1. Is the CSS selector in the media query correct?
2. Is the viewport meta tag set: `<meta name="viewport" content="width=device-width, initial-scale=1">`
3. Are other CSS rules overriding your styles? (check specificity)

### Q: How to handle notch screens and rounded corners?

A: Use CSS environment variables:
```css
.safe-area {
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
}
```

### Q: How do responsive images improve performance?

A: Use `srcset` and `sizes` to let the browser select the appropriate image, combined with image format optimization (WebP) and lazy loading (`loading="lazy"`).

---

## 10. Practice Project: Responsive Layout Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Layout Template</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }

        .header {
            background: #3498db;
            color: white;
            padding: 1rem;
        }

        .nav {
            display: flex;
            gap: 1rem;
        }

        .main {
            display: flex;
            gap: 1rem;
            padding: 1rem;
        }

        .content {
            flex: 1;
        }

        .sidebar {
            width: 300px;
        }

        .footer {
            background: #333;
            color: white;
            padding: 1rem;
            text-align: center;
        }

        /* Tablet: Sidebar to bottom */
        @media (max-width: 992px) {
            .main {
                flex-direction: column;
            }
            .sidebar {
                width: 100%;
            }
        }

        /* Mobile: Hide navigation */
        @media (max-width: 768px) {
            .nav {
                display: none;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <h1>Responsive Website</h1>
        <nav class="nav">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
        </nav>
    </header>
    <main class="main">
        <div class="content">
            <h2>Main Content</h2>
            <p>This is the main content area of the page.</p>
        </div>
        <aside class="sidebar">
            <h3>Sidebar</h3>
            <p>Sidebar content, moves to bottom on mobile.</p>
        </aside>
    </main>
    <footer class="footer">
        <p>&copy; 2024 Responsive Website</p>
    </footer>
</body>
</html>
```

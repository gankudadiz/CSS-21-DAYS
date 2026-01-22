# CSS Variables (Custom Properties)

> **Recommendation**: ⭐⭐⭐⭐☆ (4/5)
> CSS Variables (Custom Properties) are essential for modern CSS, **recommended to master**, significantly improving code maintainability and theming capabilities.

---

## 1. Overview

> 💡 **Native CSS alternative to preprocessor variables**, no compilation needed

CSS variables are value containers that can be reused throughout the document. Unlike Sass/Less variables, CSS variables are **runtime-aware** and can be modified via JavaScript.

### 1.1 Basic Syntax

```css
/* Define variables */
:root {
    --primary-color: #3498db;
    --spacing-md: 16px;
    --border-radius: 8px;
}

/* Use variables */
.button {
    background-color: var(--primary-color);
    padding: var(--spacing-md);
    border-radius: var(--border-radius);
}
```

### 1.2 Naming Conventions

```css
/* Recommended: kebab-case */
:root {
    --main-bg-color: #ffffff;
    --text-primary-color: #333333;
    --container-max-width: 1200px;
}
```

---

## 2. Variable Scope

> 💡 **CSS variables follow standard CSS inheritance rules**

### 2.1 Global Scope

Variables defined in `:root` have global scope.

```css
:root {
    --font-family-base: 'Segoe UI', Arial, sans-serif;
    --color-primary: #3498db;
}

body {
    font-family: var(--font-family-base);
}
```

### 2.2 Local Scope

Variables defined in specific selectors are only available within that selector and its children.

```css
.card {
    --card-bg: #ffffff;
    --card-padding: 20px;

    background-color: var(--card-bg);
    padding: var(--card-padding);
}
```

---

## 3. Fallback Values

> 💡 **Use fallback values to prevent styling issues when variables are undefined**

```css
.button {
    background-color: var(--button-bg, #3498db);
    color: var(--button-text, #ffffff);
}
```

---

## 4. JavaScript Manipulation

> 💡 **Modify styles in real-time without recompilation**

### 4.1 Getting Variable Values

```javascript
const rootStyles = getComputedStyle(document.documentElement);
const primaryColor = rootStyles.getPropertyValue('--primary-color').trim();
```

### 4.2 Setting Variable Values

```javascript
document.documentElement.style.setProperty('--primary-color', '#e74c3c');
```

### 4.3 Theme Switching

```javascript
function switchTheme(themeName) {
    const root = document.documentElement;

    switch (themeName) {
        case 'dark':
            root.style.setProperty('--bg-primary', '#1a1a1a');
            root.style.setProperty('--text-primary', '#f0f0f0');
            break;
        case 'light':
            root.style.setProperty('--bg-primary', '#ffffff');
            root.style.setProperty('--text-primary', '#333333');
            break;
    }
}
```

---

## 5. Responsive Variables

> 💡 **Combine with media queries for responsive variables**

```css
:root {
    --spacing-md: 16px;
}

@media (max-width: 768px) {
    :root {
        --spacing-md: 12px;
    }
}
```

---

## 6. Design System Example

```css
:root {
    /* Colors */
    --color-primary: #3498db;
    --color-danger: #e74c3c;
    --color-success: #27ae60;

    /* Spacing */
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;

    /* Typography */
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.25rem;

    /* Borders */
    --radius-sm: 4px;
    --radius-md: 6px;
    --radius-lg: 8px;
}
```

---

## 7. Quick Reference

| Feature | Example | Rating |
|---------|---------|--------|
| Define | `:root { --name: value; }` | ⭐⭐⭐⭐⭐ |
| Use | `property: var(--name);` | ⭐⭐⭐⭐⭐ |
| Fallback | `var(--name, default)` | ⭐⭐⭐⭐☆ |
| JS Set | `style.setProperty('--name', value)` | ⭐⭐⭐⭐☆ |

---

## 8. Common Questions

### Q: What's the difference between CSS and Sass variables?

A: CSS variables are runtime-available, inheritable, and modifiable via JS; Sass variables are replaced at compile time.

### Q: How to use variables with calc()?

A: Direct usage: `width: calc(var(--size) * 2);`

---

## 9. Next Steps

- **CSS Functions**: Learn `calc()`, `clamp()`
- **CSS Architecture**: BEM, modular CSS

# CSS变量 (CSS Variables)

> **推荐指数**: ⭐⭐⭐⭐☆ (4/5)
> CSS变量（自定义属性）是现代CSS的重要特性，**推荐掌握**，可显著提升代码可维护性和主题切换能力。

---

## 1. CSS变量概述

> 💡 **CSS预处理器变量的替代方案**，原生支持，无需编译

CSS变量是一种值容器，可以在整个文档中重复使用。与Sass/Less变量不同，CSS变量是**实时响应**的，可以在运行时通过JavaScript修改。

### 1.1 基本语法

```css
/* 定义变量 */
:root {
    --primary-color: #3498db;
    --spacing-md: 16px;
    --border-radius: 8px;
}

/* 使用变量 */
.button {
    background-color: var(--primary-color);
    padding: var(--spacing-md);
    border-radius: var(--border-radius);
}
```

### 1.2 变量命名规范

```css
/* 推荐：使用kebab-case */
:root {
    --main-bg-color: #ffffff;
    --text-primary-color: #333333;
    --container-max-width: 1200px;
}

/* 不推荐：使用camelCase或大写 */
:root {
    --mainBgColor: #ffffff;   /* 不一致 */
    --MAIN-BG-COLOR: #ffffff; /* 过于繁琐 */
}
```

---

## 2. 变量的作用域

> 💡 **CSS变量具有继承性**，可以定义在不同层级的选择器中

### 2.1 全局变量

在 `:root` 选择器中定义的变量具有全局作用域。

```css
:root {
    --font-family-base: 'Segoe UI', Arial, sans-serif;
    --color-primary: #3498db;
    --color-text: #333333;
    --spacing-unit: 8px;
}

body {
    font-family: var(--font-family-base);
    color: var(--color-text);
}
```

### 2.2 局部变量

在特定选择器中定义的变量只在该选择器及其子元素中生效。

```css
.card {
    --card-bg: #ffffff;
    --card-padding: 20px;

    background-color: var(--card-bg);
    padding: var(--card-padding);
}

.card-title {
    /* 可以使用父级的变量 */
    margin-bottom: var(--card-padding);
}
```

### 2.3 组件化最佳实践

```css
/* 组件变量封装 */
.button {
    --btn-bg: #3498db;
    --btn-color: #ffffff;
    --btn-radius: 6px;
    --btn-padding: 10px 20px;

    background-color: var(--btn-bg);
    color: var(--btn-color);
    border-radius: var(--btn-radius);
    padding: var(--btn-padding);
}

.button-primary {
    --btn-bg: #27ae60;
}

.button-danger {
    --btn-bg: #e74c3c;
}
```

---

## 3. 变量的继承与覆盖

> 💡 **CSS变量遵循标准的CSS继承规则**

### 3.1 继承示例

```css
.parent {
    --color: blue;
}

.child {
    /* 继承父级的 --color */
    color: var(--color);
}

.another-child {
    /* 可以覆盖父级变量 */
    --color: red;
    color: var(--color);
}
```

### 3.2 在媒体查询中覆盖

```css
:root {
    --container-padding: 20px;
}

/* 移动端调整 */
@media (max-width: 768px) {
    :root {
        --container-padding: 15px;
    }
}

.container {
    padding: var(--container-padding);
}
```

---

## 4. 变量的备用值

> 💡 **使用备用值防止变量未定义时的样式丢失**

### 4.1 基本用法

```css
/* 第二个参数是备用值 */
.button {
    background-color: var(--button-bg, #3498db);
    color: var(--button-text, #ffffff);
}
```

### 4.2 复杂备用值

```css
/* 使用逗号分隔备用值 */
.card {
    border: 2px solid var(--card-border, #ddd);
    box-shadow: var(--card-shadow, 0 2px 4px rgba(0,0,0,0.1));
}
```

---

## 5. JavaScript操作CSS变量

> 💡 **实时修改样式，无需重新编译**

### 5.1 获取变量值

```javascript
// 获取根元素的变量
const rootStyles = getComputedStyle(document.documentElement);
const primaryColor = rootStyles.getPropertyValue('--primary-color').trim();
console.log(primaryColor); // "#3498db"

// 获取特定元素的变量
const cardStyles = getComputedStyle(document.querySelector('.card'));
const cardPadding = cardStyles.getPropertyValue('--card-padding').trim();
```

### 5.2 设置变量值

```javascript
// 设置根元素变量
document.documentElement.style.setProperty('--primary-color', '#e74c3c');

// 设置特定元素变量
const card = document.querySelector('.card');
card.style.setProperty('--card-bg', '#f8f9fa');
```

### 5.3 主题切换实战

```javascript
// theme.js
function switchTheme(themeName) {
    const root = document.documentElement;

    switch (themeName) {
        case 'dark':
            root.style.setProperty('--bg-primary', '#1a1a1a');
            root.style.setProperty('--text-primary', '#f0f0f0');
            root.style.setProperty('--border-color', '#333333');
            break;

        case 'light':
            root.style.setProperty('--bg-primary', '#ffffff');
            root.style.setProperty('--text-primary', '#333333');
            root.style.setProperty('--border-color', '#dddddd');
            break;
    }

    // 保存主题偏好
    localStorage.setItem('theme', themeName);
}

// 页面加载时恢复主题
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    switchTheme(savedTheme);
});
```

---

## 6. 响应式设计中的变量

> 💡 **结合媒体查询实现响应式变量**

### 响应 6.1式间距

```css
:root {
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
}

@media (max-width: 768px) {
    :root {
        --spacing-md: 12px;
        --spacing-lg: 16px;
        --spacing-xl: 24px;
    }
}
```

### 6.2 响应式字体

```css
:root {
    --font-size-sm: 0.875rem;
    --font-size-md: 1rem;
    --font-size-lg: 1.25rem;
    --font-size-xl: 1.5rem;
}

@media (max-width: 768px) {
    :root {
        --font-size-md: 0.875rem;
        --font-size-lg: 1.125rem;
        --font-size-xl: 1.25rem;
    }
}
```

---

## 7. CSS变量实战：设计系统

> 💡 **用变量构建可维护的设计系统**

### 7.1 完整设计系统示例

```css
/* design-tokens.css */
:root {
    /* 颜色系统 */
    --color-primary: #3498db;
    --color-primary-hover: #2980b9;
    --color-secondary: #27ae60;
    --color-danger: #e74c3c;
    --color-warning: #f39c12;
    --color-info: #9b59b6;

    /* 中性色 */
    --gray-100: #f8f9fa;
    --gray-200: #e9ecef;
    --gray-300: #dee2e6;
    --gray-400: #ced4da;
    --gray-500: #adb5bd;
    --gray-600: #6c757d;
    --gray-700: #495057;
    --gray-800: #343a40;
    --gray-900: #212529;

    /* 字体系统 */
    --font-family-sans: 'Segoe UI', Arial, sans-serif;
    --font-family-mono: 'Fira Code', 'Consolas', monospace;

    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 2rem;

    /* 间距系统 */
    --spacing-1: 4px;
    --spacing-2: 8px;
    --spacing-3: 12px;
    --spacing-4: 16px;
    --spacing-5: 24px;
    --spacing-6: 32px;
    --spacing-8: 48px;

    /* 圆角 */
    --radius-sm: 4px;
    --radius-md: 6px;
    --radius-lg: 8px;
    --radius-xl: 12px;
    --radius-full: 9999px;

    /* 阴影 */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
}
```

### 7.2 使用设计系统

```css
/* component.css */
.card {
    background-color: white;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    padding: var(--spacing-5);
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-3) var(--spacing-4);
    border-radius: var(--radius-md);
    font-family: var(--font-family-sans);
    font-size: var(--font-size-base);
    cursor: pointer;
    transition: all 0.2s;
}

.btn-primary {
    background-color: var(--color-primary);
    color: white;
}

.btn-primary:hover {
    background-color: var(--color-primary-hover);
}
```

---

## 8. 注意事项与最佳实践

### 8.1 性能考虑

```css
/* 避免频繁触发布局重排的操作 */
:root {
    /* 批量定义相关变量 */
    --card-bg: #fff;
    --card-text: #333;
    --card-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

### 8.2 兼容性

```css
/* 使用@supports检测 */
@supports (--css: variables) {
    .card {
        background-color: var(--card-bg);
    }
}

/* 不支持时的降级方案 */
@supports not (--css: variables) {
    .card {
        background-color: #ffffff;
    }
}
```

### 8.3 不应该做的事

```css
/* ❌ 避免：变量嵌套过深 */
.parent {
    --level-1: 10px;
    --level-2: var(--level-1) * 2;
    --level-3: var(--level-2) * 2;
    /* 难以维护和调试 */
}

/* ✅ 推荐：清晰的变量命名 */
:root {
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
}
```

---

## 9. 速查表

| 功能 | 示例 | 推荐指数 |
|------|------|----------|
| 定义变量 | `:root { --name: value; }` | ⭐⭐⭐⭐⭐ |
| 使用变量 | `property: var(--name);` | ⭐⭐⭐⭐⭐ |
| 备用值 | `var(--name, default)` | ⭐⭐⭐⭐☆ |
| JS获取 | `getPropertyValue('--name')` | ⭐⭐⭐⭐☆ |
| JS设置 | `style.setProperty('--name', value)` | ⭐⭐⭐⭐☆ |
| 媒体查询覆盖 | `@media (...) { :root { --name: value; } }` | ⭐⭐⭐⭐☆ |

---

## 10. 常见问题

### Q: CSS变量和Sass变量有什么区别？

A: 主要区别：
- **CSS变量**：运行时可用，可通过JavaScript修改，具有继承性
- **Sass变量**：编译时替换，不能动态修改

### Q: 如何在calc()中使用变量？

A: 直接使用，与普通数值相同：
```css
.element {
    --base-size: 100px;
    width: calc(var(--base-size) * 2);
    padding: calc(var(--base-size) / 4);
}
```

### Q: 变量名区分大小写吗？

A: 区分。`--color` 和 `--Color` 是两个不同的变量。

---

## 11. 下一步学习

- **CSS函数**：学习 `calc()`、`clamp()` 等函数
- **CSS架构**：了解BEM、模块化CSS
- **CSS-in-JS**：探索现代CSS解决方案

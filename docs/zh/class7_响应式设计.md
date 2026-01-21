# 响应式设计 (Responsive Design)

> **推荐指数**: ⭐⭐⭐⭐⭐ (5/5)
> 掌握媒体查询和移动端优先设计，是现代Web开发的必备技能，**必须精通**。

---

## 1. 什么是响应式设计

> 💡 **核心理念**，让网页自动适应不同屏幕尺寸

响应式设计是一种网页设计方法，使网站能够自动适应不同的设备屏幕尺寸（从手机到桌面显示器），提供最佳的浏览体验。

- **核心原则**: "Mobile First"（移动优先）
- **技术手段**: 媒体查询 (Media Queries)、弹性布局 (Flexbox/Grid)、相对单位
- **设计目标**: 一套代码，多端适配

```css
/* 最基础的响应式布局示例 */
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* 在小屏幕上调整布局 */
@media (max-width: 768px) {
    .container {
        padding: 0 15px;
    }
}
```

---

## 2. 媒体查询 (Media Queries)

> 💡 **响应式的核心武器**，根据条件应用不同样式

### 2.1 媒体查询语法

**推荐指数**: ⭐⭐⭐⭐⭐ (5/5)
**使用频率**: **极高** ⭐ 必学
**适用场景**: 根据屏幕尺寸、设备特性调整样式

```css
/* 基础语法 */
@media 媒体类型 and (媒体特性) {
    /* 满足条件时应用的样式 */
}
```

### 2.2 常用媒体特性

| 媒体特性 | 说明 | 示例 |
|----------|------|------|
| `max-width` | 视口宽度小于等于某值 | `@media (max-width: 768px)` |
| `min-width` | 视口宽度大于等于某值 | `@media (min-width: 768px)` |
| `max-height` | 视口高度小于等于某值 | `@media (max-height: 600px)` |
| `min-height` | 视口高度大于等于某值 | `@media (min-height: 600px)` |
| `orientation` | 屏幕方向 | `@media (orientation: portrait)` |
| `prefers-color-scheme` | 偏好颜色主题 | `@media (prefers-color-scheme: dark)` |

```css
/* 移动设备 */
@media (max-width: 480px) {
    .sidebar {
        display: none; /* 手机上隐藏侧边栏 */
    }
}

/* 平板设备 */
@media (min-width: 481px) and (max-width: 768px) {
    .sidebar {
        width: 200px;
    }
}

/* 桌面设备 */
@media (min-width: 769px) {
    .sidebar {
        width: 300px;
    }
}

/* 横屏模式 */
@media (orientation: landscape) {
    .banner {
        height: 200px;
    }
}

/* 深色模式 */
@media (prefers-color-scheme: dark) {
    body {
        background: #1a1a1a;
        color: #fff;
    }
}
```

### 2.3 媒体查询的放置位置

**方式一：内联样式中**
```html
<style>
    @media (max-width: 768px) {
        .menu { display: none; }
    }
</style>
```

**方式二：外部CSS文件（条件加载）**
```html
<link rel="stylesheet" media="(max-width: 768px)" href="mobile.css">
```

**方式三：CSS文件内（推荐）**
```css
/* main.css */
.desktop-only { ... }

@media (max-width: 768px) {
    .desktop-only { display: none; }
    .mobile-menu { display: block; }
}
```

---

## 3. 移动端优先 (Mobile First)

> 💡 **最佳实践**，先设计移动端，再扩展到桌面端

### 3.1 为什么选择移动端优先

- **用户体验**: 移动设备用户越来越多
- **性能**: 移动端优先意味着更少的代码和更快的加载
- **可维护性**: 从简单到复杂比从复杂到简单更容易

### 3.2 移动端优先的写法

```css
/* 基础样式（移动端） */
.card {
    width: 100%;
    padding: 15px;
    margin-bottom: 10px;
}

/* 平板及以上 */
@media (min-width: 768px) {
    .card {
        width: calc(50% - 20px);
        padding: 20px;
    }
}

/* 桌面及以上 */
@media (min-width: 1024px) {
    .card {
        width: calc(33.333% - 20px);
        padding: 25px;
    }
}
```

### 3.3 桌面端优先（不推荐）

```css
/* 基础样式（桌面端） */
.card {
    width: 33.333%;
    padding: 25px;
}

/* 平板及以下 */
@media (max-width: 1024px) {
    .card {
        width: 50%;
        padding: 20px;
    }
}

/* 移动端 */
@media (max-width: 768px) {
    .card {
        width: 100%;
        padding: 15px;
    }
}
```

---

## 4. 常见断点 (Breakpoints)

> 💡 **行业约定俗成**，选择适合项目的断点

### 4.1 推荐的断点设置

| 断点名称 | 屏幕宽度 | 设备类型 |
|----------|----------|----------|
| xs | < 576px | 超小屏幕（手机竖屏） |
| sm | ≥ 576px | 手机横屏 / 小平板 |
| md | ≥ 768px | 平板竖屏 |
| lg | ≥ 992px | 平板横屏 / 小桌面 |
| xl | ≥ 1200px | 桌面显示器 |
| xxl | ≥ 1400px | 大屏桌面 |

### 4.2 TailwindCSS 风格的断点

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

### 4.3 实际应用示例

```css
/* 导航栏响应式 */
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

/* 卡片网格响应式 */
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

## 5. 响应式图片

> 💡 **性能优化**，根据屏幕加载合适尺寸的图片

### 5.1 srcset 属性

```html
<img
    src="image-800.jpg"
    srcset="image-400.jpg 400w,
            image-800.jpg 800w,
            image-1200.jpg 1200w"
    sizes="(max-width: 600px) 400px,
           (max-width: 1200px) 800px,
           1200px"
    alt="响应式图片"
>
```

### 5.2 picture 元素

```html
<picture>
    <!-- 移动端图片 -->
    <source media="(max-width: 576px)" srcset="mobile.jpg">
    <!-- 平板图片 -->
    <source media="(max-width: 992px)" srcset="tablet.jpg">
    <!-- 默认桌面图片 -->
    <img src="desktop.jpg" alt="响应式图片">
</picture>
```

### 5.3 CSS 背景图片响应式

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

## 6. 响应式文字排版

> 💡 **用户体验**，让文字在不同屏幕上都能舒适阅读

### 6.1 使用 clamp() 实现流体字体

```css
/* 流体字体：自动在最小值和最大值之间缩放 */
h1 {
    font-size: clamp(2rem, 5vw, 4rem);
}

p {
    font-size: clamp(1rem, 2.5vw, 1.5rem);
}
```

### 6.2 使用 calc() 计算字体大小

```css
/* 基于视口的流体排版 */
html {
    font-size: calc(16px + 0.5vw);
}

body {
    font-size: 1rem;
    line-height: 1.6;
}
```

### 6.3 响应式行高和间距

```css
/* 移动端紧凑布局 */
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

## 7. 最佳实践指南

> 🎯 **避坑指南**，写出高质量的响应式代码

### ❌ 避免

1. **不要固定像素值用于布局宽度** - 使用百分比、`vw` 或 `max-width`
2. **不要隐藏重要内容** - 移动端用户也需要核心功能
3. **不要忽视横屏模式** - 平板和折叠屏设备会旋转
4. **不要忘记测试真实设备** - 模拟器不能完全代表真实体验

### ✅ 推荐

1. **使用相对单位** - `rem`、`em`、`%`、`vw/vh`
2. **使用 Flexbox/Grid** - 天生适合响应式布局
3. **使用 CSS 自定义属性** - 统一管理断点和值
4. **使用 Chrome DevTools** - 测试不同屏幕尺寸
5. **渐进增强** - 先保证基本功能，逐步增强体验

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

## 8. 速查表

> 📋 **收藏备用**

| 技术 | 推荐指数 | 使用场景 |
|------|----------|----------|
| `@media (max-width)` | ⭐⭐⭐⭐⭐ | 移动端优先，从大到小适配 |
| `@media (min-width)` | ⭐⭐⭐⭐⭐ | 桌面端优先，从小到大适配 |
| `flex-wrap` | ⭐⭐⭐⭐☆ | 自动换行响应式布局 |
| `grid-template-columns` | ⭐⭐⭐⭐☆ | 响应式网格系统 |
| `clamp()` | ⭐⭐⭐⭐☆ | 流体字体和尺寸 |
| `srcset` | ⭐⭐⭐☆☆ | 响应式图片 |
| `@media (orientation)` | ⭐⭐⭐☆☆ | 横竖屏适配 |

---

## 9. 常见问题

> ❓ **疑难解答**，解决日常开发中的困惑

### Q: 如何选择 `max-width` 还是 `min-width`？

A: **移动端优先**用 `min-width`（从小屏幕开始，逐步增强）；**桌面端优先**用 `max-width`（从大屏幕开始，逐步简化）。推荐使用移动端优先。

### Q: 为什么媒体查询不生效？

A: 检查以下几点：
1. 媒体查询的 CSS 选择器是否正确
2. 视口 meta 标签是否设置：`<meta name="viewport" content="width=device-width, initial-scale=1">`
3. 是否有其他 CSS 规则覆盖了你的样式（检查优先级）

### Q: 如何处理刘海屏和圆角？

A: 使用 CSS 环境变量：
```css
.safe-area {
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
}
```

### Q: 响应式图片如何提升性能？

A: 使用 `srcset` 和 `sizes` 让浏览器选择合适的图片，配合图片格式优化（WebP）和延迟加载（`loading="lazy"`）。

---

## 10. 实战项目：响应式布局模板

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>响应式布局模板</title>
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

        /* 平板：侧边栏到底部 */
        @media (max-width: 992px) {
            .main {
                flex-direction: column;
            }
            .sidebar {
                width: 100%;
            }
        }

        /* 移动端：隐藏导航 */
        @media (max-width: 768px) {
            .nav {
                display: none;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <h1>响应式网站</h1>
        <nav class="nav">
            <a href="#">首页</a>
            <a href="#">关于</a>
            <a href="#">服务</a>
            <a href="#">联系</a>
        </nav>
    </header>
    <main class="main">
        <div class="content">
            <h2>主要内容</h2>
            <p>这里是页面的主要内容区域。</p>
        </div>
        <aside class="sidebar">
            <h3>侧边栏</h3>
            <p>侧边栏内容，在移动端会到底部。</p>
        </aside>
    </main>
    <footer class="footer">
        <p>&copy; 2024 响应式网站</p>
    </footer>
</body>
</html>
```

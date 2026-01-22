# 响应式设计进阶 (Advanced Responsive Design)

> **推荐指数**: ⭐⭐⭐⭐☆ (4/5)
> 掌握容器查询、宽高比、流体设计等现代CSS技术，**进阶必学**。

---

## 1. 容器查询概述

> 💡 **下一代响应式技术**，基于父容器而非视口

容器查询是响应式设计的重大升级，允许元素根据其父容器的尺寸而不是视口尺寸来调整样式。这对于组件化开发尤为重要。

### 1.1 为什么需要容器查询

媒体查询的局限性：
- 只能基于视口（viewport）响应
- 同一个组件在不同页面位置表现相同
- 难以实现真正的组件化复用

容器查询的优势：
- 基于父容器尺寸响应
- 组件可以在不同场景下自适应
- 更灵活的组件化设计

```css
/* 传统媒体查询 - 基于视口 */
@media (min-width: 768px) {
    .card {
        display: flex;
    }
}

/* 容器查询 - 基于父容器 */
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

### 1.2 容器查询的基本用法

**推荐指数**: ⭐⭐⭐⭐⭐ (5/5)
**使用频率**: **高** ⭐ 必学
**适用场景**: 组件化响应式设计

```css
/* 1. 定义容器 */
.card-wrapper {
    container-type: inline-size;
    container-name: card;
}

/* 2. 使用容器查询 */
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

## 2. 宽高比 (Aspect Ratio)

> 💡 **现代CSS解决方案**，轻松维持元素比例

`aspect-ratio` 属性让你可以轻松创建保持特定宽高比的元素，非常适合图片、视频和卡片布局。

### 2.1 基本用法

**推荐指数**: ⭐⭐⭐⭐⭐ (5/5)
**使用频率**: **极高** ⭐ 必学
**适用场景**: 图片容器、视频播放器、卡片缩略图

```css
/* 保持 16:9 的宽高比 */
.video-container {
    aspect-ratio: 16 / 9;
    width: 100%;
}

/* 保持正方形 */
.square {
    aspect-ratio: 1 / 1;
}

/* 保持 4:3 */
.photo-frame {
    aspect-ratio: 4 / 3;
}

/* 响应式比例 - 在小屏幕上使用更窄的比例 */
.portrait-card {
    aspect-ratio: 3 / 4;
}

@media (min-width: 768px) {
    .portrait-card {
        aspect-ratio: 16 / 9;
    }
}
```

### 2.2 结合 object-fit 使用

```css
/* 图片填满容器并保持比例 */
.responsive-image {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    object-position: center;
}

/* 视频自适应 */
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

### 2.3 复杂宽高比场景

```css
/* 社交媒体卡片常用比例 */
.instagram-post {
    aspect-ratio: 1 / 1;           /* 正方形 */
}

.twitter-card {
    aspect-ratio: 16 / 9;          /* 横版16:9 */
}

.story-format {
    aspect-ratio: 9 / 16;          /* 竖版9:16 */
}

/* 响应式画廊卡片 */
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

## 3. min()/max()/clamp() 高级应用

> 💡 **流体设计的核心函数**，告别固定断点

这三个 CSS 数学函数让你能够创建真正流体、自适应的布局，不再依赖固定断点。

### 3.1 clamp() 函数详解

**推荐指数**: ⭐⭐⭐⭐⭐ (5/5)
**使用频率**: **极高** ⭐ 必学
**适用场景**: 流体字体、响应式间距、弹性尺寸

```css
/* 基础语法 */
clamp(min, preferred, max)

/* 流体字体 - 在 1rem 到 2rem 之间根据视口缩放 */
h1 {
    font-size: clamp(1.5rem, 5vw, 3rem);
}

/* 流体内边距 */
.card {
    padding: clamp(1rem, 3vw, 2rem);
}

/* 流体宽度 */
.container {
    width: clamp(300px, 90vw, 1200px);
}

/* 流体行高 */
body {
    line-height: clamp(1.5, 2vw + 0.5, 1.8);
}
```

### 3.2 min() 函数

```css
/* 取较小值 - 限制最大尺寸 */
.box {
    width: min(50%, 500px);
    /* 在50%和500px之间取较小值 */
}

/* 响应式边距 */
.content {
    margin-left: min(5vw, 40px);
}

/* 流体网格列宽 */
.grid-item {
    width: min(300px, 100%);
}
```

### 3.3 max() 函数

```css
/* 取较大值 - 确保最小尺寸 */
.box {
    width: max(50%, 300px);
    /* 在50%和300px之间取较大值 */
}

/* 最小阅读宽度 */
.article {
    max-width: 70ch;
    width: max(90%, 320px);
}

/* 确保可点击区域 */
button {
    padding: max(0.5rem, 2vh) max(1rem, 4vw);
}
```

### 3.4 组合使用

```css
/* 复杂的流体布局 */
.card {
    /* 宽度在 280px 到 600px 之间，根据视口自适应 */
    width: clamp(280px, 60vw, 600px);

    /* 内边距在 1rem 到 2rem 之间 */
    padding: clamp(1rem, 2vw, 2rem);

    /* 字体大小在 0.875rem 到 1.125rem 之间 */
    font-size: clamp(0.875rem, 0.5vw + 0.75rem, 1.125rem);

    /* 圆角根据视口调整，最大不超过 16px */
    border-radius: clamp(4px, 1vw, 16px);
}

/* 响应式 Hero 区域 */
.hero {
    min-height: min(80vh, 600px);
    padding: max(2rem, 5vh);
}
```

---

## 4. 响应式排版系统

> 💡 **建立完整的流体字体体系**，一次设置，多端适配

### 4.1 基于视口的流体排版

```css
/* 基础设置 - 使用 vw 单位实现流体字体 */
html {
    font-size: calc(16px + 0.5vw);
}

body {
    font-size: 1rem;
    line-height: 1.6;
}

/* 各级标题的流体字体 */
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

### 4.2 弹性间距系统

```css
/* 使用 CSS 变量建立间距系统 */
:root {
    --space-xs: clamp(0.25rem, 1vw, 0.5rem);
    --space-sm: clamp(0.5rem, 2vw, 1rem);
    --space-md: clamp(1rem, 3vw, 1.5rem);
    --space-lg: clamp(1.5rem, 4vw, 2rem);
    --space-xl: clamp(2rem, 6vw, 3rem);
    --space-2xl: clamp(3rem, 8vw, 4rem);
}

/* 应用间距 */
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

### 4.3 响应式字体缩放

```css
/* 精细控制的小号字体 */
.caption {
    font-size: clamp(0.75rem, 1.5vw, 0.875rem);
    line-height: 1.4;
}

/* 正文内容 */
.body-text {
    font-size: clamp(1rem, 2vw, 1.125rem);
    line-height: 1.6;
    max-width: 65ch; /* 最佳阅读宽度 */
}

/* 强调文本 */
.lead {
    font-size: clamp(1.125rem, 2.5vw, 1.5rem);
    font-weight: 500;
}
```

---

## 5. 移动端安全区域

> 💡 **适配刘海屏和圆角**，确保内容不被遮挡

### 5.1 CSS 环境变量

```css
/* iPhone 刘海屏和圆角的安全区域 */
.safe-area {
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
}

/* 全局适配 */
body {
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
}

/* 固定定位元素的适配 */
.fixed-bottom {
    position: fixed;
    bottom: 0;
    padding-bottom: env(safe-area-inset-bottom);
}
```

### 5.2 完整的移动端适配方案

```css
/* 视口适配 - 禁用默认缩放 */
@viewport {
    width: device-width;
    zoom: 1;
}

/* 触摸优化 */
.touch-target {
    min-height: 44px;  /* iOS 建议的最小触摸区域 */
    min-width: 44px;
}

/* 按钮触摸区域 */
.button {
    padding: 12px 24px;
    min-height: 44px;
}

/* 防止触摸延迟 */
touch-action {
    touch-action: manipulation;
}

/* 适配 iPhone Notch */
.header {
    padding-top: env(safe-area-inset-top);
    background: #fff;
    position: sticky;
    top: 0;
    z-index: 100;
}

/* 适配底部手势条 */
.bottom-nav {
    padding-bottom: env(safe-area-inset-bottom);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
}
```

### 5.3 动态视口单位

```css
/* 大多数现代浏览器支持 */
.dynamic-viewport {
    /* svh - 最小视口高度（地址栏展开时） */
    height: 100svh;

    /* lvh - 最大视口高度（地址栏收起时） */
    height: 100lvh;

    /* dvh - 动态视口高度 */
    height: 100dvh;
}

/* 推荐用法 - 确保内容始终可见 */
.fullscreen {
    min-height: 100svh;
}

/* 处理键盘弹起 */
.modal {
    max-height: 100svh;
    overflow-y: auto;
}
```

---

## 6. 容器查询实战

> 💡 **组件化响应的最佳实践**

### 6.1 响应式卡片组件

```css
/* 定义卡片容器 */
.card-list {
    container-type: inline-size;
    container-name: card-list;
}

/* 卡片基础样式 */
.card {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* 容器查询断点 */
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

### 6.2 响应式表单组件

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

/* 小容器：标签和输入框并排 */
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

/* 中等容器：两列布局 */
@container form (min-width: 400px) {
    .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
}

/* 大容器：三列布局 */
@container form (min-width: 700px) {
    .form-row {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

### 6.3 响应式导航组件

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

/* 小容器：只显示图标 */
@container nav (max-width: 300px) {
    .nav-item a::before {
        content: attr(data-icon);
        font-size: 1.25rem;
    }

    .nav-item span {
        display: none;
    }
}

/* 中等容器：图标+文字 */
@container nav (min-width: 300px) {
    .nav-item a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
}

/* 大容器：展开导航 */
@container nav (min-width: 600px) {
    .nav-menu {
        flex-wrap: nowrap;
        justify-content: center;
    }
}
```

---

## 7. 打印样式适配

> 💡 **让网页打印更专业**

```css
/* 打印样式基础设置 */
@media print {
    /* 隐藏非打印内容 */
    .no-print,
    .header,
    .footer,
    .sidebar,
    .nav {
        display: none !important;
    }

    /* 重置布局 */
    body {
        font-size: 12pt;
        line-height: 1.5;
        color: #000;
        background: #fff;
        margin: 0;
        padding: 0;
    }

    /* 链接显示 URL */
    a[href^="http"]::after {
        content: " (" attr(href) ")";
        font-size: 0.8em;
        color: #666;
    }

    /* 图片防止跨页断裂 */
    img {
        max-width: 100% !important;
        page-break-inside: avoid;
    }

    /* 标题不在页面底部 */
    h1, h2, h3, h4 {
        page-break-after: avoid;
    }

    /* 表格设置 */
    table {
        width: 100%;
        border-collapse: collapse;
    }

    td, th {
        border: 1px solid #000;
        padding: 0.5rem;
    }

    /* 代码块处理 */
    pre {
        page-break-inside: avoid;
        white-space: pre-wrap;
    }
}
```

---

## 8. 性能优化技巧

> 💡 **快速加载是最佳用户体验**

### 8.1 减少重排重绘

```css
/* 使用 transform 和 opacity 优化动画 */
.animated-element {
    will-change: transform, opacity;
    transform: translateZ(0); /* 开启硬件加速 */
}

/* 避免强制同步布局 */
.bad-example {
    width: calc(100% - 50px); /* 可能触发重排 */
}

.good-example {
    width: 100%;
    margin-right: -50px; /* 使用负边距代替 */
}
```

### 8.2 图片优化

```css
/* 使用 srcset 响应式图片 */
.responsive-img {
    max-width: 100%;
    height: auto;
    display: block;
}

/* 图片懒加载 */
.lazy-img {
    loading: lazy;
    decoding: async;
}

/* 预留空间避免布局偏移 */
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

## 9. 速查表

> 📋 **收藏备用**

| 技术 | 推荐指数 | 使用场景 |
|------|----------|----------|
| `@container` | ⭐⭐⭐⭐⭐ | 组件化响应式设计 |
| `aspect-ratio` | ⭐⭐⭐⭐⭐ | 维持元素比例 |
| `clamp()` | ⭐⭐⭐⭐⭐ | 流体字体和尺寸 |
| `min()` | ⭐⭐⭐⭐☆ | 限制最大值 |
| `max()` | ⭐⭐⭐⭐☆ | 确保最小值 |
| `env(safe-area-*)` | ⭐⭐⭐☆☆ | 移动端安全区域 |
| `100svh/100dvh` | ⭐⭐⭐☆☆ | 动态视口高度 |
| `@media print` | ⭐⭐☆☆☆ | 打印样式 |

---

## 10. 常见问题

> ❓ **疑难解答**

### Q: 容器查询和媒体查询如何选择？

A: **媒体查询**适合整体页面布局和视口相关的设计；**容器查询**适合独立组件在不同容器中的自适应。建议两者结合使用，媒体查询控制页面级布局，容器查询控制组件内部样式。

### Q: 浏览器兼容性如何？

A: 容器查询和 aspect-ratio 在现代浏览器中支持良好。对于旧浏览器，可以使用 `@supports` 进行回退：

```css
.card {
    /* 现代浏览器 */
    container-type: inline-size;
    container-name: card;
}

/* 旧浏览器回退 */
@supports not (container-type: inline-size) {
    .card {
        display: flex;
        flex-wrap: wrap;
    }
}
```

### Q: clamp() 中的计算表达式太复杂怎么办？

A: 可以使用 CSS 变量简化：

```css
:root {
    --fluid-scale: 0.5vw;
}

h1 {
    font-size: calc(2rem + var(--fluid-scale));
    /* 或 */
    font-size: clamp(2rem, 2rem + var(--fluid-scale), 4rem);
}
```

### Q: 如何测试移动端安全区域？

A: Chrome DevTools 中启用设备模拟，选择 iPhone 或刘海屏设备，查看 safe-area-inset-* 的实际效果。也可以使用 BrowserStack 进行真机测试。

---

## 11. 进阶实战：完整响应式页面模板

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>响应式设计进阶模板</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }

        /* ========== 基础设置 ========== */
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

        /* ========== 容器查询卡片 ========== */
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

        /* 容器查询响应 */
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

        /* ========== 响应式表单 ========== */
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

        /* ========== 响应式导航 ========== */
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
                    <li><a href="#" class="nav-link">首页</a></li>
                    <li><a href="#" class="nav-link">产品</a></li>
                    <li><a href="#" class="nav-link">服务</a></li>
                    <li><a href="#" class="nav-link">关于</a></li>
                    <li><a href="#" class="nav-link">联系</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <section class="card-grid" style="max-width: 1200px; margin: 0 auto;">
            <div class="card-wrapper">
                <article class="card">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='225' viewBox='0 0 400 225'%3E%3Crect fill='%233498db' width='400' height='225'/%3E%3Ctext fill='white' font-family='sans-serif' font-size='24' x='50%25' y='50%25' text-anchor='middle'%3E卡片1%3C/text%3E%3C/svg%3E" alt="卡片1" class="card-image">
                    <div class="card-content">
                        <h2 class="card-title">响应式卡片 1</h2>
                        <p class="card-text">这张卡片使用了容器查询和流体设计，会根据容器宽度自动调整布局。</p>
                    </div>
                </article>
            </div>
            <div class="card-wrapper">
                <article class="card">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='225' viewBox='0 0 400 225'%3E%3Crect fill='%2327ae60' width='400' height='225'/%3E%3Ctext fill='white' font-family='sans-serif' font-size='24' x='50%25' y='50%25' text-anchor='middle'%3E卡片2%3C/text%3E%3C/svg%3E" alt="卡片2" class="card-image">
                    <div class="card-content">
                        <h2 class="card-title">响应式卡片 2</h2>
                        <p class="card-text">尝试调整浏览器窗口大小，观察卡片布局的变化。</p>
                    </div>
                </article>
            </div>
            <div class="card-wrapper">
                <article class="card">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='225' viewBox='0 0 400 225'%3E%3Crect fill='%23e67e22' width='400' height='225'/%3E%3Ctext fill='white' font-family='sans-serif' font-size='24' x='50%25' y='50%25' text-anchor='middle'%3E卡片3%3C/text%3E%3C/svg%3E" alt="卡片3" class="card-image">
                    <div class="card-content">
                        <h2 class="card-title">响应式卡片 3</h2>
                        <p class="card-text">aspect-ratio 属性确保图片始终保持 16:9 的比例。</p>
                    </div>
                </article>
            </div>
        </section>

        <section class="form-section">
            <div class="form-wrapper">
                <form>
                    <h2 style="margin-bottom: 1.5rem;">联系表单</h2>
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label">姓名</label>
                            <input type="text" class="form-input" placeholder="请输入姓名">
                        </div>
                        <div class="form-group">
                            <label class="form-label">邮箱</label>
                            <input type="email" class="form-input" placeholder="请输入邮箱">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">消息</label>
                        <textarea class="form-input" rows="4" placeholder="请输入消息"></textarea>
                    </div>
                    <button type="submit" class="form-input" style="background: var(--primary-color); color: white; border: none; cursor: pointer; font-weight: 500;">
                        提交
                    </button>
                </form>
            </div>
        </section>
    </main>
</body>
</html>
```

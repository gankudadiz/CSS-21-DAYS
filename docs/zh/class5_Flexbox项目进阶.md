# Flexbox项目进阶

> **推荐指数**: ⭐⭐⭐⭐☆
>
> Flex Items（弹性项目）高级属性实战，**熟练掌握**，解决实际布局问题

---

## 1. order 属性详解

### 1.1 什么是 order？

`order` 属性控制 Flex Item（弹性项目）在容器中的**显示顺序**，不会改变 DOM 结构的 HTML 顺序，只改变视觉上的排列。

```css
.item {
    order: 0;     /* 默认值 */
    order: -1;    /* 负值排在前面 */
    order: 1;     /* 正值排在后面 */
}
```

**核心特点**：
- `order` 值越小，排列越靠前
- 默认值为 0，支持负值
- 不影响 DOM 结构，无障碍访问仍按 HTML 顺序

### 1.2 order 基础用法

```html
<div class="container">
    <div style="order: 3">A</div>
    <div style="order: 1">B</div>
    <div style="order: 2">C</div>
</div>

<!-- HTML 顺序: A → B → C -->
<!-- 显示顺序: B → C → A -->
```

### 1.3 order 实际应用场景

#### 移动端优先显示

```css
/* 电商商品卡片 */
.product-card {
    display: flex;
    flex-direction: column;
}

.product-image { order: 2; }
.product-title { order: 3; }
.product-price { order: 4; }
.buy-button { order: 1; }  /* 按钮优先显示 */

/* 桌面端恢复原顺序 */
@media (min-width: 768px) {
    .product-card > * {
        order: 0;
    }
}
```

#### 导航栏排序

```css
.navbar {
    display: flex;
    justify-content: space-between;
}

.logo { order: 0; }
.nav-links { order: 1; }
.login-btn { order: -1; }  /* 登录按钮排最前 */
```

---

## 2. align-self 属性详解

### 2.1 什么是 align-self？

`align-self` 属性用于控制**单个项目**在交叉轴上的对齐方式，可以覆盖容器的 `align-items` 设置。

```css
.item {
    align-self: auto;        /* 继承 align-items */
    align-self: flex-start;  /* 交叉轴起点 */
    align-self: center;      /* 交叉轴居中 */
    align-self: flex-end;    /* 交叉轴终点 */
    align-self: stretch;     /* 拉伸 */
    align-self: baseline;    /* 基线对齐 */
}
```

### 2.2 align-self 基础用法

```css
.container {
    display: flex;
    align-items: flex-start;  /* 所有项目顶部对齐 */
    height: 200px;
}

.special-item {
    align-self: center;       /* 单个项目居中 */
}
```

### 2.3 align-self 实际应用场景

#### 通知条图标对齐

```css
.notification {
    display: flex;
    align-items: center;
}

.notification-icon {
    align-self: flex-start;  /* 图标顶部对齐 */
}
```

#### 表单基线对齐

```css
.form-row {
    display: flex;
    align-items: baseline;  /* 基线对齐 */
}
```

---

## 3. flex 属性进阶用法

### 3.1 flex 完整形式

```css
.item {
    /* flex-grow | flex-shrink | flex-basis */
    flex: 0 1 auto;       /* 默认值 */
    flex: 1;              /* flex: 1 1 0% */
    flex: auto;           /* flex: 1 1 auto */
    flex: none;           /* flex: 0 0 auto */
}
```

### 3.2 响应式卡片网格

```css
.card-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    flex: 1 1 280px;     /* 最小280px，自动扩展 */
    max-width: 400px;
}
```

### 3.3 固定+自适应布局

```css
.layout {
    display: flex;
}

.sidebar {
    flex: 0 0 200px;  /* 固定200px */
}

.content {
    flex: 1;          /* 占据剩余空间 */
}
```

---

## 4. 常见问题与解决方案

### 4.1 order 不影响无障碍访问

**问题**：使用 order 后屏幕阅读器顺序错误

**解决**：不要用 order 改变内容逻辑顺序，只用于视觉调整

```css
/* ❌ 错误做法 */
.important-content { order: -1; }
/* 搜索引擎和屏幕阅读器仍按 HTML 顺序 */

/* ✅ 正确做法 */
HTML 中重要内容放前面，用 order 做微调
```

### 4.2 align-self: stretch 不生效

**问题**：设置 stretch 但项目没有被拉伸

**解决**：stretch 需要项目未设置固定高度

```css
/* ❌ 错误：固定高度 */
.item {
    align-self: stretch;
    height: 100px;  /* 被固定高度覆盖 */
}

/* ✅ 正确：不设置高度或用 max-height */
.item {
    align-self: stretch;
    height: auto;   /* 自动高度 */
}
```

### 4.3 flex-basis 和 width 优先级

**问题**：同时设置 flex-basis 和 width，尺寸不符合预期

**解决**：flex-basis 优先级更高

```css
.item {
    flex-basis: 200px;  /* 基础尺寸 */
    width: 300px;       /* 被覆盖（除非 flex-basis: auto） */
}

/* ✅ 想要精确控制 */
.item {
    flex: 0 0 200px;  /* 不放大、不收缩、固定200px */
}
```

---

## 5. 实战案例汇总

### 5.1 支付方式选择卡片

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

### 5.2 响应式表单

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

### 5.3 步骤指示器

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

## 6. 速查表

| 属性 | 推荐指数 | 使用频率 | 说明 |
|------|----------|----------|------|
| `order` | ⭐⭐⭐☆☆ | 中等 | 项目排列顺序 |
| `align-self` | ⭐⭐⭐⭐☆ | 高 | 单个项目对齐 |
| `flex` | ⭐⭐⭐⭐⭐ | 极高 | 缩放简写 |
| `flex-grow` | ⭐⭐⭐⭐☆ | 高 | 放大比例 |
| `flex-shrink` | ⭐⭐⭐☆☆ | 中等 | 收缩比例 |
| `flex-basis` | ⭐⭐⭐☆☆ | 中等 | 基础尺寸 |

---

## 7. 总结

### 核心要点

1. **order 只影响视觉顺序**，不影响 DOM 和无障碍访问
2. **align-self 覆盖 align-items**，用于单个项目的特殊对齐
3. **flex: 1** 实现等分布局，**flex: 0 0 固定值** 实现固定宽度
4. 配合 **flex-wrap** 实现响应式换行布局

### 最佳实践

```css
/* ✅ 推荐：响应式卡片网格 */
.cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    flex: 1 1 280px;
}

/* ✅ 推荐：固定+自适应布局 */
.layout {
    display: flex;
}

.sidebar { flex: 0 0 200px; }
.content { flex: 1; }
```

---

## 下一步

掌握 Flex Items 进阶属性后，下一个知识点：**CSS单位**

了解不同场景下使用的尺寸单位（px、rem、em、vw/vh 等），为响应式设计打基础。

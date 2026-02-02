# position定位

> 📊 **本章节推荐指数** ⭐⭐⭐⭐☆（4/5）
> 补充定位技能，**熟练掌握**，主要用于微调、弹窗、固定元素等特定场景（核心布局已由Flexbox/Grid接管）

---

## 什么是position属性？

`position`属性用于控制元素在页面中的定位方式，是实现复杂布局的关键属性。它决定了元素相对于其正常位置、祖先元素或浏览器窗口的定位方式。

```css
/* 静态定位（默认值） */
div {
  position: static;
}

/* 相对定位 */
div {
  position: relative;
}

/* 绝对定位 */
div {
  position: absolute;
}

/* 固定定位 */
div {
  position: fixed;
}

/* 粘性定位 */
div {
  position: sticky;
}
```

---

## 1. position: static（静态定位）

> 💡 **默认值**，元素按正常文档流排列

**推荐指数**: ⭐⭐⭐⭐☆（4/5）
**使用频率**：**高** ⭐ 所有元素的默认值，但很少显式使用
**使用场景**：恢复被其他定位覆盖的元素

### 静态定位的特点

- 元素按照**正常文档流**排列
- `top`、`right`、`bottom`、`left`、`z-index` 属性**无效**
- 是所有元素的**默认值**
- 不能使用`transform`进行位移

### 示例

```css
/* 默认就是静态定位 */
div {
  position: static;
  margin: 10px;
  padding: 15px;
}

/* 静态定位下，z-index无效 */
.box {
  position: static;
  z-index: 999; /* 无效 */
}
```

### 实际应用

```css
/* 恢复被绝对定位覆盖的元素 */
.element {
  position: static;  /* 取消定位 */
}

/* 正常文档流布局 */
.container {
  position: static;
  max-width: 1200px;
  margin: 0 auto;
}
```

---

## 2. position: relative（相对定位）

> 💡 **相对于自身位置定位**，不脱离文档流

**推荐指数**: ⭐⭐⭐⭐☆（4/5）
**使用频率**：**高** ⭐ 主要用于作为绝对定位参照物和微调
**使用场景**：微调元素位置、制作重叠效果、作为绝对定位的参照物

### 相对定位的特点

- 元素**相对于自身原始位置**进行偏移
- 元素**不脱离文档流**，仍然占据原始空间
- 偏移后，**原始位置仍然保留**（其他元素不能占据）
- 可以使用`top`、`right`、`bottom`、`left`进行偏移
- 可以使用`z-index`控制层叠顺序

### 偏移属性

```css
/* 偏移方向和值 */
.box {
  position: relative;
  top: 10px;      /* 向下偏移10px（正值向下） */
  right: 20px;    /* 向左偏移20px（正值向左） */
  bottom: 10px;   /* 向上偏移10px（正值向上） */
  left: 20px;     /* 向右偏移20px（正值向右） */
}

/* 等价写法：只设置需要偏移的方向 */
.box {
  position: relative;
  top: -10px;     /* 向上偏移10px */
  left: 30px;     /* 向右偏移30px */
}
```

### 示例

```css
/* 相对定位微调 */
.btn-arrow {
  position: relative;
  top: 2px;       /* 让箭头稍微下移 */
}

/* 制作卡片悬浮效果 */
.card {
  position: relative;   /* 保持定位上下文 */
  transition: all 0.3s; /* 平滑过渡动画 */
  cursor: pointer;      /* 显示手型指针 */
}

.card:hover {
  position: relative;
  top: -5px;                       /* 上移5px，产生悬浮感 */
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);  /* 添加阴影，增强立体感 */
}

/* 制作重叠标签 */
.badge {
  position: relative;
  top: -10px;
  right: 10px;
}
```

### 实际应用

```css /* 图标与文字对齐 */
.icon {
  position: relative;
  top: 2px;       /* 微调垂直位置 */
}

/* 制作提示框的小箭头 */
.tooltip::before {
  content: '';
  position: relative;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  border: 4px solid transparent;
  border-bottom-color: #333;
}

/* 作为绝对定位的参照物（重要！） */
.parent {
  position: relative;  /* 关键：作为子元素绝对定位的参照 */
  width: 300px;
  height: 200px;
}

.child {
  position: absolute;
  top: 0;
  left: 0;
}
```

### ⚠️ 重要：为什么常用 relative 作为 absolute 的参照物？

> 💡 **核心概念**：绝对定位的元素会**向上查找**第一个设置了 `position`（非 static）的祖先元素，作为定位参照。
>
> **注意**：不是必须用 `relative`，任何非 static 定位（`fixed`、`absolute`、`sticky`）都可以作为参照物。但实际工作中，**`relative` 是最佳选择**。

```css
/* ✅ 最佳实践：父元素设置 relative */
.parent {
  position: relative;  /* 👈 不脱离文档流，最安全的选择 */
}

.child {
  position: absolute;
  top: 0;
  left: 0;  /* 相对于父元素定位 */
}

/* ⚠️ 风险：没有定位祖先时，absolute 相对于浏览器窗口定位 */
.parent {
  /* 没有设置任何 position */
}

.child {
  position: absolute;
  top: 0;
  left: 0;  /* 相对于浏览器窗口定位 ❌ 容易位置错乱 */
}
```

**为什么 `relative` 是实际工作中的首选？**

| 参照物 | 优点 | 缺点 |
|--------|------|------|
| `relative` | 不脱离文档流、不影响布局、安全 | 需要手动设置 |
| `absolute` | 本身已脱离文档流 | 可能导致嵌套混乱 |
| `fixed` | 相对于视口固定 | 滚动时位置固定，不灵活 |
| `sticky` | 滚动时固定 | 需要设置阈值，使用场景有限 |

**结论**：90%以上的情况下，使用 `position: relative` 作为 absolute 元素的参照物是最稳妥的做法。

---

## 3. position: absolute（绝对定位）

> 💡 **完全脱离文档流**，相对于最近的定位祖先定位

**推荐指数**: ⭐⭐⭐⭐☆（4/5）
**使用频率**：**高** ⭐ 特定场景必用（弹窗、角标、下拉菜单）
**使用场景**：弹窗、卡片上的徽章、下拉菜单、悬浮按钮、复杂布局

### 绝对定位的特点

- 元素**完全脱离文档流**，不占据空间
- 相对于**最近的非静态定位祖先元素**定位
- 如果没有定位祖先，则相对于**初始包含块**（通常是浏览器窗口）
- 可以使用`top`、`right`、`bottom`、`left`精确定位
- 绝对定位元素的宽高默认由内容决定

### 参照物规则

```css
/* 重要：绝对定位需要参照物 */

/* ✅ 正确做法：父元素设置relative */
.parent {
  position: relative;  /* 作为参照物 */
  width: 300px;
  height: 200px;
}

.child {
  position: absolute;
  top: 0;
  left: 0;
}

/* ❌ 错误做法：没有定位祖先时，相对于浏览器窗口 */
.parent {
  width: 300px;
  height: 200px;
  /* 没有position */
}

.child {
  position: absolute;
  top: 0;  /* 相对于浏览器窗口 */
}
```

### 定位值设置

```css
/* 定位到父元素的四个角 */
.box {
  position: absolute;
  top: 0;
  left: 0;
  /* 定位于左上角 */
}

.box {
  position: absolute;
  top: 0;
  right: 0;
  /* 定位于右上角 */
}

.box {
  position: absolute;
  bottom: 0;
  left: 0;
  /* 定位于左下角 */
}

.box {
  position: absolute;
  bottom: 0;
  right: 0;
  /* 定位于右下角 */
}

/* 居中定位 */
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 水平垂直居中 */
}
```

### 示例

```css
/* 固定大小的定位 */
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 300px;
  transform: translate(-50%, -50%);
}

/* 填充父元素 */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* 右上角关闭按钮 */
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
}

/* 卡片上的标签 */
.badge {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 4px 8px;
  background: #e74c3c;
  color: white;
  border-radius: 4px;
}

/* 下拉菜单 */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 200px;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
```

### 实际应用

```css
/* 悬浮按钮（固定在页面右下角） */
.floating-btn {
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #3498db;
  color: white;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
}

/* 轮播图指示器 */
.carousel-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

/* 侧边栏 */
.sidebar {
  position: absolute;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background: #2c3e50;
}

/* 内容区域跟随 */
.content {
  position: absolute;
  top: 0;
  left: 250px;
  right: 0;
  height: 100vh;
}
```

---

## 4. position: fixed（固定定位）

> 💡 **相对于浏览器窗口定位**，页面滚动时元素位置不变

**推荐指数**: ⭐⭐⭐⭐☆（4/5）
**使用频率**：**高** ⭐ 固定导航、悬浮按钮常用
**使用场景**：固定导航栏、回到顶部按钮、侧边栏、广告悬浮、模态框背景

### 固定定位的特点

- 元素**相对于浏览器窗口**定位
- 页面滚动时，元素**始终保持在同一位置**
- 元素**脱离文档流**，不占据空间
- 不需要父元素设置`position`
- 常用于制作**固定导航**和**悬浮按钮**

### 示例

```css
/* 固定在顶部的导航栏 */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  z-index: 1000;
}

/* 固定在底部的工具栏 */
.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: #2c3e50;
}

/* 回到顶部按钮 */
.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #3498db;
  color: white;
  cursor: pointer;
  z-index: 999;
}

/* 侧边固定目录 */
.toc {
  position: fixed;
  top: 100px;
  right: 30px;
  width: 200px;
}

/* 固定广告 */
.ad-banner {
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 200px;
  height: 150px;
}
```

### 实际应用

```css
/* 固定头部导航（常见做法） */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: white;
  z-index: 1000;
}

/* 解决固定定位遮挡内容 */
body {
  padding-top: 60px;  /* 等于header的高度 */
}

/* 固定侧边栏 */
.sidebar {
  position: fixed;
  top: 60px;
  left: 0;
  width: 240px;
  height: calc(100vh - 60px);
  overflow-y: auto;
}

/* 主内容区留出侧边栏空间 */
.main-content {
  margin-left: 240px;
  padding-top: 60px;
}
```

---

## 5. position: sticky（粘性定位）

> 💡 **到达阈值前正常，滚动过阈值后固定**

**推荐指数**: ⭐⭐⭐⭐☆（4/5）
**使用频率**：**中** ⭐⭐⭐ 特定场景使用
**使用场景**：表格头部固定、表头分组、分类导航栏、页面滚动到特定位置时固定

### 粘性定位的特点

- 元素在**正常文档流中**，占据空间
- 当页面滚动到元素的**阈值位置**时，元素变为固定定位
- 需要设置`top`、`right`、`bottom`、`left`之一才能生效
- 相对于**最近的可滚动祖先**定位

### 阈值设置

```css
/* 顶部固定阈值 */
.sticky-header {
  position: sticky;
  top: 0;  /* 滚动到距离顶部0px时固定 */
  z-index: 100;
}

/* 距离顶部10px时固定 */
.sticky-element {
  position: sticky;
  top: 10px;
}

/* 底部固定（较少使用） */
.sticky-footer {
  position: sticky;
  bottom: 0;
}
```

### 示例

```css
/* 表格表头固定 */
.table-header {
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
}

/* 分组表头 */
.section-header {
  position: sticky;
  top: 0;
  background: #f5f5f5;
  z-index: 5;
}

/* 分类导航栏 */
.category-nav {
  position: sticky;
  top: 60px;  /* 在固定导航栏下方 */
  display: flex;
  gap: 20px;
  background: white;
  z-index: 99;
}

/* 页面滚动时固定侧边栏 */
.sidebar-sticky {
  position: sticky;
  top: 80px;
}
```

### 实际应用

```css
/* 完整的粘性导航示例 */
.sticky-nav {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  z-index: 100;
}

/* 表格滚动时表头固定 */
.scrollable-table {
  max-height: 400px;
  overflow-y: auto;
}

.scrollable-table th {
  position: sticky;
  top: 0;
  background: #3498db;
  color: white;
}

/* 滚动时固定的分段标题 */
.section-title {
  position: sticky;
  top: 0;
  margin: 0;
  padding: 10px;
  background: linear-gradient(to bottom, white, #f5f5f5);
  z-index: 10;
}
```

---

## 6. position值的速查表

| 值 | 推荐指数 | 使用频率 | 定位参照 | 脱离文档流 | 说明 |
|----|----------|----------|----------|------------|------|
| `static` | ⭐⭐⭐⭐☆ | 高 | 无 | 否 | 默认值，正常文档流 |
| `relative` | ⭐⭐⭐⭐☆ | 高 | 自身原位置 | 否 | 相对于自身偏移、参照物 |
| `absolute` | ⭐⭐⭐⭐☆ | 高 | 最近定位祖先 | 是 | 弹窗、角标、下拉菜单 |
| `fixed` | ⭐⭐⭐⭐☆ | 高 | 浏览器窗口 | 是 | 固定导航、悬浮按钮 |
| `sticky` | ⭐⭐⭐⭐☆ | 中 | 最近可滚动祖先 | 否 | 表头固定、滚动固定 |

---

## 7. 定位实战技巧

### 居中定位

```css
/* 方法1：transform居中（推荐） */
.center-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 150px;
}

/* 方法2：margin负值居中 */
.center-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 150px;
  margin-left: -100px;  /* 宽度的一半 */
  margin-top: -75px;    /* 高度的一半 */
}

/* 方法3：四值定位（仅适合固定或100%尺寸） */
.center-box {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 200px;
  height: 150px;
}
```

### 全屏覆盖层

```css
/* 遮罩层 */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 999;
}

/* 全屏模态框 */
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  background: white;
  border-radius: 8px;
  z-index: 1000;
}
```

### 固定定位加阴影效果

```css
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  z-index: 1000;
}
```

---

## 8. 常见问题解决

### 问题1：绝对定位失效

```css
/* ❌ 错误：父元素没有设置定位 */
.parent {
  width: 300px;
  height: 200px;
}

.child {
  position: absolute;
  top: 0;
  left: 0;  /* 相对于浏览器窗口 */
}

/* ✅ 正确：父元素设置relative */
.parent {
  position: relative;  /* 关键！ */
  width: 300px;
  height: 200px;
}

.child {
  position: absolute;
  top: 0;
  left: 0;  /* 相对于父元素 */
}
```

### 问题2：固定定位被遮挡

```css
/* ❌ 固定元素被遮挡 */
.fixed-element {
  position: fixed;
  top: 0;
  z-index: 1;  /* z-index太小 */
}

/* ✅ 提高z-index */
.fixed-element {
  position: fixed;
  top: 0;
  z-index: 1000;  /* 足够大的值 */
}
```

### 问题3：粘性定位不生效

```css
/* ❌ 粘性定位不工作 */
.sticky {
  position: sticky;
  /* 没有设置top/bottom/left/right */
}

/* ✅ 必须设置偏移值之一 */
.sticky {
  position: sticky;
  top: 0;  /* 必须设置 */
}
```

### 问题4：fixed定位时body滚动问题

```css
/* 固定定位后body仍可滚动时的处理 */
body {
  overflow-x: hidden;  /* 防止水平滚动 */
}

/* 移动端底部导航 */
.mobile-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: white;
  z-index: 1000;
}

/* 为底部固定导航留出空间 */
body {
  padding-bottom: 60px;
}
```

---

## 9. 定位与布局选择指南

### 什么时候用static？

- 元素不需要任何定位
- 恢复被意外设置的定位
- 正常文档流布局

### 什么时候用relative？

- 微调元素位置（几个像素）
- 制作悬浮效果（上移）
- 作为绝对定位的参照物（重要！）
- 需要保持原始空间占位

### 什么时候用absolute？

- 弹窗、提示框
- 卡片上的徽章、角标
- 下拉菜单
- 相对于父元素定位的任何元素
- 需要精确控制元素位置

### 什么时候用fixed？

- 固定导航栏
- 回到顶部按钮
- 广告悬浮
- 侧边栏固定
- 模态框背景

### 什么时候用sticky？

- 表格表头固定
- 分类导航栏
- 滚动时需要固定的标题
- 需要滚动到特定位置才固定的元素

---

## 10. 学习建议

> 🎯 **学习建议**：position是补充技能，主要用于特定场景（弹窗、固定导航、表头固定），核心布局由Flexbox/Grid接管

### 每日必练

| 优先级 | 知识点 | 推荐指数 | 使用频率 | 场景说明 |
|--------|--------|----------|----------|----------|
| 🔴 重要 | position: relative | ⭐⭐⭐⭐☆ | 高 | 作为absolute参照物 |
| 🔴 重要 | position: absolute | ⭐⭐⭐⭐☆ | 高 | 弹窗、角标、下拉菜单 |
| 🔴 重要 | position: fixed | ⭐⭐⭐⭐☆ | 高 | 固定导航、悬浮按钮 |
| 🟠 常用 | position: sticky | ⭐⭐⭐⭐☆ | 中 | 表头固定、分类导航 |
| 🟡 了解 | position: static | ⭐⭐⭐⭐☆ | 高 | 恢复定位（很少显式使用） |

---

## 11. 总结

### position核心概念

| 定位类型 | 定位参照 | 脱离文档流 | 使用场景 |
|----------|----------|------------|----------|
| static | 正常文档流 | 否 | 默认布局 |
| relative | 自身原位置 | 否 | 微调、作为absolute参照物 |
| absolute | 最近定位祖先 | 是 | 弹窗、角标、下拉菜单 |
| fixed | 浏览器窗口 | 是 | 固定导航、悬浮按钮 |
| sticky | 可滚动祖先 | 否 | 表头固定、分类导航 |

### 💡 实际工作建议

1. **绝对定位always配relative** - 父元素设置position: relative（最重要！）
2. **固定定位注意z-index** - 确保不被其他元素遮挡
3. **粘性定位要设阈值** - 必须设置top/bottom等属性
4. **固定导航留出body padding** - 给固定元素留空间
5. **position是补充技能** - 核心布局用Flexbox/Grid，position用于特定场景

### 🎯 实际使用频率

**特定场景必用**：
- `position: relative + absolute` - 卡片角标、弹窗、下拉菜单
- `position: fixed` - 固定导航栏、回到顶部按钮
- `position: sticky` - 表格表头固定、分类导航

**不是核心布局手段**：
现代页面布局90%以上可以用Flexbox/Grid完成，position主要用于：
- UI组件内的精确定位（角标、关闭按钮）
- 交互效果（悬浮按钮、回到顶部）
- 滚动固定（表头、侧边栏）

---

## 下一步

掌握position定位后，下一个知识点：**伪类和伪元素**

# CSS选择器基础

> 📊 **本章节推荐指数** ⭐⭐⭐⭐⭐  
> 基础中的基础，**必须精通**，贯穿整个前端开发生涯

---

## 什么是CSS选择器？

CSS选择器用于**定位HTML元素**，告诉浏览器要为哪些元素应用样式。

```css
/* 选择所有p元素 */
p {
  color: red;
}
```

---

## 1. 基础选择器

> 💡 **核心知识点**，类选择器和ID选择器是日常开发中使用最多的选择器

### 1.0 通配符选择器（*）

**推荐指数**: ⭐☆☆☆☆（1/5）  
**使用频率**：**极低** - 冷门知识  
**使用场景**：仅用于CSS重置，现代开发中已有更优替代方案

选择页面中所有元素。

```css
* {
  margin: 0;
  padding: 0;
}
```

**现代替代方案（推荐）**：
```css
/* 推荐：只在html上设置box-sizing，子元素继承 */
html {
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: inherit;
}
```

**特点**：慎用，会影响所有元素性能，且通配符权重为0。

---

### 1.1 元素选择器（标签选择器）

**推荐指数**: ⭐⭐⭐⭐☆（4/5）  
**使用频率**：**高** - 热门场景  
**使用场景**：全局样式重置、统一文章段落样式、HTML标签默认样式

直接使用HTML标签名作为选择器。

```css
/* 选择所有p元素 */
p {
  color: blue;
}

/* 选择所有div元素 */
div {
  padding: 10px;
}

/* 选择所有h1元素 */
h1 {
  font-size: 24px;
}
```

**特点**：选择页面中所有该标签的元素。

---

### 1.2 类选择器（.class）

**推荐指数**: ⭐⭐⭐⭐⭐（5/5）  
**使用频率**：**极高** ⭐ 最常用  
**使用场景**：组件化开发、UI库（如Bootstrap/Tailwind）、可复用样式

使用`.`加上类名，可以重复使用。

**HTML写法**：
```html
<p class="highlight">这是一个高亮段落</p>
<div class="highlight">这是一个高亮div</div>
```

**CSS写法**：
```css
.highlight {
  background-color: yellow;
  color: red;
}
```

**特点**：
- 类名可以重复使用
- 一个元素可以有多个类：`class="class1 class2"`
- 类名以字母开头，可以包含字母、数字、`-`、`_`

---

### 1.3 ID选择器（#id）

**推荐指数**: ⭐⭐⭐☆☆（3/5）  
**使用频率**：**中等**  
**使用场景**：主要供JavaScript获取元素，CSS中应谨慎使用

使用`#`加上ID名，**ID在页面中应该唯一**。

**HTML写法**：
```html
<p id="unique-paragraph">这是唯一段落</p>
```

**CSS写法**：
```css
#unique-paragraph {
  font-weight: bold;
  color: green;
}
```

**特点**：
- 每个ID在页面中应该是唯一的
- JavaScript中常用ID来获取元素
- 优先级高于类选择器

---

## 2. 组合选择器

> 💡 **高频使用**，后代选择器和子选择器是布局和组件样式的主力

### 2.1 后代选择器（空格）

**推荐指数**: ⭐⭐⭐⭐⭐（5/5）  
**使用频率**：**极高** ⭐ 几乎每天都会用到  
**使用场景**：导航菜单、卡片组件、列表嵌套样式、复杂布局

选择某个元素**内部的所有指定后代**。

```css
/* 选择div内部的所有p元素 */
div p {
  color: red;
}

/* 选择.container内部的所有.list-item */
.container .list-item {
  padding: 5px;
}
```

---

### 2.2 子选择器（>）

**推荐指数**: ⭐⭐⭐⭐☆（4/5）  
**使用频率**：**高** - 热门场景  
**使用场景**：只样式直接子元素，避免样式污染深层嵌套、组件边界控制

只选择某个元素的**直接子元素**，不包含孙子元素。

```css
/* 选择ul的直接子元素li */
ul > li {
  list-style: none;
}

/* 选择.container的直接子元素.button */
.container > .button {
  margin: 10px;
}
```

---

### 2.3 相邻兄弟选择器（+）

**推荐指数**: ⭐⭐☆☆☆（2/5）  
**使用频率**：**较低** - 冷门知识  
**使用场景**：表单校验提示、标题后的特殊段落、很少使用

选择**紧随其后的第一个兄弟元素**。

```css
/* 选择h2后面的第一个p元素 */
h2 + p {
  color: blue;
  font-style: italic;
}
```

---

### 2.4 通用兄弟选择器（~）

**推荐指数**: ⭐☆☆☆☆（1/5）  
**使用频率**：**极低** - 冷门知识  
**使用场景**：几乎不用，可用JavaScript或更简单选择器替代

选择**后面的所有兄弟元素**。

```css
/* 选择h2后面的所有p元素 */
h2 ~ p {
  color: gray;
}
```

---

## 3. 属性选择器

> 💡 **表单开发必备**，TailwindCSS和现代框架中经常用到

根据元素的属性来选择。

### 3.1 属性存在匹配

**推荐指数**: ⭐⭐⭐☆☆（3/5）  
**使用频率**：**中等**  
**使用场景**：有href的链接加装饰、无disabled的表单禁用样式

```css
/* 有href属性的a标签 */
a[href] {
  color: blue;
}

/* 有disabled属性的input */
input[disabled] {
  opacity: 0.5;
}
```

### 3.2 属性精确匹配

**推荐指数**: ⭐⭐⭐⭐☆（4/5）  
**使用频率**：**高** - 热门场景  
**使用场景**：表单不同类型input不同样式、按钮变体、区分布局组件

```css
/* type="text"的input */
input[type="text"] {
  border: 1px solid #ccc;
}

/* type="email"的input */
input[type="email"] {
  background-color: lightblue;
}

/* class="btn primary"的按钮 */
button[class="btn primary"] {
  background-color: blue;
}
```

### 3.3 属性值开头匹配（^=）

**推荐指数**: ⭐⭐⭐☆☆（3/5）  
**使用频率**：**中等**  
**使用场景**：外部链接标识、https加密网站、URL前缀判断

```css
/* href以https开头的链接 */
a[href^="https"] {
  color: green;
}

/* data-type以"icon-"开头的元素 */
[data-type^="icon-"] {
  font-family: iconfont;
}
```

### 3.4 属性值结尾匹配（$=）

**推荐指数**: ⭐⭐⭐☆☆（3/5）  
**使用频率**：**中等**  
**使用场景**：文件类型图标（.pdf/.doc）、资源类型区分

```css
/* href以.pdf结尾的链接 */
a[href$=".pdf"] {
  background-color: #f0f0f0;
}

/* src以.jpg结尾的图片 */
img[src$=".jpg"] {
  border-radius: 4px;
}
```

### 3.5 属性值包含匹配（*=）

**推荐指数**: ⭐⭐⭐☆☆（3/5）  
**使用频率**：**中等**  
**使用场景**：data属性判断、部分匹配类名

```css
/* data-status包含"active"的元素 */
[data-status*="active"] {
  border-color: green;
}

/* class包含"btn"的元素 */
[class*="btn"] {
  padding: 8px 16px;
}
```

---

## 4. 伪类选择器

> 💡 **交互效果核心**，:hover和:focus是UI交互的基础

为元素添加特殊状态。

### 4.1 用户行为伪类

**推荐指数**: ⭐⭐⭐⭐⭐（5/5）  
**使用频率**：**极高** ⭐ 必学  
**使用场景**：按钮悬停动画、表单验证反馈、链接点击反馈、卡片交互

```css
/* 鼠标悬停 */
.button:hover {
  background-color: blue;
}

/* 获得焦点 */
input:focus {
  outline: 2px solid blue;
}

/* 点击状态 */
a:active {
  color: red;
}

/* 已访问链接 */
a:visited {
  color: purple;
}
```

### 4.2 结构伪类

**推荐指数**: ⭐⭐⭐⭐☆（4/5）  
**使用频率**：**高** - 热门场景  
**使用场景**：表格斑马纹、导航active状态、列表首尾特殊样式、分页组件

```css
/* 第一个子元素 */
li:first-child {
  font-weight: bold;
}

/* 最后一个子元素 */
li:last-child {
  color: gray;
}

/* 指定位置的子元素（从1开始） */
li:nth-child(2) {
  color: blue;
}

/* 偶数子元素 */
li:nth-child(even) {
  background-color: #f0f0f0;
}

/* 奇数子元素 */
li:nth-child(odd) {
  background-color: #e0e0e0;
}

/* 倒数第n个子元素 */
li:nth-last-child(1) {
  border: 1px solid red;
}
```

### 4.3 :not() 否定伪类

**推荐指数**: ⭐⭐⭐☆☆（3/5）  
**使用频率**：**中等**  
**使用场景**：排除特定类、隐藏指定元素、反选样式、表单验证

```css
/* 排除.special类的段落 */
p:not(.special) {
  color: gray;
}

/* 排除禁用的input */
input:not([disabled]) {
  background: white;
}
```

### 4.4 :only-child 唯一子元素

**推荐指数**: ⭐⭐☆☆☆（2/5）  
**使用频率**：**较低** - 冷门知识  
**使用场景**：单体卡片、无兄弟的列表项特殊样式

```css
/* 唯一子元素 */
span:only-child {
  color: red;
}
```

### 4.5 :empty 空元素

**推荐指数**: ⭐☆☆☆☆（1/5）  
**使用频率**：**极低** - 冷门知识  
**使用场景**：隐藏空容器、调试空元素问题

```css
/* 空元素 */
div:empty {
  display: none;
}
```

---

## 5. 伪元素选择器

> 💡 **装饰效果利器**，::before和::after是CSS布局的好帮手

为元素添加虚拟元素或修改特定部分。

### 5.1 ::before 和 ::after

**推荐指数**: ⭐⭐⭐⭐⭐（5/5）  
**使用频率**：**极高** ⭐  
**使用场景**：清除浮动、添加装饰图标、CSS绘图表单必用、内容插入

```css
/* 在元素前添加内容 */
h2::before {
  content: "★ ";
  color: gold;
}

/* 在元素后添加内容 */
h2::after {
  content: " - 标题结束";
  color: gray;
  font-size: 12px;
}

/* 清除浮动（经典用法） */
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
```

### 5.2 ::first-letter 首字母

**推荐指数**: ⭐⭐☆☆☆（2/5）  
**使用频率**：**较低** - 冷门知识  
**使用场景**：文章首字下沉、杂志排版、特殊排版效果

```css
/* 首字母样式 */
p::first-letter {
  font-size: 24px;
  float: left;
  margin-right: 5px;
}
```

### 5.3 ::first-line 首行

**推荐指数**: ⭐☆☆☆☆（1/5）  
**使用频率**：**极低** - 冷门知识  
**使用场景**：几乎不用，响应式下首行长度会变

```css
/* 首行样式 */
p::first-line {
  font-weight: bold;
  color: blue;
}
```

### 5.4 ::selection 选中文本

**推荐指数**: ⭐☆☆☆☆（1/5）  
**使用频率**：**极低** - 冷门知识  
**使用场景**：自定义选中文本颜色，品牌化小细节

```css
/* 选中文本样式 */
::selection {
  background-color: yellow;
  color: black;
}
```

---

## 6. 选择器优先级（权重）

> 💡 **面试常考**，理解优先级是解决样式冲突的关键

**推荐指数**: ⭐⭐⭐⭐⭐（5/5）  
**使用频率**：**极高** ⭐  
**使用场景**：解决样式冲突、Bug调试、CSS架构设计、框架开发

当多个选择器作用于同一元素时，权重高的生效。

### 优先级计算

| 选择器类型 | 权重 | 场景说明 |
|------------|------|----------|
| `!important` | 最高（慎用） | 强制覆盖，但会破坏CSS架构 |
| 内联样式（style属性） | 1000 | JS动态样式、临时覆盖 |
| ID选择器 | 100 | 较少使用，主要给JS预留 |
| 类选择器、属性选择器、伪类 | 10 | 日常开发主力 |
| 元素选择器、伪元素 | 1 | 基础样式、全局重置 |
| 通配符、组合符 | 0 | 不参与权重计算 |

### 示例

```css
/* 权重：1 */
p { color: red; }

/* 权重：10 */
.highlight { color: blue; }

/* 权重：100 */
#unique { color: green; }

/* 权重：11（1+10） */
p.highlight { color: yellow; }
```

### 优先级实战

```css
/* 优先级：100 */
#header .nav li a {
  color: red;
}

/* 优先级：11（10+1） */
.nav a {
  color: blue; /* 不会生效，因为权重较低 */
}
```

---

## 7. 最佳实践

> 💡 **进阶必备**，写出可维护的CSS代码

### 7.1 推荐写法

```css
/* ✅ 推荐：使用类选择器 */
.button {
  padding: 10px 20px;
}

/* ✅ 推荐：简洁的选择器 */
.nav-item {
  color: blue;
}

/* ✅ 推荐：使用BEM命名规范 */
.block__element--modifier {
  padding: 10px;
}
```

### 7.2 不推荐写法

```css
/* ❌ 避免：过深的后代选择器 */
body .container .sidebar .nav .link {
  color: red;
}

/* ❌ 避免：过多使用ID */
#header #nav #links a {
  color: blue;
}

/* ❌ 避免：通用选择器滥用 */
* {
  box-sizing: border-box;
}
```

---

## 8. 选择器速查表

> 📋 **收藏备用**

| 选择器 | 示例 | 推荐指数 | 使用频率 | 热门/冷门 |
|--------|------|----------|----------|-----------|
| `*` | `*` | ⭐☆☆☆☆ | 极低 | 冷门 |
| `element` | `p` | ⭐⭐⭐⭐☆ | 高 | 热门 |
| `.class` | `.btn` | ⭐⭐⭐⭐⭐ | 极高 | 热门 |
| `#id` | `#header` | ⭐⭐⭐☆☆ | 中等 | 一般 |
| `element.class` | `p.active` | ⭐⭐⭐⭐☆ | 高 | 热门 |
| `ancestor descendant` | `div p` | ⭐⭐⭐⭐⭐ | 极高 | 热门 |
| `parent > child` | `ul > li` | ⭐⭐⭐⭐☆ | 高 | 热门 |
| `prev + next` | `h2 + p` | ⭐⭐☆☆☆ | 较低 | 冷门 |
| `prev ~ siblings` | `h2 ~ p` | ⭐☆☆☆☆ | 极低 | 冷门 |
| `[attr]` | `[href]` | ⭐⭐⭐☆☆ | 中等 | 一般 |
| `[attr=value]` | `[type="text"]` | ⭐⭐⭐⭐☆ | 高 | 热门 |
| `[attr^=value]` | `[href^="https"]` | ⭐⭐⭐☆☆ | 中等 | 一般 |
| `[attr$=value]` | `[href$=".pdf"]` | ⭐⭐⭐☆☆ | 中等 | 一般 |
| `:hover` | `a:hover` | ⭐⭐⭐⭐⭐ | 极高 | 热门 |
| `:focus` | `input:focus` | ⭐⭐⭐☆☆ | 中等 | 一般 |
| `:active` | `a:active` | ⭐⭐⭐⭐☆ | 高 | 热门 |
| `:first-child` | `li:first-child` | ⭐⭐⭐⭐☆ | 高 | 热门 |
| `:last-child` | `li:last-child` | ⭐⭐⭐⭐☆ | 高 | 热门 |
| `:nth-child(n)` | `li:nth-child(2)` | ⭐⭐⭐⭐☆ | 高 | 热门 |
| `:not()` | `p:not(.x)` | ⭐⭐⭐☆☆ | 中等 | 一般 |
| `::before` / `::after` | `::before` | ⭐⭐⭐⭐⭐ | 极高 | 热门 |
| `::first-letter` | `::first-letter` | ⭐⭐☆☆☆ | 较低 | 冷门 |
| `::selection` | `::selection` | ⭐☆☆☆☆ | 极低 | 冷门 |

---

## 9. 学习建议

> 🎯 **学习建议**：优先练习高推荐指数的内容

### 每日必练

| 优先级 | 知识点 | 推荐指数 | 使用频率 | 场景说明 |
|--------|--------|----------|----------|----------|
| 🔴 最高 | 类选择器 `.class` | ⭐⭐⭐⭐⭐ | 极高 | 组件化开发 |
| 🔴 最高 | 后代选择器 ` ` | ⭐⭐⭐⭐⭐ | 极高 | 嵌套结构样式 |
| 🔴 最高 | `:hover` | ⭐⭐⭐⭐⭐ | 极高 | 悬停效果 |
| 🔴 最高 | 优先级计算 | ⭐⭐⭐⭐⭐ | 极高 | 权重理解 |
| 🔴 最高 | `::before/::after` | ⭐⭐⭐⭐⭐ | 极高 | 清除浮动 |
| 🟠 高 | 子选择器 `>` | ⭐⭐⭐⭐☆ | 高 | 直接子元素 |
| 🟠 高 | 属性选择器 `[]` | ⭐⭐⭐⭐☆ | 高 | 表单样式 |
| 🟠 高 | `:nth-child()` | ⭐⭐⭐⭐☆ | 高 | 列表样式 |
| 🟠 高 | 元素选择器 `p` | ⭐⭐⭐⭐☆ | 高 | 全局样式 |
| 🟡 中 | ID选择器 `#id` | ⭐⭐⭐☆☆ | 中等 | JS配合 |
| 🟡 中 | `:focus` | ⭐⭐⭐☆☆ | 中等 | 表单聚焦 |
| 🟡 中 | `:not()` | ⭐⭐⭐☆☆ | 中等 | 排除样式 |
| 🟢 低 | `:only-child` | ⭐⭐☆☆☆ | 较低 | 唯一子元素 |
| 🟢 低 | 兄弟选择器 `+/~` | ⭐⭐☆☆☆ | 较低 | 特定场景 |
| 🟢 低 | `::first-letter` | ⭐⭐☆☆☆ | 较低 | 特殊排版 |
| 🟢 低 | `::selection` | ⭐☆☆☆☆ | 极低 | 品牌细节 |

---

## 10. 总结

### 学习优先级速查

| 优先级 | 选择器类型 | 推荐指数 | 场景 |
|--------|-----------|----------|------|
| 🔴 最高 | 类选择器、后代选择器、:hover、优先级、::before/::after | ⭐⭐⭐⭐⭐ | 日常开发必用 |
| 🟠 高 | 元素选择器、子选择器、属性选择器、:nth-child() | ⭐⭐⭐⭐☆ | 熟练掌握 |
| 🟡 中 | ID选择器、:focus、:not()、:first-child/:last-child | ⭐⭐⭐☆☆ | 理解即可 |
| 🟢 低 | 通配符、兄弟选择器、::first-line、::selection | ⭐⭐☆☆☆ | 查漏补缺 |

### 💡 实际工作建议

1. **90%的时间使用类选择器** - 这是CSS开发的核心
2. **慎用ID选择器** - 主要留给JavaScript使用
3. **合理使用后代选择器** - 避免嵌套过深（超过3层）
4. **掌握优先级** - 遇到样式冲突时能快速定位问题
5. **善用开发者工具** - Chrome DevTools是学习CSS最好的工具

### 🎯 热门 vs 冷门场景总结

**热门场景（每天用到）**：
- 类选择器 `.btn`、`.card`、`.header`
- 后代选择器 `.nav .nav-item`、`.card .title`
- `:hover` 按钮悬停、链接变色
- `::before/::after` 清除浮动、装饰图标
- `input[type="text"]` 表单样式区分
- `:nth-child(even)` 表格/列表斑马纹

**冷门场景（偶尔用到）**：
- 通配符 `*` CSS重置
- 兄弟选择器 `+`、`~` 表单校验提示
- `::selection` 品牌化小细节
- `::first-letter` 杂志排版效果
- `:only-child` 单体卡片样式

---

## 下一步

掌握CSS选择器后，下一个知识点：**盒模型**

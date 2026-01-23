# CSS Selectors Basics

> 📊 **Recommended Rating**: ⭐⭐⭐⭐⭐
> Fundamentals of fundamentals, **must master**, used throughout frontend development career

---

## What are CSS Selectors?

CSS selectors are used to **target HTML elements**, telling the browser which elements to apply styles to.

```css
/* Select all p elements */
p {
  color: red;
}
```

---

## 1. Basic Selectors

> 💡 **Core knowledge**, class and ID selectors are the most used in daily development

### 1.0 Universal Selector (*)

**Rating**: ⭐☆☆☆☆ (1/5)
**Frequency**: **Very Low** - Niche knowledge
**Scenario**: CSS reset only, modern development has better alternatives

Selects all elements on the page.

```css
* {
  margin: 0;
  padding: 0;
}
```

**Modern Alternative (Recommended)**:
```css
/* Recommended: Set box-sizing on html only, children inherit */
html {
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: inherit;
}
```

**Note**: Use with caution, affects all element performance, and universal selector specificity is 0.

---

### 1.1 Element Selector (Tag Selector)

**Rating**: ⭐⭐⭐⭐☆ (4/5)
**Frequency**: **High** - Popular scenario
**Scenario**: Global styles reset, paragraph styling, default HTML tag styles

Directly use HTML tag names as selectors.

```css
/* Select all p elements */
p {
  color: blue;
}

/* Select all div elements */
div {
  padding: 10px;
}

/* Select all h1 elements */
h1 {
  font-size: 24px;
}
```

**Note**: Selects all elements with that tag on the page.

---

### 1.2 Class Selector (.class)

**Rating**: ⭐⭐⭐⭐⭐ (5/5)
**Frequency**: **Very High** ⭐ Most commonly used
**Scenario**: Component development, UI libraries (Bootstrap/Tailwind), reusable styles

Use `.` followed by class name, can be reused.

**HTML**:
```html
<p class="highlight">This is a highlighted paragraph</p>
<div class="highlight">This is a highlighted div</div>
```

**CSS**:
```css
.highlight {
  background-color: yellow;
  color: red;
}
```

**Note**:
- Class names can be reused
- An element can have multiple classes: `class="class1 class2"`
- Class names start with letters, can contain letters, numbers, `-`, `_`

---

### 1.3 ID Selector (#id)

**Rating**: ⭐⭐⭐☆☆ (3/5)
**Frequency**: **Medium**
**Scenario**: Mainly for JavaScript element access, use sparingly in CSS

Use `#` followed by ID name, **ID should be unique on the page**.

**HTML**:
```html
<p id="unique-paragraph">This is a unique paragraph</p>
```

**CSS**:
```css
#unique-paragraph {
  font-weight: bold;
  color: green;
}
```

**Note**:
- Each ID should be unique on the page
- Commonly used in JavaScript to get elements
- Higher specificity than class selector

---

## 2. Combinators

> 💡 **High frequency use**, descendant and child selectors are mainstays for layout and component styling

### 2.1 Descendant Selector (space)

**Rating**: ⭐⭐⭐⭐⭐ (5/5)
**Frequency**: **Very High** ⭐ Used almost daily
**Scenario**: Navigation menus, card components, nested list styles, complex layouts

Selects all specified descendants **inside** an element.

```css
/* Select all p elements inside div */
div p {
  color: red;
}

/* Select all .list-item inside .container */
.container .list-item {
  padding: 5px;
}
```

---

### 2.2 Child Selector (>)

**Rating**: ⭐⭐⭐⭐☆ (4/5)
**Frequency**: **High** - Popular scenario
**Scenario**: Style only direct children, avoid style pollution of deep nesting, component boundary control

Only selects **direct child elements** of an element, not including grandchild elements.

```css
/* Select direct li children of ul */
ul > li {
  list-style: none;
}

/* Select direct .button children of .container */
.container > .button {
  margin: 10px;
}
```

---

### 2.3 Adjacent Sibling Selector (+)

**Rating**: ⭐⭐☆☆☆ (2/5)
**Frequency**: **Lower** - Niche knowledge
**Scenario**: Form validation hints, special paragraphs after headings, rarely used

Selects the **first sibling element immediately following**.

```css
/* Select first p element after h2 */
h2 + p {
  color: blue;
  font-style: italic;
}
```

---

### 2.4 General Sibling Selector (~)

**Rating**: ⭐☆☆☆☆ (1/5)
**Frequency**: **Very Low** - Niche knowledge
**Scenario**: Almost never used, can be replaced with JavaScript or simpler selectors

Selects **all sibling elements after**.

```css
/* Select all p elements after h2 */
h2 ~ p {
  color: gray;
}
```

### 2.5 Group Selector (comma)

**Rating**: ⭐⭐⭐⭐⭐ (5/5)
**Frequency**: **Very High** ⭐ Used almost daily
**Scenario**: Multiple elements share same styles, reduce code duplication, unify heading/paragraph styles

Use **comma** to group multiple selectors and apply the same style rules to them.

```css
/* Apply same styles to multiple headings */
h1, h2, h3, h4, h5, h6 {
  font-weight: bold;
  margin-bottom: 10px;
}

/* Class selectors and element selectors can be mixed */
.title, .header, h1 {
  color: #333;
  padding: 10px;
}

/* Combine combinators with group selectors */
.container h1, .container h2, .container h3 {
  border-bottom: 1px solid #ccc;
}
```

**Note**:
- Spaces around commas are optional
- Group selectors can contain any type of selectors
- Greatly reduces code duplication and improves maintainability

---

## 3. Attribute Selectors

> 💡 **Essential for form development**, frequently used in TailwindCSS and modern frameworks

Select elements based on their attributes.

### 3.1 Attribute Presence Match

**Rating**: ⭐⭐⭐☆☆ (3/5)
**Frequency**: **Medium**
**Scenario**: Add decoration to links with href, disabled form styles

```css
/* a tags with href attribute */
a[href] {
  color: blue;
}

/* input with disabled attribute */
input[disabled] {
  opacity: 0.5;
}
```

### 3.2 Attribute Exact Match

**Rating**: ⭐⭐⭐⭐☆ (4/5)
**Frequency**: **High** - Popular scenario
**Scenario**: Different input type styles, button variants, distinguish layout components

```css
/* input with type="text" */
input[type="text"] {
  border: 1px solid #ccc;
}

/* input with type="email" */
input[type="email"] {
  background-color: lightblue;
}

/* button with class="btn primary" */
button[class="btn primary"] {
  background-color: blue;
}
```

### 3.3 Attribute Value Start Match (^=)

**Rating**: ⭐⭐⭐☆☆ (3/5)
**Frequency**: **Medium**
**Scenario**: External link indicators, https secure sites, URL prefix checking

```css
/* Links with href starting with https */
a[href^="https"] {
  color: green;
}

/* Elements with data-type starting with "icon-" */
[data-type^="icon-"] {
  font-family: iconfont;
}
```

### 3.4 Attribute Value End Match ($=)

**Rating**: ⭐⭐⭐☆☆ (3/5)
**Frequency**: **Medium**
**Scenario**: File type icons (.pdf/.doc), resource type differentiation

```css
/* Links with href ending with .pdf */
a[href$=".pdf"] {
  background-color: #f0f0f0;
}

/* Images with src ending with .jpg */
img[src$=".jpg"] {
  border-radius: 4px;
}
```

### 3.5 Attribute Value Contains Match (*=)

**Rating**: ⭐⭐⭐☆☆ (3/5)
**Frequency**: **Medium**
**Scenario**: data attribute judgment, partial class name matching

```css
/* Elements with data-status containing "active" */
[data-status*="active"] {
  border-color: green;
}

/* Elements with class containing "btn" */
[class*="btn"] {
  padding: 8px 16px;
}
```

---

## 4. Pseudo-classes

> 💡 **Interaction core**, :hover and :focus are foundations of UI interaction

Add special states to elements.

### 4.1 User Action Pseudo-classes

**Rating**: ⭐⭐⭐⭐⭐ (5/5)
**Frequency**: **Very High** ⭐ Must learn
**Scenario**: Button hover animations, form validation feedback, link click feedback, card interaction

```css
/* Mouse hover */
.button:hover {
  background-color: blue;
}

/* Focus state */
input:focus {
  outline: 2px solid blue;
}

/* Active state */
a:active {
  color: red;
}

/* Visited link */
a:visited {
  color: purple;
}
```

### 4.2 Structural Pseudo-classes

**Rating**: ⭐⭐⭐⭐☆ (4/5)
**Frequency**: **High** - Popular scenario
**Scenario**: Table zebra stripes, nav active states, list first/last styles, pagination components

```css
/* First child */
li:first-child {
  font-weight: bold;
}

/* Last child */
li:last-child {
  color: gray;
}

/* Child at specified position (starting from 1) */
li:nth-child(2) {
  color: blue;
}

/* Even children */
li:nth-child(even) {
  background-color: #f0f0f0;
}

/* Odd children */
li:nth-child(odd) {
  background-color: #e0e0e0;
}

/* nth from last child */
li:nth-last-child(1) {
  border: 1px solid red;
}
```

### 4.3 :not() Negation Pseudo-class

**Rating**: ⭐⭐⭐☆☆ (3/5)
**Frequency**: **Medium**
**Scenario**: Exclude specific classes, hide designated elements, inverse styling, form validation

```css
/* Paragraphs excluding .special class */
p:not(.special) {
  color: gray;
}

/* Exclude disabled inputs */
input:not([disabled]) {
  background: white;
}
```

### 4.4 :only-child Only Child

**Rating**: ⭐⭐☆☆☆ (2/5)
**Frequency**: **Lower** - Niche knowledge
**Scenario**: Single cards, special styles for items without siblings

```css
/* Only child */
span:only-child {
  color: red;
}
```

### 4.5 :empty Empty Elements

**Rating**: ⭐☆☆☆☆ (1/5)
**Frequency**: **Very Low** - Niche knowledge
**Scenario**: Hide empty containers, debug empty element issues

```css
/* Empty elements */
div:empty {
  display: none;
}
```

---

## 5. Pseudo-elements

> 💡 **Decoration tool**, ::before and ::after are great helpers in CSS layout

Add virtual elements or modify specific parts of elements.

### 5.1 ::before and ::after

**Rating**: ⭐⭐⭐⭐⭐ (5/5)
**Frequency**: **Very High** ⭐
**Scenario**: Clearfix, add decorative icons, CSS drawing required, content insertion

```css
/* Add content before element */
h2::before {
  content: "★ ";
  color: gold;
}

/* Add content after element */
h2::after {
  content: " - Title End";
  color: gray;
  font-size: 12px;
}

/* Clearfix (classic usage) */
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
```

### 5.2 ::first-letter First Letter

**Rating**: ⭐⭐☆☆☆ (2/5)
**Frequency**: **Lower** - Niche knowledge
**Scenario**: Drop caps, magazine layouts, special typography effects

```css
/* First letter style */
p::first-letter {
  font-size: 24px;
  float: left;
  margin-right: 5px;
}
```

### 5.3 ::first-line First Line

**Rating**: ⭐☆☆☆☆ (1/5)
**Frequency**: **Very Low** - Niche knowledge
**Scenario**: Almost never used, first line length changes with responsive design

```css
/* First line style */
p::first-line {
  font-weight: bold;
  color: blue;
}
```

### 5.4 ::selection Selected Text

**Rating**: ⭐☆☆☆☆ (1/5)
**Frequency**: **Very Low** - Niche knowledge
**Scenario**: Custom selected text color, branding details

```css
/* Selected text style */
::selection {
  background-color: yellow;
  color: black;
}
```

---

## 6. Selector Specificity (Weight)

> 💡 **Interview favorite**, understanding specificity is key to resolving style conflicts

**Rating**: ⭐⭐⭐⭐⭐ (5/5)
**Frequency**: **Very High** ⭐
**Scenario**: Resolve style conflicts, bug debugging, CSS architecture design, framework development

When multiple selectors target the same element, the one with higher specificity wins.

### Specificity Calculation

| Selector Type | Weight | Scenario |
|---------------|--------|----------|
| `!important` | Highest (use with caution) | Force override, but breaks CSS architecture |
| Inline style (style attribute) | 1000 | JS dynamic styles, temporary override |
| ID selector | 100 | Less used, mainly reserved for JS |
| Class, Attribute, Pseudo-class | 10 | Daily development workhorse |
| Element, Pseudo-element | 1 | Base styles, global reset |
| Universal, Combinators | 0 | Not involved in specificity calculation |

### Examples

```css
/* Specificity: 1 */
p { color: red; }

/* Specificity: 10 */
.highlight { color: blue; }

/* Specificity: 100 */
#unique { color: green; }

/* Specificity: 11 (1+10) */
p.highlight { color: yellow; }
```

### Practical Specificity

```css
/* Specificity: 100 */
#header .nav li a {
  color: red;
}

/* Specificity: 11 (10+1) */
.nav a {
  color: blue; /* Will not take effect due to lower specificity */
}
```

---

## 7. Best Practices

> 💡 **Essential for advancement**, write maintainable CSS code

### 7.1 Recommended

```css
/* ✅ Recommended: Use class selectors */
.button {
  padding: 10px 20px;
}

/* ✅ Recommended: Simple selectors */
.nav-item {
  color: blue;
}

/* ✅ Recommended: Use BEM naming convention */
.block__element--modifier {
  padding: 10px;
}
```

### 7.2 Not Recommended

```css
/* ❌ Avoid: Overly deep descendant selectors */
body .container .sidebar .nav .link {
  color: red;
}

/* ❌ Avoid: Excessive use of IDs */
#header #nav #links a {
  color: blue;
}

/* ❌ Avoid: Universal selector abuse */
* {
  box-sizing: border-box;
}
```

---

## 8. Quick Reference

> 📋 **Bookmark for reference**

| Selector | Example | Rating | Frequency | Hot/Niche |
|----------|---------|--------|-----------|-----------|
| `*` | `*` | ⭐☆☆☆☆ | Very Low | Niche |
| `element` | `p` | ⭐⭐⭐⭐☆ | High | Hot |
| `.class` | `.btn` | ⭐⭐⭐⭐⭐ | Very High | Hot |
| `#id` | `#header` | ⭐⭐⭐☆☆ | Medium | Common |
| `element.class` | `p.active` | ⭐⭐⭐⭐☆ | High | Hot |
| `ancestor descendant` | `div p` | ⭐⭐⭐⭐⭐ | Very High | Hot |
| `parent > child` | `ul > li` | ⭐⭐⭐⭐☆ | High | Hot |
| `prev + next` | `h2 + p` | ⭐⭐☆☆☆ | Lower | Niche |
| `prev ~ siblings` | `h2 ~ p` | ⭐☆☆☆☆ | Very Low | Niche |
| `[attr]` | `[href]` | ⭐⭐⭐☆☆ | Medium | Common |
| `[attr=value]` | `[type="text"]` | ⭐⭐⭐⭐☆ | High | Hot |
| `[attr^=value]` | `[href^="https"]` | ⭐⭐⭐☆☆ | Medium | Common |
| `[attr$=value]` | `[href$=".pdf"]` | ⭐⭐⭐☆☆ | Medium | Common |
| `:hover` | `a:hover` | ⭐⭐⭐⭐⭐ | Very High | Hot |
| `:focus` | `input:focus` | ⭐⭐⭐☆☆ | Medium | Common |
| `:active` | `a:active` | ⭐⭐⭐⭐☆ | High | Hot |
| `:first-child` | `li:first-child` | ⭐⭐⭐⭐☆ | High | Hot |
| `:last-child` | `li:last-child` | ⭐⭐⭐⭐☆ | High | Hot |
| `:nth-child(n)` | `li:nth-child(2)` | ⭐⭐⭐⭐☆ | High | Hot |
| `:not()` | `p:not(.x)` | ⭐⭐⭐☆☆ | Medium | Common |
| `::before` / `::after` | `::before` | ⭐⭐⭐⭐⭐ | Very High | Hot |
| `::first-letter` | `::first-letter` | ⭐⭐☆☆☆ | Lower | Niche |
| `::selection` | `::selection` | ⭐☆☆☆☆ | Very Low | Niche |

---

## 9. Learning Suggestions

> 🎯 **Learning suggestion**: Prioritize high-rated content

### Daily Practice

| Priority | Topic | Rating | Frequency | Scenario |
|----------|-------|--------|-----------|----------|
| 🔴 Highest | Class selector `.class` | ⭐⭐⭐⭐⭐ | Very High | Component development |
| 🔴 Highest | Descendant selector ` ` | ⭐⭐⭐⭐⭐ | Very High | Nested structure styles |
| 🔴 Highest | `:hover` | ⭐⭐⭐⭐⭐ | Very High | Hover effects |
| 🔴 Highest | Specificity calculation | ⭐⭐⭐⭐⭐ | Very High | Specificity understanding |
| 🔴 Highest | `::before/::after` | ⭐⭐⭐⭐⭐ | Very High | Clearfix |
| 🟠 High | Child selector `>` | ⭐⭐⭐⭐☆ | High | Direct children |
| 🟠 High | Attribute selector `[]` | ⭐⭐⭐⭐☆ | High | Form styles |
| 🟠 High | `:nth-child()` | ⭐⭐⭐⭐☆ | High | List styles |
| 🟠 High | Element selector `p` | ⭐⭐⭐⭐☆ | High | Global styles |
| 🟡 Medium | ID selector `#id` | ⭐⭐⭐☆☆ | Medium | JS integration |
| 🟡 Medium | `:focus` | ⭐⭐⭐☆☆ | Medium | Form focus |
| 🟡 Medium | `:not()` | ⭐⭐⭐☆☆ | Medium | Exclude styles |
| 🟢 Low | `:only-child` | ⭐⭐☆☆☆ | Lower | Only child |
| 🟢 Low | Sibling selectors `+/~` | ⭐⭐☆☆☆ | Lower | Specific scenarios |
| 🟢 Low | `::first-letter` | ⭐⭐☆☆☆ | Lower | Special typography |
| 🟢 Low | `::selection` | ⭐☆☆☆☆ | Very Low | Branding details |

---

## 10. Summary

### Learning Priority Quick Reference

| Priority | Selector Type | Rating | Scenario |
|----------|---------------|--------|----------|
| 🔴 Highest | Class, Descendant, :hover, Specificity, ::before/::after | ⭐⭐⭐⭐⭐ | Daily development essentials |
| 🟠 High | Element, Child, Attribute, :nth-child() | ⭐⭐⭐⭐☆ | Proficient mastery |
| 🟡 Medium | ID, :focus, :not(), :first-child/:last-child | ⭐⭐⭐☆☆ | Understanding is enough |
| 🟢 Low | Universal, Sibling, ::first-line, ::selection | ⭐⭐☆☆☆ | Supplementary knowledge |

### 💡 Practical Work Suggestions

1. **Use class selectors 90% of the time** - This is the core of CSS development
2. **Use ID selectors sparingly** - Mainly reserved for JavaScript
3. **Use descendant selectors reasonably** - Avoid nesting too deep (more than 3 levels)
4. **Master specificity** - Quickly locate issues when style conflicts occur
5. **Use developer tools wisely** - Chrome DevTools is the best tool for learning CSS

### 🎯 Hot vs Niche Scenarios Summary

**Hot scenarios (used daily)**:
- Class selectors `.btn`, `.card`, `.header`
- Descendant selectors `.nav .nav-item`, `.card .title`
- `:hover` button hover, link color change
- `::before/::after` clearfix, decorative icons
- `input[type="text"]` form style differentiation
- `:nth-child(even)` table/list zebra stripes

**Niche scenarios (occasionally used)**:
- Universal selector `*` CSS reset
- Sibling selectors `+`, `~` form validation hints
- `::selection` branding details
- `::first-letter` magazine layout effects
- `:only-child` single card styles

---

## Next Steps

After mastering CSS selectors, next topic: **Box Model**

---

## Reference: Chinese Version

To view the Chinese version, please visit: `docs/zh/class1_css选择器基础.md`

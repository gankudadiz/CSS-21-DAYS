# MD 内容自动注入方案

## 目标

解决 demo HTML 手动复制 md 内容导致的重复维护问题，实现"修改一处，自动同步"。

## 方案：本地构建 + 自动注入

```
┌─────────────────────────────────────────────────────────────┐
│  你的工作流（本地一次构建）                                   │
│                                                             │
│  1. 修改 docs/zh/class1_css选择器基础.md                    │
│  2. 运行 npm run build                                      │
│  3. 自动将 md 内容注入到对应 HTML                           │
│  4. 提交更新到 git                                           │
│                                                             │
│  用户下载后：                                                │
│  - 直接双击打开 demos/zh/*.html                             │
│  - 无需任何环境，开箱即用                                    │
└─────────────────────────────────────────────────────────────┘
```

## 实现步骤

### 步骤 1：创建构建脚本

新建 `scripts/build-md.js`：

```javascript
const fs = require('fs');
const path = require('path');

const DEMOS_DIR = path.join(__dirname, '../demos');
const DOCS_DIR = path.join(__dirname, '../docs');

// md 文件到 HTML 的映射关系
const MAPPING = {
    'zh': {
        'class1_css选择器基础.md': 'class1_css选择器基础.html',
        'class2_盒模型.md': 'class2_盒模型.html'
    },
    'en': {
        'class1_css_selectors.md': 'class1_css_selectors.html',
        'class2_box_model.md': 'class2_box_model.html'
    }
};

function build() {
    for (const [lang, files] of Object.entries(MAPPING)) {
        const docsLangDir = path.join(DOCS_DIR, lang);
        const demosLangDir = path.join(DEMOS_DIR, lang);

        for (const [mdFile, htmlFile] of Object.entries(files)) {
            const mdPath = path.join(docsLangDir, mdFile);
            const htmlPath = path.join(demosLangDir, htmlFile);

            // 读取 md 内容
            const mdContent = fs.readFileSync(mdPath, 'utf-8');

            // 读取 HTML 文件
            let html = fs.readFileSync(htmlPath, 'utf-8');

            // 替换 <script type="text/plain" id="mdContent"> 中的内容
            const regex = /<script type="text\/plain" id="mdContent">([\s\S]*?)<\/script>/;
            html = html.replace(regex, `<script type="text/plain" id="mdContent">\n${mdContent}\n</script>`);

            // 写回 HTML 文件
            fs.writeFileSync(htmlPath, html, 'utf-8');
            console.log(`✓ 已更新: ${htmlFile}`);
        }
    }
    console.log('\n构建完成！');
}

build();
```

### 步骤 2：配置 package.json

```json
{
  "scripts": {
    "build": "node scripts/build-md.js"
  }
}
```

### 步骤 3：运行构建

```bash
npm run build
```

## 文件变更清单

| 操作 | 文件路径 |
|------|---------|
| 新建 | `scripts/build-md.js` |
| 修改 | `package.json` (添加 build 脚本) |
| 修改 | `demos/zh/*.html` (用脚本生成) |
| 修改 | `demos/en/*.html` (用脚本生成) |

## 注意事项

1. **首次构建前**：需要手动删除 HTML 中的 `<script id="mdContent">` 内容，只保留标签
2. **后续维护**：只修改 `docs/` 下的 md 文件，运行 `npm run build` 自动同步
3. **提交时**：将更新后的 HTML 文件一并提交到 git

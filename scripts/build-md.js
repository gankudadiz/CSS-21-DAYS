/**
 * MD 内容注入构建脚本
 *
 * 功能：自动将 docs 目录下的 md 文件内容注入到 demos 目录下的 HTML 中
 * 使用：node scripts/build-md.js 或 npm run build
 *
 * 说明：自动扫描 docs 目录下的 md 文件，找到同名 HTML 文件并注入
 */

const fs = require('fs');
const path = require('path');

const DEMOS_DIR = path.join(__dirname, '../demos');
const DOCS_DIR = path.join(__dirname, '../docs');

function build() {
    console.log('开始构建...\n');

    // 遍历 zh 和 en 两个语言目录
    const languages = ['zh', 'en'];

    for (const lang of languages) {
        const docsLangDir = path.join(DOCS_DIR, lang);
        const demosLangDir = path.join(DEMOS_DIR, lang);

        // 确保目录存在
        if (!fs.existsSync(docsLangDir) || !fs.existsSync(demosLangDir)) {
            continue;
        }

        // 扫描 docs 目录下的所有 md 文件
        const mdFiles = fs.readdirSync(docsLangDir).filter(f => f.endsWith('.md'));

        for (const mdFile of mdFiles) {
            // 将 md 文件名转为 html 文件名
            // 中文：class1_css选择器基础.md -> class1_css选择器基础.html
            // 英文：class1_css_selectors.md -> class1_css_selectors.html
            const htmlFile = mdFile.replace('.md', '.html');
            const mdPath = path.join(docsLangDir, mdFile);
            const htmlPath = path.join(demosLangDir, htmlFile);

            // 检查 HTML 文件是否存在
            if (!fs.existsSync(htmlPath)) {
                console.log(`⚠ 跳过: ${mdFile} (未找到对应的 ${htmlFile})`);
                continue;
            }

            // 读取 MD 内容
            const mdContent = fs.readFileSync(mdPath, 'utf-8');

            // 读取 HTML 文件
            let html = fs.readFileSync(htmlPath, 'utf-8');

            // 替换 <script type="text/plain" id="mdContent"> 中的内容
            // 使用更精确的匹配，确保清空旧内容并注入新内容
            const regex = /<script type="text\/plain" id="mdContent">[\s\S]*?<\/script>/;
            html = html.replace(regex, `<script type="text/plain" id="mdContent">\n${mdContent}\n</script>`);

            // 写回 HTML 文件
            fs.writeFileSync(htmlPath, html, 'utf-8');
            console.log(`✓ 已更新: ${htmlFile}`);
        }
    }

    console.log('\n构建完成！');
}

build();
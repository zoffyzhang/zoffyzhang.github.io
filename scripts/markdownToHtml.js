const fs = require('fs')
const path = require('path')
const marked = require('marked')
const chalk = require('chalk')
const signale = require('signale')

// =============================================================================
// hack into marked
// =============================================================================
let toc = []
let renderer = (function() {
    let renderer = new marked.Renderer()
    renderer.heading = function(text, level, raw) {
        let anchor = this.options.headerPrefix + raw.toLowerCase().replace(/[^\w\\u4e00-\\u9fa5]]+/g, '-')
        toc.push({
            anchor: anchor,
            level: level,
            text: text,
        })
        return '<h' + level + ' id="' + anchor + '">' + text + '</h' + level + '>\n'
    }
    return renderer
})()

marked.setOptions({
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
})

// =============================================================================

// markdown编译成html
async function compileMarkdown2Html(absDir) {
    const allFiles = fs.readdirSync(absDir, 'utf8')
    for (let i = 0, len = allFiles.length; i < len; i++) {
        let curFile = allFiles[i]
        if (/\.md$/.test(curFile)) {
            let absPath = path.resolve(absDir, curFile),
                html = ''

            await new Promise((resolve, reject) => {
                fs.readFile(absPath, 'utf8', (err, data) => {
                    if (err) {
                        reject(err)
                    }
                    html = marked(data)
                    resolve()
                })
            })

            await new Promise((resolve, reject) => {
                let writeFilePath = absPath.replace(/\.md$/, '.html')
                fs.writeFile(writeFilePath, html, 'utf8', err => {
                    if (err) {
                        reject(err)
                    }
                    console.log(chalk.yellow('generated: ' + writeFilePath))
                    resolve()
                })
            })
        }
    }
    signale.success(chalk.green('All markdown files have been compiled to html files'))
}

// 生成包含文章信息的json，用于blog列表页
function generateArticleMetaInfo(absDir, writeFilePath) {
    const allArticleInfo = []
    const allFiles = fs.readdirSync(absDir, 'utf8')

    allFiles.forEach(filename => {
        if (/\.html$/.test(filename)) {
            let absPath = path.join(absDir, filename)
            let stat = fs.statSync(absPath)

            allArticleInfo.push({
                file: filename,
                cdate: new Date(stat.ctime).toLocaleDateString(),
                ctime: new Date(stat.ctime).toLocaleTimeString(),
            })
        }
    })

    const json = JSON.stringify(allArticleInfo)
    fs.writeFileSync(writeFilePath, json, 'utf8')
    console.log(chalk.yellow('generated: ' + writeFilePath))
}

// =============================================================================
// config
// =============================================================================

// 文章所在目录
const dir = '../articles'
// 文章meta信息输出路径
const articleInfoPath = '../src/blogData/articleInfo.json'

const absDir = path.resolve(__dirname, dir)
const writeFilePath = path.resolve(__dirname, articleInfoPath)

// =============================================================================
// start
// =============================================================================
;(async (absDir, writeFilePath) => {
    await compileMarkdown2Html(absDir)
    await generateArticleMetaInfo(absDir, writeFilePath)
    signale.success(`${chalk.green('MarkdownToHtml.js done!')} 🎉\n`)
})(absDir, writeFilePath)

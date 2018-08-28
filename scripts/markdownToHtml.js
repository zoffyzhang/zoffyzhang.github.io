var fs = require('fs')
var path = require('path')
var marked = require('marked')
const chalk = require('chalk')

// =============================================================================
// hack into marked
// =============================================================================
var toc = []
var renderer = (function() {
    var renderer = new marked.Renderer()
    renderer.heading = function(text, level, raw) {
        var anchor = this.options.headerPrefix + raw.toLowerCase().replace(/[^\w\\u4e00-\\u9fa5]]+/g, '-')
        toc.push({
            anchor: anchor,
            level: level,
            text: text,
        })
        return (
            '<h' +
            level +
            ' id="' +
            anchor +
            '">' +
            text +
            '</h' +
            level +
            '>\n' +
            '<a href="#table-of-contents">Table of Contents<a>\n'
        )
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
// compile flow
// =============================================================================
async function compileMarkdown2Html(files) {
    for (let i = 0, len = files.length; i < len; i++) {
        var curPath = files[i],
            absPath = path.resolve(__dirname, curPath),
            writeFilePath = absPath.replace(/\.md$/, '.html'),
            html = ''
        await new Promise((resolve, reject) => {
            fs.readFile(absPath, 'utf8', (err, data) => {
                if (err) {
                    reject(err)
                    throw err
                }
                html = marked(data)
                resolve()
            })
        })
        await new Promise((resolve, reject) => {
            fs.writeFile(writeFilePath, html, 'utf8', err => {
                if (err) {
                    reject(err)
                    throw err
                }
                console.log(`${chalk.yellow(writeFilePath)} has generated.`)
                resolve()
            })
        })
    }
    console.log(`${chalk.green('All markdown files have been compiled to html files 🎉')}\n`)
}

var filePathes = ['../articles/The-Joshua-Trees-In-Computer-Science.md']
compileMarkdown2Html(filePathes)

# 介绍

这是我的博客系统，目的是设计一个简单且实用的博客系统，并且尝试使用 React 框架。

# 功能设计

-   写博客只需要将 markdown 文件保存到工程的 articles 文件夹下就行
-   只需要 `npm run deploy` 一条命令就能构建并自动发布到 GitHub Pages
-   所有的开发、文章修改等操作都在 develop 分支，master 分支只用于发布
-   markdown 文件在构建阶段自动编译成 html 文件
-   文章在打开时异步从 GitHub Pages 获取

# 你也可以使用这个博客系统吗？

可以，但有点麻烦。

我的想法主要是做一个给自己用的博客系统，所以 GitHub repo 建的名字是 zoffyzhang.github.io，如果要设计成通用性的博客系统，那就需要像 Hexo 那样提供 cli，这样工作量就大大提高了，这并不是我的初衷。

尽管如此，我还是把这个博客系统的一些配置抽了出来，按照下面的步骤，你也可以使用这个项目部署自己的博客。

1. `git clone https://github.com/zoffyzhang/zoffyzhang.github.io`下载本项目到你的电脑
2. 在 GitHub 建立你自己的 Github Pages repo，比如说是 xxx.github.io
3. git clone xxx.github.io 到你的电脑
4. 运行 `git checkout -b develop` 给 xxx.github.io 创建并切换到 develop 分支
5. 把本项目的所有文件（除了.git 文件夹）复制替换到你电脑的 Github Pages repo 下
6. 接下来的操作都是针对 xxx.github.io
7. 修改 ./src/api/axiosConfig.js 里的 baseURL，将 'https://raw.githubusercontent.com/zoffyzhang/zoffyzhang.github.io/master/articles/' 里的 GitHub ID 改为你的 GIthub ID
8. 修改 ./package.json 里的 echo 脚本，GitHub ID 改为你的 GIthub ID
9. 删除 ./articles 下的文件，并把你自己写的 markdown 文件放进去
10. 运行`npm i`安装依赖
11. 运行`npm run m2h && npm run build && git add . && git commit -m deploy && git checkout master && git merge develop && git push -u origin master && npm run echo && git checkout develop`
12. 等待程序运行结束，点击终端上打印出的地址你就可以打开自己的博客了

现在，你已经成功将这个博客系统部署到你自己的 Github Pages 上。

从此以后，你只需要添加、删除、修改 ./articles 下的 markdown 文件，然后运行`npm run deploy`命令，你的文章就可以成功发布了。

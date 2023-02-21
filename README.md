# 基于Nuxt.js的仿掘金网站

## Setup

部署环境

```bash
npm install
```

## Development Server

项目启动

```bash
npm run dev
```

目录结构
```bash
├── README.md
├── app # egg核心目录
│   ├── controller
│   ├── extend
│   ├── middleware
│   └── router.js # egg路由文件，无特殊需求不需要修改内容
├── app.js # egg 启动入口文件
├── build # webpack配置目录
│   ├── paths.js
│   ├── util.js
│   ├── webpack.config.base.js # 通用的webpack配置
│   ├── webpack.config.client.js # webpack客户端打包配置
│   └── webpack.config.server.js # webpack服务端打包配置
├── config # egg 配置文件目录
│   ├── config.daily.js
│   ├── config.default.js
│   ├── config.ssr.js
│   ├── config.local.js
│   ├── config.prod.js
│   ├── plugin.js
│   └── plugin.local.js
├── dist # build生成静态资源文件目录
│   ├── Page.server.js # 服务端打包后文件(即打包后的serverRender方法)
│   └── static # 前端打包后静态资源目录
└── web # 前端文件目录
    ├── assets
    │   └── common.less
    ├── entry.js # webpack打包入口文件，分环境导出不同配置
    ├── layout
    │   ├── index.js # 页面布局
    │   └── index.less
    └── page
        ├── index
        └── news

```

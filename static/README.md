# **多页面webpack脚手架-cskeleton**
## cskeleton是什么
 cskeleton 是基于webpack的html多页面前端工程化解决方案。

 前端工程化可以大大的提高开发的效率，开发测试上线一套完成，但是前端现在有大量的零碎的小项目，每一个项目都自己动手配置一套构建环境成本太高，cskeleton就是为了解决webpack项目构建复杂,使用成本高,复用低,维护成本高等工程效率问题。
## 为什么是html多页面
  现在我们大部分的需求都是一些比较小的项目，去年测试了vue感觉不是很理想，处理html页面是最传统的前端开发方式，辅以jQuery，方便快捷容易上手。

  **以后也会补充vue以及react的脚手架**
## cskeleton的基础能力
  1. 实现多页面开发配置
  2. dev环境的HMR
  3. eslint以及stylelint的代码错误检查配置
  4. prettier代码格式化配置
  5. 使用git钩子在git commit时强制代码检查
## cskeleton使用的技术栈及插件
  **项目将全部已es6的语法进行开发**

  项目中包含常见的webpack loader及plugin，需要注意的plugin有如下几个:

    1. script-ext-html-webpack-plugin 给js、css添加async的异步加载属性，特别排除vendors.dll
    2. copy-webpack-plugin 会将src目录下static中的东西拷贝至dit的static中,html中可以直接引用此static中的文件
    3. webpack.DllReferencePlugin add-asset-html-webpack-plugin webpack处理通用文件的方法，这种类dll的类库文件无需再次build，可直接引入到html中，例如jQuery，在build/webpack.dll.config.js中配置这些类库。
## 安装及使用步骤
  1. 配置开发设备的本地仓库，具体方法见：
  2. 全局安装cskeleton_cli，具体方法见：
  3. 在项目目录中执行：cskeleton init
  4. 修改package.json中的name、description等属性，**`name必须修改`**，不然会有冲突
  4. 如果需要配置jQuery之外的不参与build的项目，可在build/webpack.dll.config.js中配置
  5. 安装依赖 npm install
  6. 添加新页面需要在build/webpack.base.conf.js的entry中添加入口，添加后程序会根据entry中的key在项目src目录中寻找同样名称的html文件
  7. 配置项目自动上传的ftp(`directoryName`)
## 开发工具需安装的插件
  * prettier
  * eslint
  * stylelint
  * editconfig
## 项目自动上传的ftp配置
  配置文件为`config/ftp.js`

  ftpConnect: 基础的连接信息，暂时可不改

  **`directoryName: 当前项目需要上传到服务器的目录名称,不能为空值，开发前需设置，新建的项目时注意是否会和现有的重名`**


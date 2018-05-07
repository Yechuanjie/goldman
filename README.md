# **多页面webpack脚手架-cskeleton**

## git
  [http://192.168.1.80:8080/summary/~guojinhai%2Fwnlui_html.git](http://192.168.1.80:8080/summary/~guojinhai%2Fwnlui_html.git)

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
  1. 配置开发设备的本地仓库，具体方法见：[http://192.168.1.130:4567/%E5%B0%86npm%E5%AE%89%E8%A3%85%E6%BA%90%E6%8C%87%E5%90%91%E6%B5%8B%E8%AF%95%E6%9C%8D%E5%8A%A1%E5%99%A8](http://192.168.1.130:4567/%E5%B0%86npm%E5%AE%89%E8%A3%85%E6%BA%90%E6%8C%87%E5%90%91%E6%B5%8B%E8%AF%95%E6%9C%8D%E5%8A%A1%E5%99%A8)
  2. 全局安装cskeleton_cli，具体方法见：[http://192.168.1.130:4567/cskeleton%20cli%E5%B7%A5%E5%85%B7](http://192.168.1.130:4567/cskeleton%20cli%E5%B7%A5%E5%85%B7)
  3. 在项目目录中执行：cskeleton init
  4. 修改package.json中的name、description等属性，**`name必须修改`**，不然会有冲突
  5. 如果需要配置jQuery之外的不参与build的项目，可在build/webpack.dll.config.js中配置
  6. 安装依赖 npm install
  7. 添加新页面需要在build/webpack.base.conf.js的entry中添加入口，添加后程序会根据entry中的key在项目src目录中寻找同样名称的html文件
  8. 修改项目在ftp上的路径(mobile.51wnl.com目录之下的，如：cskeleton)(`详情见项目自动上传的ftp配置`)

## package.json中的scripts使用
  1. eslint：eslint代码检查
  2. dll：DllReferencePlugin，用于基本不变的类库，生成前需执行
  3. dev：开发中使用
  4. build：预发布测试环境(静态资源使用相对路径，无cdn)使用此script生成的代码
  5. build:deploy：部署到正式线上的环境生成代码的script，静态资源会使用cdn

## 开发、测试、部署各个阶段的使用
  ### 开发
    npm run dev
  ### 测试
    npm run build   生成测试环境的代码
  ## 部署
    npm run deploy  jenkins中自动化生成及上传代码到正式环境

## 开发工具需安装的插件
  * prettier
  * eslint
  * stylelint
  * editconfig

## 项目自动上传的ftp配置
  配置文件为`config/index.js中的ftpDirectory属性`

  **`ftpDirectory: 当前项目需要上传到服务器的目录名称,不能为空值，开发前需设置，`**
  **`新建的项目时注意是否会和现有的重名`**
  **`目录默认新建在mobile.51wnl.com域名下，如需在域名下的更深目录，请写全完整路径，例如测算的：numberology/bzcs`**
  **`此ftpDirectory的值需和jenkins的当前项目配置的Remote directory值相同`**

## TODO
  1. `webpack4 treeshaking`
  2. commit钩子时无法使用stylelint，因为stylelint的通配符问题
  3. build时的多线程以及缓存
  4. jquery使用统一的cdn

## CHANGELOG
  * 2018.3.16:readme初始化及static移至src目录
  * 2018.3.19:删除util
  * 2018.3.28:dll文件添加hash
  * 2018.3.29:删除手动上传ftp的代码，改为使用jenkins
  * 2018.4.16:dev添加OptimizeCSSPlugin-safe: true


## jenkins使用须知
  1. 地址：http://192.168.1.130:8080/
  2. 用户名：wnl
  3. 密码：123456

  ### 新建任务时可参照已经建好的cskeleton，有几个地方需要注意的：
  1. 源码管理中使用http的地址，Branch使用maser分支
  2. 如使用cskeleton，构建的shell则无需修改
  3. 构建后操作中的邮箱填写自己的公司邮箱
  4. FTP Publishers中的server选择线上环境，**`特别注意Remote directory的值，必须与脚手架中的config/index.js中的ftpDirectory值相同`**

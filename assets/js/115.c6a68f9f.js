(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{760:function(t,s,a){"use strict";a.r(s);var n=a(69),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前端代码异常监控方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端代码异常监控方案"}},[t._v("#")]),t._v(" 前端代码异常监控方案")]),t._v(" "),a("p",[t._v("前端代码异常主要有两种情况：")]),t._v(" "),a("ul",[a("li",[t._v("1、Js脚本里存在着语法错误；")]),t._v(" "),a("li",[t._v("2、js脚本在运行时发生错误。")])]),t._v(" "),a("h3",{attrs:{id:"_1、try-catch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、try-catch"}},[t._v("#")]),t._v(" 1、try...catch")]),t._v(" "),a("ul",[a("li",[t._v("无法捕捉到语法错误和异步错误，只能捕捉运行时错误；")]),t._v(" "),a("li",[t._v("可以拿到出错的信息，堆栈，出错的文件、行号、列号；")]),t._v(" "),a("li",[t._v("需要借助工具把所有的"),a("code",[t._v("function")]),t._v("以及文件加入"),a("code",[t._v("try...catch")]),t._v(",可以在这个阶段打入更多的静态信息。")]),t._v(" "),a("li",[t._v("需要在捕获异常的代码上进行包裹，会导致页面臃肿不堪，不适用于整个项目的异常捕获。")])]),t._v(" "),a("h3",{attrs:{id:"_2、window-onerror"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、window-onerror"}},[t._v("#")]),t._v(" 2、window.onerror")]),t._v(" "),a("ul",[a("li",[t._v("即可以捕捉到语法错误（无论异步还是非异步），也可以捕捉到运行时错误；")]),t._v(" "),a("li",[t._v("可以拿到出错的信息、堆栈，出错的文件、行号和列号；")]),t._v(" "),a("li",[t._v("只要在当前页面执行的js脚本出错都会被捕捉到；")]),t._v(" "),a("li",[t._v("跨域额资源需要特殊头部支持,在"),a("code",[t._v("script")]),t._v("标签中配置 "),a("code",[t._v("crossorigin")]),t._v("属性，服务器添加"),a("code",[t._v("Access-Control-Allow-Origin")]),t._v("。\n"),a("strong",[t._v("注意")])]),t._v(" "),a("li",[a("code",[t._v("window.onerror")]),t._v("只有函数在返回"),a("code",[t._v("true")]),t._v("的时候，异常才不会向上抛出，否者即使是知道异常单额发生，控制台还是会显示"),a("code",[t._v("Uncaught Error: xxxxx")]),t._v("。")]),t._v(" "),a("li",[a("code",[t._v("window.onerror")]),t._v("无法捕获到网络异常的错误。")])]),t._v(" "),a("h3",{attrs:{id:"_3、promise错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、promise错误"}},[t._v("#")]),t._v(" 3、Promise错误")]),t._v(" "),a("p",[t._v("Promise 实例抛出异常而你没有用 catch 去捕获的话，onerror 或 try-catch 也无能为力，无法捕捉到错误。 所以你最好添加一个 Promise 全局异常捕获事件 "),a("code",[t._v("unhandledrejection")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"unhandledrejection"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("preventDefault")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'我知道 promise 的错误了'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reason"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h3",{attrs:{id:"_4、iframe-错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、iframe-错误"}},[t._v("#")]),t._v(" 4、iframe 错误")]),t._v(" "),a("p",[t._v("父窗口直接使用 window.onerror 是无法直接捕获，如果你想要捕获 iframe 的异常的话，有分好几种情况。\n"),a("strong",[t._v("1） 如果你的 iframe 页面和你的主站是同域名的话，直接给 iframe 添加 onerror 事件即可。")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("iframe src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./iframe.html"')]),t._v(" frameborder"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("iframe"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("frames"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onerror")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" col"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'我知道 iframe 的错误了，也知道错误信息'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" col"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[a("strong",[t._v("2）如果你嵌入的 iframe 页面和你的主站不是同个域名的，但是 iframe 内容不属于第三方")]),a("br"),t._v("\n可以通过与 iframe 通信的方式将异常信息抛给主站接收。与 iframe 通信的方式有很多，常用的如： postMessage，hash 或者 name字段跨域等等\n参考链接"),a("br"),t._v(" "),a("a",{attrs:{href:"https://juejin.im/post/5b55c3495188251acb0cf907",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端异常监控、上报及js压缩代码定位"),a("OutboundLink")],1),t._v(" "),a("strong",[t._v("3）如果是非同域且网站不受自己控制的话，除了通过控制台看到详细的错误信息外，没办法捕获")])]),t._v(" "),a("h3",{attrs:{id:"_5、监控上报"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、监控上报"}},[t._v("#")]),t._v(" 5、监控上报")]),t._v(" "),a("p",[t._v("监控拿到报错信息之后，接下来就需要将捕捉到的错误信息发送到信息收集平台上，常用的发送形式主要有两种:")]),t._v(" "),a("ul",[a("li",[t._v("通过 Ajax 发送数据")]),t._v(" "),a("li",[t._v("动态创建 img 标签的形式")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("line")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REPORT_URL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxx/cgi"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 收集上报数据的信息")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" navigator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userAgent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 收集错误信息，发生错误的脚本文件网络地址，用户代理信息，时间")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REPORT_URL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'||'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 组装错误上报信息内容URL")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" img "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onload "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onerror")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      img "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发送数据到后台cgi")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 监听错误上报")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onerror")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("line")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);
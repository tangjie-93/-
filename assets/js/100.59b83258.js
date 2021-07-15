(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{743:function(s,t,a){"use strict";a.r(t);var n=a(69),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("  越是学习"),a("code",[s._v("js")]),s._v("越是觉得"),a("code",[s._v("js")]),s._v("基础理论知识是多么的重要，所以最近花了比较多的时间去学习，并把学习所得之感悟记录下来，以加深自己的理解，同时也供将来自己复习所用。写的不对的地方还烦请各位大神指出，非常乐意跟各位同道中人交流。")]),s._v(" "),a("h2",{attrs:{id:"_1、执行环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、执行环境"}},[s._v("#")]),s._v(" 1、执行环境")]),s._v(" "),a("p",[s._v("  执行环境是指函数或变量在js运行起来时所处的环境。执行环境定义了变量或函数有权访问的其他数据，决定了他们各自的行为，决定了它们的生命周期。执行环境可分为函数执行环境和全局执行环境。")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("函数执行环境：")]),s._v(" 每当调用函数时，都会在内存中创建该函数的执行环境,函数环境会被推入一个环境栈中。当函数执行完之后，栈将其环境弹出，并将其销毁，把控制权返回给之前的执行环境。")])]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("全局执行环境：")]),s._v(" 是最外围的一个执行环境。在web浏览器中，window对象那个被认为是全局执行环境。所有的全局变量和函数都是window对象的属性和方法。全局执行环境在应用程序退出（网页/浏览器关闭）时被销毁。")])]),s._v(" "),a("h2",{attrs:{id:"_2、作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、作用域"}},[s._v("#")]),s._v(" 2、作用域")]),s._v(" "),a("p",[a("strong",[s._v("作用域：")]),s._v(" 表示变量或函数能够被访问到的区域，控制着变量和参数的可见性和生命周期（或者说是根据名称查找变量的一套规则）。  一般分为局部作用域（函数作用域）和全局作用域。函数作用域保证函数内的参数和变量在函数外部是不可见的，并且在函数中任何位置定义的变量在函数任意位置都是可见的（变量声明提升）。")]),s._v(" "),a("p",[a("strong",[s._v("词法作用域：")]),s._v(" 定义在词法阶段（将字符组成的字符串分解成有意义的代码块，这些代码块被称为词法单元）的作用域。换句话说，词法作用域是由你在写代码时将变量和块作用域写在哪里决定的。")]),s._v(" "),a("p",[a("strong",[s._v("优点：")])]),s._v(" "),a("ul",[a("li",[s._v("1、减少了命名冲突，并且提供了自动内存管理。")]),s._v(" "),a("li",[s._v("2、内部函数可以访问定义他们的外部函数的参数和变量（除了"),a("code",[s._v("this")]),s._v(" 和 "),a("code",[s._v("arguments")]),s._v(" ）。")])]),s._v(" "),a("p",[a("strong",[s._v("作用域链：")]),s._v(" 当代码在一个环境中执行时，会创建变量对象的作用域链，它的用途是保证对执行环境中有权访问的所有变量和函数的有序访问。作用域链的本质其实是一个指向变量对象的指针列表，只引用但不实际包含变量对象。作用域的最顶端在浏览器环境中是window，在node环境中是global。而作用域的最前端始终是当前执行的代码所在环境的变量对象。")]),s._v(" "),a("p",[a("strong",[s._v("变量的赋值")]),s._v(" 操作会执行两个动作，首先编译器会在当前作用域中声明一个变量（如果之前声明过，编译器会忽略该声明，继续进行编译），然后在运行时引擎会在作用域中查找该变量，如果能够找到就会对它赋值。")]),s._v(" "),a("h2",{attrs:{id:"_3、变量对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、变量对象"}},[s._v("#")]),s._v(" 3、变量对象")]),s._v(" "),a("p",[a("strong",[s._v("变量对象：")]),s._v(" 每个执行环境中都会有一个与之关联的变量对象，它包括执行环境中定义的所有变量和函数。如果执行环境是函数，那么则将其"),a("strong",[s._v("活动对象")]),s._v("作为变量对象。活动对象在最开始时只有一个变量————"),a("code",[s._v("anguments")]),s._v("(在全局环境中不存在)。作用域链中的下一个变量对象那个来自包含环境，这样一直延续到全局执行环境中的变量对象。而创建变量对象就是将各种变量和函数进行提升的环节。")]),s._v(" "),a("p",[a("strong",[s._v("活动对象")]),s._v("：当前函数执行环境中的变量对象。只是它需要在函数被调用时才被激活，而且初始化"),a("code",[s._v("arguments")]),s._v("。")]),s._v(" "),a("p",[s._v("  活动对象和变量对象其实是一个东西，只是变量对象是规范上的或者说是引擎实现上的，不可在"),a("code",[s._v("JavaScript")]),s._v("环境中访问，只有到当进入一个执行上下文中，这个执行上下文的变量对象才会被激活，所以才叫 "),a("code",[s._v("activation object")]),s._v("，而只有被激活的变量对象，也就是活动对象上的各种属性才能被访问。")]),s._v(" "),a("p",[a("strong",[s._v("活动对象")]),s._v("是在进入函数上下文时刻被创建的，它通过函数的 "),a("code",[s._v("arguments")]),s._v(" 属性初始化。"),a("code",[s._v("arguments")]),s._v(" 属性值是 "),a("code",[s._v("Arguments")]),s._v(" 对象。")]),s._v(" "),a("p",[s._v("当进入执行上下文时，还未执行代码的时候，变量对象包括这几个对象：")]),s._v(" "),a("h4",{attrs:{id:"_1、函数的所有形参-如果是函数上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、函数的所有形参-如果是函数上下文"}},[s._v("#")]),s._v(" "),a("strong",[s._v("1、函数的所有形参 (如果是函数上下文)")])]),s._v(" "),a("p",[s._v("  a、由名称和对应值组成的一个变量对象的属性被创建。"),a("br"),s._v("\n  b、没有实参时，属性值设为 "),a("code",[s._v("undefined")])]),s._v(" "),a("h4",{attrs:{id:"_2、函数声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、函数声明"}},[s._v("#")]),s._v(" "),a("strong",[s._v("2、函数声明")])]),s._v(" "),a("p",[s._v("  a、由名称和对应值（函数对象(function-object)）组成一个变量对象的属性被创建"),a("br"),s._v("\n  b、如果变量对象已经存在相同名称的属性，则完全替换这个属性")]),s._v(" "),a("h4",{attrs:{id:"_3、变量声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、变量声明"}},[s._v("#")]),s._v(" "),a("strong",[s._v("3、变量声明")])]),s._v(" "),a("p",[s._v("  a、由名称和对应值（undefined）组成一个变量对象的属性被创建；"),a("br"),s._v("\n  b、如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性")]),s._v(" "),a("p",[s._v("下面来看一个例子：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("compare")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("value1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("value2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("value2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" result"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("compare")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("下图展示了上面代码的执行环境及作用域链及变量对象的关系（截图于书上，人比较懒）\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/10/16a07b01f8c55341?w=1044&h=425&f=png&s=64730",alt:""}})]),s._v(" "),a("p",[a("strong",[s._v("图片分析：")]),s._v(" 全局环境的变量对象有两个——"),a("code",[s._v("compare")]),s._v(" 和 "),a("code",[s._v("result")]),s._v(" (根据变量声明提升，"),a("code",[s._v("result")]),s._v(" 提升其所在作用域的顶端时还没初始化，所以为 "),a("code",[s._v("undefined")]),s._v(" )。在"),a("code",[s._v("compare()")]),s._v(" 函数执行过程中，会创建一个函数执行环境，执行环境的变量对象由函数内部活动对象和全局变量对象组成，并创建一个预先包含全局变量对象的作用域链。")]),s._v(" "),a("h2",{attrs:{id:"_4、函数的执行机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、函数的执行机制"}},[s._v("#")]),s._v(" 4、函数的执行机制")]),s._v(" "),a("p",[a("strong",[s._v("函数执行时是按照以下步骤来运行的：")])]),s._v(" "),a("ul",[a("li",[s._v("1、形成一个全新的私有上下文，声明私有变量的空间 "),a("code",[s._v("AO")]),s._v("。\n"),a("ul",[a("li",[a("code",[s._v("AO")]),s._v("是"),a("code",[s._v("VO")]),s._v("的一种。")]),s._v(" "),a("li",[s._v("把上下文进栈执行")])])]),s._v(" "),a("li",[s._v("2、代码执行前的预处理\n"),a("ul",[a("li",[s._v("初始化作用域链")]),s._v(" "),a("li",[s._v("初始化 "),a("code",[s._v("this")]),s._v(" 指向")]),s._v(" "),a("li",[s._v("初始化"),a("code",[s._v("argument")])]),s._v(" "),a("li",[s._v("形参赋值")]),s._v(" "),a("li",[s._v("变量提升")])])]),s._v(" "),a("li",[s._v("3、代码执行")]),s._v(" "),a("li",[s._v('4、一般情况下，函数执行完后，为了优化栈内存，会把形成的私有上下文，出栈释放掉 "GC浏览器垃圾回收机制"。\n参考链接：')])]),s._v(" "),a("h2",{attrs:{id:"_5、arguments及形参的映射机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、arguments及形参的映射机制"}},[s._v("#")]),s._v(" 5、"),a("code",[s._v("arguments")]),s._v("及形参的映射机制")]),s._v(" "),a("p",[s._v("  在非严格模式下，在初始化"),a("code",[s._v("arguments")]),s._v("和形参赋值(调用函数时)步骤之间会把初始的 "),a("code",[s._v("arguments")]),s._v(' 和形参建立一个 "映射机制"。该映射机制是在函数执行之前完成的，一旦建立该映射就不会改变。不论是否设置形参，只要传递实参，'),a("code",[s._v("arguments")]),s._v("中就会有结果。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("b")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * EC(B)\n     *  x=1\n     *  y=2\n     *  a=3\n     * 作用域链:<EC(B),EC(G)>\n     * 初始化THIS:window\n     * 初始化arguments:[1,2,3] =>{0:1,1:2,2:3,length:3}\n     * 形成赋值:x=1,y=2,a=3\n     * 变量提升:——\n     */")]),s._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//3")]),s._v("\n    arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//10")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//undefined")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//如果c=b(1,2),此时函数b中的arguments为{0:1,1:2,length:2}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("Valine")],1)}),[],!1,null,null,null);t.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{779:function(t,s,a){"use strict";a.r(s);var v=a(69),n=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("code",[t._v("shell")]),t._v("在环境中存储了两种基本类型的数据——"),a("strong",[t._v("环境变量和"),a("code",[t._v("shell")]),t._v("变量")]),t._v("。"),a("code",[t._v("shell")]),t._v("变量是"),a("code",[t._v("bash")]),t._v("存放的少量数据，剩下的基本都是环境变量。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("• printenv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 打印部分或所有的环境变量\n• set "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 设置 shell 选项\n• "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" — 导出环境变量，让随后执行的程序知道。\n• alias "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 创建命令别名\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"_1、shell环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、shell环境"}},[t._v("#")]),t._v(" 1、shell环境")]),t._v(" "),a("p",[a("strong",[t._v("1、环境变量")])]),t._v(" "),a("p",[t._v("  如果 shell 环境中的一个成员既不可用 set 命令也不可用 printenv 命令显示，则这个变量是别名。 输入不带参数的 alias 命令来查看它们:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("printenv "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("USER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//打印特定变量的数值")]),t._v("\necho $"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("USER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//打印特定用户的数值")]),t._v("\nset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" less "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//输出结果按照字母顺序排列：")]),t._v("\nalas "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//显示所有的别名")]),t._v("\nfoo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'this is a test'")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//添加环境变量")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[a("strong",[t._v("2、如何建立shell环境")])]),t._v(" "),a("p",[t._v("​\t\t当我们登录系统后，启动 bash 程序，并且会读取一系列称为"),a("strong",[t._v("启动文件")]),t._v("的配置脚本， 这些文件定义了默认的可供所有用户共享的 shell 环境。精确的启动顺序依赖于要运行的 shell 会话 类型。有两种 shell 会话类型：一个是"),a("strong",[t._v("登录 shell 会话")]),t._v("，另一个是"),a("strong",[t._v("非登录 shell 会话")]),t._v("。")]),t._v(" "),a("p",[t._v("非登录"),a("code",[t._v("shell")]),t._v("用户会读取一下文件。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("文件")]),t._v(" "),a("th",[t._v("内容")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("/etc/bash.bashrc")]),t._v(" "),a("td",[t._v("应用于所有用户的全局配置文件。")])]),t._v(" "),a("tr",[a("td",[t._v("~/.bashrc")]),t._v(" "),a("td",[t._v("用户私有的启动文件。可以用来扩展或重写全局配置脚本中的设置。")])])])]),t._v(" "),a("p",[t._v("登录shell会话的启动文件。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("文件")]),t._v(" "),a("th",[t._v("内容")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("/etc/profile")]),t._v(" "),a("td",[t._v("应用于所有用户的全局配置脚本。")])]),t._v(" "),a("tr",[a("td",[t._v("~/.bash_profile")]),t._v(" "),a("td",[t._v("用户私人的启动文件。可以用来扩展或重写全局配置脚本中的设置。")])]),t._v(" "),a("tr",[a("td",[t._v("~/.bash_login")]),t._v(" "),a("td",[t._v("如果文件 ~/.bash_profile 没有找到，bash 会尝试读取这个脚本。")])]),t._v(" "),a("tr",[a("td",[t._v("~/.profile")]),t._v(" "),a("td",[t._v("如果文件 ~/.bash_profile 或文件 ~/.bash_login 都没有找到，bash 会试图读取 这个文件。 这是基于 Debian 发行版的默认设置，比方说 Ubuntu。")])])])]),t._v(" "),a("p",[t._v("​\t\tPATH 变量经常（但不总是，依赖于发行版）在 /etc/profile 启动文件中设置，修改PATH变量，添加目录到PATH目录列表的末尾。")]),t._v(" "),a("p",[a("strong",[t._v("3、激活我们的修改")])]),t._v(" "),a("p",[t._v("​\t\t我们对于文件"),a("code",[t._v(".bashrc")]),t._v("的修改不会生效，直到我们关闭终端会话，再重新启动一个新的会话， 因为 "),a("code",[t._v(".bashrc")]),t._v("文件只是在"),a("strong",[t._v("刚开始启动终端会话时读取")]),t._v("。但是通过 "),a("code",[t._v("source .bashrc")]),t._v("可以强迫"),a("code",[t._v("bash")]),t._v("重新读取修改过的文件。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("vi "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bashrc "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//使用文编编辑器编辑文件")]),t._v("\nsource "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bashrc "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//bash重新读取编辑过的文件")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"_2、vi编辑器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、vi编辑器"}},[t._v("#")]),t._v(" 2、vi编辑器")]),t._v(" "),a("p",[t._v("​\t\t使用"),a("code",[t._v("vi")]),t._v("编辑器的理由。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("vi编辑器很多系统都预装了。")])]),t._v(" "),a("li",[a("p",[t._v("vi是轻量级且执行速度很快的编辑器。")]),t._v(" "),a("p",[t._v("vim（vi improved）是“vi”的一款高级替代版本。vim通常是linux系统“vi”的符号链接(别名)。")])])]),t._v(" "),a("p",[a("strong",[t._v("1、停止和启动vi")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("vi file"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//启动vi")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("q "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//退出vi")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("q"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//修改了文件，强制不保存退出")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("wq "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//修改了文件，保存退出")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[a("strong",[t._v("2、移动光标")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("按键")]),t._v(" "),a("th",[t._v("移动光标")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("l or 右箭头")]),t._v(" "),a("td",[t._v("向右移动一个字符")])]),t._v(" "),a("tr",[a("td",[t._v("h or 左箭头")]),t._v(" "),a("td",[t._v("向左移动一个字符")])]),t._v(" "),a("tr",[a("td",[t._v("j or 下箭头")]),t._v(" "),a("td",[t._v("向下移动一行")])]),t._v(" "),a("tr",[a("td",[t._v("k or 上箭头")]),t._v(" "),a("td",[t._v("向上移动一行")])]),t._v(" "),a("tr",[a("td",[t._v("0 (零按键)")]),t._v(" "),a("td",[t._v("移动到当前行的行首。")])]),t._v(" "),a("tr",[a("td",[t._v("^")]),t._v(" "),a("td",[t._v("移动到当前行的第一个非空字符。")])]),t._v(" "),a("tr",[a("td",[t._v("$")]),t._v(" "),a("td",[t._v("移动到当前行的末尾。")])]),t._v(" "),a("tr",[a("td",[t._v("w")]),t._v(" "),a("td",[t._v("移动到下一个单词或标点符号的开头。")])]),t._v(" "),a("tr",[a("td",[t._v("W")]),t._v(" "),a("td",[t._v("移动到下一个单词的开头，忽略标点符号。")])]),t._v(" "),a("tr",[a("td",[t._v("b")]),t._v(" "),a("td",[t._v("移动到上一个单词或标点符号的开头。")])]),t._v(" "),a("tr",[a("td",[t._v("B")]),t._v(" "),a("td",[t._v("移动到上一个单词的开头，忽略标点符号。")])]),t._v(" "),a("tr",[a("td",[t._v("Ctrl-f or Page Down")]),t._v(" "),a("td",[t._v("向下翻一页")])]),t._v(" "),a("tr",[a("td",[t._v("Ctrl-b or Page Up")]),t._v(" "),a("td",[t._v("向上翻一页")])]),t._v(" "),a("tr",[a("td",[t._v("numberG")]),t._v(" "),a("td",[t._v("移动到第 number 行。例如，1G 移动到文件的第一行。")])]),t._v(" "),a("tr",[a("td",[t._v("G")]),t._v(" "),a("td",[t._v("移动到文件末尾。")])])])]),t._v(" "),a("p",[a("strong",[t._v("3、基本编辑")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("基本编辑：进入"),a("code",[t._v("vi")]),t._v("编辑器时，默认是"),a("strong",[t._v("编辑模式")]),t._v("，在键盘上按下"),a("code",[t._v("insert")]),t._v("或者"),a("code",[t._v("i")]),t._v("后进入插入模式，此时可以输入文本。按下"),a("code",[t._v("Esc")]),t._v("退出插入模式返回到"),a("strong",[t._v("命令模式")]),t._v("。按下"),a("code",[t._v("u")]),t._v(" 按键，当在命令模式下，vi 将会撤销你所做的最后一次修改。")])]),t._v(" "),a("li",[a("p",[t._v("追加文本：vi 提供了"),a("strong",[t._v("追加文本")]),t._v('的命令，明智地命名为"a"命令。 vi 提供了一种快捷方式（"A"命令）来移动到当前行的末尾，并且能添加文本。')])]),t._v(" "),a("li",[a("p",[t._v("打开一行。这会在存在的两行之间插入一个空白行，并且进入插入模式。 把光标移动到某一行上，按下"),a("code",[t._v("o")]),t._v("，在当前行的下方打开一行，按下"),a("code",[t._v("O")]),t._v("，在当前行的上方打开一行。")])]),t._v(" "),a("li",[a("p",[t._v("删除文本：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("命令")]),t._v(" "),a("th",[t._v("删除的文本")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("x")]),t._v(" "),a("td",[t._v("当前字符")])]),t._v(" "),a("tr",[a("td",[t._v("3x")]),t._v(" "),a("td",[t._v("当前字符集其后的两个字符")])]),t._v(" "),a("tr",[a("td",[t._v("dd")]),t._v(" "),a("td",[t._v("当前行")])]),t._v(" "),a("tr",[a("td",[t._v("5dd")]),t._v(" "),a("td",[t._v("当前行及随后的四行文本")])]),t._v(" "),a("tr",[a("td",[t._v("dW")]),t._v(" "),a("td",[t._v("从光标位置开始到下一个单词的开头")])]),t._v(" "),a("tr",[a("td",[t._v("d$")]),t._v(" "),a("td",[t._v("从光标位置开始到当前行的行尾")])]),t._v(" "),a("tr",[a("td",[t._v("d0")]),t._v(" "),a("td",[t._v("从光标位置开始到当前行的行首")])]),t._v(" "),a("tr",[a("td",[t._v("d^")]),t._v(" "),a("td",[t._v("从光标位置开始到文本行的第一个非空字符")])]),t._v(" "),a("tr",[a("td",[t._v("dG")]),t._v(" "),a("td",[t._v("从当前行到文件的末尾")])]),t._v(" "),a("tr",[a("td",[t._v("d20G")]),t._v(" "),a("td",[t._v("从当前行到文件的第20行。")])])])])]),t._v(" "),a("li",[a("p",[t._v("剪切、复制和粘贴文本：使用 d 命令，删除的部分被复制到一个 粘贴缓冲区中（看作剪切板）。过后我们执行"),a("strong",[t._v("小 p命令把剪切板中的文本粘贴到光标位置之后， 或者是大 P 命令把文本粘贴到光标之前。y 命令来“拉”（复制）文本，和 d 命令剪切文本的方式差不多。")])])]),t._v(" "),a("li",[a("p",[t._v("链接行：大写的 J把行与行之间连接起来。")])]),t._v(" "),a("li",[a("p",[t._v("查找和替换："),a("strong",[t._v("f命令查找一行")]),t._v('。例如，命令 fa 会把光标定位到同一行中 下一个出现的"a"字\n符上。在一行中执行了字符的查找命令之后，通过输入分号来重复这个查找。'),a("code",[t._v("/")]),t._v('用于查找整个文件。当你输\n入/命令后，一个"/"字符会出现在屏幕底部。下一步，输入要查找的单词或短语后， 按下回车。光标就会移动到下一个包含所查找字符串的位置。通过 '),a("code",[t._v("n")]),t._v("命令来重复先前的查找。")])]),t._v(" "),a("li",[a("p",[t._v("全局查找和替换：vi 使用 ex 命令来执行查找和替代操作。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Line"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("line"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("g "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//全局将Line替换为line")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("table",[a("thead",[a("tr",[a("th",[t._v("条目")]),t._v(" "),a("th",[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("：")]),t._v(" "),a("td",[t._v("运行一个"),a("code",[t._v("ex")]),t._v("命令")])]),t._v(" "),a("tr",[a("td",[t._v("%")]),t._v(" "),a("td",[t._v("指定要操作的行数。% 是一个快捷方式，表示从第一行到最后一行。另外，操作范 围也 可以用 1,5 来代替（因为我们的文件只有5行文本），或者用 1,$ 来代替，意 思是 “ 从第一行到文件的最后一行。” 如果省略了文本行的范围，那么操作只对 当前行生效。")])]),t._v(" "),a("tr",[a("td",[t._v("s")]),t._v(" "),a("td",[t._v("指定操作。在这种情况下是，替换（查找与替代）。")])]),t._v(" "),a("tr",[a("td",[t._v("/Line/line")]),t._v(" "),a("td",[t._v("查找类型与替代文本。")])]),t._v(" "),a("tr",[a("td",[t._v("g")]),t._v(" "),a("td",[t._v("这是“全局”的意思，意味着对文本行中所有匹配的字符串执行查找和替换操 作。如果省略 g，则 只替换每个文本行中第一个匹配的字符串。")])])])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(":%s/Line/line/gc //全局将Line替换为line,并会出来提示框。\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("table",[a("thead",[a("tr",[a("th",[t._v("按键")]),t._v(" "),a("th",[t._v("行为")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("y")]),t._v(" "),a("td",[t._v("执行替换操作")])]),t._v(" "),a("tr",[a("td",[t._v("n")]),t._v(" "),a("td",[t._v("跳过这个匹配的实例")])]),t._v(" "),a("tr",[a("td",[t._v("a")]),t._v(" "),a("td",[t._v("对这个及随后所有匹配的字符串执行替换操作。")])]),t._v(" "),a("tr",[a("td",[t._v("q or esc")]),t._v(" "),a("td",[t._v("退出替换操作。")])]),t._v(" "),a("tr",[a("td",[t._v("l")]),t._v(" "),a("td",[t._v("执行这次替换并退出。l 是 “last” 的简写。")])]),t._v(" "),a("tr",[a("td",[t._v("Ctrl-e, Ctrl-y")]),t._v(" "),a("td",[t._v("分别是向下滚动和向上滚动。用于查看建议替换的上下文。")])])])])]),t._v(" "),a("li",[a("p",[t._v("编辑多个文件 "),a("code",[t._v("vi file1 file2...")])])]),t._v(" "),a("li",[a("p",[t._v("文件之间转换。"),a("code",[t._v(":n")]),t._v("从这个文件转到下一个文件。在切换这些命令的时候可能需要执行"),a("code",[t._v(":w 1.txt")]),t._v("来先保存编辑的文件，然后再切换。 "),a("code",[t._v(":N")]),t._v("回到先前的文件。我们可以查看正在编辑的文件列表，使用"),a("code",[t._v(":buffers")]),t._v(" 命令。运行这个 命令后，屏幕顶部就会显示出一个文件列表。这时要使用:buffer 命令， 其后加上缓冲区号码，来转换文件。")])]),t._v(" "),a("li",[a("p",[t._v("从一个文件复制内容到另一个文件。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(":buffer 1//转到缓冲区编号为1的文件 通过`yy`等命令来复制内容。\n:buffer 2//转到编号为的文件，将粘贴区的文件进行复制。\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("插入整个文件到另一个文件。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("r foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//把指定的文件插入到光标位置之前")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("保存工作")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("wq "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//保存退出")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("w "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v("txt"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//保存特定的文件，如果1.txt不存在，会将正在编辑的文件另存为1.txt")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])])]),t._v(" "),a("h3",{attrs:{id:"_3、自定制shell提示符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、自定制shell提示符"}},[t._v("#")]),t._v(" 3、自定制shell提示符")]),t._v(" "),a("p",[a("strong",[t._v("1、解剖一个提示符")])]),t._v(" "),a("p",[t._v("默认提示符：包含了用户名、主机名和当前工作目录。提示符是由"),a("code",[t._v("PS1(prompt string one)")]),t._v("的环境变量定义的。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@iZwtrtjgg3qrk8Z "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("#\necho "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PS1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//[\\u@\\h \\W]\\$")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("提示符中用到的转义字符。")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("a\t\t以ASCII格式编码的铃声，当遇到这个转义序列时，计算机会发出嗡嗡的响声。\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("d      以日、月、天格式俩表示当前日期\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("h\t\t本地机器的主机名，不带末尾的域名\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("H\t\t完整的主机名\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("j\t\t运行在当前shell会话中的工作数\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("l\t\t当前终端设备名\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("n\t\t换行符\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("r\t\t回车符\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("s\t\tshell程序名\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("t\t\t以24小时制，"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hours:minutes:seconds'")]),t._v("的格式表示当前时间\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("T\t\t以12小时制表示当前时间\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("@\t\t以12小时工作制，AP/PM表示当前时间\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("A\t\t以24小时工作制，hours:minutes格式表示当前时间\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("u\t\t当前用户名\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("v\t\tshell程序的版本号\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("V\t\tVersion and release numbers of the shell\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("w\t\t当前工作目录名\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("W\t\t当前功能工作目录的最后部分。\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\t\t当前命令的历史号\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("#\t\t当前会话中的命令数\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("$\t\t表示$字符，超级管理员显示"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#字符")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\t\t标志着一系列或多个非打印字符的开始\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\t\t标志着非打印字符的技术。\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br")])]),a("p",[a("strong",[t._v("2、自定义提示符")])]),t._v(" "),a("p",[t._v("​\t\t可以用一个变量将当前提示符存起来，也可以在某个文件定义该提示符，然后导出，使之提示符永久存在。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("、用一个变量将当前提示符保存起来；\nps1_old"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PS1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("、自定义提示符\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PS1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\a\\h"')]),t._v("。\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("hr")])}),[],!1,null,null,null);s.default=n.exports}}]);
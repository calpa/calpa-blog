webpackJsonp([0xc740dc59de29],{383:function(n,a){n.exports={data:{markdownRemark:{tableOfContents:'<ul>\n<li><a href="#%E7%82%BA%E4%BB%80%E9%BA%BC%E6%9C%83%E6%9C%89%E9%80%99%E7%AF%87%E6%96%87%E7%AB%A0">為什麼會有這篇文章</a></li>\n<li><a href="#%E6%9C%80%E7%B0%A1%E5%96%AE%E7%9A%84%E9%96%89%E5%8C%85">最簡單的閉包</a></li>\n<li><a href="#%E5%8A%A0%E6%B3%95---es6">加法 - ES6</a></li>\n</ul>',internal:{content:'---\ntitle: JavaScript的閉包(Closure)\ndate: 2017-02-19 15:12:00\ntags:\n  - JavaScript\n---\n\n## 為什麼會有這篇文章\n\n打好基本功是很重要的。。。\n\n## 最簡單的閉包\n1. 先定義一個Function A\n2. 在A的裡面定義一個Function B\n3. 在A中返回B\n4. 執行A(), 將A()的返回值賦予給b\n5. 執行b()\n\n```[js]\nfunction A() {\n  function B() {\n    console.log("Hello, world!");\n  }\n  return B;\n}\nvar b = A();\nb(); // Hello World\n```\n\n## 加法 - ES6\n1. 先定義adder()\n2. 定義匿名函數\n3. 返回x + y\n4. 定義變量 add5\n5. 執行 add5()\n\n```[js]\nlet adder = (x) => (y) => x + y\n\nlet add5 = adder(5);\nlet add10 = adder(10);\n\nconsole.log(add5(7)); // 12\nconsole.log(add10(7)); // 17\n```\n'},frontmatter:{title:"JavaScript的閉包(Closure)"}}},pathContext:{slug:"/javascript-closure/"}}}});
//# sourceMappingURL=path---2017-02-19-javascript-closure-3ef93cc482058ef85b10.js.map
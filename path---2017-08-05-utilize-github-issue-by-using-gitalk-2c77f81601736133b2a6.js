webpackJsonp([0xe99313db7e7a],{419:function(n,t){n.exports={data:{markdownRemark:{tableOfContents:'<ul>\n<li><a href="#%E5%89%8D%E8%A8%80">前言</a></li>\n<li>\n<p><a href="#%E5%AE%89%E8%A3%9D%E6%96%B9%E6%B3%95">安裝方法</a></p>\n<ul>\n<li><a href="#%E4%BD%BF%E7%94%A8-cdn-%E5%BC%95%E5%85%A5">使用 cdn 引入</a></li>\n<li><a href="#%E5%88%A9%E7%94%A8-npm-%E5%AE%89%E8%A3%9D">利用 npm 安裝</a></li>\n<li><a href="#%E5%8E%BB-github-%E4%B8%8A%E9%9D%A2-clone-gitalk">去 Github 上面 clone Gitalk</a></li>\n</ul>\n</li>\n<li>\n<p><a href="#%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95">使用方法</a></p>\n<ul>\n<li><a href="#%E4%BB%A3%E7%A2%BC%E7%AF%84%E4%BE%8B">代碼範例</a></li>\n</ul>\n</li>\n<li><a href="#gitalk-%E9%81%B8%E9%A0%85">Gitalk 選項</a></li>\n<li><a href="#%E6%96%B9%E6%B3%95">方法</a></li>\n<li><a href="#%E5%BE%8C%E8%A8%98">後記</a></li>\n</ul>',internal:{content:"---\ntitle: 善用 Github Issue 的開源評論插件 -- Gitalk\ntags:\n  - Front End\n  - Blog\nheaderBackgroundColor: fff\nheaderImage: phH7Jc4.png;\nheaderSize: contain;\nshare-img: https://i.imgur.com/w6B3yom.png\ndate: 2017-08-04 20:00:00\nbackgroundPositionY: 50%\nmagic: false\n---\n\n![Gitalk](https://i.imgur.com/DqyRXB9.jpg)\n\n## 前言\n\n以前，我的博客是用 Disqus 的評論插件，但是無論是載入速度，還是樣式上，都是有所缺乏的。我一直沒有安裝其他的評論插件，因為覺得搬家有點麻煩。但是當我試用一下之後，我就覺得這個插件安裝很方便，功能也很實用，尤其是可以寫 Markdown 評論，就讓我非常喜歡這個插件了。因此，我拜讀了一下 [Gitalk Github Repo](https://github.com/gitalk/gitalk) 的代碼。我會在這裡說一下我對這個插件的理解，並提交繁體中文 README.md 到官方倉庫上。如果你想試用的話，你可以到[官網](https://gitalk.github.io/)或[我的博客](#gitalk-container)留言。\n\nGitalk 是一個基於 Github Issue 和 Preact 開發的評論插件。它支持多語言，包括英文，繁體中文和簡體中文，並[自動判斷用戶當前語言](https://github.com/gitalk/gitalk/blob/48de82ca24d4cb24a464f7cc9e72884a208b9d5c/src/gitalk.jsx#L55)：`navigator.language || navigator.userLanguage`。用戶只需要使用自己的個人或組織 Github 賬戶便可以登入系統。\n\n另外，它也有以下的功能：\n\n- 無干擾模式：`distractionFreeMode`\n- 快捷鍵提交評論 （cmd || ctrl + enter）\n\n\n## 安裝方法\n\n### 使用 cdn 引入\n```html\n  <link rel=\"stylesheet\" href=\"https://unpkg.com/gitalk/dist/gitalk.css\">\n\n  <script src=\"https://unpkg.com/gitalk/dist/gitalk.min.js\"></script>\n```\n\n直至8月4日，我仍然沒有在 cdnjs 上面找到 Gitalk 的，只好去 cdnjs/cdnjs 上面提交了[新的 cdn 需求](https://github.com/cdnjs/cdnjs/issues/11668)。如果你也認為有需要用到 cdnjs 的話，你可以去那裡說一下。\n\n\n### 利用 npm 安裝\n\n```sh\nnpm i --save gitalk\ncnpm i --save gitalk\n```\n\n```js\nimport 'gitalk/dist/gitalk.css'\nimport Gitalk from 'gitalk'\n```\n\n### 去 Github 上面 clone Gitalk\n```sh\ngit clone git@github.com:gitalk/gitalk.git\ncd gitalk/dist/\n```\n\n然後把壓縮過的`gitalk.min.js` 放進你的項目。\n\n## 使用方法\n\n![Register a new OAuth Application](https://i.imgur.com/C6HEsRv.png)\n\nGitalk 需要 **Github Application**，如果沒有請點擊 [Register a new OAuth application](https://github.com/settings/applications/new) 申請，`Authorization callback URL` 填寫當前使用插件頁面的域名，例如我的博客就是填寫 https://calpa.me\n\n### 代碼範例\n\n```js\nvar gitalk = new Gitalk({\n  clientID: 'Github Application Client ID',\n  clientSecret: 'Github Application Client Secret',\n  repo: 'Github repo',\n  owner: 'Github repo owner',\n  admin: ['Github repo collaborators'],\n})\n\ngitalk.render('gitalk-container')\n```\n\n\n## Gitalk 選項\n\n- **clientID** `String`\n\n  **必須**. Github Application Client ID.\n\n- **clientSecret** `String`\n\n  **必須**. Github Application Client Secret.\n\n- **repo** `String`\n\n  **必須**. Github repository.\n\n- **owner** `String`\n\n  **必須**. Github repository 所有者，可以是個人或者組織。\n\n- **admin** `Array`\n\n  **必須**. Github repository 合作者 (確保對這個 repository 是有寫的權限)。\n\n- **id** `String`\n\n  Default: `location.href`.\n\n  頁面的唯一標識。\n\n- **labels** `Array`\n\n  Default: `['Gitalk']`.\n\n  Github issue 的標簽。\n\n- **title** `String`\n\n  Default: `document.title`.\n\n  Github issue 的標題。\n\n- **body** `String`\n\n  Default: `location.href + header.meta[description]`.\n\n  Github issue 的內容。\n\n- **language** `String`\n\n  Default: `navigator.language || navigator.userLanguage`.\n\n  設置語言，支持 [en, zh-CN, zh-TW]。\n\n- **perPage** `Number`\n\n  Default: `10`.\n\n  每次加載的數據大小，最多 100。\n\n- **distractionFreeMode** `Boolean`\n\n  Default: false。\n\n  類似Facebook評論框的全屏遮罩效果.\n\n- **pagerDirection** `String`\n\n  Default: 'last'\n\n  評論排序方式， `last`為按評論創建時間倒敘，`first`為按創建時間正序。\n\n- **createIssueManually** `Boolean`\n\n  Default: `false`.\n\n  如果當前頁面沒有相應的 isssue 且登錄的用戶屬於 admin，則會自動創建 issue。如果設置為 `true`，則顯示一個初始化頁面，創建 issue 需要點擊 `init` 按鈕。\n\n- **proxy** `String`\n\n  Default: [https://cors-anywhere/herokuapp.com](https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token)\n\n   [Github oauth 請求到反向代理，為了支持 CORS。 ](https://github.com/isaacs/github/issues/330)\n\n- **flipMoveOptions** `Object`\n\n  Default:\n  ```js\n    {\n      staggerDelayBy: 150,\n      appearAnimation: 'accordionVertical',\n      enterAnimation: 'accordionVertical',\n      leaveAnimation: 'accordionVertical',\n    }\n  ```\n\n  評論列表的動畫。 [參考](https://github.com/joshwcomeau/react-flip-move/blob/master/documentation/enter_leave_animations.md)\n\n- **enableHotKey** `Boolean`\n\n  Default: `true`.\n\n  啟用快捷鍵(cmd|ctrl + enter) 提交評論.\n\n\n## 方法\n\n- `render(String/HTMLElement)`\n\n  初始化渲染並掛載插件，[需要提供 HTMLElement 的 id ](https://github.com/gitalk/gitalk/blob/48de82ca24d4cb24a464f7cc9e72884a208b9d5c/src/index.js#L17)。\n\n- `setPerPage(page: number)`\n\n  // TODO: 我想在構建gitalk之後，可以再次手動設置屬性 perPage 屬性，再次自行定義每個頁面的評論載入量。\n\n## 後記\n這個 [Gitalk](https://github.com/gitalk/gitalk) 也是蠻好用的，它界面簡潔清新，沒有廣告，還支持 Markdown 格式。而且感覺更加適合 Markdown 程序員使用。。。\n"},frontmatter:{title:"善用 Github Issue 的開源評論插件 -- Gitalk"}}},pathContext:{slug:"/utilize-github-issue-by-using-gitalk/"}}}});
//# sourceMappingURL=path---2017-08-05-utilize-github-issue-by-using-gitalk-2c77f81601736133b2a6.js.map
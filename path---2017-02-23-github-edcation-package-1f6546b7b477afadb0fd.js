webpackJsonp([0xe9deb1b3cda],{386:function(n,a){n.exports={data:{markdownRemark:{tableOfContents:'<ul>\n<li><a href="#github-%E7%A6%AE%E5%8C%85">Github 禮包</a></li>\n<li><a href="#namecheap">namecheap</a></li>\n<li><a href="#https">HTTPS</a></li>\n<li><a href="#%E6%84%9F%E6%83%B3">感想</a></li>\n<li><a href="#%E5%8F%83%E8%80%83%E8%B3%87%E6%96%99">參考資料</a></li>\n</ul>',internal:{content:'---\ntitle: 利用Github免費教育禮包更换.me域名\ndate: 2017-02-23 10:00\ntags:\n  - Github\n---\n![Imgur](https://i.imgur.com/PmOA3IB.png?3)\n\n現在如果你看網址列的話，你會發現現在域名改成了`calpa.me`，而且加上了一個綠色的鎖。\n\n<img src="https://dwa5x7aod66zk.cloudfront.net/assets/sdp-backpack-a64038716bf134f45e809ff86b9611fb97e41bbd2ccfa3181da73cf164d3c200.png" width="200px" />\n\n## Github 禮包\n如果你有學生身份的話，其中一個好處就是可以使用很多免費服務。比如說[Github Education](https://education.github.com/)禮包。它裡面有很多內容，但其中比較實用的有下面這些：\n1. [AWS Educate](https://aws.amazon.com/?nc1=h_ls): Up to $110 in bonus AWS credits for a total of $75-$150\n1. [Digital Ocean](https://www.digitalocean.com/): Cloud hosting\n1. [Github](https://github.com/): Unlimited private repositories (normally $7/month) while you are a student.\n1. [namecheap](https://www.namecheap.com/): One year domain name registration on the .me TLD (normally $18.99/year)\n1. [Travis CI](https://travis-ci.org/): Private builds (normally $69/month) while you\'re a student\n1. [UDACITY](https://www.udacity.com/): One month free access to any Nanodegree program (normally $199)\n\n既然namecheap提供一年免費`.me` 域名，不如我就用`calpa.me`取代之前`calpa.github.io`吧。\n\n## namecheap\n在[namecheap](https://nc.me/)尋找`calpa.me`是否有人註冊，如果沒有的話就可以直接將.me加入購物車。\n\n![Imgur](https://i.imgur.com/24oQqGZ.png)\n之後，在namecheap的dashboard會看到自己域名，然後點擊MANAGE按鈕。\n\n在Advanced DNS裡面，我們需要增加兩筆`A`記錄：\n1. @ 192.30.252.153\n1. @ 192.30.252.154\n\n之後利用`dig +noall +answer username.me`命令就可以看到記錄如上一樣。\n\n## HTTPS\n如果要使用HTTPS，可以利用免費的Cloudflare服務。\n1. 註冊Cloudflare\n1. 打開namecheap的domain頁，將nameserver改成Custome DNS，然後加入`bella.ns.cloudflare.com`和`igor.ns.cloudflare.com`。\n\n## 感想\n添加新的域名其實不難，只是需要很多時間去等待服務器修改DNS記錄。。。\n\n## 參考資料\n1. [Configuring A records with your DNS provider - Github](https://help.github.com/articles/setting-up-an-apex-domain/#configuring-a-records-with-your-dns-provider)\n'},frontmatter:{title:"利用Github免費教育禮包更换.me域名"}}},pathContext:{slug:"/github-edcation-package/"}}}});
//# sourceMappingURL=path---2017-02-23-github-edcation-package-1f6546b7b477afadb0fd.js.map
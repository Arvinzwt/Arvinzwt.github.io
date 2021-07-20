---
title: Introduction
description: Learn how to use @nuxt/content.
---

Learn how to use @nuxt/content.
<!--more-->
Full amount of content beyond the more divider.


# Lorem ipsum
## dolor—sit—amet
### consectetur &amp; adipisicing
#### elit
##### elit



## Links

<nuxt-link to="/articles">Nuxt Link to Blog</nuxt-link>

<a href="/articles">Html Link to Blog</a>

[Markdown Link to Blog](/articles)

<a href="https://nuxtjs.org">External link html</a>

[External Link markdown](https://nuxtjs.org)

```js{1,3-5}[server.js]
const http = require('http')
const bodyParser = require('body-parser')

http.createServer((req, res) => {
  bodyParser.parse(req, (error, body) => {
    res.end(body)
  })
}).listen(3000)
```

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.




---
title: Home
---

## HTML

<p><span class="note">A mix of <em>Markdown</em> and <em>HTML</em>.</span></p>


<div class="note">

*Markdown* and <em>HTML</em>.

</div>
import{_ as s,o as a,c as n,U as l}from"./chunks/framework.56c084f4.js";const A=JSON.parse('{"title":"请求","description":"","frontmatter":{},"headers":[],"relativePath":"ray-template-docs/common-problem/request-cancel.md","filePath":"ray-template-docs/common-problem/request-cancel.md","lastUpdated":1691570920000}'),o={name:"ray-template-docs/common-problem/request-cancel.md"},p=l(`<h1 id="请求" tabindex="-1">请求 <a class="header-anchor" href="#请求" aria-label="Permalink to &quot;请求&quot;">​</a></h1><h2 id="自动取消请求" tabindex="-1">自动取消请求 <a class="header-anchor" href="#自动取消请求" aria-label="Permalink to &quot;自动取消请求&quot;">​</a></h2><p>模板会自动的搜集所有的 <code>axios</code> 请求，并且在识别到重复请求的时候自动取消重复请求。并且在路由更新前的时候，会自动取消当前页面的所有请求。如果你并不希望该请求被取消，你可以手动的配置 <code>cancelConfig.needCancel</code> 属性为 <code>false</code>。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>取消器在每次取消请求的时候会自动有一个 <code>Error</code> 输出在控制台，但是他并不会影响你的请求方法，因为取消器仅会取消重复请求，所以当你的请求重复时，就会被自动取消上一个重复请求。</p></div><h2 id="请求返回值-ts-类型声明" tabindex="-1">请求返回值 <code>ts</code> 类型声明 <a class="header-anchor" href="#请求返回值-ts-类型声明" aria-label="Permalink to &quot;请求返回值 \`ts\` 类型声明&quot;">​</a></h2><p>不论是 <code>request</code> 方法，又或者是 <code>useRequest</code> 方法，都可以手动的传递类型为请求响应值批注类型。<code>useHookPlusRequest</code> 方法会自动的推导返回值类型，一般来讲不需要手动的批注。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useRequest</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useHookPlusRequest</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">request</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/axios/index</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">address</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">request</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Person</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http:xxxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">method</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">get</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">useRequest</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Person</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http:xxxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">method</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">get</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div>`,7),e=[p];function t(c,r,D,F,y,C){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};

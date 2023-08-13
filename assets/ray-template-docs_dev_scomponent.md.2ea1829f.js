import{_ as s,o as a,c as n,U as o}from"./chunks/framework.56c084f4.js";const C=JSON.parse('{"title":"特殊组件","description":"","frontmatter":{},"headers":[],"relativePath":"ray-template-docs/dev/scomponent.md","filePath":"ray-template-docs/dev/scomponent.md","lastUpdated":1691570920000}'),e={name:"ray-template-docs/dev/scomponent.md"},p=o(`<h1 id="特殊组件" tabindex="-1">特殊组件 <a class="header-anchor" href="#特殊组件" aria-label="Permalink to &quot;特殊组件&quot;">​</a></h1><p>在项目中，拆分了一个特殊的文件包 <code>app-components</code>。用于项目的功能注入，并且拆分为 <code>app</code> 与 <code>provider</code> 两种类型。其实两个包中的组件，都可能与项目数据有关联，拆分为两个的原因更多是按照其用途进行划分。</p><h2 id="app" tabindex="-1">app <a class="header-anchor" href="#app" aria-label="Permalink to &quot;app&quot;">​</a></h2><p>存放全局使用，但是与项目数据有关联的特殊组件。例如：<code>AppLockScreen</code> <code>AppAvatar</code> 组件。这些都是与项目数据深度绑定，所以拆分在 <code>app</code> 包中。这些组件功能比较简单，这里不做赘述。</p><h2 id="provider" tabindex="-1">provider <a class="header-anchor" href="#provider" aria-label="Permalink to &quot;provider&quot;">​</a></h2><p>项目中一些功能采用组件注入的方式实现，并且该包中的组件一般来说不需要做改动。</p><h2 id="appnaiveglobalprovider" tabindex="-1">AppNaiveGlobalProvider <a class="header-anchor" href="#appnaiveglobalprovider" aria-label="Permalink to &quot;AppNaiveGlobalProvider&quot;">​</a></h2><p><code>navie ui</code> 的全局注入组件。全局注册 <code>message</code> <code>dialog</code> <code>notification</code> <code>loadingBar</code>，并且挂载在 <code>window</code> 中，让你可以在项目中使用 <code>window.$xxx</code> 方法调用。并且注入对应的 <code>themeOverrides</code> <code>locale</code>。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>该方法虽然可以便捷的注册这四个方法，但是存在一些局限性。例如 <code>notification</code> 只能在右上角出现，如果在页面中有需要自定义触发位置的需求，需要自己重新按照官方文档的调用方法进行在当前页面使用。</p></div><h2 id="apprequestcanceler" tabindex="-1">AppRequestCanceler <a class="header-anchor" href="#apprequestcanceler" aria-label="Permalink to &quot;AppRequestCanceler&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">执行顺序</p><p><code>beforeRouteUpdate</code> =&gt; <code>cancelAllRequest</code> =&gt; <code>routeUpdate</code></p></div><p>基于取消器 <code>RequestCanceler</code> 实现，可以在路由切换的时候，自动取消上一个路由中所有的请求。当然，你可以在请求的时候增加 <code>needCancel</code> 配置，手动决定是否可以被手动取消（<code>false</code> 则不会被取消）。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useRequest</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useHookPlusRequest</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">request</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/axios/index</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">request</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">unknown</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://jsonplaceholder.typicode.com/todos/1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">method</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">get</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">cancelConfig</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">needCancel</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">useRequest</span><span style="color:#89DDFF;">&lt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://jsonplaceholder.typicode.com/todos/1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">method</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">get</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">cancelConfig</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">needCancel</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">manual</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>该方法仅会在进入系统后（登陆后），才会触发。并且需要注意请求的发送时机，否则可能会被错误取消。</p></div><h2 id="appstyleprovider" tabindex="-1">AppStyleProvider <a class="header-anchor" href="#appstyleprovider" aria-label="Permalink to &quot;AppStyleProvider&quot;">​</a></h2><p>样式注入与加载动画的管理。会在 <code>body</code> 注入 <code>class</code> <code>css var</code> 等。</p>`,16),l=[p];function c(t,r,D,d,i,y){return a(),n("div",null,l)}const A=s(e,[["render",c]]);export{C as __pageData,A as default};

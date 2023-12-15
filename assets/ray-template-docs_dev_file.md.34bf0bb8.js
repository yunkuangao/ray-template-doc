import{_ as s,o as a,c as n,V as e}from"./chunks/framework.51f721ee.js";const u=JSON.parse('{"title":"目录结构","description":"","frontmatter":{},"headers":[],"relativePath":"ray-template-docs/dev/file.md","filePath":"ray-template-docs/dev/file.md","lastUpdated":1702611582000}'),l={name:"ray-template-docs/dev/file.md"},p=e(`<h1 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h1><h2 id="主要文件" tabindex="-1">主要文件 <a class="header-anchor" href="#主要文件" aria-label="Permalink to &quot;主要文件&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">ray-template</span></span>
<span class="line"><span style="color:#babed8;">|- cfg.ts</span></span>
<span class="line"><span style="color:#babed8;">|- vite.config.ts</span></span>
<span class="line"><span style="color:#babed8;">|- src</span></span>
<span class="line"><span style="color:#babed8;">|--|- appConfig</span></span>
<span class="line"><span style="color:#babed8;">|--|- assets</span></span>
<span class="line"><span style="color:#babed8;">|--|- axios</span></span>
<span class="line"><span style="color:#babed8;">|--|- components</span></span>
<span class="line"><span style="color:#babed8;">|--|- dayjs</span></span>
<span class="line"><span style="color:#babed8;">|--|- directives</span></span>
<span class="line"><span style="color:#babed8;">|--|- error</span></span>
<span class="line"><span style="color:#babed8;">|--|- icons</span></span>
<span class="line"><span style="color:#babed8;">|--|- layout</span></span>
<span class="line"><span style="color:#babed8;">|--|- locales</span></span>
<span class="line"><span style="color:#babed8;">|--|- router</span></span>
<span class="line"><span style="color:#babed8;">|--|- spin</span></span>
<span class="line"><span style="color:#babed8;">|--|- store</span></span>
<span class="line"><span style="color:#babed8;">|--|- types</span></span>
<span class="line"><span style="color:#babed8;">|--|- utils</span></span>
<span class="line"><span style="color:#babed8;">|--|- views</span></span>
<span class="line"><span style="color:#babed8;">|--|- App.tsx</span></span>
<span class="line"><span style="color:#babed8;">|--|- main.ts</span></span></code></pre></div><h2 id="目录说明" tabindex="-1">目录说明 <a class="header-anchor" href="#目录说明" aria-label="Permalink to &quot;目录说明&quot;">​</a></h2><ul><li>cfg.ts：该配置文件主要是用于 <code>vite.config.ts</code> 中的一些配置，并且部分配置会暴露在全局和 <code>ejs</code> 的注入</li></ul><div class="tip custom-block"><p class="custom-block-title">描述</p><p>这个配置文件主要用于配置 <code>vite.config.ts</code> 中的选项，其中一些选项会被暴露在全局和 <code>ejs</code> 中，以便于在应用程序的不同部分中使用。</p></div><ul><li>vite.config.ts：<code>vite.config.ts</code> 的一些配置</li><li>src：模板的入口文件</li></ul><div class="tip custom-block"><p class="custom-block-title">注</p><p>该文件这里不做赘述，后面会详细的介绍每个目录文件的作用。</p></div>`,8),o=[p];function t(c,i,d,r,b,y){return a(),n("div",null,o)}const h=s(l,[["render",t]]);export{u as __pageData,h as default};

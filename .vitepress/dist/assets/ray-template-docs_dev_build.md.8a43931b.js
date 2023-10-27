import{_ as a,o as s,c as e,U as t}from"./chunks/framework.56c084f4.js";const m=JSON.parse('{"title":"构建项目","description":"","frontmatter":{},"headers":[],"relativePath":"ray-template-docs/dev/build.md","filePath":"ray-template-docs/dev/build.md","lastUpdated":1691570920000}'),l={name:"ray-template-docs/dev/build.md"},o=t('<h1 id="构建项目" tabindex="-1">构建项目 <a class="header-anchor" href="#构建项目" aria-label="Permalink to &quot;构建项目&quot;">​</a></h1><h2 id="生产构建" tabindex="-1">生产构建 <a class="header-anchor" href="#生产构建" aria-label="Permalink to &quot;生产构建&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">注</p><p>项目尽可能的做好了构建的一些优化，让你在无需修改任何代码的情况下体验最佳的构建体验。但是应该注意使用包的时候，避免一次性全部导入的做法，这样会导致构建体积变得很大。</p></div><h2 id="测试构建" tabindex="-1">测试构建 <a class="header-anchor" href="#测试构建" aria-label="Permalink to &quot;测试构建&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span></span></code></pre></div><h2 id="开发构建" tabindex="-1">开发构建 <a class="header-anchor" href="#开发构建" aria-label="Permalink to &quot;开发构建&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev-build</span></span></code></pre></div><h2 id="体积分析" tabindex="-1">体积分析 <a class="header-anchor" href="#体积分析" aria-label="Permalink to &quot;体积分析&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">report</span></span></code></pre></div>',10),n=[o];function p(c,i,r,d,h,u){return s(),e("div",null,n)}const _=a(l,[["render",p]]);export{m as __pageData,_ as default};

import{_ as e,o as a,c as o,V as t}from"./chunks/framework.51f721ee.js";const _=JSON.parse('{"title":"设计原则","description":"","frontmatter":{},"headers":[],"relativePath":"ray-template-docs/guide/concept.md","filePath":"ray-template-docs/guide/concept.md","lastUpdated":null}'),r={name:"ray-template-docs/guide/concept.md"},i=t('<h1 id="设计原则" tabindex="-1">设计原则 <a class="header-anchor" href="#设计原则" aria-label="Permalink to &quot;设计原则&quot;">​</a></h1><h2 id="核心理念" tabindex="-1">核心理念 <a class="header-anchor" href="#核心理念" aria-label="Permalink to &quot;核心理念&quot;">​</a></h2><p><code>Ray Template</code> 的核心价值观则是：</p><ul><li>快速开发</li><li>降低成本（学习与上手成本）</li><li>模块化</li><li>hooks</li></ul><p>这四个核心理念驱动该模板的开发。</p><h2 id="核心模块" tabindex="-1">核心模块 <a class="header-anchor" href="#核心模块" aria-label="Permalink to &quot;核心模块&quot;">​</a></h2><h3 id="layout" tabindex="-1">Layout <a class="header-anchor" href="#layout" aria-label="Permalink to &quot;Layout&quot;">​</a></h3><p>登陆系统后展示的核心页面，采用主流的布局方式布局。</p><h3 id="router" tabindex="-1">Router <a class="header-anchor" href="#router" aria-label="Permalink to &quot;Router&quot;">​</a></h3><p>模板的所有菜单、标签页、面包屑等，都依赖该模块的实现</p><h3 id="store" tabindex="-1">Store <a class="header-anchor" href="#store" aria-label="Permalink to &quot;Store&quot;">​</a></h3><p>数据管理仓库。</p><h3 id="appcomponents-与-appprovider" tabindex="-1">AppComponents 与 AppProvider <a class="header-anchor" href="#appcomponents-与-appprovider" aria-label="Permalink to &quot;AppComponents 与 AppProvider&quot;">​</a></h3><p>模板专属组件与注入器。</p><h3 id="axios-request" tabindex="-1">Axios（Request） <a class="header-anchor" href="#axios-request" aria-label="Permalink to &quot;Axios（Request）&quot;">​</a></h3><p>基于 <code>axios</code> 封装，并且拓展了：取消器、注入器、<code>vue-hooks-plus useRequest</code> 提供的插件能力与一些列实用的功能。</p><h3 id="appconfig" tabindex="-1">AppConfig <a class="header-anchor" href="#appconfig" aria-label="Permalink to &quot;AppConfig&quot;">​</a></h3><p>模板配置项，赋予手动配置模板的能力。</p><h3 id="directives" tabindex="-1">Directives <a class="header-anchor" href="#directives" aria-label="Permalink to &quot;Directives&quot;">​</a></h3><p>全局 <code>directives</code> 指令，提前封装常用的指令。</p>',20),s=[i];function l(p,c,d,n,h,u){return a(),o("div",null,s)}const q=e(r,[["render",l]]);export{_ as __pageData,q as default};

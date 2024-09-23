import{_ as i,c as a,a2 as t,o as n}from"./chunks/framework.etYTtafL.js";const c=JSON.parse('{"title":"快速开始","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/getting-started.md","filePath":"zh/guide/getting-started.md","lastUpdated":1727107399000}'),e={name:"zh/guide/getting-started.md"};function l(p,s,h,d,k,r){return n(),a("div",null,s[0]||(s[0]=[t(`<h1 id="getting-started" tabindex="-1">快速开始 <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;快速开始 {#getting-started}&quot;">​</a></h1><h2 id="installation" tabindex="-1">安装 <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;安装 {#installation}&quot;">​</a></h2><p>通过<a href="./installation">安装章节</a>，大家应该知道各种安装方式，现在假如我们是基于 ES Module 引入。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-5Eivd" id="tab-wkQd-zK" checked><label for="tab-wkQd-zK">npm</label><input type="radio" name="group-5Eivd" id="tab-30usgEm"><label for="tab-30usgEm">pnpm</label><input type="radio" name="group-5Eivd" id="tab-Wcv0VNI"><label for="tab-Wcv0VNI">yarn</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qier-player</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qier-player</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qier-player</span></span></code></pre></div></div></div><h2 id="started" tabindex="-1">开始使用 <a class="header-anchor" href="#started" aria-label="Permalink to &quot;开始使用 {#started}&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Player </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;qier-player&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> player</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Player</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://vortesnail.github.io/qier-player-demo/static/media/video480p.d116ba09.mp4&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">player.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(document.body)</span></span></code></pre></div><p>首先我们导入 <code>Player</code>，创建实例，接着传入视频地址，调用 <code>mount</code> 方法将它挂载到 <code>body</code> 元素下。</p><p><code>mount</code> 方法可以将播放器实际产生的 DOM 元素挂载到指定 DOM 元素下，它接收一个参数，可以是一个字符串（选择器）或一个实际的 DOM 元素。当是字符串时，内部实现通过 <code>document.querySelector</code> 方法寻找到实际的 DOM 元素。</p><h2 id="get-doms" tabindex="-1">获取相关 DOM 元素 <a class="header-anchor" href="#get-doms" aria-label="Permalink to &quot;获取相关 DOM 元素 {#get-doms}&quot;">​</a></h2><p>在执行 <code>mount</code> 方法后，可以通过实例访问内部的成员，以下是可能被经常访问的：</p><ul><li><strong>被挂载的元素</strong>：通过 <code>container</code> 可访问。</li><li><strong>播放器根元素</strong>：通过 <code>el</code> 可访问。</li><li><strong>video</strong>：通过 <code>video</code> 可访问。</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Player </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;qier-player&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> player</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Player</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://vortesnail.github.io/qier-player-demo/static/media/video480p.d116ba09.mp4&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">player.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(document.body)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(player.container) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// document.body</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(player.el)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(player.video)</span></span></code></pre></div><h2 id="instance-properties-functions" tabindex="-1">实例属性和方法 <a class="header-anchor" href="#instance-properties-functions" aria-label="Permalink to &quot;实例属性和方法 {#instance-properties-functions}&quot;">​</a></h2><p>在我们新建实例 <code>player</code> 之后，有许多成员属性是可以供我们读取的。</p><p>比如以下代码可实现自动播放，<code>10</code> 秒后自动暂停。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">player.muted </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 静音</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">player.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">play</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 播放</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  player.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pause</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 暂停</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>如果我们在控制台打印 <code>player</code> 实例，展开后你会发现有许多的成员属性，详情请点击<a href="./../api/properties">属性</a>和<a href="./../api/functions">方法</a>查看。</p><h2 id="instance-bus" tabindex="-1">事件监听 <a class="header-anchor" href="#instance-bus" aria-label="Permalink to &quot;事件监听 {#instance-bus}&quot;">​</a></h2><p><code>player</code> 有下面 5 个事件相关的方法。</p><table tabindex="0"><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>emit(evt: string, ...args: any[])</td><td>派发事件</td></tr><tr><td>on(evt: string, fn?: Function)</td><td>监听事件</td></tr><tr><td>once(evt: string, fn?: Function)</td><td>监听事件，回调函数仅调用一次即注销</td></tr><tr><td>off(evt: string, fn?: Function)</td><td>注销事件监听</td></tr><tr><td>removeAllListeners(evt?: string)</td><td>注销所有事件监听</td></tr></tbody></table><p>你可以使用这些方法监听内置事件。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Player, { EVENT } form </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;qier-player&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const player = new Player()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">player.on(EVENT.PLAY, () =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.log(&#39;开始播放&#39;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p><code>EVENT.PLAY</code> 本质上就是一个字符串，采用大驼峰命名法为 <code>Play</code>。</p><p>你也可以自定义监听事件。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Player, { EVENT } form </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;qier-player&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const player = new Player()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 派发事件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">player.emit(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;CustomEvent&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 监听事件并执行回调函数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">player.on(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;CustomEvent&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.log(&#39;自定义事件已触发&#39;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>更多内置事件请查看<a href="/qier-player/zh/api/events">事件</a>。</p><h2 id="instance-destroy" tabindex="-1">销毁 <a class="header-anchor" href="#instance-destroy" aria-label="Permalink to &quot;销毁 {#instance-destroy}&quot;">​</a></h2><p><code>player</code> 及所有组件都实现了 <code>Dispose</code> 接口，也就是拥有 <code>dispose</code> 方法，调用该方法将会销毁该对象及其 DOM 元素。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">player.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(document.body)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 5 秒后销毁 player 及其 DOM 元素</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> player.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dispose</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="muti-level" tabindex="-1">多层级 <a class="header-anchor" href="#muti-level" aria-label="Permalink to &quot;多层级 {#muti-level}&quot;">​</a></h2><p>该播放器有 6 个不同功能的层级组成，每个层级有自己的 <code>z-index</code>。</p><table tabindex="0"><thead><tr><th>层级</th><th>z-indx</th><th>描述</th></tr></thead><tbody><tr><td>video 视频元素</td><td>-</td><td>video 元素没有设置 z-index</td></tr><tr><td>poster 海报</td><td>10</td><td>视频海报</td></tr><tr><td>loading 加载中</td><td>20</td><td>视频加载时出现的加载中指示器元素</td></tr><tr><td>controller 控制条</td><td>30</td><td>视频底部控制条</td></tr><tr><td>menu 右键菜单</td><td>40</td><td>右键视频元素弹出的菜单</td></tr><tr><td>toast 提示框</td><td>50</td><td>提示框</td></tr></tbody></table><p>除了 <code>video</code> 元素，其它的功能组件都是采用<strong>绝对定位</strong>，在后续提供插件功能之后，开发者可以自己决定将 <code>z-index</code> 设置合适的数值，以避免不必要的遮挡。</p><h2 id="questions" tabindex="-1">问题 &amp; 新功能 <a class="header-anchor" href="#questions" aria-label="Permalink to &quot;问题 &amp; 新功能 {#questions}&quot;">​</a></h2><p>如果你遇到 BUG、想要新功能或者有使用上的问题，欢迎发起 <a href="https://github.com/vortesnail/qier-player/issues/new/choose" target="_blank" rel="noreferrer">issue</a>。</p>`,35)]))}const E=i(e,[["render",l]]);export{c as __pageData,E as default};

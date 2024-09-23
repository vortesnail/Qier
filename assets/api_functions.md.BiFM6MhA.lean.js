import{_ as o,c as i,a2 as t,o as s}from"./chunks/framework.etYTtafL.js";const u=JSON.parse('{"title":"Methods","description":"","frontmatter":{},"headers":[],"relativePath":"api/functions.md","filePath":"en/api/functions.md","lastUpdated":1727107399000}'),a={name:"api/functions.md"};function n(d,e,r,h,p,l){return s(),i("div",null,e[0]||(e[0]=[t('<h1 id="functions" tabindex="-1">Methods <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Methods {#functions}&quot;">​</a></h1><p>The created instance has many callable methods, which you can inspect by logging it in the console:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> player</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Player</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(player)</span></span></code></pre></div><h2 id="mount-container-iplayeroptions-container-void" tabindex="-1"><code>mount(container?: IPlayerOptions[&#39;container&#39;]): void</code> <a class="header-anchor" href="#mount-container-iplayeroptions-container-void" aria-label="Permalink to &quot;`mount(container?: IPlayerOptions[&#39;container&#39;]): void`&quot;">​</a></h2><p>Mounts the player to a specified container. If the <code>container</code> parameter was not provided during initialization, it is required when calling this function.</p><h2 id="play-promise-void-void" tabindex="-1"><code>play(): Promise&lt;void&gt; | void</code> <a class="header-anchor" href="#play-promise-void-void" aria-label="Permalink to &quot;`play(): Promise&lt;void&gt; | void`&quot;">​</a></h2><p>Starts playing the video, invoking the native event of the <code>video</code> element.</p><h2 id="pause-void" tabindex="-1"><code>pause(): void</code> <a class="header-anchor" href="#pause-void" aria-label="Permalink to &quot;`pause(): void`&quot;">​</a></h2><p>Pauses video playback, invoking the native event of the <code>video</code> element.</p><h2 id="seek-seconds-number-void" tabindex="-1"><code>seek(seconds: number): void</code> <a class="header-anchor" href="#seek-seconds-number-void" aria-label="Permalink to &quot;`seek(seconds: number): void`&quot;">​</a></h2><p>Seeks to a specified time in the video, equivalent to setting <code>player.currentTime</code>.</p><h2 id="incvolume-v-this-options-shortcutoptions-volumestep-void" tabindex="-1"><code>incVolume(v = this.options.shortcutOptions.volumeStep): void</code> <a class="header-anchor" href="#incvolume-v-this-options-shortcutoptions-volumestep-void" aria-label="Permalink to &quot;`incVolume(v = this.options.shortcutOptions.volumeStep): void`&quot;">​</a></h2><p>Increases the volume by the value set in <code>volumeStep</code>.</p><h2 id="decvolume-v-this-options-shortcutoptions-volumestep-void" tabindex="-1"><code>decVolume(v = this.options.shortcutOptions.volumeStep): void</code> <a class="header-anchor" href="#decvolume-v-this-options-shortcutoptions-volumestep-void" aria-label="Permalink to &quot;`decVolume(v = this.options.shortcutOptions.volumeStep): void`&quot;">​</a></h2><p>Decreases the volume by the value set in <code>volumeStep</code>.</p><h2 id="forward-v-this-options-shortcutoptions-seekstep-void" tabindex="-1"><code>forward(v = this.options.shortcutOptions.seekStep): void</code> <a class="header-anchor" href="#forward-v-this-options-shortcutoptions-seekstep-void" aria-label="Permalink to &quot;`forward(v = this.options.shortcutOptions.seekStep): void`&quot;">​</a></h2><p>Fast-forwards the video by the amount specified in <code>seekStep</code>.</p><h2 id="rewind-v-this-options-shortcutoptions-seekstep-void" tabindex="-1"><code>rewind(v = this.options.shortcutOptions.seekStep): void</code> <a class="header-anchor" href="#rewind-v-this-options-shortcutoptions-seekstep-void" aria-label="Permalink to &quot;`rewind(v = this.options.shortcutOptions.seekStep): void`&quot;">​</a></h2><p>Rewinds the video by the amount specified in <code>seekStep</code>.</p><h2 id="toggle-void" tabindex="-1"><code>toggle(): void</code> <a class="header-anchor" href="#toggle-void" aria-label="Permalink to &quot;`toggle(): void`&quot;">​</a></h2><p>Toggles between play and pause.</p><h2 id="togglevolume-void" tabindex="-1"><code>toggleVolume(): void</code> <a class="header-anchor" href="#togglevolume-void" aria-label="Permalink to &quot;`toggleVolume(): void`&quot;">​</a></h2><p>Toggles the mute state.</p><h2 id="dispose-void" tabindex="-1"><code>dispose(): void</code> <a class="header-anchor" href="#dispose-void" aria-label="Permalink to &quot;`dispose(): void`&quot;">​</a></h2><p>Destroys the player.</p>',25)]))}const v=o(a,[["render",n]]);export{u as __pageData,v as default};

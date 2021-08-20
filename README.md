# Version 2.x coming soon...

# Below is Version 1.x README.md

<hr>

<h1 align="center">
  <img src="https://i0.hdslb.com/bfs/album/d72f47cd98c9fb6287d7eaf002695de4f53de6f2.png" height="200" width="200"/>
  <p align="center" style="font-size: 0.5em">A lightweight and sophisticated React-based H5 video player</p>
</h1>

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/25b0f4275a5448e68dd4e04efa3cfa92)](https://app.codacy.com/gh/vortesnail/qier-player?utm_source=github.com&utm_medium=referral&utm_content=vortesnail/qier-player&utm_campaign=Badge_Grade_Settings)
[![GitHub](https://img.shields.io/github/license/vortesnail/qier-player)](https://github.com/vortesnail/qier-player/blob/master/LICENSE) [![Travis (.org)](https://img.shields.io/travis/vortesnail/qier-player)]() [![npm package](https://img.shields.io/npm/v/qier-player)](https://www.npmjs.com/package/qier-player) [![npm bundle size (version)](https://img.shields.io/bundlephobia/minzip/qier-player/1.2.8)](https://www.npmjs.com/package/qier-player) [![GitHub stars](https://img.shields.io/github/stars/vortesnail/qier-player)](https://github.com/vortesnail/qier-player/stargazers)

[简体中文](https://github.com/vortesnail/qier-player/blob/master/README-zh-Hans.md) &#124; English

## Introduction

Qier-player is a web video player component for React, It has a simple interface and smooth operation which supports the most functions of other video players. In addition, Qier-player can switch between video resolutions (4K, 2K, 1080P, 720P and 480P) if desired.

## Keyboard Shortcuts

For these to work, the player must be in focus.

- `Up` arrow key: Volume up
- `Down` arrow key: Volume down
- `Left` arrow key: Rewind 3 seconds
- `Right` arrow key: Skip forward 3 seconds
- `Space` key: Toggle play/pause

Here is an [official demo site](https://vortesnail.github.io/qier-player-demo/) showing the player in use.

## Screenshot

![Screenshot of Qier Player](https://i0.hdslb.com/bfs/album/dc46482ec425ebf78f8501fb44f05f8b01cbda4b.png)

## Quick Start

### Install

```bash
npm install --save qier-player
```

### Use

```js
import React from 'react';
import ReactDOM from 'react-dom';
import QierPlayer from 'qier-player';
ReactDOM.render(<QierPlayer srcOrigin='Your video addedress' />, document.getElementById('root'));
```

## API

| Parameter | Description | Types | Defaults |
| --- | --- | --- | --- |
| `width` | setting the video width (e.g. `740` or `"100%"`) | number &#124; string | 740 |
| `height` | setting the video height (e.g. `420` or `"100%"`) | number &#124; string | 420 |
| `language` | language: 'en' is English and 'zh' is Chinese | "en" &#124; "zh" | 'en' |
| `themeColor` | theme color (only supports hexadecimal color) | string | '#f23300' |
| `src480p` | 480p source URL | boolean &#124; string | false |
| `src1080p` | 1080p source URL | boolean &#124; string | false |
| `src720p` | 720p source URL | boolean &#124; string | false |
| `src2k` | 2K source URL | boolean &#124; string | false |
| `src4k` | 4K source URL | boolean &#124; string | false |
| `srcOrigin` | origin source URL (set this if not using specific resolution sources) | boolean &#124; string | false |

## Acknowledgements

- Thanks to [kaiseixd](https://github.com/kaiseixd) for his inspiration when I was in trouble.
- Thanks to the [screenfull](https://github.com/sindresorhus/screenfull.js/) plugin and the its author.
- Thanks to fanzy for tranlsating README
- Thanks to [iconfont](https://www.iconfont.cn/) as an unselfish icon creator.

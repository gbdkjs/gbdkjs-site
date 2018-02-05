---
title: "Debug"
date: 2018-01-28T14:14:44Z
draft: false
---

The GBDK.js web environment gives you access to a number of tools for viewing 
internal state and debugging your game.

## Buffers

The screen buffer and window buffer panels allow you to see the entire state of
the two 256x256 pixel buffers that can be scrolled by updating the values
of `SCX_REG`, `SCY_REG`, `WX_REG` and `WY_REG`.

The screen buffer is used for your main game display and will wrap infinitely
as you reposition it.

The window buffer does not wrap and appears above the screen buffer so can be
used for displaying UI elements such as a health bar or score.

## Tile and Sprite Memory

These panels allow you to see the loaded tiles in both the the tile (used for 
screen and window buffers) and sprite memory. This allows you to see if you've
loaded too much or too little graphics data or if you've loaded the data into
the wrong location.

## Logging Console

The right hand side of the page contains a log for you to output debugging
information from your game directly to the page. You will also be able to see
this by opening the Javascript console in your browser.

To send logs to the console add code like the following to your game's functions.

```
LOG("Hello World\n");
```

or to log a value

```
LOG("i=%d\n", i);
```

notice that these commands both end with a `\n` newline character, without these
the commands won't appear in the console.

The logging function is a C macro that only compiles into the web build and is
not present in the GameBoy ROM.








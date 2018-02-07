---
title: "Debug"
date: 2018-01-28T14:14:44Z
draft: false
---

The GBDK.js web environment gives you access to a number of tools for viewing 
internal state and debugging your game.

![](/img/debug-environment.png)

<a href="/examples/boilerplate/web/" class="button">Launch debug</a>

## Keyboard Controls

The controls are currently set up to mimic the default keyboard controls in
[KiGB](http://www.bannister.org/software/kigb.htm) though these will likely be
configurable in a later version.

- **Arrow Keys** - D-pad movement
- **Alt Key** - A Button
- **Ctrl Key** - B Button
- **Shift Key** - Select Button
- **Enter Key** - Start Button

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

## Registers

A number of the GameBoy register values such as the screen and window positions 
are displayed in decimal and binary formats. More registers will be added as
we continue development.

## Logging to the Console

The console contains a log for you to output debugging information from your
game directly to the page. You will also be able to see this by opening the Javascript console in your browser.

To send logs to the console add code like the following to your game's functions.

```
LOG("Hello World\n");
```

or to log a value

```
LOG("i=%d\n", i);
```

note that these commands both end with a `\n` newline character,  without these
the output won't appear.

The logging function is a C macro that only compiles into the web build and is
not present in the GameBoy ROM.








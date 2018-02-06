---
title: "Installation"
date: 2018-01-28T14:14:44Z
draft: false
---

To start using GBDK.js you'll need to have a few dependencies installed first.

## GBDK

GBDK, The GameBoy Developers Kit is a C library and compiler without which this
project wouldn't exist. You can use it to compile from C directly to a GameBoy
ROM file to be played in an emulator or directly on device using a USB
cartridge.

Download the latest release for your system at http://gbdk.sourceforge.net/.  
Only Linux and Windows binary releases are available for download but you can
[download for Mac OS here](/downloads/gbdk-mac.zip).

Once you have the release, unarchive it, move it to a permanent location
(such as /opt/gbdk) and add the bin folder to your `$PATH`.

```
> unzip gbdk-mac.zip
> mv gbdk /opt/gbdk
> PATH=/opt/gbdk/bin:$PATH
```

If you want to keep gbdk in your path add it to your `~/.bashrc` config.

Once GBDK is installed you should be able to run `lcc -V` on a terminal to
confirm it is set up correctly.

```
> lcc -v
lcc $Id: lcc.c,v 1.6 2001/10/28 18:38:13 michaelh Exp $
```

## Emscripten

Emscripten is an LLVM-to-JavaScript compiler. We're using it to compile from C
code to Javascript and bind the GBDK library functions to a Javascript
implementation allowing us to view the internal graphics memory buffers at any
point during playback and to log straight to the Javascript console in the
browser.

Follow the installation instructions for your system at  
http://kripken.github.io/emscripten-site/docs/getting_started/downloads.html

Once Emscripten is installed you should be able to run `emcc -v` on a terminal
to confirm it is set up correctly.

```
> emcc -v
emcc (Emscripten gcc/clang-like replacement + linker emulating GNU ld) 1.37.28
```

## Node.js

The GBDK.js tools are built using Node.js and our Javascript implementation of
the GBDK library is distributed via npm so you'll need Node.js installed also.
Get the latest release at https://nodejs.org and confirm installation using
`node -v`.

```
> node -v
v8.9.4
```

## A GameBoy Emulator

To play your ROM files you'll need an emulator such as [OpenEmu](http://openemu.org/). I find for during development that I prefer [KiGB (Mac Version)](http://www.bannister.org/software/kigb.htm) as using `open romfile.gb` on the
command line quickly reloads the application.

## GBDK.js

Once the above is installed you'll be able to get the latest version of GBDK.js
using npm.

```
> mkdir my-awesome-game
> cd my-awesome-game
> npm init
> npm install gbdkjs
```

This will create a `node_modules/gbdkjs` folder in your current path containing
the GBDK Javascript implementation, the Emscripten bindings and a shell HTML file.

If you've used Emscripten before this might be all you need but assuming you 
haven't we suggest you now download an [example project](/docs/getting-started)
to get started.

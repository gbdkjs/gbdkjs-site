---
title: "About GBDK.js"
date: 2018-01-28T14:14:44Z
draft: false
---

GBDK.js was created to serve my own needs when building a GameBoy game for the
first time.

Finding the process of building and debugging to an emulator that
could only draw to a 160x144 pixel screen with no logging to be quite tedious I
initially ended up building a simultaneous Javascript implementation of my game
allowing me to have more of an oversight into what was happening. I built a
Javascript implementation of the parts of GBDK I was using to keep the Javascript
version of the game and the GameBoy C version as close as possible.

Eventually it became unmanageable to maintain two separate versions of the game
and I started to look at tools like Emscripten so that I could build a single
codebase but still use the debugging tools I'd built. To my surprise with only
a few changes to the GBDK header files (mostly removing the NONBANKED references) 
I was able to build the C project and bind the Javascript GBDK implementation
to get exactly what was needed.

Along the way I also built a number of graphics tools for handling my asset
pipeline some of which have been merged into a command line tool
[GGBGFX](/docs/ggbgfx)

My game project is still ongoing and hopefully I'll have something to share soon.

If you're interested in GameBoy development I'd highly recommend checking out 
the excellent [Awesome Game Boy Development](https://github.com/avivace/awesome-gbdev) resource list compiled by [avivace](https://github.com/avivace)
as a starting point for learning more.

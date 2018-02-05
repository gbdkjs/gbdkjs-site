---
title: "Graphics with GGBGFX"
date: 2018-01-28T14:14:44Z
draft: false
---

When developing for the Game Boy all graphics data needs to be in specific binary format. All Game Boy graphics are tile based with an 8x8 pixel size, you specify a tile set to use and then provide a tile map to determine which tiles to display where in the screen buffer.

To simplify the process of converting assets into a compatible format you can use the GGBGFX command line tool.

## Install

```shell
npm install -g ggbgfx-cli
```

## Commands

### Sprite

Convert PNG into sprite data

```shell
ggbgfx sprite
```

*Example:*

```shell
ggbgfx sprite -b 5 -o sprite_data.c sprite_image.png
```

### Tileset

Convert one or more PNGs into a tileset PNG containing all unique tiles.

```shell
ggbgfx tileset
```

*Example*

```shell
ggbgfx tileset -o city_tiles.png city1.png city2.png
```

### Tilemap

Convert a source PNG and a tileset PNG into a tilemap data.

```shell
ggbgfx tilemap
```

*Example*

```shell
ggbgfx tilemap -b 6 -o city1_tilemap.c -t city_tiles.png city1.png 
```

### Tiledata

Convert a source PNG into tile data

```shell
ggbgfx tiledata
```

*Example*

```shell
ggbgfx tiledata -b 6 -o city_tiles_data.c city_tiles.png
```

## Options

**—outfile, -o**  
Specify output location

**—name, -n**
The name of the C variable definition. Defaults to source name

**—bank, -b**  
Set output bank pragma (e.g. 5)

**—offset, -s**
Offset tilemap numbers by n tiles. Needed if not loading tilemap at initial memory location. (tilemap only)

**—raw, -r**  
Just output raw values, no C variable definitions

**—version, -V**  
Output the version number

**—help, -h**  
Output usage information

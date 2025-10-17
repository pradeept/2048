<div align='center'>

# 2048 

2048 is an easy and fun puzzle game.Once you start, you won't want to stop!
</div>

## How to Run ?

- Clone the repo

```
git clone <repo-url>
```

- Change directory to the project folder

```
cd <project-folder>
```

- Install dependencies

```
npm i
```

- Run the project

```
npm run dev
```

- Site will be live at `localhost:3000`

## Gameplay Instructions:

- **Initial:** When the game starts you will be presented with a board of default size(4x4). And 2 random non-zero tiles are added to the board.

- **Slide Tiles:** Use arrow keys to move all tiles in a direction (up, down, left, or right).

- **Merge Tiles:** When two tiles with the same number collide, they merge into one. Value of the updated tile will be sum of 2 collided tiles. Only tiles with similar values collide/merge.

- **Goal:** The goal of the game is to combine tiles till you get a tile with value 2048. The game will not stop and you can continue playing even after winning the game.

- **New Tile Appeares:** On every slide (up/down/left/right) a new tile with value 2 or 4 will be added in a random empty tile.

- **Game Over:** If all tiles are filled and there is no chance for merging, the game will be announced LOSS.

- **Game Wind:** If you manage to create a tile with value **2048** you win the game.

- **\*\*Board Size:** You can change the board size **from 2x2 till 100x100** (although, it can be set to YxY, considering gameplay experience it is locked to minimum to 2x2 and max to 100x100). 

#### [For better gameplay experience and visual clarity -- board size shall be to set max 10x10].

## Live:

- The game is currently live at: [2048.pradeept.dev](https://2048.pradeept.dev). 

---

<div align="center">Thank you for checking out this repository! :)</div>
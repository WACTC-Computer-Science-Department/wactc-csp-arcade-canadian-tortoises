# Git Cheat Sheet — Team Arcade Project

```
+------------------------------------------+
|  BEFORE YOU CODE (every time!)           |
|                                          |
|  git pull                                |
|                                          |
+------------------------------------------+
|  AFTER YOU CODE                          |
|                                          |
|  git add YourFile.js                     |
|  git commit -m "#tag-1 what you did"     |
|  git push                                |
|                                          |
+------------------------------------------+
```

## The Only 4 Commands You Need

| Command | What It Does |
|---------|-------------|
| `git pull` | Get your teammates' latest code |
| `git add File.js` | Stage your changes |
| `git commit -m "message"` | Save with a description |
| `git push` | Upload to GitHub |

## File Ownership

| File | Who | Builds |
|------|-----|--------|
| `GameObject.js` | Team lead | Base class |
| `Player.js` | Player dev | Movement, health |
| `Enemy.js` | Enemy dev | Types, AI, spawns |
| `Projectile.js` | Mechanics dev | Bullets, collision |
| `UI.js` | UI dev | HUD, menus, score |
| `GameManager.js` | Team lead | Game state, waves |

**Only edit YOUR file. Ask before touching someone else's.**

## Hashtags = Progress Tracking

Put a hashtag in your commit message to update the task board:

```
git commit -m "#plyr-1 player moves with arrow keys"
git commit -m "#enm-2 enemies spawn in waves"
git commit -m "#ui-1 done - health bar working"
```

- First use of `#tag` = task marked **Working**
- Second use or "done" = task marked **Done**

## OOP Game Hashtags Quick Reference

```
GameObject:  #go-1  #go-2  #go-3
Player:      #plyr-1  #plyr-2  #plyr-3
Enemy:       #enm-1  #enm-2  #enm-3
Projectile:  #prj-1  #prj-2
GameManager: #gm-1  #gm-2  #gm-3
UI:          #ui-1  #ui-2
```

## VS Code Source Control (No Terminal)

1. Click branch icon in left sidebar
2. Click **+** next to changed file to stage
3. Type commit message (with hashtag!)
4. Click checkmark to commit
5. Click **Sync Changes** to push + pull

## Fixing Problems

| Problem | Fix |
|---------|-----|
| Can't push | `git pull` then `git push` |
| Merge conflict | Ask teacher (or: open file, pick a version, save, add, commit) |
| Undo my changes | `git checkout -- File.js` |
| Don't see teammate's code | `git pull` |

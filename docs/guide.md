# Git & VS Code Guide for Team Arcade Project

## First Time Setup (every team member does this ONCE)

### Step 1: Clone your team's repo

1. Open **VS Code**
2. Press **Ctrl + `** (backtick) to open the terminal
3. Type:

```
git clone https://github.com/WACTC-Computer-Science-Department/wactc-csp-arcade-YOUR-TEAM-NAME.git
```

Replace `YOUR-TEAM-NAME` with your actual team name (e.g., `canadian-tortoises`).

4. **File > Open Folder** and select the folder you just cloned

### Step 2: Set your name (so commits show who did the work)

In the terminal:

```
git config user.name "YourGitHubUsername"
git config user.email "your-email@example.com"
```

---

## Daily Workflow

### BEFORE you start coding

```
git pull
```

This downloads your teammates' latest changes. **Always pull before you start working.**

If you get a merge conflict, ask your teacher for help. The best way to avoid conflicts is for each person to work on their own file.

### AFTER you make changes

```
git add Player.js
git commit -m "#plyr-1 add WASD movement"
git push
```

Replace `Player.js` with whichever file YOU changed, and use the right hashtag for the task you completed.

---

## The 3 Commands You Need

| Command | What it does | When to use it |
|---------|-------------|----------------|
| `git pull` | Download teammates' changes | **Every time** before you start coding |
| `git add filename.js` | Stage your file for commit | After you make changes |
| `git commit -m "#tag message"` | Save a snapshot with a message | After staging |
| `git push` | Upload your commit to GitHub | After committing |

### Quick version (all at once after making changes):

```
git add Player.js
git commit -m "#plyr-2 player shoots projectiles"
git push
```

---

## File Ownership — Who Works on What

Each team member should "own" one or two files. This prevents merge conflicts.

| File | Role | What You Build |
|------|------|---------------|
| **GameObject.js** | Team lead | Base class (shared — edit carefully!) |
| **Player.js** | Player dev | Movement, health, abilities, controls |
| **Enemy.js** | Enemy dev | Enemy types, AI, spawn patterns |
| **Projectile.js** | Mechanics dev | Bullets, collision, special effects |
| **UI.js** | UI dev | HUD, menus, score, health bars |
| **GameManager.js** | Team lead | Game state, waves, difficulty, win/lose |
| **sketch.js** | Shared | Main loop — only edit if everyone agrees |

**Rule: Only edit YOUR file(s).** If you need to change someone else's file, talk to them first.

---

## Hashtag Task Tracking

Your commit messages are tracked! When you include a hashtag like `#plyr-1` in your commit message, the platform automatically updates your task board.

### How It Works

1. **First time** you use a hashtag: task moves to **Working**
2. **Second time** you use it (or include "done"/"complete"): task moves to **Done**

### OOP Game Hashtags

**Space Invaders Remix:**

| Hashtag | Task |
|---------|------|
| `#go-1` | GameObject base class with position and size |
| `#go-2` | Add collidesWith() method |
| `#go-3` | Add isOffScreen() and alive flag |
| `#plyr-1` | Player movement with keyboard |
| `#plyr-2` | Player shooting |
| `#plyr-3` | Player health and lives |
| `#enm-1` | Basic enemy with movement |
| `#enm-2` | Enemy formations and waves |
| `#enm-3` | Boss enemy with phases |
| `#prj-1` | Projectile class and collision |
| `#prj-2` | Different projectile types |
| `#gm-1` | Game states (menu, playing, gameover) |
| `#gm-2` | Wave system and spawning |
| `#gm-3` | Scoring and difficulty |
| `#ui-1` | HUD (score, lives, health bar) |
| `#ui-2` | Menu and game over screens |

### Example Commit Messages

Good:
```
git commit -m "#plyr-1 player moves with WASD keys"
git commit -m "#enm-2 enemies spawn in formation pattern"
git commit -m "#ui-1 done - added score and health bar to HUD"
```

Bad:
```
git commit -m "stuff"
git commit -m "update"
git commit -m "fixed things"
```

---

## Using VS Code's Built-in Git (No Terminal Needed)

If you prefer clicking over typing:

1. Click the **Source Control** icon in the left sidebar (branch icon)
2. You'll see your changed files listed
3. Click the **+** next to a file to stage it (same as `git add`)
4. Type your commit message in the text box at the top (use hashtags!)
5. Click the **checkmark** to commit
6. Click **Sync Changes** (or the cloud icon) to push AND pull

---

## Common Problems

### "I can't push — rejected!"

Someone else pushed changes. Fix:
```
git pull
git push
```

### "Merge conflict!"

Two people edited the same file. This is why each person should own their file. To fix:

1. Open the file — VS Code highlights the conflicts
2. Choose **Accept Current** or **Accept Incoming** for each conflict
3. Save the file
4. `git add filename.js`
5. `git commit -m "merge fix"`
6. `git push`

Or ask your teacher for help.

### "I want to undo my last change"

```
git checkout -- filename.js
```

This throws away your changes and goes back to the last commit.

### "I don't see my teammates' changes"

```
git pull
```

Always pull before looking for changes!

---

## Live Preview with Codespaces

Your repo has a dev container configured. To use it:

1. Go to your repo on GitHub
2. Click **Code** > **Codespaces** > **Create codespace**
3. Wait for it to load
4. The game auto-opens with Live Server — you can code and see changes instantly

---

## Checklist Before Every Class

- [ ] `git pull` to get latest changes
- [ ] Work on YOUR assigned file
- [ ] Test your changes (open `index.html` in browser)
- [ ] `git add`, `git commit -m "#tag what you did"`, `git push`
- [ ] Check the task board on the platform to see your progress update

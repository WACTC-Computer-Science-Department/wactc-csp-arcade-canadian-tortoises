# Daily Workflow — Start to Finish

Follow these steps every class period. This is how real dev teams work.

---

## WHEN YOU SIT DOWN (First 5 minutes)

1. Open your team's repo on GitHub and launch your Codespace
2. Open the Terminal (`Ctrl+\``) and pull your teammates' latest work:
```
git pull
```
3. If you see a merge conflict, don't panic — ask your teacher for help
4. Go to the **Projects** tab and look at the board
5. Pick a task from **Todo**, drag it to **In Progress**, and assign yourself

---

## WHILE YOU WORK

- Save your files often (`Ctrl+S`)
- Test your game with Live Server (right-click `index.html` > **Open with Live Server**)
- Commit your progress at least once during class — don't wait until the end:
```
git add .
git commit -m "Short description of what you did"
git push
```
- If something breaks and you want to undo your changes to a file:
```
git checkout -- filename.js
```

---

## BEFORE YOU LEAVE (Last 5 minutes)

1. Save all files (`Ctrl+S`)
2. In the Terminal, run:
```
git add .
git commit -m "Describe what you worked on today"
git push
```
3. Update your project board:
   - Drag finished tasks to **Done**
   - If a task isn't finished, leave it in **In Progress** — you'll pick it up next class
4. If you're stuck on something, click on your task in the project board and leave a **comment** describing what's blocking you so your team knows

---

## QUICK REFERENCE

| Command | What it does |
|---------|-------------|
| `git pull` | Get your teammates' latest code |
| `git add .` | Stage all your changes |
| `git commit -m "message"` | Save a snapshot with a description |
| `git push` | Upload your commits to GitHub |
| `git status` | See what files you've changed |
| `git checkout -- file.js` | Undo changes to a file |

**Pro tip:** You can close a task automatically by putting the issue number in your commit message:
```
git commit -m "Add enemy spawning logic, closes #6"
```


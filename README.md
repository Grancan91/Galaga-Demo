# Galaga-Demo

# 1. Basic Structure
 ## Add Index.html
 ## Add Main.js
 ## Add Style.css

 ### Important
  - Link with Index.html
  - Add Defer property to Scripts
  - Test Links

# 2. Creating PlayField
 ## Add Playfield div to index.html
 ## Add Playfield styles.
 ## Get Playfield div from DOM on main.js
  - Test playfield.

# 3. Creating Player
 ## Add Player.js
 ## Link with index.html - Order is Important
 ## Add Class
  - Add Properties. (x, y, width, height, direcction, speed)
 ## Create new Player on main.js
  - Test createt Player on console.

# 4. Insert Player on playfield.
  - Add Sprite property.
  - Add method Insert in Player.js to set Id, and positions.
  - Update Player params -> get playfield.
  - With playfield use appendChild on Insert Method.
  - Add Styles to see Player in playField

# 5. Refactor
  - Add startGame function.
  - Add dinamic width and height player style

# 6. Add Player Movement
  - Add move function to Player.
  - Calcule playField limits.
  - Check nextPosition are between playField limits.
  - Apply to Sprite.

# 7. Add KeyEvent Listener to set Move
  - window.eventListener
  - Switch case

# 8. Smooth Movement
  - Implement use of interval.
  - Fix this isssue with self
  - event listener to reset direcction on keyup.

# 9. Creating Enemy and Insert
  - Create Enemy.js
  - Add properties.
  - Add Insert function.
  - Add Enemy styles.

# 10. Implement Random Enemy Spawn
  - Add CreateEnemy function
  - Obtain X coords to spawn with math.random
  - Save enemies on array.
  - SetInterval to continue enemySpawn.

# 11. Adding Movement to Enemies.
  - Add move to enemy.js
  - Set movement range.
  - set Interval for enemyMovement

# 12. Add Remove Enemy Function.
  - Add function to remove Enemy

# 13. Add Collision Logic
  - Create checkCollision Function
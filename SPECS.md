Schedule:

Fundamentals:

Day 1:
- Create framework (files, global vars) and PLAYER
- Ensure that when the program is run, it opens up a sort of test level, so all features can be easily checked

Day 2:
- Design player movement (Mark speed so it is easily adjustable for later)
- Check in test level

Day 3:
- Code for collectibles (which will be held in an array)
  * Animation/movement
  * Sprite if possible
  * vars
  * Colliders (Checks for player-collectible interactions)
  * Render function
- Implement multiple collectibles in the test level
- Make an overlay for number of collectibles left in the level, and number of collectibles collected by the player in the levels

Day 4:
- Code for enemies (which will be held in an array)
  * Animation/movement - Behavior
  * Sprite if possible
  * vars
  * Render function

Day 5:
- Create enemy colliders
  * Ensure that when the player touches an enemy, the player takes damage or loses
  * Precision here is important! Otherwise, the game can feel unfair to the player.

Day 6:
- Design maze components
  * The walls of the maze should be held in a positions array, in which each point is a corner of the maze
  * Maybe the points should be multiplied by a scalar value if the maze needs to be bigger or smaller?
  * The maze should be rendered using the context.beginPath(), context.moveTo(), context.lineTo(), and context.stroke() methods, which can be used to make a colored line follow the path of the maze positions array

Day 7:
- Complete maze components

Day 8:
- Limit player AND enemy movement so that they cannot pass through the walls of the maze.
  * You will need to check relative x and y values to set these boundaries
  * The code for player and enemy boundaries should be the same, just switching out player for enemy
  * Make sure the players and enemies start within the maze for each level

Day 9:
- Make a level transition and game over function
- When transitioning between levels, most global vars will have to be reset



Level Design & Extras:

Day 10:
- Design and implement all sprites that have not yet been made
- Finish overlay

Day 11:
- Create a maze! You have a whole day, so make it good and fun to play.

Day 12:
- Take a look at the "Writing Lyrics" section. If this seems feasible, work on it!
- Otherwise, design more levels or polish what exists for the current framework

Day 13*:
- If the "Writing Lyrics" section has been started, keep working on it!
- Otherwise, make sure the player controls feel fluid and intuitive

Day 14*:
- If the "Writing Lyrics" section has been started, keep working on it!
- Work on an intro and clean up the overlay

Day 15*:
- If the "Writing Lyrics" section has been started, keep working on it!
- Polish up the game. Clean up anything that needs it.






Feasibility Analysis:

Since there are two game modes (mazerunning, writing lyrics), this could take a lot of time to write; not only will it be hard to write each game mode on their own, but making them work together as one game could be extraordinarily challenging. For each game mode on their own, I think they could be done, although the lyric writing section could be quite difficult.

Essentially treating this game as a themed mazerunner with possibly a lyric-writing minigame or extra mode should be the most productive approach.

Notes:

This game has a lot of creative freedom; for example, spritework, movement feel, and physics can all be changed depending on ease of programming.

Features (Prioritized):

1. Mazerunning - An essential mechanic which is very clear
2. Level Progression - A mechanic which allows for more complex development
3. Writing lyrics - A mechanic which is difficult to implement


Mazerunning:

  This section will have:
  - a main character with constant movement, the direction of which is changed depending on player input
  • Variables per Character: x, y, sprite/design, collectibleCount, health, speed, direction (direction determines sprite direction and movement direction), clout/level
  - an array of enemies so that at least 1 enemy can be generated
    • Each enemy should have a behavior to somehow follow the Characters
    • Variables per Enemy: x, y, type, sprite/design, speed
  - an array of collectibles, such as coins, merch, etc.
    • Variables per Collectible: x, y, type, sprite/design
  - colliders for the collectibles and the enemies
    • These are methods which check the position of the player and see if it is within a certain range of the objects with which the object is colliding

  Questions:
  - Can the player somehow defeat enemies? Such as by obtaining a certain number of collectibles or firing a projectile?
  - How will bosses be enacted?

Level Progression:

  This section will have:
  - a level transition function
    • this will have the values that are unique to each level
    • this will not only need to reset the player position and collectible count, but also change the 'venue' (level design)
    • Each level needs:
      * Some array to store positions of the maze walls
      * Type of enemies to be generated
      * Collectible locations

  Questions:
  - How will different venues be represented? How will levels be generated?
  - What is the objective for moving on to another level? Number of collectibles obtained, time limit?

Writing Lyrics (Experimental):

  This section will have:
  - A lot of art to make the mode exciting
  - Pretty overlays with text
  - Text input capabilities by the player

  - Developer's Suggestion:
    * Check substrings at end of words for rhyme
    * Compare sentence structure for flow

  Questions:
  - When would this mode be triggered?
  ** How should the lyrics be judged? **




Global Vars:

GAME: level, canvas {width, height}, player2 (boolean), started, transition (Determine when the game is transitioning between levels), enemies[], collectibles[]

PLAYER: See vars outlined above

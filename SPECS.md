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

  Questions:
  - When would this mode be triggered?
  ** How should the lyrics be judged? **




Global Vars:

GAME: level, canvas {width, height}, player2 (boolean), started, transition (Determine when the game is transitioning between levels), enemies[], collectibles[]

PLAYER: See vars outlined above

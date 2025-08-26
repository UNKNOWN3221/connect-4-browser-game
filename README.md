user story:
1. as a user, I have the right to choose where I put the medal.
2. as a user, I want to see the board and the played medals and there color properly
3. as a user, I have to know who wins from a display sentence
4. as a user, I want too see the winning line of medals
5. as a user, I want to be able to try again

pseudocode:
1. Game Setup:
أ. Create a board that has 6 rows and 7 columns. *

ب. Keep track of the current player (e.g., Player Red or Player Yellow). 

ج. Create a message display to tell players whose turn it is.*

د. Make a Reset button to start a new game. *

2. Player's Turn:
أ. Wait for the current player to click on a column.

ب. Find the lowest open space in that column.

ج. Place the current player's colored token in that space.

د. Check if that move ended the game.

3. Check for a win:
أ. After each move, check for two things:
Winning: Did the last token placed create a four-in-a-row horizontally, vertically, or diagonally?
Drawing: Is the entire board now full of tokens?

ب. If a player has won, declare them the winner and stop the game.

ج. If the board is full, declare the game a draw and stop the game.

د. If the game is not over, switch the turn to the other player.

4. Resetting the Game:
When the "Reset" button is clicked, clear the board and start over from the "Game Setup" step.


# 🎮 Connect 4 Browser Game  

## 📝 Description  
A simple two-player Connect 4 game built with **JavaScript, HTML, and CSS**. Players take turns dropping red or yellow tokens into a 6x7 grid. The objective is to be the first to connect four tokens horizontally, vertically, or diagonally.  

## ℹ️ Background  
I chose Connect 4 because it’s a classic strategy game that’s both fun and easy to play. Building it gave me a chance to practice important programming concepts like:  
- Working with **arrays** to represent the game board.  
- Implementing **game logic** for win detection.  
- Using **DOM manipulation** to update the UI in real time.  

## 🚀 Getting Started  
- **Play the game here:** [Insert your deployed link – GitHub Pages/Netlify/Vercel]  
- **How to play:**  
  - Click on any column to drop your token.  
  - Players alternate turns (Red goes first).  
  - The game automatically detects and announces the winner or a tie.  
- **Planning materials:** [Insert your planning document / Trello board / wireframes link if you have one]  

## 🙌 Attributions  
- (Optional: Add links to any **sound effects, images, or libraries** you used. If everything was created from scratch, this section can be omitted.)  

## 💻 Technologies Used  
- JavaScript  
- HTML  
- CSS  

## 🔮 Next Steps (Stretch Goals)  
- Add a single-player mode with a computer AI opponent.  
- Improve design with animations and sound effects.  
- Add a scoreboard to track multiple games.  
- Make the game mobile-friendly.  
![alt text](<Screenshot 2025-08-27 134951.png>)
# Connect 4 Browser Game  

## Description  
A simple two-player Connect 4 game built with **JavaScript, HTML, and CSS**. Players take turns dropping red or yellow tokens into a 6x7 grid. The objective is to be the first to connect four tokens horizontally, vertically, or diagonally.  

## Background  
I chose Connect 4 because it's a classic strategy game that's both fun and easy to play. Building it gave me a chance to practice important programming concepts like:  
- Working with **arrays** to represent the game board.  
- Implementing **game logic** for win detection.  
- Using **DOM manipulation** to update the UI in real time.  

## Getting Started  
- **Play the game here:** [Click here to play the Connect 4 game](https://unknown3221.github.io/connect-4-browser-game/)  
- **How to play:**  
  - Click on any column to drop your token.  
  - Players alternate turns (Red goes first).  
  - The game automatically detects and announces the winner or a tie.  

### Planning Materials  

#### User Story:  
1. As a user, I have the right to choose where I put the medal.  
2. As a user, I want to see the board and the played medals and their color properly.  
3. As a user, I have to know who wins from a display sentence.  
4. As a user, I want to see the winning line of medals.  
5. As a user, I want to be able to try again.  

#### Pseudocode:  

**Game Setup:**  
- Create a board that has 6 rows and 7 columns.  
- Keep track of the current player (e.g., Player Red or Player Yellow).  
- Create a message display to tell players whose turn it is.  
- Make a Reset button to start a new game.  

**Player's Turn:**  
- Wait for the current player to click on a column.  
- Find the lowest open space in that column.  
- Place the current player's colored token in that space.  
- Check if that move ended the game.  

**Check for a Win:**  
- After each move, check for two things:  
  - Winning: Did the last token placed create a four-in-a-row horizontally, vertically, or diagonally?  
  - Drawing: Is the entire board now full of tokens?  
- If a player has won, declare them the winner and stop the game.  
- If the board is full, declare the game a draw and stop the game.  
- If the game is not over, switch the turn to the other player.  

**Resetting the Game:**  
- When the "Reset" button is clicked, clear the board and start over from the "Game Setup" step.  

## Attributions  
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
## 💻 Technologies Used  
- JavaScript  
- HTML  
- CSS  

## Next Steps (Stretch Goals)  
- Add a single-player mode with a computer AI opponent.  
- Improve design with animations and sound effects.  
- Add a scoreboard to track multiple games. 

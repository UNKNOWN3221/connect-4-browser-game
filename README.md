user story:
1. as a user, I have the right to choose where I put the medal.
2. as a user, I want to see the board and the played medals and there color properly
3. as a user, I have to know who wins from a display sentence
4. as a user, I want too see the winning line of medals
5. as a user, I want to be able to try again

pseudocode:
1. Define constants and variables needed for the game.
2. Define the app’s state variables (do not assign values yet).
3. Select and cache DOM elements that will be accessed multiple times.
4. Add delegated event listeners for user interactions (e.g., board clicks, play again button).
5. Invoke the init() function to initialize all state variables.
6. Invoke the render() function to update the DOM based on state variables.
7. Wait for the user to click on a column button:
    7.1. Update state variables based on the user’s move.
    7.2. Invoke render() to reflect changes in the DOM.
    7.3. Check for a win or draw.
8. Wait for the user to click the “Play Again” button:
    8.1. Invoke init() to reset all state variables.
    8.2. Invoke render() to update the DOM for a new game.
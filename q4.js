/**
 * Find the winner of the game
 * @param numbers {array of numbers} the numbers of marbles in each row
 * @returns {string} the name of the winner
 * 
 * On the mock, I rushed because I only had 15 minutes
 * In my original solution, I
 *  - Returned "Bob" if there was only one row in `numbers` as Alice would be unable to play
 *  - Created a variable for current player, with initial value of "Alice"
 *  - Created a variable to represent the board
 *  - Created a while loop
 *      - Condition: there existed a consecutive duplicate in `numbers` (`some` method)
 *      - Change value of current player to current player's name
 *      - For the first consecutive duplicate found, map board, remove the two duplicate values
 *  - Returned the current player's name --- the player who was last able to play
 * 
 * This time, my variable for current player has the initial value of "Bob"
 *  - No need to check if there is only one row in `numbers`
 *  - Value changes when a player is able to take their turn
 */
const solution = numbers => {
    // current player is Bob (changes when Alice takes her turn)
    let current = "Bob";
    
    let board = [...numbers];
    
    while (board.some((c, i) => c === board[i + 1])) {
        // variable to represent index of duplicate value
        let d = board.findIndex((val, index) => val === board[index + 1]);
        // set board to itself without found duplicates
        board = board.filter((v, i) => i !== d && i !== d + 1);
        // current player is whomever just took their turn
        if (current === "Bob") current = "Alice";
        else current = "Bob";
    }
    return current;
}

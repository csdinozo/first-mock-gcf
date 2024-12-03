/**
 * Return the index of the first day the total number of visits reaches a given target
 * @param visits {array of non-negative integers} the number of visitors each day
 * @param target {positive number} number of visitors to check if total has reached
 * @returns {integer} index of day where daily visits reaches target
 * 
 * I avoided using the higher-order array methods since they don't directly return an index or stop early
 * I chose to use a for loop to quickly terminate the function when target has been reached
 */
const solution = (visits, target) => {
    let total = 0; // total number of visits starts at zero
    for (let i = 0; i < visits.length; i++) {
        total += visits[i]; // adds visits of day at current index to total
        if (total >= target) return i; // returns current index if `target` has been reached
    }
    
    return -1; // returns -1 if `target` was not reached on any day in `visits`
}

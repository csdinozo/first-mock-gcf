/**
 * Finds the student with the highest average grade
 * @param records {array of strings} strings representing students in the format, "[name]: [grade]"
 * @returns {string} the name of the student with the highest average grade
 * 
 * My original solution was overcomplicated
 *  - I used similar variable names that were difficult to distinguish between.
 *  - It took me 40 minutes
 * The solution looked something like this:
 *  1. Create an object
 *  2. For/forEach loop to
 *      - Create an array out of each record, splitting at ": " to separate data
 *      - Check if a key of the student's name (zeroth index of the array) is in the object
 *          - If not, create a key with a value of object with a total, number of grades, and average
 *          - If so, increment the number of grades and add current assignment grade (first index of the array) to the total
 *  3. Loop through object keys to create a variable with the value of one student's name, representing the object with the highest value
 *  4. Loop through object keys again to change the value of the highest-average variable if a student with a higher average is found (sort)
 * 
 * I was really confused while working on this during the mock test 
    - I had not fully remembered the Object methods and spent a lot of time on MDN
 * 
 * Redoing this,
 *  - Used reduce instead of a for/forEach loop --- better higher-order method because creation of a summative object is necessary
 *  - Eliminated the calculation of average in the loop: not necessary until comparison of averages
 *  - Realized I wouldn't need separate loops to access Object keys (I wasn't sure if Object.keys() would be in the same order each time)
 *      - This time, I
 *          - Created a variable to represent the keys
 *          - Created a variable with a value of the zeroth-indexed name in keys to represent the student with the highest average
 *          - Looped through the keys to find a student with a higher average, changing the highest-average-name variable if found
 *          - Returned the name of the student with the highest average
 *  
 * When I condensed the original for loops for accessing keys, I
 *  - Made a more efficient solution
 *      - Did not loop through array with little benefit to reaching solution (not good for space-time complexity or efficiency)
 *  - Did not use the `sort` method as this would be less efficient, especially for larger datasets
 */
    const solution = records => {
        const classroom = records.reduce((students, c) => {
            let stuArr = c.split(": ");
            // create variables out of values to be repeated
            let name = stuArr[0];
            let grade = Number(stuArr[1]);
            
            // checks whether current student exists in students
            if (!students[name]) {
                //creates variable of key, name and object with keys of total score and number of score
                students[name] = {
                    total: grade,
                    scoreNum: 1
                };
            } else {
                // add current grade to total
                students[name].total += grade;
                // increment number of scores
                students[name].scoreNum++;
            }
            return students;
        }, {});
        
        // create variable for value to be repeated
        let names = Object.keys(classroom);
        // highest is the name of the first student in array of keys
        let highest = names[0];
        // loop through names
        for (const n of names) {
            // create variable for value to be repeated
            let student = classroom[n];
            // create `average` key for ease of reference
            student.average = student.total/student.scoreNum;
            if (student.average > classroom[highest].average) highest = n;
        };
        
        // return name of the student with the highest average
        return highest;
    }
    
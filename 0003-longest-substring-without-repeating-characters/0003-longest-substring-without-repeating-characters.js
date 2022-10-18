/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstring = (s) => {
    // reference to what is needed to update maxLen
    let tempMax = 0 
    // initalize at 0 
    let maxLen = 0;
    // use Map data structure due to ease of .get() and .set() methods 
    const map = new Map();   
  
    for(let i = 0; i < s.length; i++) { 
        const char = s[i]; 
      
        // check to see if character has been encountered before. if so, and the index was equal to or greater than the current tempMax, reset tempMax to index it was seen plus 1. 
        // important because if the index it was last seen is less than tempMax that means tempMax isn't incremented up, making it easier to use it to update our maxLen below
        // if it was encountered at a high index that means it will be harder to increase our maxLen since there is a repeat character pretty close to the current character
        // new characters don't result in tempMax being increased since the lookup returns undefined which will return false for the evaluation
        // this makes it easy for maxLen to be increased since that calculation looks at the index we are currently at which will always be pretty high since the loop always moves right
        if (map.get(char) >= tempMax) { 
            tempMax = map.get(char) + 1; 
        }

        // always update the index number we saw a character in the map 
        map.set(char, i); 
      
        // use tempMax to determine to update maxLen or not. adding 1 here offsets the addition of 1 when tempMax is recalculated
        // its used to determine if adding the current character is to our advantage or not as tempMax holds a reference to how far away our last repeat is
        // subtracting current index from how far away last repeat gives us that difference and the 1 says to update or not. note it has to be greater for it to be worth updating
        maxLen = Math.max(maxLen, i - tempMax + 1) 
    }

    return maxLen
}
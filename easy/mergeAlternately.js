let word1 = "ab";
let word2 = "pqrs";

const mergeAlternately = (word1, word2) => {
    let mergedString = "";

    for(let i = 0; i < (word1.length > word2.length ? word1.length : word2.length); i++) {
        if(word1[i] !== null && word1[i] !== undefined) {
            mergedString += word1[i];
        }

        if(word2[i] !== null && word2[i] !== undefined) {
            mergedString += word2[i];
        }
    }

    return mergedString;
}

console.log(mergeAlternately(word1, word2));
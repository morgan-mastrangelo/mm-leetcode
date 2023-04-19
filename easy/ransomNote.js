let ransomNote = "bg", magazine = "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj";

const canConstruct = (ransomNote, magazine) => {
    let flag = [];

    for(let i = 0; i < ransomNote.length; i++) {
        for(let j = 0; j < magazine.length; j++) {
            if(magazine[j] === ransomNote[i] && flag.indexOf(j) === -1) {
                flag.push(j);
                break;
            }
        }
    }

    return ransomNote.length === flag.length;
}

console.log(canConstruct(ransomNote, magazine));
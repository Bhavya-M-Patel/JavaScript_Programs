const vowels = new Set(["a", "e", "i", "o", "u"]);

/**
 * @param {String} ch to be checked is it vowel
 * @returns {Boolean} does Vowels set have char or not
 * Accepts the charecter and return true if it present in vowels set else returns false
 */
function isVowel(ch) {
    return vowels.has(ch.toLowerCase());
}


/**
 * @param {String} ch to be repeated
 * @param {Number} Count 
 * @returns {String} containg Count time repeated ch
 */
function repeatVowels(ch, Count) {
    ch += "";
    return ch.repeat(Count);
}


/**
 * @param {String} str
 * @param {Number} repeatCount
 * @returns {String} with repeated vowels repeatCount times
 */
function longText(str, repeatCount) {

    //Spreading the each charecter of str as array element
    let StrArray = [...str];

    //Iterate over each item and if it is vowel replace it with repeated charecter
    StrArray.map((item, index) => {

        if (isVowel(item)) {

            //removing current item and inserting item that is repeated repeatcount times
            StrArray.splice(index, 1, repeatVowels(item, repeatCount));
        }

    });

    return StrArray.join("");
}g
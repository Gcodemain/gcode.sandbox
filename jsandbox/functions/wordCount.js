/* Counts the number of words in a string */
function wordCount(str) {
    let indexNumberOfWords = 0;
    for (const i of str.split(' ')) {
        if (i.length > 0) {
            indexNumberOfWords++;
        }
    }
    return indexNumberOfWords;
}
export default(wordCount);
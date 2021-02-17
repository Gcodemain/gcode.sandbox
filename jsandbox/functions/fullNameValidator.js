/*
TODO: - refactor this function
      - add tests
*/
function fullNameValidator(name) {
    let standardFormat = name.toLowerCase().trim();
    let dataName = [];

    /* adding to an array without spaces */
    for (const i of standardFormat.split(' ')) {
        if (i.length > 0) {
            let r = i.replace(i[0], i[0].toUpperCase());
            dataName.push(r)
        }
    }
    let indexNumberOfWords = dataName.length;
    /* the logic of capital letters */
    if (indexNumberOfWords <= 3) {
        return dataName.join(' ');
    } else if (indexNumberOfWords >= 4) {
        let data = dataName[3].toLowerCase();
        dataName.pop();
        dataName.push(data);
        return dataName.join(' ');
    }
}
export default(fullNameValidator)
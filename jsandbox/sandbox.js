const names = ['Иванов Иван Иванович', 'иванов иван иванович', 'Иванов  Иван  иванович'];

let name_01 = names[0];
let name_02 = names[1];
let name_03 = names[2];

// let t = name_01.split(' ');
//
// for (let el of t) {
//     if (el !== '') {
//         let r = el.replace(el[0], el[0].toUpperCase())
//     }
// }

function fullNameValidator(name) {
    name = name.split(' ');
    let result = [];
    for (let element of name) {
        if (element !== '') {
            let r = element.replace(element[0], element[0].toUpperCase());
            result.push(r)
        }
        return result
    }
}

let res = fullNameValidator(name_03)
res
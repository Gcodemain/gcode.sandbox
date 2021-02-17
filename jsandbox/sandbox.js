const text = 'Кузнецов Евгений Евгеньевич оглы';

const up = text.toLowerCase();

let mass = []
for (const i of up.split(' ')) {
    if (i.length > 0) {
        let r = i.replace(i[0], i[0].toUpperCase());
        mass.push(r)
    }
}
let result = mass[0].concat(' ', mass[1], ' ', mass[2], ' ', mass[3])
result
console.log(result);

function validSpace(name) {
    let n = name.length;
    let res = ''
    let index = 0;
    while (index !== n) {
        let res = name[n].concat(' ', name[n])
        n++
    }
    console.log(res);
}

let data = validSpace(mass)
console.log(data);
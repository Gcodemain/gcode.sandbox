const text = 'Кузнецов Евгений Евгеньевич оглы';

const up = text.toLowerCase();

let mass = []
for (const i of up.split(' ')) {
    if (i.length > 0) {
        let r = i.replace(i[0], i[0].toUpperCase());
        mass.push(r)
    }
}

let mStr = mass.join(' ');
mStr





// Rotasi Array

const x = [7, 2, 4, 1, 6, 8, 9];
const geser = (a, b) => {
    for (let i = 0; i < b; i++) {
        a.unshift(a[a.length - 1]);
        a = a.slice(0, a.length - 1);
    }
    console.log(a);
}

geser(x, 3);
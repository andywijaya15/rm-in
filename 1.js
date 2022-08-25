// Rotasi Array

const x = [7, 2, 4, 1, 6, 8, 9];
const geser = (a, b) => {
    let result = a;
    for (let i = 0; i < b; i++) {
        result.unshift(result[result.length - 1]);
        result = result.slice(0, result.length - 1);
    }
    console.log(result);
}

geser(x, 3);
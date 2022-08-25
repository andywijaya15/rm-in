const X = [3, 4, 4, 4, 4, 4, 3, 2, 3, -1, 3, 3];
const mode = (a) => {
    let banyak = [];
    let count = [];
    let maxIndex = 0;
    let i = 0;
    a.forEach(each => {
        number = each;
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
        i++;
    });

    for (i in count) {
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                banyak.push(Number(i));
            }
        }
    }

    console.log(banyak);
}

mode(X);
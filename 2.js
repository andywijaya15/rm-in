const X = [3, 4, 3, 2, 3, -1, 3, 3];
const mode = (a) => {
    let banyak = [];
    let count = [];
    let maxIndex = 0;
    let i = 0;
    a.forEach(each => {
        number = each;
        count[number] = (count[number] || 0) + 1;
        // console.log({ each: each, count: count[number] });
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
        i++;
    });
    console.log(count);

    count.forEach(each => {
        console.log(each);
    });

    // console.log(maxIndex);
}

mode(X);
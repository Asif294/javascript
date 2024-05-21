function duplicates(numbers) {
    return numbers.filter((item,
        index) => numbers.indexOf(item) === index);
}
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
console.log(duplicates(numbers));

module.exports = (array) => {
    let min = 0;
    let max = array.length - 1;
    let random = Math.floor(Math.random() * (1 + max - min) + min);
    return `${array[random].quote}   ::: ${array[random].author} :::`;
}
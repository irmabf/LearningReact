console.log('utils is running');

export const square = (x) => x * x;

export const add = (a, b) => a + b;

// const substract = (a, b) => a - b;

// //export default cannot come before a variable declaration
// export default substract

export default (a, b) => a - b;

// exports - default export - named export

 //export {};
//This is not an object definition,
//what we put inside of the {} are reference to things that we want to export

//You can only have ONE default export

//export { square, add, substract as default };
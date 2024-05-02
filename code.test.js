// based on graph search test code, which was originally written by Jacob Johnson

const fs = require('fs');
const JSVerify = require('jsverify');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const testset = [
    { graph1: [[1, 5], [0, 2, 3, 4], [1], [1, 4, 6], [1, 3], [0], [3]], graph2: [[5, 1], [4, 3, 0, 2], [1], [4, 1, 6], [3, 1], [0], [3]], expected: true },
    { graph1: [[ 4, 5 ],[ 4, 5 ],[ 5, 6, 7 ],[ 5, 6 ],[ 0, 1, 7 ],[ 0, 1, 2, 3 ],[ 2, 3 ],[ 2, 4 ]], graph2: [[ 4, 5 ],[ 4, 5 ],[ 6, 7, 5 ],[ 6, 5 ],[ 0, 7, 1 ],[ 3, 0, 2, 1 ],[ 3, 2],[ 4, 2 ]], expected: true },
    { graph1: [[ 4, 5 ],[ 4, 5 ],[ 5, 6, 7 ],[ 5, 6 ],[ 0, 1, 7 ],[ 0, 1, 2, 3 ],[ 2, 3 ],[ 2, 4 ]], graph2: [[5, 1], [4, 3, 0, 2], [1], [4, 1, 6], [3, 1], [0], [3]], expected: false },
    { graph1: [[1, 5], [0, 2, 3, 4], [1], [1, 4, 6], [1, 3], [0], [3]], graph2: [[1], [0, 2, 3, 4], [1], [1, 4], [1, 3]], expected: false }
];

testset.forEach(({ graph1, graph2, expected }, index) => {
    let testWorks = (JSON.stringify(are_isomorphic(graph1, graph2)) === JSON.stringify(expected));
    console.log("\ntest:",index++, testWorks ? "Success" : "Failed");
    if(!testWorks){ throw console.log("Failed with values:", "\n First graph: ", JSON.stringify(graph1), "\n Second graph: ", JSON.stringify(graph2), "Expected Result:", expected, "\nGot Result:", are_isomorphic(graph1, graph2));}
});
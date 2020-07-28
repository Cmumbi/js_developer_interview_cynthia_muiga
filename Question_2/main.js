/* Flatten this array out : [1,2,[3,4,[5,6],7,[8,9]]]
Output should be 1,2,3,4,5,6,7,8,9
Please don't use any library functions for this problem. 
============================================================================= */

const myArray = [1,2,[3,4,[5,6],7,[8,9]]];

// Since the provided array is an infinitely nested array, pass 'Infinity'

myArray.flat(Infinity);
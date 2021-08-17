import {CircularBuffer} from './circularBuffer';

export let circularBuffer = new CircularBuffer(3);
circularBuffer.push('a');
circularBuffer.push('b');
circularBuffer.push('c');

// should print a,b,c
console.log(`0 element: ${circularBuffer.get(0)}; 1 element: ${circularBuffer.get(1)}; 2 element: ${circularBuffer.get(2)};`);

console.log('Last element: '+circularBuffer.getLast(0)); // should print 'c'
circularBuffer.push('d');

// should print d,b,c
console.log(`0 element: ${circularBuffer.get(0)}; 1 element: ${circularBuffer.get(1)}; 2 element: ${circularBuffer.get(2)};`);
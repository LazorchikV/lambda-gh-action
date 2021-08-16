import { APIGatewayProxyEvent, APIGatewayProxyResultV2, Handler } from 'aws-lambda';
import * as _ from 'lodash';

let Airtable = require('airtable');
let base = new Airtable({apiKey: 'keylMkRVCV25NxOBl'}).base('appW1Vv1p4IHxtiWQ');


base('tblX1jGmYZoqyHrlE').select({
    // Selecting the first n records in All furniture:
    maxRecords: 14,
    view: "MainTable"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.
    records.forEach(function(record) {
       console.log('Title', record.get('title')); 
       console.log('id', record.get('ID')); 
    });
    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();
}, function done(err) {
    if (err) { console.error(err); return; }
});
//OUTPUT
/*
function heyhey(el){
    
}

*/
class CircularBuffer {
    constructor(bufferLength) {
      this.buffer = [];
      this.pointer = 0;
      this.bufferLength = bufferLength;
    }
    
    push(element) {
      if(this.buffer.length === this.bufferLength) {
         this.buffer[this.pointer] = element;
      } else {
         this.buffer.push(element);
      }
      this.pointer = (this.pointer + 1) % this.bufferLength;
    }
  
    get(i) {
      return this.buffer[i];
    }
    
    //Gets the ith element before last one 
    getLast(i) {
      return this.buffer[this.pointer+this.bufferLength-1-i];
    }
  
  }

//To use it:

let circularBuffer = new CircularBuffer(3);
circularBuffer.push('a');
circularBuffer.push('b');
circularBuffer.push('c');

// should print a,b,c
console.log(`0 element: ${circularBuffer.get(0)}; 1 element: ${circularBuffer.get(1)}; 2 element: ${circularBuffer.get(2)};`);

console.log('Last element: '+circularBuffer.getLast(0)); // should print 'c'
circularBuffer.push('d');

// should print d,b,c
console.log(`0 element: ${circularBuffer.get(0)}; 1 element: ${circularBuffer.get(1)}; 2 element: ${circularBuffer.get(2)};`);

/*
heyhey(arr)
setTimeout(heyhey, 1000, el);
*/
////////////////////////////////

function printNumbers(from, to) {
  let current = from;

  setTimeout(function go() {
    alert(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}

// использование:
printNumbers(5, 10);




export const handler: Handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResultV2> => {
  const response = {
    statusCode: 200,
    body: "Hello AWS! JSON.stringify(body)"
  };
  return response;
};

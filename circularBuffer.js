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
export default CircularBuffer;
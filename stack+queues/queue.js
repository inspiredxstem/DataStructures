// What is a Queue? -> FIFO (First In First Out) Data Structure

// Building a Queue with an Array
let queue = [];
// can use shift and push, or unshift and pop
queue.push("FIRST")
queue.push("SECOND")
queue.push("THIRD") // -> ["FIRST", "SECOND", "THIRD"]
queue.shift()

queue.unshift("FIRST")
queue.unshift("SECOND")
queue.unshift("THIRD") // -> ["THIRD", "SECOND", "FIRST"]
queue.pop()


/* 
BIG O NOTATION:
    Insertion: O(1)
    Removal: O(1)
    Searching: O(1)
    Deletion: O(1)
*/
// A Queue Class
class Node {
    constructor(val) {
        this.value = val;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // accepts a value and creates a new node
    // if there are no nodes, set the node to be the first and last property of the queue
    // otherwise set the next property on the current last to be the newNode, and then
    // set the last property of the queue to be that node
    enqueue(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        return ++this.size;
    }

    // if there is no first property, return null
    // store the first property in a temp variable
    // see if the first is the same as the last, if so then set the first and last to be null
    // if there is more than 1 node, set the first property to be the next property of first
    dequeue(){
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last){
            this.last = null;
        } 
        this.first = this.first.next
        
        this.size--;

        return temp.value;
    }
}
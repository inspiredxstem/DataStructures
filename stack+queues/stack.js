// What is a Stack? -> A LIFO (Last In First Out) data structure (e.g. think about a stack of plates)
// the last element added to the stack will be the first element removed
// Where Stacks are Used? -> Managing function invocations, UNDO/REDO(Like PhotoShop undo/redo), Routing (the history object)

// Array implementation
let stack = [];
stack.push("google");
stack.push("youtube");
stack.push("twitter");
stack.pop(); 

// BIG O Notation disproves of this method as you have to re-index every other items in the stack (e.g. INEFFICIENT)
stack.unshift("create new file");
stack.unshift("resized file");
stack.shift();

/* 
BIG O NOTATION:
    Insertion: O(1)
    Removal: O(1)
    Searching: O(n)
    Access: O(n)
*/
// Linked List Implementation
class Node {
    constructor(node) {
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // accepts a value and creates a new node
    // if there are no nodes, set the first and last property to be the newNode
    // if there is at least 1, create a variable that stores the current first property on the stack
    // reset the first property to be the newly created node
    // set the next property on the node to be the previously created variable
    // increment the stack by 1
    push(val) {
        let newNode = new Node(val);
        if(this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    //if there are no nodes, return null
    // create a temp variable to store the first property on the stack
    // if there is only 1 node, set the first and last node to be null
    // if there is more than 1, set the first property to be the next property on the current first
    // decrement by 1
    // return the value of the node removed
    pop(){
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next
        this.size--;

        return temp.value;
    }
}
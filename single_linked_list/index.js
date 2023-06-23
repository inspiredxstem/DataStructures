// piece of data - val
// reference to next node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        //has a pointer to the head
        // has a pointer to the tail
        // and a length
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Accepts a value
    // Create a new node
    // If there is no head property on the list, set the head
    // and tail to the newly created node
    // Otherwise set the next property on the tail to be the new node
    // and set the tail property to be the newly node
    push(val) {
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
        return this;
    }

    // pop: removes a node from the end of the LL
    // check if there is no node (if there is no head => !this.head)
    // loop through until we reach the tail
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;

        // while there is something
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;   
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }     
        return current;
    }
}

var list = new SinglyLinkedList();
list.push("Hello")
list.push("Goodbye")
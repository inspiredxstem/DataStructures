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

    // shift: removing a new node from the beginning of LL
    // if there are no nodes, return undefined
    // store the current head in a temp variable
    // set the new head property to the current.next
    shift(){
        if(!this.head) return undefined;
        let current_head = this.head;
        this.head = current_head.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }   
        return current_head;
    }

    // unshift: adding a new node to the beginning of LL
    // accepts a value -> create a new node with new val
    // if there is no head value, set the head and tail to the newly created node
    // otherwise set the newly created node's next to be the current head property
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
         } else {
            newNode.next = this.head;
            this.head = newNode;
         }
         this.length++;
         return this;
    }


    // get: retrieve a node by its' position in a LL
    // function should accept an index
    // if index is < than 0 or > than or equal to the length of the LL, return null
    // loop through the list until we reach the index and return the node at the specific index
    // use a counter variable
    get(index){
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
}

var list = new SinglyLinkedList();
list.push("Hello")
list.push("Goodbye")
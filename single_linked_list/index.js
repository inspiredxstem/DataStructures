// piece of data - val
// reference to next node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Big O of Singly Linked List
// Insertion: O(1)
// Removal: either O(1) or O(n)
// Search: O(n)
// Access: O(n)


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

    // set: change the value of a node based on its' position in a LL
    // accepts an index and a value
    // use the get function to find the node
    // if node not found, return false
    // if found, set the value of that node to be the value passed and return true
    set(index, val){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    // insert: adding a node to the LL at a specific position
    // accepts an index and a value
    // if index is < than or > than the length, return false
    // if index is equal to the length, push a new node to the end of the LL
    // if index is 0, unshift a new node to the start of the list
    // use the get method, access the node at the index - 1
    // set the next property on the node to be the new node
    // set the next property on the new node to be the previous next
    // increment the length
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        let newNode = new Node(val);
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    // remove: remove a node at a specific position
    // if index is less than or greater than the length, return undefined
    // if index is the same as lenght-1, pop
    // if index is 0, shift
    // otherwise, use the get method, access the node at the index - 1
    // set the next property on that node to be the next of the next node
    // decrement the length
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === this.length - 1) return this.pop(); // remove the last item
        if(index === 0) return this.shift(); // remove the first node
        let previousNode = this.get(index - 1);
        let removedNode = previousNode.next;
        previousNode.next = removedNode.next;
        this.length--;

        return removedNode;
    }

    // reverse: reverse the linked list IN PLACE (do not make a copy/duplicate)
    // swap the head and tail
    // create a variable called next and previous
    // create a varaible called current node and initialize it to the head property
    // loop through the list
    // set next variable to be the next property on whatever the node variable is
    // set the next property on the node to be whatever previous is
    // set previous to be the value of the node variable
    // set the node variable to be the value of the next variable
    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        // we want previous to be null because the tail.next must be null
        let previous = null;
        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = previous;
            previous = node;
            node = next;
        }
        return this;
    }

    
    print(){
        let arr = [];
        let current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr)
    }
}


var list = new SinglyLinkedList();
list.push(100)
list.push(200)
list.push(300)
list.push(400)
list.push(500)

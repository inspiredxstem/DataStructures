class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // create the new node
    // if head is null, set the head and tail to be the new node
    // else, set the next property on the tail to be the new node
    // set the previous property on the new node to be the tail
    // set the tail to be the new node
    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // if there is no head/tail, return undefined
    // store the current tail in a temporary variable
    // if the length of DLL is 1, set the head and tail to be null
    // update the tail to be the previous node
    // set the newTail's next to null
    pop(){
        if(!this.head) return undefined;
        let temp = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null;
        }

        this.length--;
        return temp;
    }

    // if length is 0, return undefined
    // store the current head property in a variable (call it oldHead)
    //if the length is one, set the head and tail to be null
    // update the head to be the next of the old head
    // set the head's previous property to null
    // set the oldHead's next property to null
    shift(){
        if(!this.head) return undefined;
        let oldHead = this.head;
        if(this.length === 1){  
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    // create a new node
    // if the length is 0, set the  head and tail to be the newNode
    // otherwise, set the prev property on the head to be the newNode
    // set the next property on the newNode to be the head property
    // update the head to be the newNode
    unshift(val){
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
}
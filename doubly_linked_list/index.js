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

    // if the index is less than 0 or greater than or equal to the length, return null
    // if the index is less than or equal to half the length of the list, loop through the list
    // starting from the head and loop towards the middle, returning the node once found
    // if the index is greater than half the length of the list, loop through the list
    // starting from the tail and loop towards the middle, return the node once found
    get(index){
        if(index < 0 || index >= this.length) return null;
        // OPTIMIZED WAY OF GET FUNCTION
        let count, current;
        if(index <= this.length/2){
            count = 0;
            current = this.head;
            while(count != index){
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(count != index){
                current = current.prev;
                count--;
            }
        }
        return current; 

        // UNOPTIMIZED WAY OF GET FUNCTION
        // let count = 0;
        // let current = this.head;
        // while(count != index){
        //     current = current.next;
        //     count++;
        // }
        // return current;
    }

    // create a variable which is the result of the get method at the index passed
    // if the get method returns a valid node, set the value of the node to be the value passed
    // return true
    // otherwise return false
    set(index, val){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.value = val;
            return true;
        }
        return false;
    }

    // if the index is less than 0 or greater than or equal to the length of DLL, return false
    // if index is 0, UNSHIFT
    // if the index is the same as the length, PUSH
    // use the get method to access the index - 1
    // set the next and prev properties on the correct nodes to link everything together
    // increment the length
    // return true
    insert(index, val){
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let beforeNode = this.get(index - 1) ;
        let afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;

        this.length++;
        return true;
    }

    // if the index is less than 0 or greater than or equal to the length of DLL, return undefined
    // if index is 0, SHIFT
    // if the index is the same as the length-1, POP
    // otherwise use the get method to retrieve the node to be removed
    // update the next and prev property to remove the found node from the list
    // set next and prev to null on the found node
    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        let removedNode = this.get(index);  
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;

        this.length--;
        return removedNode;
    }

    reverse(){
        let temp = null;
        let current = this.head;

        while(current !== null){
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }

        if (temp !== null) { 
            this.head = temp.prev; 
        }
        
        return this;
    }
}
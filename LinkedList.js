class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null; 
    }
}


export default class LinkedList {
    constructor() {
        this.head = null; 
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode; 
            return;
        }
        let current = this.head;
        while (current.nextNode) {
            current = current.nextNode;
        }
        current.nextNode = newNode; 
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.nextNode = this.head; 
        this.head = newNode; 
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++; 
            current = current.nextNode; 
        }
        return count;
    }

    getHead() {
        return this.head; 
    }

    tail() {
        if (!this.head) return null; 
        let current = this.head;
        while (current.nextNode) {
            current = current.nextNode; 
        }
        return current; 
    }

    at(index) {
        let current = this.head;
        let count = 0;

        while (current) {
            if (count === index) return current; 
            count++;
            current = current.nextNode; 
        }
        return null; 
    }

    pop() {
        if (!this.head) return; 

        if (!this.head.nextNode) { 
            this.head = null; 
            return;
        }

        let current = this.head;
        while (current.nextNode.nextNode) {
            current = current.nextNode; 
        }

        current.nextNode = null; 
    }

    contains(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) return true; 
            current = current.nextNode;
        }
        return false; 
    }

    find(value) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.value === value) return index; 
            current = current.nextNode;
            index++;
        }
        return null; 
    }

    toString() {
        let current = this.head;
        let result = '';

        while (current) {
            result += `( ${current.value} ) -> `; 
            current = current.nextNode; 
        }

        return result + 'null'; 
    }
}

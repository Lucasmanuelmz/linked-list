function createNode(value) {
    return {
        value,
        next: null,
    }
}

function linkedList() {
    return {
        head: null,

        push(value) {
            const newNode = createNode(value);
            if (this.head === null) {
                this.head = newNode;
            } else {
                let lastNode = this.head;
                while (lastNode.next !== null) {
                    lastNode = lastNode.next;
                }
                    lastNode.next = newNode
                }
            },
        
        
        pop(value) {
        if (this.head === null) {
            return;
            }

            if (this.head.value === value) {
                this.head = this.head.next;
                return;
            }

            let currentNode = this.head;
            if (currentNode !== null && currentNode.next.value !== value) {
                currentNode = currentNode.next
            }

            if (currentNode.next !== null) {
               
                currentNode.next = currentNode.next.next;
            }
    },

        display() {
            let currentNode = this.head;
            while (currentNode.next !== null) {
                console.log(currentNode.value)
                currentNode = currentNode.next
            }
        }
    }   
}

const myList = linkedList();
myList.push(1);
myList.push(2);
myList.push(3);
myList.push(4);
myList.push(5);
myList.push(6);
console.log('Lista Original: ');
myList.display()
myList.pop(1);
console.log('Nova lista ficou assim: ')
myList.display();
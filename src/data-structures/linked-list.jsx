// function CustomNode<t>(data: t) {
//     this.data = data as t;
//     this.next = null;
// }
function CustomNode(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
}

export class SinglyLinkedList {
    // head: { data: any; next: any } | null;
    // tail: { data: any; next: any } | null;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addNode(data) {
        const node = new CustomNode(data);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.previous = this.tail;
            // sets the next of the previous object in tail to node
            this.tail.next = node;
            // sets tail to the next object
            this.tail = node;
        }
        this.length++;
    }

    removeNode(indexData) {
        let currentNode = this.head;
        while (currentNode) {
            if (indexData === currentNode.data) {
                if (indexData === this.head.data) {
                    if (this.head === this.tail) {
                        this.tail = null;
                    }
                    this.head = this.head.next || null;
                    this.head.previous = null;
                } else {
                    // let previousNode = this.head;
                    // let currentNode = this.head.next;

                    if (currentNode === this.tail) {
                        this.tail = currentNode.previous;
                    }

                    if (currentNode.next) {
                        currentNode.next.previous = currentNode.previous;
                    }

                    currentNode.previous.next = currentNode.next || null;
                    currentNode = currentNode.next;

                    this.length--;
                    break;
                }
            } else {
                // previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
    }

    insertAfter(indexData, data) {
        let currentNode = this.head;
        let nextNode = currentNode?.next;

        while (currentNode) {
            if (currentNode.data === indexData) {
                const newNode = new CustomNode(data);
                if (currentNode === this.tail) {
                    this.tail = newNode;
                }
                if (nextNode) {
                    nextNode.previous = newNode;
                }
                newNode.next = currentNode.next;
                newNode.previous = currentNode;
                currentNode.next = newNode;
                this.length++;
                break;
            } else {
                currentNode = currentNode.next;
                nextNode = currentNode.next;
            }
        }
    }
}

const newLinkedList = new SinglyLinkedList();
newLinkedList.addNode(1);
newLinkedList.addNode(2);
newLinkedList.addNode(4);
newLinkedList.insertAfter(4, 5);
newLinkedList.insertAfter(2, 3);
newLinkedList.removeNode(5);
// newLinkedList.removeNode(22);
// newLinkedList.removeNode(1);
// newLinkedList.removeNode(2);
// newLinkedList.addNode(33);
// newLinkedList.addNode(4);

console.log(newLinkedList);

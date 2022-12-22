class Node {
    constructor(id) {
        this.id = id;
        this.neighbors = new Set();
    }

    connect(node) {
        if (node !== this) {
            this.neighbors.add(node);
            node.neighbors.add(this);
        }
    }
}

class RandomGraph {
    constructor(size) {
        this.nodes = new Set();

        // Create Nodes
        for (let i = 0; i < size; ++i) {
            this.nodes.add(new Node(i));
        }

        // Randomly connect nodes
        const threshold = 1 / size;
        for (const x of this.nodes) {
            for (const y of this.nodes) {
                if (Math.random() < threshold) {
                    x.connect(y);
                }
            }
        }
    }

    // This is just for debug purposes
    print() {
        for (const node of this.nodes) {
            const ids = [...node.neighbors].map((n) => n.id).join(',');
    
            console.log(`${node.id}: ${ids}`);
        }
    }

    isConnected() {
        const visitedNodes = new Set();
       
        function* traverse(nodes) {
            for (const node of nodes) {
                if (!visitedNodes.has(node)) {
                    yield node;
                    yield* traverse(node.neighbors);
                }
            }
        }
       
        // Grab first node in the Set
        const firstNode = this.nodes[Symbol.iterator]().next().value;
       
        // Use the recursive generator to iterate every node
        for (const node of traverse([firstNode])) {
            visitedNodes.add(node);
        }
       
        return visitedNodes.size === this.nodes.size;
    }
}

const g = new RandomGraph(6);
g.print();

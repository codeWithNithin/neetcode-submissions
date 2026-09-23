class MyHashMap {
    constructor() {
        this.map = {};
    }

    put(key, value) {
        this.map[key] = value;
    }

    get(key) {
        if (this.map[key] === undefined) {
            return -1;
        }

        return this.map[key];
    }

    remove(key) {
        delete this.map[key];
    }
}
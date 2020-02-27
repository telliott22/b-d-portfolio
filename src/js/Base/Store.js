import EventEmitter from 'events'

export default class Store extends EventEmitter {

    constructor() {
        super()

        this.state = this.initState();
    }

    initState() {
        return {
            storedObject: 'test'
        }
    }

    update(key, value) {
        this.state[key] = value;

        console.log(this.state);
    }

    commit() {

    }

}

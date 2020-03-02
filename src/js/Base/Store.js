import EventEmitter from 'events'
import initialState from '../initialState'

export default class Store extends EventEmitter {

    constructor() {
        super()

        this.state = initialState()
        this.components = []

    }

    update(key, value) {

        this.state[key] = value;

        //Fire event to re render components that have this value
        $store.emit('updatedState', key);

    }

    commit() {

    }

}

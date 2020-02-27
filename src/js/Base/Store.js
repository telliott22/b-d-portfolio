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
        this.updateBinds(key);

    }

    updateBinds(key) {

        let elements = document.querySelectorAll(`[data-bind=${key}]`);

        elements.forEach(element => {
            element.textContent = $store.state[key]
        });

    }

    commit() {

    }

}

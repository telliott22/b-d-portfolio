import EventEmitter from 'events'

export default class Store extends EventEmitter {

    constructor() {
        super()

        this.state = this.initState();
        this.components = []

    }


    // set state(value) {

    //     console.log('setter', value);

    //     // this.state = value
    // }

    // get state() {

    // }

    initState() {
        return {
            heroText: 'Starting text'
        }
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

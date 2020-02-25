import EventEmitter from 'events'

export default class Hero extends EventEmitter {

    constructor(options) {
        super()
        // this.el = options.el
        this.render()
    }

    render() {

        const element = document.querySelector('[role=hero]');

        element.innerHTML = this.markup();

    }

    markup() {
        return `
          <h1>Hello, World!</h1>
        `;
    }

    destroy() {
        this.el.parentNode.removeChild(this.el)
    }
}

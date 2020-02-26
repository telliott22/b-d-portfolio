import EventEmitter from 'events'

export default class Component extends EventEmitter {

    constructor({
        element
    }) {
        super()

        this.name = this.constructor.name;
        this.element = element

        console.log(this.element);

        this.data = this.data();
        this.props = this.initProps();
        this.componentStore = [];
        this.render()
    }

    static getComponentStore() {
        return this.componentStore;
    }

    static pushToComponentStore(component) {
        return this.componentStore.push(component);
    }

    initData() {
        return {
            text: 'Hello world'
        }
    }

    initProps() {

        let dataSet = this.element.dataset;

        let props = [];

        for (const x in dataSet) {
            if (dataSet.hasOwnProperty(x)) {
                const prop = dataSet[x];

                if (x.indexOf('tim') === 0) {

                    let formattedKey = x.replace('tim', '');

                    props[formattedKey[0].toLowerCase() + formattedKey.substr(1)] = prop;

                }

            }
        }

        return props;
    }

    // getElement() {




    //     return document.querySelector(`[role=${this.name.toLowerCase()}]`);
    // }

    render() {
        this.element.innerHTML = this.template();

        this.mounted();
    }

    //Function fired immediately after rendering.
    mounted() {


    }

    template() {
        return ``;
    }

    destroy() {
        this.el.parentNode.removeChild(this.el)
    }
}

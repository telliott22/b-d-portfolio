import EventEmitter from 'events'

export default class Component extends EventEmitter {

    constructor({
        id,
        element
    }) {
        super()

        this.name = this.constructor.name;
        this.lowerCaseName = this.name.toLowerCase();
        this.id = id;
        this.element = element
        this.data = this.data();
        this.props = this.initProps();
        this.render()
        this.initModelListeners();
        this.initBinds();
        this.mounted();

    }

    data() {
        return {
            text: 'Hello world'
        }
    }

    // initSass() {

    //     import `./${this.name}.scss`;
    //     import template from "./form.html"
    // }

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

    initModelListeners() {

        let elementsWithModel = this.element.querySelectorAll(`[data-model]`);

        elementsWithModel.forEach(element => {

            element.addEventListener('keyup', (event) => {

                let modelName = element.dataset.model;

                $store.update(modelName, event.target.value);

            })
        });

    }

    initBinds() {

        let boundElements = this.element.querySelectorAll(`[data-bind]`);

        boundElements.forEach(element => {

            let model = element.dataset.bind;

            $store.updateBinds(model);

        });

    }

    render() {
        this.element.innerHTML = this.template();
    }

    //Function fired immediately after rendering.
    mounted() {


    }

    template() {

        // // return require('/Users/tim/Code/Tim/b-d-portfolio/src/components/Form/form.html');

        // let path = `../../components/${this.name}/${this.lowerCaseName}.html`;
        // // console.log(`/src/components/${this.name}/${this.lowerCaseName}.html`)
        // return require(path);
    }

    destroy() {
        this.el.parentNode.removeChild(this.el)
    }
}

import EventEmitter from "events";
import placeholder from "../utilities/placeholder";

export default class Component extends EventEmitter {
    constructor({
        id,
        element
    }) {
        super();

        this.name = this.constructor.name;
        this.lowerCaseName = this.name.toLowerCase();
        this.id = id;
        this.element = element;
        this.data = this.data();
        this.props = this.initProps();
        this.render();
        this.mounted();
    }

    data() {
        return {
            text: "Hello world"
        };
    }


    initProps() {
        let dataSet = this.element.dataset;

        let props = [];

        for (const x in dataSet) {
            if (dataSet.hasOwnProperty(x)) {
                const prop = dataSet[x];

                if (x.indexOf("fitzroy") === 0) {
                    let formattedKey = x.replace("fitzroy", "");

                    props[
                        formattedKey[0].toLowerCase() + formattedKey.substr(1)
                    ] = prop;
                }
            }
        }

        return props;
    }

    initModelListeners() {
        let elementsWithModel = this.element.querySelectorAll(`[data-model]`);

        elementsWithModel.forEach(element => {
            element.addEventListener("keyup", event => {
                let modelName = element.dataset.model;

                $store.update(modelName, event.target.value);
            });
        });
    }

    initBinds() {
        let boundElements = this.element.querySelectorAll(`[data-bind]`);

        boundElements.forEach(element => {
            let model = element.dataset.bind;

            $store.updateBinds(model);
        });
    }

    async render() {
        let template = await this.template();

        if (!template || !template.length) {
            console.error(
                `FitzRoy - no template registered for ${this.name} - ${this.id}`
            );
        }

        await this.initSass();

        this.element.innerHTML = placeholder(template, {
            props: this.props,
            data: $store.state
        });

        //Init event listeners on component. Doing it here instead of in constructor to ensure the template has loaded 
        this.initModelListeners();
        this.initBinds();

    }

    //Function fired immediately after rendering.
    mounted() {}

    //Import html file from default location. Can override in instanciated component
    async template() {
        let template = await System.import(
            `../../components/${this.name}/${this.lowerCaseName}.html`
        ).then(function (templateImport) {
            return templateImport.default;
        });

        return template;
    }


    async initSass() {

        // let sass = await System.import(
        //     `../../components/${this.name}/${this.lowerCaseName}.scss`
        // ).then(function (sass) {
        //     console.log(sass)
        //     return sass
        // });
        // // import `./${this.name}.scss`;
        // // import template from "./form.html"
    }

    destroy() {
        this.el.parentNode.removeChild(this.el);
    }
}

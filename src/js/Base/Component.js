import EventEmitter from "events";
import placeholder from "../utilities/placeholder";

export default class Component extends EventEmitter {
    constructor({
        id,
        element
    }) {
        super();

        this.template = "";
        this.binds = [];
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

    async initBinds() {


        let regexp = /{{data.*}}/g;
        let match;

        //Get data binds in this component
        while ((match = regexp.exec(this.template)) != null) {

            let formattedMatch = match[0].replace('{{data.', '').replace('}}', '');

            this.binds.push(formattedMatch);
        }

        //When a bind changes, if it's on this component rerender
        $store.on('updatedState', (key) => {

            if (this.binds.indexOf(key) > -1) {
                this.reRender();
            }

        });
    }

    async render() {
        let template = this.template || await this.getTemplate();

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
        await this.initBinds();

    }

    async reRender() {
        this.element.innerHTML = placeholder(this.template, {
            props: this.props,
            data: $store.state
        });
    }

    //Function fired immediately after rendering.
    mounted() {}

    //Import html file from default location. Can override in instanciated component
    async getTemplate() {
        let template = await System.import(
            `../../components/${this.name}/${this.lowerCaseName}.html`
        ).then(function (templateImport) {
            return templateImport.default;
        });

        this.template = template;

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

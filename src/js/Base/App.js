import EventEmitter from 'events'
import '../../sass/app.scss'

export default class App extends EventEmitter {

    constructor({
        components,
        options = {
            debug: false
        }
    }) {
        super()

        this.components = components
        this.initApp()

        this.options = options;
        
        //Set debug mode 
        window.debug = this.options.debug 
        
    }

    async initComponents() {

        this.components.forEach(component => {

            let name = component.name.toLowerCase();

            let elements = document.querySelectorAll(`div[role=${name}]:not([data-id]`);

            //Itterate through and give ID to each instanciated component so we can have multiple of each type
            elements.forEach(element => {

                let componentId = name + new Date().getMilliseconds();
                element.dataset.id = componentId;

                let instance = new component({
                    element,
                    id: componentId
                });

                $store.components.push(instance);

            });

        });

    }

    async initApp() {
        await this.initComponents();
    }

}

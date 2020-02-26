import EventEmitter from 'events'
import '../../sass/app.scss'

export default class App extends EventEmitter {

    constructor({
        components,
        store
    }) {
        super()

        this.components = components
        this.store = store;
        this.initApp()
    }

    initComponents() {

        this.components.forEach(component => {

            let name = component.name.toLowerCase();

            let elements = document.querySelectorAll(`div[role=${name}]:not([data-id]`);

            //Itterate through and give ID to each instanciated component so we can have multiple of each type
            elements.forEach(element => {

                element.dataset.id = name + new Date().getMilliseconds();

                new component({
                    element
                });

            });

        });

    }

    initApp() {
        this.initComponents();
    }

}

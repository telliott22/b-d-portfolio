import EventEmitter from 'events'

export default class Hero extends EventEmitter {

    constructor(options) {
        super()
        // this.el = options.el
        this.element = this.getElement();
        this.data = this.initData();
        this.props = this.initProps();
        this.render()
    }

    initData() {
        return {
            text: 'this is the TEXT!!!!'
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

    getElement() {
        return document.querySelector('[role=hero]');
    }

    render() {

        console.log('props', this.props);

        this.element.innerHTML = this.markup();
    }

    markup() {
        return `
          <h1>${this.data.text}!</h1>
        `;
    }

    destroy() {
        this.el.parentNode.removeChild(this.el)
    }
}

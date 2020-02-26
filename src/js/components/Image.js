import Component from '../Base/Component'

export default class Image extends Component {

    data() {
        return {
            text: 'this is the TEXT!!!!'
        }
    }

    template() {
        return `
          <img src="${this.props.imageSrc}"/>
        `;
    }

}

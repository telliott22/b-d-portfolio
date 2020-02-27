import Component from '../Base/Component'

export default class Form extends Component {

    data() {
        return {
            text: 'This is hero text',
            small: 'This is the small text'
        }
    }

    template() {
        return `
          <form>
            <input data-model='test' name="testInput"> 
          </form>
        `;
    }

    mounted() {
        // console.log($store)
    }

}

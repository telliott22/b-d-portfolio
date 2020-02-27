import Component from '../../js/Base/Component'
import './hero.scss'
import template from './hero.html'

export default class Hero extends Component {

    data() {
        return {
            text: 'This is hero text',
            small: 'This is the small text'
        }
    }

    template() {
        return template
    }

    mounted() {



    }

}

import Component from "../../js/Base/Component";
import "./hero.scss";

export default class Hero extends Component {
    data() {
        return {
            text: "This is hero text",
            small: "This is the small text"
        };
    }

    mounted() {}
}

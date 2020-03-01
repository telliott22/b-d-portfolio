import Component from "../../js/Base/Component";
import "./form.scss";

export default class Form extends Component {

    data() {
        return {
            text: "This is hero text",
            small: "This is the small text"
        };
    }

    mounted() {
        // console.log($store)
    }
}

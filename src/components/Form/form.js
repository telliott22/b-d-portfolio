import Component from "../../js/Base/Component";
import "./form.scss";
import template from "./form.html"


export default class Form extends Component {

    data() {
        return {
            text: "This is hero text",
            small: "This is the small text"
        };
    }

    template() {

        //TODO import local data into template
        //Look for handlebars and string replace

        return template
    }

    mounted() {
        // console.log($store)
    }
}

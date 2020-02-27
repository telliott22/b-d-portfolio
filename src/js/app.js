import App from './Base/App';
import Store from './Base/Store';
import Hero from '../components/Hero/hero.js';
import Image from '../components/Image/image.js'
import Form from '../components/Form/form.js'

document.addEventListener('DOMContentLoaded', () => {

    const components = [
        Hero,
        Image,
        Form
    ]

    window.$store = new Store();

    new App({
        components
    })
});

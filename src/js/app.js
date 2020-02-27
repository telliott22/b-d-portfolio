import App from './Base/App';
import Store from './Base/Store';
import Hero from './components/Hero';
import Image from './components/Image'
import Form from './components/Form'

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

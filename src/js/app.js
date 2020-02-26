import App from './Base/App';
import Store from './Base/Store';
import Hero from './components/Hero';
import Image from './components/Image'

document.addEventListener('DOMContentLoaded', () => {

    const components = [
        Hero,
        Image
    ]

    window.$store = new Store();

    new App({
        components
    })
});

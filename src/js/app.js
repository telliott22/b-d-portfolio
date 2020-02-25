import Hero from './components/hero'
import EventEmitter from 'events'
import '../sass/app.scss'

export default class App extends EventEmitter {

    constructor() {
        super()
        // this.el = options.el
        this.render()
    }

    render() {
        this.hero = new Hero();

        // this.el.addEventListener('click', this.click)
        // this.once('resized', this.animateIn)
        // this.resize()
    }

    click(e) {
        // Do stuff!
    }

    // animateIn() {
    //     const tl = GSAP.timeline({
    //         paused: true
    //     }).to(this.el, {
    //         autoAlpha: 1
    //     }).restart()
    // }

    // animateOut() {
    //     const tl = GSAP.timeline({
    //         paused: true,
    //         onComplete: this.destroy
    //     }).to(this.el, {
    //         autoAlpha: 0
    //     }, 0).add(() => {
    //         this.component.animateOut()
    //     }, 0).restart()
    // }​

    // resize() {
    //     this.emit('resized')
    // }

    destroy() {
        // this.el.removeEventListener('click', this.click)
        this.el.parentNode.removeChild(this.el)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new App()
});

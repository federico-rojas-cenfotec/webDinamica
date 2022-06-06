class PostListComponent extends Component {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.container.className = 'postListComponent';

        this.fade = div({ classList: 'postListComponent_fade hide' }, this.container);
        this.dataContainer = div({ classList: 'postListComponent_dataContainer' }, this.container);
        this.dataContainer.style.transform = `translateX(${window.innerWidth}px)`;
        this.container.classList.add('hide');
        //this.hide();
    }

    showPosts() {
        //this.show();
        this.dataContainer.innerHTML = '';
        this.appManager.userSelected.posts.forEach(post => {
            var postComponent = new PostComponent(this.appManager, this.dataContainer, post);
        });
        /* this.dataContainer.style.transform = `translateX(${window.innerWidth}px)`;   `translateX(200px)`;para verificar que el postListComponent se mueve en el eje X*/
        this.moveIn();
        /*gsap.to(this.container, { x: 0, duration: 2 });  el 1er. parametro es el objeto a mover o la animacion deseada y 2do. un objeto con el comportamiento deseado.*/
    }

    moveIn() {
        this.fade.classList.remove('hide');
        this.container.classList.remove('hide');
        gsap.to(this.dataContainer, { x: 0, duration: 2 });
        gsap.to(this.fade, { opacity: 0.75, duration: 0.25 });

    }

    moveOut() {
        gsap.to(this.dataContainer, { x: window.innerWidth, duration: 2 });
        gsap.to(this.fade, { opacity: 0, duration: 1, onComplete: this.moveOutComplete.bind(this) });
    }

    moveOutComplete() {
        this.dataContainer.scrollTop = 0;
        this.fade.classList.add('hide');
        this.container.classList.add('hide');
    }

    refresh() {
        this.showPosts();
    }
}
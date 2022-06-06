class FormComponent extends Component {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.container.className = 'formComponent';

        this.fade = div({ classList: 'formComponent_fade hide' }, this.container);
        this.dataContainer = div({ classList: 'formComponent_dataContainer' }, this.container);
        this.dataContainer.style.transform = `translateX(${window.innerWidth}px)`;
        this.container.classList.add('hide');

        this.header = p({ classList: 'formComponent_header', innerHTML: 'Create Post' }, this.dataContainer)
        this.title = input({ classList: 'formComponent_input', placeholder: 'Title' }, this.dataContainer);
        this.body = input({ classList: 'formComponent_input', placeholder: 'Body' }, this.dataContainer);
        this.createBtn = div({ classList: 'formComponent_createBtn', innerHTML: 'Create', onclick: this.onCreateBtn.bind(this) }, this.dataContainer);
        //this.hide();
    }

    onCreateBtn() {
        var title = this.title.value;
        var body = this.body.value;

        this.title.classList.remove('formComponent_error');
        this.body.classList.remove('formComponent_error');

        if (title === '') { this.title.classList.add('formComponent_error'); return; }
        if (body === '') { this.body.classList.add('formComponent_error'); return; }

        switch (this.appManager.uiController.state) {
            case SHOWING_NEW_POST:
                this.createNewPost(body, title);
                break;
            case SHOWING_NEW_COMMENT:
                this.createNewComment(body, title);
                break;
        }

        this.title.value = '';
        this.body.value = '';
        this.appManager.uiController.onBackBtn();
    }

    createNewPost(body, title) {
        var post = new Post(-1, body, title, this.appManager.userSelected.id);
        this.appManager.userSelected.addPost(post);
    }

    createNewComment(body, title) {
        var comment = new Comment(-1, body, this.appManager.userSelected.id, title, this.appManager.postSelected.id, this.appManager.owner); /* se cambio de this.appManager.userSelected a this.appManager.owner*/
        comment.setUser(this.appManager.userSelected);
        this.appManager.postSelected.addComment(comment);
    }

    showForm() {
        switch (this.appManager.uiController.state) {
            case SHOWING_NEW_POST:
                this.header.innerHTML = 'Create New Post';
                break;
            case SHOWING_NEW_COMMENT:
                this.header.innerHTML = 'Create New Comment';
                break;
        }

        this.title.value = '';
        this.body.value = '';
        //this.show();
        /* this.dataContainer.innerHTML = ''; */
        /* user.posts.forEach(post => {
            var postComponent = new PostComponent(this.appManager, this.dataContainer, post);
        }); */
        /* this.dataContainer.style.transform = `translateX(${window.innerWidth}px)`;   `translateX(200px)`;para verificar que el formComponent se mueve en el eje X*/
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
        this.fade.classList.add('hide');
        this.container.classList.add('hide');
    }
}
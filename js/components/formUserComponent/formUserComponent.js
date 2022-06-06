class FormUserComponent extends Component {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.container.className = 'formUserComponent';

        this.fade = div({ classList: 'formUserComponent_fade hide' }, this.container);
        this.dataContainer = div({ classList: 'formUserComponent_dataContainer' }, this.container);
        this.dataContainer.style.transform = `translateX(${window.innerWidth}px)`;
        this.container.classList.add('hide');

        this.divTitulo = div({ className: 'formUserComponentDivTitulo', innerHTML: 'Create new User' }, this.dataContainer);

        this.divPid = div({ className: 'formUserComponentEachInput' }, this.dataContainer);
        this.pId = p({ innerHTML: 'Id:' }, this.divPid);
        this.id = input({ className: 'formUserComponentInput', id: 'idProceso' }, this.divPid);

        this.divPname = div({ className: 'formUserComponentEachInput' }, this.dataContainer);
        this.pName = p({ innerHTML: 'Name:' }, this.divPname);
        this.name = input({ className: 'formUserComponentInput' }, this.divPname);

        this.divPusername = div({ className: 'formUserComponentEachInput' }, this.dataContainer);
        this.pUsername = p({ innerHTML: 'Username:' }, this.divPusername);
        this.username = input({ className: 'formUserComponentInput' }, this.divPusername);

        this.divPwebsite = div({ className: 'formUserComponentEachInput' }, this.dataContainer);
        this.pWebsite = p({ innerHTML: 'Website:' }, this.divPwebsite);
        this.website = input({ className: 'formUserComponentInput' }, this.divPwebsite);

        this.divPphone = div({ className: 'formUserComponentEachInput' }, this.dataContainer);
        this.pPhone = p({ innerHTML: 'Phone:' }, this.divPphone);
        this.phone = input({ className: 'formUserComponentInput' }, this.divPphone);

        /* this.divPavatar = div({ className: 'formUserComponentEachInput' }, this.dataContainer);
        this.pAvatar = p({ innerHTML: 'Avatar:' }, this.divPavatar);
        this.avatar = input({ className: 'formUserComponentInput' }, this.divPavatar);

        this.divPisowner = div({ className: 'formUserComponentEachInput' }, this.dataContainer);
        this.pIsowner = p({ innerHTML: 'Is Owner:' }, this.divPisowner);
        this.isOwner = input({ className: 'formUserComponentInput' }, this.divPisowner); */

        this.divPemail = div({ className: 'formUserComponentEachInput' }, this.dataContainer);
        this.pEmail = p({ innerHTML: 'Email:' }, this.divPemail);
        this.email = input({ className: 'formUserComponentInput' }, this.divPemail);

        this.createBtnEnviar = div({ 'onclick': this.btnEnviar.bind(this), className: 'formUserComponentBtnEnviar', innerHTML: 'Sent' }, this.dataContainer);
        //this.createBtnSalir = div({ 'onclick': this.btnSalir.bind(this), className: 'formUserComponentBtnSalir', innerHTML: 'Back' }, this.dataContainer);
    }

    btnSalir() {
        this.moveOut();
    }

    btnEnviar(e) {
        console.log('adiós');
        var id = this.id.value;
        var name = this.name.value;
        var username = this.username.value;
        var website = this.website.value;
        var phone = this.phone.value;
        var email = this.email.value;

        console.log(id + ' ' + name + ' ' + username + ' ' + website + ' ' + phone + ' ' + email);
        this.createNewUser(Number(id), name, username, website, phone, email);

        this.id.value = '';
        this.name.value = '';
        this.username.value = '';
        this.website.value = '';
        this.phone.value = '';
        this.email.value = '';

        this.moveOut();
    }

    createNewUser(id, name, username, website, phone, email) {
        var userNuevo = new User(id, name, username, website, phone, 'avatar', false, email);
        console.log('hola nuevo usuario ', userNuevo);
        this.appManager.dataController.addUser(userNuevo);
        this.appManager.uiController.onBackBtn();
    }

    showFormUser() {
        //this.dataContainer.innerHTML = '';
        /* user.posts.forEach(post => {
            var postComponent = new PostComponent(this.appManager, this.dataContainer, post);
        }); */

        this.moveIn();
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

    /* refresh() {
        this.showPosts();
    } */
}
class UserListComponent extends Component {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.container.classList.add('userListComponent');
        this.showUsers();
        //this.botonUser.innerHTML = 'boton';

        //this.btnOnclick();
        //this.botonUser.onclick = this.btnOnclick.bind(this);
        /* 'onclick':this.btnOnclick.bind(this),innerHTML = 'boton',*/
    }

    btnOnclick(e) {
        console.log('hola');
        this.appManager.uiController.showFormUserComponent(null);
    }

    showUsers() {
        this.container.innerHTML = '';

        var users = this.appManager.dataController.users;
        console.log(users); /* si esta creado el nuevo usuario pero no lo expone */
        users.forEach(user => {
            var userComponent = new UserComponent(this.appManager, this.container, user);
        });

        this.containerBtnUser = div({ className: 'userListComponent_containerBtnUser' }, this.container);
        this.botonUser = div({ 'onclick': this.btnOnclick.bind(this), innerHTML: 'Add New User', className: 'userListComponent_btnUser' }, this.containerBtnUser);

        this.container.style.height = (window.innerHeight - this.appManager.navbarHeight) + 'px';
        //console.dir(this.container);
    }

    refresh() {
        this.showUsers();
    }
}
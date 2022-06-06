class MainComponent extends Component {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.container.classList.add('mainComponent');
        this.navbarComponent = new NavBarComponent(this.appManager, this.container);
        this.userListComponent = new UserListComponent(this.appManager, this.container);
        this.postListComponent = new PostListComponent(this.appManager, this.container);
        this.formComponent = new FormComponent(this.appManager, this.container);
        this.formUserComponent = new FormUserComponent(this.appManager, this.container);
    }

    showBackBtn() {
        this.navbarComponent.showBackBtn();
    }

    showBackBtnUser() {
        this.navbarComponent.showBackBtnUser();
    }

    hideBackBtn() {
        this.navbarComponent.hideBackBtn();
    }

    showPostListComponent(user) {
        this.postListComponent.showPosts(user);
    }

    hidePostListComponent() {
        this.postListComponent.moveOut();
    }

    showFormComponent() {
        this.navbarComponent.hideAddBtn();
        this.formComponent.showForm();
    }

    hideFormComponent() {
        this.navbarComponent.showAddBtn();
        this.formComponent.moveOut();
    }

    showFormUserComponent() {
        this.formUserComponent.showFormUser();
    }

    hideFormUserComponent() {
        this.formUserComponent.moveOut();
    }

    refreshPostListComponent() {
        this.postListComponent.refresh();
    }

    refreshUserListComponent() {
        this.userListComponent.refresh();
    }
}
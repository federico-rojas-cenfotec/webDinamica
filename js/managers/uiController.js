class UIController {
    constructor(appManager) {
        this.appManager = appManager;
        this.loadingComponent = new LoadingComponent(null, document.body);
        this.mainComponent = null;
        this.state = SHOWING_USERS;
    }

    TiempoFuera() {
        setTimeout(function () {
            console.log('Hola mundo');
        }, 5000);
    }

    showUI() {
        this.loadingComponent.hide();
        this.mainComponent = new MainComponent(this.appManager, document.body);
    }

    onBackBtn() {
        switch (this.state) {
            case SHOWING_USERS:
                this.mainComponent.hideFormUserComponent();
                console.log('Already SHOWING_USERS');
            case SHOWING_POSTS:
                this.appManager.userSelected = null;
                this.state = SHOWING_USERS;
                this.mainComponent.hideBackBtn();
                this.mainComponent.hidePostListComponent();
                break;
            case SHOWING_NEW_POST:
                this.state = SHOWING_POSTS;
                this.mainComponent.showBackBtn();
                this.mainComponent.hideFormComponent();
                this.mainComponent.refreshPostListComponent();
                break;
            case SHOWING_NEW_COMMENT: //estando en hacer 1 new Comment y se da back, el nuevo estado es SHOWING_POST
                this.appManager.postSelected = null;
                this.state = SHOWING_POSTS;
                this.mainComponent.hideFormComponent();
                this.mainComponent.refreshPostListComponent();
            case SHOWING_NEW_USERS:
                this.state = SHOWING_USERS;
                this.mainComponent.showBackBtnUser(); /* showBackBtnUser() */
                this.mainComponent.refreshUserListComponent();
            default:
                break;
        }
    }

    showPostListComponent(user) {
        this.appManager.userSelected = user;
        this.state = SHOWING_POSTS;
        this.mainComponent.showBackBtn();
        this.mainComponent.showPostListComponent(user);
    }

    showFormComponent(newState) {
        this.state = newState;
        this.mainComponent.showFormComponent();
    }

    showFormUserComponent(user) {
        this.state = SHOWING_NEW_USERS;
        this.mainComponent.showBackBtnUser();
        this.mainComponent.showFormUserComponent(user);
    }
}
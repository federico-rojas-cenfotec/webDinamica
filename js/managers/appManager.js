const SHOWING_USERS = 1;
const SHOWING_POSTS = 2;
const SHOWING_NEW_POST = 3;
const SHOWING_NEW_COMMENT = 4;
const SHOWING_NEW_USERS = 5;

class AppManager {
    constructor() {
        this.netController = new NetController(this);
        this.dataController = new DataController(this);
        this.uiController = new UIController(this);
        this.netController.downloadUsersData();
        this.navbarHeight = getComputedStyle(document.documentElement).getPropertyValue('--nav-bar-height');
        this.navbarHeight = Number(this.navbarHeight.split('px')[0]);
        this.owner = null;
        this.userSelected = null;
        this.postSelected = null;
        /* console.log(gsap); esta instrucción permite ver el objeto en console y verificar que si se está cargando */
        /*   console.log(this.navbarHeight); */
    }

    downloadDataCommpleted() {
        this.uiController.showUI();
    }
}
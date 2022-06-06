class NavBarComponent extends Component {
    constructor(appManager, parent) {
        super(appManager, parent);
        /* this.parent.removeChild(this.container);
        this.container = document.createElement('nav');
        this.parent.appendChild(this.container); Estos códigos se usan para crear un elemento nav y no un div para el navegador */
        this.container.classList.add('navbarComponent');

        this.logoBee = div({ className: 'logoBee' }, this.container);
        this.logoBeeIcon = image({ className: 'logoBeeIcon', src: 'src/images/abejaCopy.png' }, this.logoBee);

        this.contenerBtn = div({ className: 'contenerBtn' }, this.container);

        this.backBtn = div({ 'onclick': this.onBackBtn.bind(this), className: 'navbarComponent_backBtn' }, this.contenerBtn);
        this.backBtnIcon = image({ className: 'navbarComponent_backBtnIcon', src: 'src/images/arrow.png' }, this.backBtn);

        this.addBtn = div({ 'onclick': this.onAddBtn.bind(this), className: 'navbarComponent_addBtn' }, this.contenerBtn);
        this.addBtnIcon = image({ className: 'navbarComponent_addBtnIcon', src: 'src/images/addIcon.svg' }, this.addBtn);

        this.hideBackBtn();
    }

    onBackBtn(e) {
        this.appManager.uiController.onBackBtn();
    }

    onAddBtn(e) {
        this.addBtnIcon.classList.add('hide');
        this.appManager.uiController.showFormComponent(SHOWING_NEW_POST);
    }

    showBackBtn() {
        this.backBtnIcon.classList.remove('hide');
        this.addBtnIcon.classList.remove('hide');
    }

    showBackBtnUser() {
        this.backBtnIcon.classList.remove('hide');
        this.addBtnIcon.classList.add('hide');
    }

    hideBackBtn() {
        this.backBtnIcon.classList.add('hide');
        this.addBtnIcon.classList.add('hide');
    }

    showAddBtn() {
        this.addBtnIcon.classList.remove('hide');
    }

    hideAddBtn() {
        this.addBtnIcon.classList.add('hide');
    }
}
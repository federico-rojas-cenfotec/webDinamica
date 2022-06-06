class Component {
    constructor(appManager, parent) {
        this.appManager = appManager;
        this.parent = parent; //elemento del HTML que lo contiene
        //this.container = document.createElement('div');
        this.container = div({}, parent);
        //this.parent.appendChild(this.container);
    }

    hide() {
        this.container.classList.add('hide')
    }

    show() {
        this.container.classList.remove('hide')
    }

    moveIn() {}

    moveOut() {}
}
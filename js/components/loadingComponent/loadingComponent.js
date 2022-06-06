class LoadingComponent extends Component {
    constructor(appManager, parent) {
        super(appManager, parent);
        this.container.classList.add('loadingComponent');
        this.title = p({ className: 'loadingComponent_title', innerHTML: '<img style="width: 100px;height: 100px" src = ../src/images/abejaCopy.png>' }, this.container);

        /* estas 4 lineas se sustituyen por una sola linea
        this.title = document.createElement('p');
        this.title.classList.add('loadingComponent_title');
        this.title.innerHTML = 'loading...';
        this.container.appendChild(this.title); */
    }
}
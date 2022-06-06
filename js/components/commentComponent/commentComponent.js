class CommentComponent extends Component {
    constructor(appManager, parent, comment) {
        super(appManager, parent);
        this.comment = comment;
        this.container.classList.add('commentComponent');
        this.name = p({ className: 'commentComponent_name', innerHTML: `<span>Comment: </span>${this.comment.name}` }, this.container);
        this.body = p({ className: 'commentComponent_body', innerHTML: this.comment.body }, this.container);
        var userContainer = div({ className: 'commentComponent_userContainer' }, this.container);

        this.imageContainer = div({ className: 'commentComponent_imageContainer' }, userContainer);
        this.image = image({ className: 'commentComponent_image', src: this.comment.user.avatar }, this.imageContainer);

        this.divNameEmailContainer = div({}, userContainer);
        this.nombre = p({ className: 'commentComponent_nombre', innerHTML: `<b>${this.comment.user.name}</b>` }, this.divNameEmailContainer);
        this.email = p({ className: 'commentComponent_email', innerHTML: this.comment.user.email }, this.divNameEmailContainer);

    }
}
class User {
    constructor(id, name, username, website, phone, avatar, isOwner, email) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.website = website;
        this.phone = phone;
        this.avatar = avatar;
        this.isOwner = isOwner;
        this.email = email;
        this.posts = [];
    }

    addPost(post) {
        if (post.userId === this.id) {
            this.posts.unshift(post);
        }
    }
}
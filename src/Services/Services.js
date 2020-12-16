class Services {
     url = "https://jsonplaceholder.typicode.com/posts";

    getAllposts() {
        return fetch(this.url)
            .then(value => value.json())
            .then(value => value)
    }


 getPostsbyID(id) {
    return fetch(`${this.url}/${id}`).then(value => value.json()).then(value => value)
}

}

export default Services;
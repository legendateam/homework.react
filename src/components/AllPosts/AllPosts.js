import React, {Component} from 'react';
import Posts from "../Posts/Posts";

class Allposts extends Component {

    state = {allposts:[], oneposts:null}

    constructor() {
        super();
    }

    postsid = (id) => {
        let {allposts} = this.state;
        let find = allposts.find(value => value.id === id)
        this.setState({oneposts : find})
    }


    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(value => value.json())
            .then(postsApi => {
                this.setState({allposts:postsApi})
            })
    }


    render() {
        let {allposts, oneposts} = this.state
        return (
            <div>
                {
                    allposts.map(post => <Posts item={post} key={post.id} postsid ={this.postsid}/>)
                }
                {
                    oneposts && <h1>{oneposts.id} - {oneposts.title}</h1>
                }
            </div>
        );
    }
}

export default Allposts;
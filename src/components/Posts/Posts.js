
import React, {Component} from 'react';

class Posts extends Component {
    render() {
        let {item, postsid} = this.props
        return (
            <div>
                {item.id} - {item.title} : <button onClick={()=> postsid(item.id)}>chose</button>
            </div>
        );
    }
}

export default Posts;
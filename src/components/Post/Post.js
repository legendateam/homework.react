import React, {Component} from 'react';

class Post extends Component {
    render() {
        let {item, choseid, isShowButton} = this.props
        return (
            <div>
                {item.id} - {item.title}  {isShowButton && <button onClick={()=>choseid(item.id)}>chose</button>}
            </div>
        );
    }
}

export default Post;
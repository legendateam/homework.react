import React, {Component} from 'react';
import Post from "../Post/Post";
import Services from "../../Services/Services";

class PostsAll extends Component {

    Services = new Services

    state = {users: [], choseone : null}


    choseid = (id) => {
        this.Services.getPostsbyID(id).then(value => this.setState({choseone : value}))
}


    componentDidMount() {
        this.Services.getAllposts().then(value => this.setState({users: value}))
    }

    render() {
    let {users, choseone} = this.state
     return (
     <div>
                {
                    users.map(value => <Post item ={value} key={value.id} choseid={this.choseid} isShowButton={true}/>)
                }
         {
             "-----------------------------------------"
         }
                {
                    choseone && <Post item={choseone} isShowButton={false}/>
                }
     </div>
     );
   }
}
export default PostsAll;
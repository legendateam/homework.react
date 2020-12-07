
import React, {Component} from 'react';

class Button extends Component {


    render() {
        let {item, onUser} = this.props

        return (
            <div>
                {item.id} - {item.name} : <
                button onClick={() => onUser(item.id)}>chose</button>
            </div>
        );
    }
}

export default Button;
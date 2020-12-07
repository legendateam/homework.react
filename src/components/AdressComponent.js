import React, {Component} from 'react';

class AdressComponent extends Component {

    render() {
        let {item} = this.props
        return (
            <div>
                {item.name} - {item.age} - {item.status.toString()} - {item.address.city} - {item.address.country} - {item.address.street} - {item.address.houseNumber}
            </div>
        );
    }
}

export default AdressComponent;
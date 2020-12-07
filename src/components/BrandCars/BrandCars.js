import React, {Component} from 'react';

class BrandCars extends Component {
    render() {
        let {item} = this.props
        return (
            <div>
                {item.model} - {item.yearvupysk} - {item.power} - {item.color}
            </div>
        );
    }
}

export default BrandCars;
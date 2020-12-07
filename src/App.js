import React, {Component} from 'react';
import {autoria} from "./components/AllCars/AllCars";
import BrandCars from "./components/BrandCars/BrandCars";

class App extends Component {
    render() {
        return (
            <div>
                {
                    autoria.map((car, index) =>(<BrandCars item={car} key={index}/>))
                }
            </div>
        );
    }
}

export default App;
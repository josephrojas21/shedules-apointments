import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider, connect} from 'react-redux';
import Counter from './counter'
import SearchOrders from './components/searchOrders/index'
import TableOrders from './components/tableOrders/index'

class App extends Component {

  
    state = {
        store: this.props.store,
        globalEventDistributor: this.props.globalEventDistributor,
    };

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {
        return (
            <div>
                {this.state.store && this.state.globalEventDistributor ? 
                    <Provider store={this.state.store}>
                    <div className="row">
                        <div className="col-7" id="searchComp">
                            <SearchOrders/>
                            <TableOrders/>
                            {/* <Counter globalEventDistributor={this.state.globalEventDistributor}/> */}
                        </div>
                        <div className="col-5">
                            <h1>holas</h1>
                        </div>
                    </div>
                    </Provider> :
                    <div>EL store no ha sido iniciado </div>}
            </div>
        )
    }   
}



export default App;

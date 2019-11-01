import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider, connect } from 'react-redux';
import DataTable from './services/data'
import Counter from './counter'

import Alerts from './components/alerts/index'
import SearchOrders from './components/searchOrders/index'
import TableOrders from './components/tableOrders/index'
import DeliveryCategories from './components/deliveryCategories/index'



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            store: this.props.store,
            dataTable: {},
            globalEventDistributor: this.props.globalEventDistributor,
            isData: false
        }
    }

    componentDidCatch(error, info) {
        console.log(error, info);

    }

    handleRowClick(event){
        console.log('hola desdee aca',event);
        
    }
    componentDidMount() {
        //this.getdata();
        DataTable.getData().then(data =>{
            data.rows.push({
                clickEvent: this.handleRowClick() 
            })
            this.setState({
                dataTable: data,
                isData: true
            })
            console.log(data);
            
        })

    }

    getdata() {
        fetch('http://localhost:3000')
            .then(response => response.json())
            .then(json => console.log(json))

        this.setState({ isData: false });
    }

    

    render() {
        const {store,globalEventDistributor,isData,dataTable } = this.state
        return (
            <div className= "container-fluid">
                {store && globalEventDistributor ?
                    <Provider store={this.state.store}>
                        <div className="row">
                            <div className="col-7" id="searchComp">
                                <SearchOrders />
                                { isData ? <TableOrders dataTable={dataTable}/> : <h1>No hay ordenes para poder agendar cita</h1> }
                                {/* { isData ? <Alerts /> : false } */}
                                {/* <Counter globalEventDistributor={this.state.globalEventDistributor}/> */}
                            </div>
                            <div className="col-5">
                                <DeliveryCategories />
                            </div>
                        </div>
                    </Provider> :
                    <div>EL store no ha sido iniciado </div>}
            </div>
        )
    }





}



export default App;

import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider, connect } from 'react-redux';
import DataTable from './services/data'


import TotalCounters from './components/totalCounters/index'
import Alerts from './components/alerts/index'
import SearchOrders from './components/searchOrders/index'
import TableOrders from './components/tableOrders/index'
import DeliveryCategories from './components/deliveryCategories/index'
import ConfirmDate from './components/confirmDate/index'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            store: this.props.store,
            dataTable: {},
            globalEventDistributor: this.props.globalEventDistributor,
            isData: false,
            dataDetails: {},
            branch: 'Categoría PCFK1'      
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
            this.setState({
                dataTable: data[0],
                isData: true,
                dataDetails: data[1]
            }) 
        })
    }


    getdata() {
        fetch('http://localhost:3000')
            .then(response => response.json())
            .then(json => console.log(json))

        this.setState({ isData: false });
    }

    

    render() {
        const {store,globalEventDistributor,isData,dataTable, dataDetails } = this.state
        return (
            <div className="container-fluid">
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
                                <div className="row">
                                    <TotalCounters/>                                                                 
                                </div>
                                {isData ? <DeliveryCategories branch={this.state.branch} dataDetails={dataDetails}/>: <h1>No ha cargado detalle</h1>}   
                                {isData ? <DeliveryCategories branch = {this.state.branch} dataDetails={dataDetails}/>: <h1>No ha cargado detalle</h1>}
                                <ConfirmDate className="row"/>
                            </div>
                        </div>
                    </Provider> :
                    <div>EL store no ha sido iniciado </div>}
            </div>
        )
    }





}



export default App;

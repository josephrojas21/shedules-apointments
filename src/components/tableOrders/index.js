import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import { MDBDataTable } from 'mdbreact';
import  './tableStyle.css';

class TableOrders extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        const {name, value } = e.target;
        console.log(name,value,'hola undo');
        
    }
    

    render() {
        const {dataTable } = this.props
        return (
            <div className="row" id="table">
                <div className="col-12">
                    <MDBDataTable
                    striped
                    bordered
                    hover
                    autoWidth
                    responsive
                    data={dataTable}
                    infoLabel={["Viendo", "desde", "hasta", "registros"]}
                    paginationLabel={["Anterior", "Siguiente"]}
                    entriesLabel="Mostrar registros"
                    searchLabel="Buscar"
                    onChange={this.handleChange}
                    />
                </div>
            </div>
 
        )
    }
}

export default TableOrders;
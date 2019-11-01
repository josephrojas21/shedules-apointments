import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import { MDBDataTable } from 'mdbreact';
import  './tableStyle.css';

class TableOrders extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
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
                    />
                </div>
            </div>
 
        )
    }
}

export default TableOrders;
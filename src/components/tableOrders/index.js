import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'

class TableOrders extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render() {
        return (
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Fecha</th>
                        <th>Documento compra</th>
                        <th>Orden fabricacion</th>
                        <th>Codigo Material</th>
                        <th>Material</th>
                        <th>Descripcion Orden</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default TableOrders;
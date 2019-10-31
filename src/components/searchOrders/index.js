import React, { Component } from 'react';
import './searchStyle.css'

class SearchOrders extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className="row" id="search">
                <div className="col-6">
                    <h5>Ordenes de Entrega Pendientes</h5>
                </div>
                <div className="col-6">
                    <div className="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2">@</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchOrders;
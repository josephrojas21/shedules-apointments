import React, { Component } from 'react';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

class deliveryCategories extends Component {
    constructor() {
        super()
        this.state = {
            data: {
                columns: [
                    {
                        label: 'Name',
                        field: 'name',
                        sort: 'asc',
                        width: 150
                    },
                    {
                        label: 'Position',
                        field: 'position',
                        sort: 'asc',
                        width: 270
                    }

                ],
                rows: [
                    {
                        name: 'Tiger Nixon',
                        position: 'System Architect',
                        office: 'Edinburgh',
                        age: '61',
                        date: '2011/04/25',
                        salary: '$320'
                    },
                    {
                        name: 'Garrett Winters',
                        position: 'Accountant',
                        office: 'Tokyo',
                        age: '63',
                        date: '2011/07/25',
                        salary: '$170'
                    },
                    {
                        name: 'Ashton Cox',
                        position: 'Junior Technical Author',
                        office: 'San Francisco',
                        age: '66',
                        date: '2009/01/12',
                        salary: '$86'
                    }]
            }
        }

    }



    render() {
        return (
            <div className="row" id="table">
                <div className="col-12">

                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                Click me!
                                </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>

                                    <MDBTable responsive>
                                        <MDBTableHead columns={this.state.data.columns} />
                                        <MDBTableBody rows={this.state.data.rows} />
                                    </MDBTable>

                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlTextarea1">
                                            Observaciones
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            rows="5"
                                        />
                                    </div>


                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                Click me!
                             </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>Hello! I'm another body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </div>

        )
    }
}

export default deliveryCategories;
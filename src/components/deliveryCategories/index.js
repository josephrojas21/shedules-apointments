import React, { Component } from 'react';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { MDBTable, MDBTableBody, MDBTableHead, MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable } from 'mdbreact';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import './deliveryStyle.css'
import Button from 'react-bootstrap/Button'

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
            
                <div className="col-12">
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                Click me!
                                </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>

                                    {/* <MDBCard>
                                        <MDBCardHeader tag="h3" className="text-center font-weight-bold text-uppercase py-4">
                                            Table Editable
                                         </MDBCardHeader>
                                        <MDBCardBody>
                                            <MDBTableEditable data={this.state.data.rows} columns={this.state.data.columns} striped bordered />
                                        </MDBCardBody>
                                    </MDBCard> */}

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
                                            rows="3"
                                        />
                                    </div>
                                  
                                        <Container className="text-center paddings2">
                                            <Row>
                                                <Col>
                                                            <Form>
                                                                {/* backpack, boxes, bags */}
                                                                <Form.Group as={Row} controlId="formPaking">
                                                                    <Row>
                                                                        <Form.Label column sm="6">
                                                                            Tulas
                                                                     </Form.Label>
                                                                        <Col sm="5">
                                                                            <Form.Control type="text" placeholder="# Tulas" />
                                                                        </Col>
                                                                    </Row>
                                                                    <Row>
                                                                        <Form.Label column sm="6">
                                                                            Cajas
                                                                        </Form.Label>
                                                                        <Col sm="5">
                                                                            <Form.Control type="text" placeholder="# Cajas" />
                                                                        </Col>
                                                                    </Row>
                                                                    <Row>
                                                                        <Form.Label column sm="6">
                                                                            Bolsas
                                                                         </Form.Label>
                                                                        <Col sm="5">
                                                                            <Form.Control type="text" placeholder="# Bolsas" />
                                                                        </Col>
                                                                    </Row>
                                                                </Form.Group>
                                                            </Form>                                                    
                                                </Col>
                                                <Col>  
                                                     <Row className="paddings">
                                                                <Row> Documento Compra: 5100038136 </Row>
                                                                <Row> Código Material: 502332  </Row>
                                                                <Row> Orden Fabricación: 2022144 </Row>
                                                                <Row> Material: CORSET CORTO STRAPLESS </Row>
                                                    </Row>
                                                </Col>
                                            </Row>

                                        </Container>
                                   


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

                    <Form>
                    <Row className="SquechuleButton">
                        <Button variant="primary" size="lg" type="submit" className="btn-block">Agendar</Button>
                    </Row>
                </Form>

                </div>
     

        )
    }
}

export default deliveryCategories;
import React, { Component } from 'react';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { MDBTable, MDBTableBody, MDBTableHead, MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable } from 'mdbreact';
import { MDBBtn, MDBCollapse } from "mdbreact";
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import './deliveryStyle.css'

import Table from 'react-bootstrap/Table'

class deliveryCategories extends Component {
    constructor() {
        super()
        this.state = {
            collapseID: ""
        }
    }


    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
    }


    renderheader() {
        const columns = ['ValorMatriz', 'PLU', 'Cantidad Inicial', 'Cantidad Pendiente', 'Cantidad Entregar']

        return columns.map((item, index) => {
            return <th key={item}>{item}</th>
        })
    }


    renderBody() {

        const { dataDetails } = this.props;

        // var row = JSON.stringify(dataDetails);   
        // console.log('row',row);
        // console.log('dataDetails', dataDetails.Details[1]);

        return dataDetails.Details[1].map((detail, index) => {
            const { valor_matriz, plu, posicion_pedido, cantidad_pendiente, cantidad_maxima, cantidad_inicial, cantidad_entregar, cantidad_confirmada } = detail //destructuring
            return (
                <tr key={valor_matriz}>
                    <td>{valor_matriz}</td>
                    <td>{plu}</td>
                    <td>{cantidad_inicial}</td>
                    <td>{cantidad_pendiente}</td>
                    <td>{cantidad_entregar}</td>
                </tr>
            )
        })
    }


    render() {

        //const  branch  = this.props;

        return (
            <div>
                <MDBBtn
                    color="primary"
                    variant="primary"
                    className="btn-block"
                    onClick={this.toggleCollapse("basicCollapse")}
                    style={{ marginBottom: "1rem" }}
                >
                    {this.props.branch}
                </MDBBtn>

                <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>

                    <Table responsive>
                        <tbody>
                            <tr>{this.renderheader()}</tr>
                            {this.renderBody()}
                        </tbody>
                    </Table>


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
                        <Row >
                            <Col>
                                <Form>
                                    {/* backpack, boxes, bags */}
                                    <Form.Group as={Row} controlId="formPaking">
                                        <Row>
                                            <Form.Label column sm="6">
                                                Tulas                                                                     </Form.Label>
                                            <Col sm="5">
                                                <Form.Control type="text" placeholder="# Tulas" />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Form.Label column sm="6">
                                                Cajas                                                                        </Form.Label>
                                            <Col sm="5" >
                                                <Form.Control type="text" placeholder="# Cajas" />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Form.Label column sm="6">
                                                Bolsas                                                                         </Form.Label>
                                            <Col sm="5">
                                                <Form.Control type="text" placeholder="# Bolsas" />
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col>
                                <div className="paddings">
                                    <Row> Documento Compra: 5100038136 </Row>
                                    <Row> Código Material: 502332  </Row>
                                    <Row> Orden Fabricación: 2022144 </Row>
                                    <Row> Material: CORSET CORTO STRAPLESS </Row>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </MDBCollapse>
            </div>
        );
    }
}

export default deliveryCategories;
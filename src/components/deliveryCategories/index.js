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
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

class deliveryCategories extends Component {
    constructor() {
        super()
        this.state = {
            collapseID: "",
            validated: false,
            setValidated: false
        }
    }

    handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        console.log('Entró');
        this.setState({ validated: true });
    };


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
                    {/* cantidad_entregar */}
                    <td><input type="number" className="widthTexbox form-control" defaultValue="0" size="16" /></td>
                </tr>
            )
        })
    }


    render() {

        //const  branch  = this.props;
        const { validated, setValidated } = this.state;



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

                    <Table responsive className="centerTable table-hover">
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
                                <Form noValidate validated={validated} onSubmit={this.handleSubmit}>
                                    <Form.Row>
                                        <Form.Group as={Col} ms="4" md="6" controlId="validationCustom0">                                          
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="inputGroupPrepend">Tulas</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="0"
                                                    aria-describedby="inputGroupPrepend"
                                                    required
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                Ingrese la cantidad
                                        </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} ms="4" md="6" controlId="validationCustom1">                                          
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="inputGroupPrepend">Cajas</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="0"
                                                    aria-describedby="inputGroupPrepend"
                                                    required
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                Ingrese la cantidad
                                        </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} ms="4" md="6" controlId="validationCustom2">                                          
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="inputGroupPrepend">Bolsas</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="0"
                                                    aria-describedby="inputGroupPrepend"
                                                    required
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Ingrese la cantidad
                                        </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>

                                    <Button type="submit">Submit form</Button>
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
                </MDBCollapse >
            </div >
        );
    }
}

export default deliveryCategories;
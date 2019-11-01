import React, { Component } from 'react';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import './totalStyle.css'

class totalCounters extends Component {

  render() {
    return (
     
        <Container className="tableTotals">
          <Col>
          <Row>
              <Col>0</Col>
              <Col>0</Col>
              <Col>0</Col>
              <Col>0</Col>
            </Row>
            <Row>
              <Col>T. Entregar</Col>
              <Col>T. Tulas</Col>
              <Col>T Cajas</Col>
              <Col>T. Bolsas</Col>
            </Row>
          </Col>
        </Container>
     
    )
  }


}

export default totalCounters;
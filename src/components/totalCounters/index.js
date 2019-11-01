import React, { Component } from 'react';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

class totalCounters extends Component {

    render() {
        return (
          <Card>
        <Container className="text-center">       
            <Row>            			
              <Col>T. Entregar</Col>
              <Col>T. Tulas</Col>
              <Col>T Cajas</Col>
              <Col>T. Bolsas</Col>
            </Row>
          </Container>
          </Card>
          )
    }


}

export default totalCounters;
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import './confirmDate.css'

class confirmDate extends Component {
  
    render() {
      return (
        <Form>
        <div className="SquechuleButton">
            <Button variant="primary" size="lg" type="submit">Agendar</Button>
        </div>
         </Form>
      )
    }
}

export default confirmDate;
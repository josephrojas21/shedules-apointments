import React, { Component } from 'react';
import Swal from 'sweetalert2'

class alerts extends Component {
    constructor() {
        super()
        this.state = {
          
        }
     }

    render() {
        return (<div>
            {Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href>Why do I have this issue?</a>'
              })}    
              </div>  
        )
    }
}

export default alerts;
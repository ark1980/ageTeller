import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './Input.css'

class Input extends Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div className='input'>
                <h4>Pick Your Birthday From Below Input Bar</h4>
                <Form inline>
                    <FormControl type="date"></FormControl>
                     {'  '} 
                    <Button bsStyle="primary">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default Input;
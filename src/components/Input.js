import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './Input.css'

class Input extends Component {
    constructor() {
        super()

        this.state = { newDate: ''};
    }

    showBirthday() {
        console.log(this.state.newDate);
    }

    render() {
        return(
            <div className='input'>
                <h4>Select Your Birthday From Below</h4>
                <Form inline>
                    <FormControl 
                    type="date"
                    onChange={event => this.setState({newDate: event.target.value})} 
                    >
                    </FormControl>
                     {'  '} 
                    <Button bsStyle="primary" onClick={() => {this.showBirthday()}} >Submit</Button>
                </Form>
            </div>

        )
    }
}

export default Input;
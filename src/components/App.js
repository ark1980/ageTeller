import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css'
import AgeStats from './Age_stats';

class App extends Component {
    constructor() {
        super()

        this.state = { 
            newDate: '',
            birthday: '',
            showCongrats: false
        };
    }

    showBirthday() {
       this.setState(
           {
            birthday: this.state.newDate,
            showCongrats: true
            });
    }

    render() {
        return(
            <div className='app'>
                <h4>Select Your Birthday From Below</h4>
                <Form inline>
                    <FormControl 
                    type="date"
                    onChange={event => this.setState({newDate: event.target.value})} 
                    >
                    </FormControl>
                     {'  '} 
                    <Button bsStyle="primary" onClick={() => {this.showBirthday()}} >Submit</Button>
                    {
                        (this.state.showCongrats ? 
                            <AgeStats date={this.state.birthday}/>
                        :
                            <div></div>
                        )
                    }
                </Form>  
            </div>

        )
    }
}

export default App;
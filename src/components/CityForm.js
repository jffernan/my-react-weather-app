import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

class CityForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.cities.name
    }
  }

  handleInput = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <div>
        <Form>
          <FormGroup bsSize="medium" controlId="formValidationSuccess2" validationState="success">
            <div className="form">
              <FormControl
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleInput} />
                id="name"
                placeholder={"Enter Name Of New City."}
                value={props.location}
                onChange={props.changeLocationSubmit}
              />
            </div>
            <div className="submit">
              <Button
                id="submit"
                type="submit"
                bsStyle="primary" active>
                <span className = "button-text">Fetch Weather
                </span>
              </Button>
            </div>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default CityForm

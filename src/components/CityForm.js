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
    this.props.resetNotification()
    this.setState({[event.target.name]: event.target.value})
  }

  resetNotification = () => {
    this.setState({notification: ''})
  }

  handleBlur = () => {
    const city = {
      name: this.state.name
    }

    fetch(
      `/api/v1/cities/${this.props.city.id}`,
      {
        city: city
      })
    .then(response => {
      console.log(response)
      this.props.updateCity(response.data)
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <Form onBlur={this.handleBlur} >
          <FormGroup bsSize="medium" controlId="formValidationSuccess2" validationState="success">
            <div className="form">
              <FormControl
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleInput} />
                id="name"
                placeholder={"Enter Name Of New City."}
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

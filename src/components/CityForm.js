/*import React, { Component } from 'react';
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap';

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
          <FormGroup validationState="success">
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
              </Button>
            </div>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default CityForm
*/

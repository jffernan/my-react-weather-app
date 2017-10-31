import React, { Component } from 'react';
import { Button, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap';

class CityForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  handleNameChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    const { name } = this.state;
    const isEnabled =
      name.length > 0;

    return (
      <div>
        <Form onSubmit={this.props.addNewCitySubmit}>
          <FormGroup validationState="success">
            <div className="form">
              <ControlLabel>
              <FormControl
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleNameChange}
                id="name"
                placeholder={"Enter Name Of New City."}
                autoComplete="on"
              />
              </ControlLabel>
            </div>
            <div className="submit">
              <Button
                disabled={!isEnabled}
                id="submit"
                type="submit"
                bsStyle="primary" active>
                <span className = "button-text">
                  Save New City
                </span>
              </Button>
            </div>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default CityForm;

import React, { Component } from 'react';
import { Button, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap';

class CityForm extends Component {

  constructor() {
    super();
    this.state = {
      name: ''
    };
  }

  handleNameChange = (evt) => this.setState({ name: evt.target.value });

  render() {
    const { name } = this.state;
    const isEnabled =
      name.length > 0;

    return (
      <div>
        <Form>
          <FormGroup validationState="success">
            <div className="form">
              <ControlLabel>
              <FormControl
                type="text"
                name="name"
                //value={this.state.name}
                //onChange={this.handleInput} />
                id="name"
                placeholder={"Enter Name Of New City."}
                autoComplete="on"
              />
              </ControlLabel>
            </div>
            <div className="submit">
              <Button
                disabled={!isEnabled}
                onClick={this.onCitySubmit}
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

import React, { Component } from 'react';
import { Button, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap';

class CityForm extends Component {

  onCitySubmit() {
    let cityName = this.refs.cityName.value;
    this.props.handleSubmit(cityName);
  }

  render() {
    return (
      <div>
        <Form>
          <FormGroup validationState="success">
            <div className="form">
              <ControlLabel>
              <FormControl
                type="text"
                name="cityName"
                ref='cityName'
                //value={this.state.name}
                //onChange={this.handleInput} />
                id="cityName"
                placeholder={"Enter Name Of New City."}
                autoComplete="on"
              />
              </ControlLabel>
            </div>
            <div className="submit">
              <Button
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

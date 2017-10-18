import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

const LocationForm = (props) =>
  <div className="weatherApp">
    <Form onSubmit={props.fetchDataSubmit}>
      <FormGroup bsSize="medium" controlId="formValidationSuccess2" validationState="success">
        <div className="form">
          <ControlLabel>Please Enter 'Location' for Current Weather Below:
            <FormControl
              type="text"
              name="location"
              id="location"
              placeholder={"Type Address, City, State, Zip, or Country."}
              autocomplete="on"
              value={props.location}
              onChange={props.changeLocationSubmit}
            />
          </ControlLabel>
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

  export default LocationForm;

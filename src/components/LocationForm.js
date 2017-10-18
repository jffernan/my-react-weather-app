import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

const LocationForm = (props) =>
  <Form>
    <FormGroup bsSize="small" controlId="formValidationSuccess2" validationState="success">
      <div className="form">
        <ControlLabel>
          Please Enter 'Location' for Current Weather Below:
          <FormControl type="text"
            id="location"
            name = "location"
            placeholder={"Type City, State, Zip, Country, etc."}
            autocomplete="on"
          />
        </ControlLabel>
      </div>
      <div className="submit">
        <Button
          id="submit"
          type="submit"
          bsStyle="primary" active>
          <span>
          Fetch Weather
          </span>
        </Button>
      </div>
      <br/>
    </FormGroup>
  </Form>

  export default LocationForm;

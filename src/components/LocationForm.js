import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
//import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

export default class LocationForm extends React.Component {
//handleSubmit
  //constructor(props) {
    //super(props);
    //this.changeLocation = this.changeLocation.bind(this);

  //}
/*
  changeLocation(e) {
   this.props.changeLocation(e.target.value);
  }
*/
  render() {
    return (
      <Form onSubmit={this.fetchData}>
        <FormGroup controlId="formValidationSuccess2" validationState="success">
          <div className="form">
            <ControlLabel>
              Please Select 'Location' On Map Or Enter Below:
              <FormControl type="text"
                id="location"
                name = "location" //search
                placeholder={"Type City, State, Zip, Country, etc."}
                autocomplete="on"
                value={this.props.location}
                onChange={this.changeLocation}
              />
              <FormControl.Feedback />
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
    );
  }
}

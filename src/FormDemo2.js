import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + "added to db!", 2);
    alertify.success(this.state.password + "added to db!", 2);
    alertify.success(this.state.description + "added to db!", 2);
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">email</Label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="enter email"
              onChange={this.handleChange()}
            />
          </FormGroup>

          <FormGroup>
            <Label for="password">pasword</Label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="enter password"
              onChange={this.handleChange()}
              />
          </FormGroup>

          <FormGroup>
            <Label for="description">pasword</Label>
            <input
              type="textarea"
              name="description"
              id="description"
              placeholder="enter description"
              onChange={this.handleChange()}
              />
          </FormGroup>

          <FormGroup>
            <Label for="city">city</Label>
            <input
              type="select"
              name="city"
              id="city"
              placeholder="enter city"
              onChange={this.handleChange()}
            >
              <option>Adana</option>
              <option>İstanbul</option>
              <option>İzmir</option>
              <option>Mersin</option>
            </input>
          </FormGroup>
          <Button type="submit">Save</Button>
        </Form>
      </div>
    );
  }
}

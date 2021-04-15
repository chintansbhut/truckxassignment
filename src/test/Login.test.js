import React from "react";
import { configure, shallow } from "enzyme";
import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Header, Form, Button } from "semantic-ui-react";
import { Login } from "../views/Login/Login";
configure({
  adapter: new Adapter(),
});
describe("Testin <Login/> Component", () => {
  it("Login renders a header", () => {
    const wrapper = shallow(<Login />);
    const header = (
      <Header as="h2" color="teal" textAlign="center">
        Log-in to your account
      </Header>
    );
    expect(wrapper).to.contain(header);
  });

  it("Login renders a Button Field", () => {
    const wrapper = shallow(<Login />);
    const button = (
      <Button color="teal" fluid size="large" type="submit">
        Login
      </Button>
    );
    expect(wrapper).to.contain(button);
  });
  it("Login renders a two input Field", () => {
    const wrapper = shallow(<Login />);

    expect(wrapper.find(Form.Input)).to.have.lengthOf(2);
  });
  chai.use(chaiEnzyme());
});

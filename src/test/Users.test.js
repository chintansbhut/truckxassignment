import React from "react";
import { configure, shallow, mount } from "enzyme";
import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Header, Form, Button } from "semantic-ui-react";
import Users from "../views/Users/Users";
configure({
  adapter: new Adapter(),
});
describe("Testin <Users/> Component", () => {
  it("Users renders a header", () => {
    const fetchUsers = () => {};
    const wrapper = shallow(<Users users={[]} fetchUsers={fetchUsers} />);
    const header = <h1>My customers</h1>;
    expect(wrapper).to.contain(header);
  });

  it("Users renders a search input Field", () => {
    const fetchUsers = () => {};
    const wrapper = shallow(<Users users={[]} fetchUsers={fetchUsers} />);

    expect(wrapper.find("input")).to.have.lengthOf(1);
  });
  it("Users renders a search close button  Field", () => {
    const fetchUsers = () => {};
    const wrapper = shallow(<Users users={[]} fetchUsers={fetchUsers} />);

    expect(wrapper.find(".negative")).to.have.lengthOf(0);
    wrapper.setState({ isSearchMode: true });
    expect(wrapper.find(".negative")).to.have.lengthOf(1);
  });
  it("Users renders a no users found", () => {
    const fetchUsers = () => {};
    const wrapper = shallow(<Users users={[]} fetchUsers={fetchUsers} />);
    const header = <h2> No users found</h2>;
    expect(wrapper).to.contain(header);
  });
  it("Users renders a user table", () => {
    const fetchUsers = () => {};
    const users = [
      {
        first_name: "test",
        username: "uname",
        email: "test@mail.com",
        phone: "9422342313",
        createdAt: new Date(),
      },
    ];
    const wrapper = mount(<Users users={users} fetchUsers={fetchUsers} />);
    wrapper.setState({ isSearchMode: false, searchString: "" });
    expect(wrapper.find(".table")).to.have.lengthOf(1);
  });
  chai.use(chaiEnzyme());
});

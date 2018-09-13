import React, { Component } from "react";
import countries from "../../data/countries";
import cities from "../../data/cities";

export default class ContactsStep extends Component {
  getOptionsCities = () => {
    const options = [
      {
        id: "",
        name: "Выберите город"
      }
    ];
    for (let key in cities) {
      if (cities[key].country === Number(this.props.country))
        options.push({
          id: key,
          name: cities[key].name
        });
    }

    return options.map(item => {
      return (
        <option value={item.id} key={item.id}>
          {item.name}
        </option>
      );
    });
  };

  render() {
    // console.log(countries);
    // console.log(this.props);
    // console.log(cities["8"]);
    // console.log(this.props.country);
    // console.log(this.getOptionsCities());
    return (
      <div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={this.props.email}
            placeholder="Enter your email"
            onChange={this.props.onChangeValue}
          />
          {this.props.errors ? (
            <div className="invalid-feedback">{this.props.errors.email}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="text"
            className="form-control"
            id="mobile"
            name="mobile"
            value={this.props.mobile}
            placeholder="Enter number mobile"
            onChange={this.props.onChangeValue}
          />
          {this.props.errors ? (
            <div className="invalid-feedback">{this.props.errors.mobile}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select
            className="form-control"
            id="country"
            name="country"
            onChange={this.props.onChangeValue}
          >
            {countries.map(country => {
              return (
                <option value={country.id} key={country.id}>
                  {country.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="cities">City</label>
          <select
            className="form-control"
            id="cities"
            name="cities"
            onChange={this.props.onChangeValue}
          >
            {this.getOptionsCities()}
          </select>
          {this.props.errors ? (
            <div className="invalid-feedback">{this.props.errors.cities}</div>
          ) : null}
        </div>
      </div>
    );
  }
}

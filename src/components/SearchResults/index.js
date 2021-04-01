import React, { Component } from "react";
import EmployeeCard from "../EmployeeCard";
import Wrapper from "../Wrapper";
import Title from "../Title";
import API from "../../utils/API";
import SearchForm from "../Search/SearchForm"

class SearchResults extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    
    
    result: {},
    search: ""
  };



 
 componentDidMount(){
   console.log(API.monkey)

   this.searchEmployee();
   
 }

  




  // Map over this.state.employees and render a employeeCard component for each employee object


  // state = {
  //   result: {},
  //   search: ""
  // };


// search functions
searchEmployee = query => {
  API.getEmployees(query)
    .then(res => this.setState({ result: res.data }))
    .catch(err => console.log(err));
};

handleInputChange = event => {
  const value = event.target.value;
  const name = event.target.name;
  this.setState({
    [name]: value
  });
};

// When the form is submitted, search the OMDB API for the value of `this.state.search`
handleFormSubmit = event => {
  event.preventDefault();
  this.searchEmployee(this.state.search.toLowerCase());
};








  render() {
    let filteredEmployees = this.props.employees.filter(
      (employee) => {
        return employee.name.indexOf(this.state.search.toLowerCase()) !== -1;


      }
    )
    return (
      <Wrapper>
        <Title>Employees List</Title>
        <SearchForm
        value={this.state.search}
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}
        />

        {filteredEmployees.map((employee) => (
       
          <EmployeeCard
            removeEmployee={this.removeEmployee}
            id={employee.id.name}
            key={employee.id.value}
            name={employee.name.first}
            lastname= {employee.name.last}
            dob= {employee.dob.date}
            age= {employee.dob.age}
            image={employee.picture.large}
            email={employee.email}
            location={employee.location.city}
            state={employee.location.state}
          />
        ))}
      </Wrapper>
    );
  }
}

export default SearchResults;

import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import API from "./utils/API";
import SearchForm from "./components/Search/SearchForm"

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    
    employees: [],
    result: {},
    search: ""
  };



 
 componentDidMount(){
   console.log(API.monkey)
   this.fetchEmployees();
 }

  fetchEmployees = () => {
    console.log('I am working')
    API.getEmployees().then(res => this.setState({
      employees: res.data.results,
      
  }
  )).catch(err => console.log(err))


};


  removeEmployee = id => {
    // Filter this.state.employees for employees with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id.key !== id );
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
  };

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
  this.searchEmployee(this.state.search);
};








  render() {
    return (
      <Wrapper>
        <Title>Employees List</Title>
        <SearchForm
        value={this.state.search}
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}
        />

        {this.state.employees.map((employee) => (
       
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

export default App;

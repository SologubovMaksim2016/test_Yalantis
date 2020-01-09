import React from 'react';
import axios from 'axios';
import ApiService from '../src/services/api-service'
 
export default class PersonList extends React.Component {

  apiService = new ApiService();
  
  state = {
    people: [],
    month: ["01","02","03"]
  }
  constructor(){
    super();
    this.updateUser();
  }
  componentDidMount() {
   /* axios.get(`http://yalantis-react-school.herokuapp.com/api/task0/users`)
      .then(res => {
        const resourse = res.data;        
        const people = resourse.map( p => [ p.firstName, p.lastName, p.dob, p.id]); 
                
        this.setState({people});
      })*/
  }

  updateUser(){
    this.apiService.getUsers().then ( (p) => {
      const people = p.map( p => [ p.firstName, p.lastName, p.dob, p.id]);

      //console.log("TCL: PersonList -> updateUser -> people1", people)

      this.setState({people});
      
    });
  }
 
  render() {
    
  return (  // <div>END{console.log("TCL:this.state.people", this.state.people)}</div>
      
      <ol> 
        { this.state.month.map( month => {
  
         return this.state.people.filter(person => person[2].substr(5,2) === month).map(person =>        
          
        <li key={person[3]}>
          { "firstname:    " + person[0] 
          +"  lastname:      " + person[1] 
          + "      date of bird:    " + person[2].substr(0,10)}          
        </li>)
          })
        }        
      </ol>
    )
  }
}


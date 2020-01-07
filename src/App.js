import React from 'react';
import axios from 'axios';
 
export default class PersonList extends React.Component {


  state = {
    people: []
  }
  componentDidMount() {
    axios.get(`http://yalantis-react-school.herokuapp.com/api/task0/users`)
      .then(res => {
        const people = res.data.map( p => [ p.firstName, p.lastName, p.dob, p.id]); 
        this.setState({people});
      })
  }
 
  render() {
    
    return (   
     
      <ol>       
      
        { this.state.people.map(person => 
        <li key={person[3]}>
          {"firstname:    " + person[0] 
          +"  lastname:      " + person[1] 
          + "      date of bird:    " + person[2]}          
        </li>)}        
      </ol>
    )
  }
}






// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Component} from "react";
import history from '../history';
import Button from 'react-bootstrap/Button'




// function App() {
//   const [contact, setContact] = useState({
//     fName: "",
//     lName: "",
//     email: ""

    
//   });
  
 
//   function handler(event) {
//     const { value, name } = event.target;

//     setContact(preValue => {
//       if (name === "fName") {
//         return {
//           fName: value,
//           lName: preValue.lName,
//           email: preValue.email
//         };
//       } else if (name === "lName") {
//         return {
//           fName: preValue.fName,
//           lName: value,
//           email: preValue.email
//         };
//       } else if (name === "email") {
//         return {
//           fName: preValue.fName,
//           lName: preValue.lName,
//           email: value
//         };
//       }
//     });
    
//   }
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <img src="logo.png" alt="" class="center" width="200" height="200"></img>
        <h1>
          Welcome to TeamPact App!
           {/* {contact.fName} {contact.lName} ! */}
          <br></br>
        </h1>
        <p>This app is under construction and our team is currently working on it.
            Please bear in mind that some functions may not work properly. We will have the updated version soon. :)
            <br></br>
            <br></br>
            <br></br>
  
            </p>
        
        
        <form>
          {/* <input
            onChange={handler}
            value={contact.fName}
            name="fName"
            placeholder="First Name"
          />
          <input
            onChange={handler}
            value={contact.lName}
            name="lName"
            placeholder="Last Name"
          />
          <input
            onChange={handler}
            value={contact.email}
            name="email"
            placeholder="Email"
          /> */}
  
          <Button variant="btn btn-success" onClick={() => history.push('./dashboard')}>View Dashboard</Button>
        </form>
      </div>
    );
  

        }
      }
    
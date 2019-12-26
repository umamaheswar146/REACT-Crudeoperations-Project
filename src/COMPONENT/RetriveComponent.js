import React ,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';//npm install axios
import '../App.css';
 class RetriveComponent extends Component {

    state = {
        persons: []
        
      }
      componentDidMount() {
        axios.get(`http://localhost:8081/RetriveingData`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }
      //@@@@ INTERVIEW-QUESTION @@@@//
      // shouldComponentUpdate(nextprops,nextstate){
      //        if(this.state.persons.length>this.nextstate.persons.length){
      //          return true
      //        }
      //        else 
      //        return false
      // }
       //@@@@ INTERVIEW-QUESTION @@@@//
//       state = {
//   cachedSomeProp: n ull
//   // ... rest of initial state
// };

// static getDerivedStateFromProps(nextProps, prevState) {
//   // do things with nextProps.someProp and prevState.cachedSomeProp
//   return {
//     cachedSomeProp: nextProps.someProp,
//     // ... other derived state properties
//   };
// }
    render(){
        return (
            <div>
                            <table>
                            <tbody >
                                  <tr>
                                    <td>ID</td>
                                    <td>NAME</td>
                                    <td>Rollnumber</td>
                                    <td>DELET</td>
                                    <td>UPDATE</td>
                                  </tr>
                                  {
                                   this.state.persons.map( post=> 
                                   <tr key={post.id}>
                                    <td>{post.id}</td>
                                    <td >{post.name} </td>
                                    <td>{post.roolnumber}</td>
                                    <td><button  class="button button4"><a class="nav-link" href='' ><Link to={'/DELETE' +'/'+post.id}  class="nav-link navbar-dark">DELETE</Link></a></button></td>
                                    <td><button  class="button button4"><a class="nav-link" href=''><Link to={'/UPDATE' +'/'+post.id+'/'+post.name+'/'+post.roolnumber}  class="nav-link navbar-dark">UPDATE</Link></a></button></td>
                                   </tr>
    
                                   )
                                }
                  </tbody>
                </table>
            </div>
        )
}
   
}

export default RetriveComponent

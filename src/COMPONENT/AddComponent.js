import React,{Component} from 'react'
import axios from 'axios';
class AddComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id:'',
            name:'',
            roolnumber:''
        }
        
        // this.changeHandler=this.changeHandler.bind(this)//If we ant to write in a Constructor
    }
    changeHandler =event => {
        this.setState({[event.target.name] :event.target.value})
   }
    handleSubmit = event=>{
        event.preventDefault();

        axios.post('http://localhost:8081/InseartData',this.state)
        .then(res=>{
            console.log(res.data);
            alert('SucseFully Aded')
        })
    }
    
    render(){
        return (
            <div  className="container">
                <div  className="row">
                <div className="col-md-4"></div>
                <div   className="col-md-4">
                     <form onSubmit={this.handleSubmit}>
                     <div  className="form-group">
                            <label>Enter ID</label>
                             <input type="text"  onChange={this.changeHandler} name="id"   className="form-control" />
                     </div>
                         <div  className="form-group">
                             <label>Enter name</label>
                             <input type="text"  onChange={this.changeHandler} name="name"   className="form-control"  />
                         </div>
                         <div  className="form-group">
                             <label>Enter RoolNumber</label>
                            <input type="text" onChange={this.changeHandler} name="roolnumber"   className="form-control"/>
                         </div>
                         <input type="submit"  className="btn btn-primary btn-block" value="Submit" />
                         {/* <button type="submit" className="btn btn-primary btn-block">Add</button> */}
                    
                    </form>
                    </div>
                    <div  className="col-md-4"></div>
                </div>
            </div> 
    )
    
    }
       
}

export default AddComponent

import React ,{ Component } from "react"
import {Modal , Button} from "react-bootstrap"
import "../App.css"

class AdModa extends Component {
  constructor(props) {
    super(props);
    this.state ={
      show : false,
    };
  }
  handleshow = () =>{
    this.setState({show : !this.state.show});
  };
  handlechange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value,
    })
  };
    render(){
    return (    
      <div>
        <button variant="primary" onClick={this.handleshow} className="buttomm">
          add movie
        </button>
       
        <Modal show={this.state.show} onHide={this.handleshow}>
        <Modal.Header>
          <Modal.Title className="hh">Add new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              <label className="input">Title:</label>
              <input type="text" name="name" onChange={this.handlechange}/>
            </div>
            <div>
            <label className="input">Image:</label>
              <input type="text" name="image" onChange={this.handlechange}/>
            </div>
            <div>
            <label className="input">Rating:</label>
              <input type="text" name="rating" onChange={this.handlechange}/>
            </div>
            <div>
            <label className="input">Year:</label>
              <input type="text" name="Year" onChange={this.handlechange}/>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={this.handleshow}>
            close
          </Button>
          <Button variant="primary" onClick={this.handleshow}>
            Save Changes
          </Button>
        </Modal.Footer>
        </Modal>


      </div>
    );
  }
  }
  export default AdModa ;
  
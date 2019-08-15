import React from 'react';
import './App.css';
import {Component} from 'react';

class Patient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slot:[],
      data: [],
    };
    // this.update = this.update.bind(this);
  }
  componentDidMount() {
    const that = this;
    fetch('https://localhost:44368/api/values/')
    .then(function(response){
      return response.json();
    })
    .then(function(myJson){
      // var thisData = JSON.stringify(myJson);
      that.setState({data:myJson})
    });
  }

  updateGrid = (nSlot) => {
    const slot = nSlot
    fetch("https://localhost:44368/api/values/"+slot)
    .then((response) =>{
      return response.json();
    })
    .then((myJson)=>{
      this.setState({data:myJson})
    });
  }

  
  componentDidUpdate(prevProps,prevState){
    if(prevState.data !== this.state.data){
      console.log(prevState.data)
      console.log(this.state.data)
      console.log("break")
    }
  }

  update=()=>{
    let nSlot = document.getElementById("TimeSlotSelecter").value
    this.updateGrid(nSlot);
    this.setState({slot:nSlot});
  }
  

  render(){
    const data = this.state.data
    const something = data.map((o,index) =>   
    <div id={"PP"+index} key={index} className="patientProfile" >
    <div id={"time"+index} className="time">{o.time}</div>
    <div id={"name"+index} className="name">{o.firstname+" "+o.surname}</div>
    <div id={"reason"+index} className="reason">{o.reason}</div>
    <div id={"notes"+index} className="notes">{o.notes}</div>
  </div>);
    return (
      <>
      <div id="TimeSlotSelect">
        <label>Slot Iteration: </label>
        <select id="TimeSlotSelecter">
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
        <button onClick={this.update}>Update</button>
      </div>
      <div>
     {something}
     </div>
     </>
    )
  }
}
export default Patient;



//context
/* <ContextMenu contextId={"PP"+index} key={index} className="patientProfile" items={[{label: 'Delete slot', onClick: this.deleteSlot},{label: 'Block Slot', onClick: this.blockSlot}]}></ContextMenu> */
import React from 'react';
import Modal from 'react-modal';
import './Modal.css';
import SendData from './DataOutgoing';
   
  Modal.setAppElement(document.getElementById('root'));

  

  class ModalPopup extends React.Component {
    constructor(props) {
      super(props);
   
      this.state = {
        modalIsOpen: false
      };
   
      this.openModal = this.openModal.bind(this);
    //   this.afterOpenModal = this.afterOpenModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.closeModalOk = this.closeModalOk.bind(this);
    }
   
    openModal() {
      this.setState({modalIsOpen: true});
    }
   
    // afterOpenModal() {
    //   // references are now sync'd and can be accessed.
    //   this.subtitle.style.color = '#f00';
    // }
   
    closeModal() {
      this.setState({modalIsOpen: false});
      
    }
    closeModalOk() {
      this.sendingData()
      this.setState({modalIsOpen: false});
      
    }
   
    sendingData() {
        let slot = document.getElementById("TimeSlotSelecter").value
        let xTime = document.getElementById("timeInput").value
        let xFirstname= document.getElementById("firstnameInput").value
        let xSurname = document.getElementById("surnameInput").value
        let xReason = document.getElementById("reasonInput").value
        let xNotes = document.getElementById("notesInput").value
       
         let testData = {
            "time": xTime,
            "firstname": xFirstname,
            "surname": xSurname,
            "reason": xReason,
            "notes": xNotes,
            "thing": slot
        }
        SendData(testData)
        
    }
    render() {

      

      return (
        <div>
          <div id="Session" onClick={this.openModal}>Add Sessions</div>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            className="Modal"
            overlayClassName="Overlay"
            contentLabel="Example Modal"
          >
            <div id="input">
                <h2 ref>Session Management:</h2>
                <h1 id="close" onClick={this.closeModal}>X</h1>

                <form id="formControl">
                <div> Time Slot: </div>
                <input id="timeInput" className="inputControl" placeholder="HH:MM"/>
                </form>

                <form id="formControl">
                <div> First Name: </div>
                <input id="firstnameInput" className="inputControl" placeholder="..." />
                </form>
                <form id="formControl">
                <div> Last Name: </div>
                <input id="surnameInput" className="inputControl" placeholder="..."/>
                </form>
                <form id="formControl">
                <div> Reason: </div>
                <textarea id="reasonInput" className="inputControlLarge" placeholder="..."/>
                </form>
                <form id="formControl">
                <div> Notes: </div>
                <textarea id="notesInput" className="inputControlLarge" placeholder="..."/>
                </form>
                <br/>
                <button onClick={this.closeModalOk} >Submit</button>
                {/* <br/> */}
                {/* <label> Select Time Slot:</label>
                <br/>
                <select id ="slotControl">
                  <option value='15'>15</option>
                  <option value='20'>20</option>
                  <option value='30'>30</option>
                </select> */}
            </div>
          </Modal>
        </div>
      );
    }
  }

  

  export default ModalPopup;
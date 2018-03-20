import React, { Component } from 'react';
import './modal.css';

class ModalDemo extends Component {
onClose = (e) => {
   this.props.onClose && this.props.onClose(e);
}

   render () {
      if (!this.props.show) {
         return null;
      }
      return (
         <div className='backdropStyle'>
            <div className='modalStyle'>
               <h1>Give me all your money</h1>
               <h3>BITCH</h3>

               <div className='footerStyle'>
                  <button onClick = {(e) => { this.onClose(e)}}>
                     Close
                  </button>
               </div>
            </div>
         </div>
      )
   }
}

export default ModalDemo;
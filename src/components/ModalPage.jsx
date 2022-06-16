import React from "react";
import {Button,Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap'

class ModalPage extends React.Component{
    constructor(){
        super()
        this.state={isModalOpen:true}
    }
    toggle = () =>{
        this.setState({isModalOpen:!this.state.isModalOpen})
    }
    render(){
        return(
            <div className="modal">
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggle}>
                    <ModalHeader>The name of the Actor</ModalHeader>
                    <ModalBody>This is the Body of my Moda</ModalBody>
                    <ModalFooter><Button onClick={this.toggle}>Close</Button></ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default ModalPage
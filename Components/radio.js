import React, { Component } from 'react';
import {Modal,Button} from 'react-native';

const Radio=(props)=>{
return(
    <Modal visible={props.state} animationType='slide' presentationStyle='fullScreen' onRequestClose={()=>{props.handle(false)}}>
        <Button title="Back" onPress={()=>{props.handle(false)}}/>
    </Modal>
);
}

export default Radio;
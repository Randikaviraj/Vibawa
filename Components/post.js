import React from 'react';
import {Modal,Button,Image,Text} from 'react-native';


const Post=(props)=>{
return(
    <Modal visible={props.state} animationType='slide' presentationStyle='fullScreen' onRequestClose={()=>{props.handle(false)}}>
        <Button title="Back" onPress={()=>{props.handle(false)}}/>
         
       
    </Modal>
)
}

export default Post;
import React from 'react';
import {Modal,View,Text,StyleSheet,Image,ScrollView} from 'react-native'

const Details=(props)=>{

 return(
    <Modal visible={props.state}  animationType='fade' onRequestClose={()=>{props.handle(false)}} transparent={true} >
    <View style={styles.main}>
        <Image style={styles.image} source={props.source}/>
        <ScrollView>
            <Text style={styles.text}>
                {props.details} 
            </Text>
        </ScrollView>
        

    </View> 
    </Modal>
 );

}


export default Details;

const styles=StyleSheet.create({
    main:{
        flex:1,
        padding:15,
        
    },
    image:{
    height:300,
    width:300,
    borderRadius:20,
    borderBottomWidth:30,
    opacity:0.888,
    },
    text:{
        fontSize:25,
        fontWeight:"bold",
        color:"black",
        backgroundColor:"white",
        borderRadius:20,
        padding:5,
    }


})
import React,{useState} from 'react';
import {View,TouchableOpacity,Image,StyleSheet,Text,Modal,ImageBackground} from 'react-native';
import Details from './details';
const Canvas=(props)=>{
    const [state,setState]=useState(false);
    return(
            <View style={style.main}>
               
                <View style={style.text}>
                    <Text style={style.heading} >{props.head}</Text >
                </View> 
                <View style={style.imagebody}>
                     
                         <ImageBackground source={props.source} style={style.imagebackground}>
                         <TouchableOpacity onPress={()=>{setState(true)}} >
                         <Text style={{fontSize:20,fontWeight:"bold"}}>{props.title}
                         </Text>
                         </TouchableOpacity>
                         <Details state={state} handle={setState} details={props.children} source={props.source}/>
                        </ImageBackground> 
                          
                    
                </View>
                 
         </View>
    );
   
}

export default Canvas;

const style=StyleSheet.create({
    imagebody:{
        flex:2,
        flexDirection:'column',
        justifyContent:'center',
        backgroundColor:'pink',
        borderRadius:10,
        padding:5
      
        
    },
        
    text:{
        
        alignItems:'center',
        height:50,
        flex:1,
        alignContent:'center',
        backgroundColor:'pink',
        borderRadius:10,
        margin:8,
        
        
    },
    main:{
        
        height:250,
        flexDirection:'column',
        justifyContent:'space-between',
        shadowRadius:10,
        shadowOpacity:5,
        shadowOffset:{width:5,height:10},
        borderRadius:10,
        margin:8
    },
    heading:{
        fontSize:20,
        fontWeight:'bold',
        color:"red"

    },
    imagebackground:{
        flex:1,
       
      
    }

});
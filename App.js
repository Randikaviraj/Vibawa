import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,ImageBackground,TouchableOpacity,Image} from 'react-native';
import Radio from './Components/radio';
import Bloger from './Components/bloger';
import Post from './Components/post';


export default function App() {
  const [radiostate,setRadio]=useState(false);
  const [poststate,setPost]=useState(false);
  const [blogerstate,setBloger]=useState(false);


  return (
   
      <ImageBackground source={{uri:'https://previews.123rf.com/images/cepheia/cepheia1901/cepheia190100235/116756161-japan-traditional-sumi-e-painting-watercolor-and-ink-illustration-in-style-sumi-e-u-sin-fuji-mountai.jpg'}} style={styles.image}>
        <View style={styles.container}>
             
             <TouchableOpacity onPress={()=>{setBloger(true)}}  >
                  <Image style={styles.button} 
                  source={{uri:'https://www.itechblogger.com/wp-content/uploads/2016/09/blogger-seo-guide.jpg'}} />
            </TouchableOpacity>
        
         
              <TouchableOpacity onPress={()=>{setPost(true)}} >
                  <Image style={styles.button} 
                  source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQopkXI-ccqPHrGnf7KcMAA4X1ZqZSu2uYCJb3eJCL-RkqFXB__'}} />
            </TouchableOpacity>


            <TouchableOpacity onPress={()=>{setRadio(true)}}  >
                  <Image style={styles.button} 
                  source={{uri:'https://media.gettyimages.com/photos/vintage-green-portable-radio-sitting-on-wood-table-picture-id184659484?s=612x612'}} />
            </TouchableOpacity>
         
        </View>
       
          
        <View style={styles.base} >
          <Radio handle={setRadio} state={radiostate} />
          <Post handle={setPost} state={poststate}/>
          <Bloger handle={setBloger} state={blogerstate}/>
        </View>

        
        
        
 
        
        
        
      
        </ImageBackground> 
      

  );
}

const styles = StyleSheet.create({
  container: {
    flex:3,
    flexDirection:'column',
    justifyContent:'space-evenly',
    alignItems:'center'
    
   
  },
  button:{
    height:80,
    width:200,
    borderRadius:20,
    borderBottomWidth:30,
    opacity:0.888,
    
    
  },
  image:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center'
  },
  base:{
    flex:1
  },
 



});

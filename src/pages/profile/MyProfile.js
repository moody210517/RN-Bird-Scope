import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';


export default class MyProfile extends Component{

    render(){
        return(            
            <View style={{backgroundColor:'#ff0', height:50}}>        
               <Text > Profile  Page My profile</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content: {      
      backgroundColor: '#fff',      
    },
    text: {      
        backgroundColor: '#fff',      
    },

});
  

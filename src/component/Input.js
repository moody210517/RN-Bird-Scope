import React, {Component} from 'react';
import {TextInput, View, Text, Image} from "react-native";

const Input = (props) => {
    state  = {text: ""};
    var url = "";
    var right_url = "";

    const  {src, label, placeholder, value, onChangeText, secureTextEntry,imgStyle={} , mainStyle={} } = props;

    if(src == 'email'){
        url = require('../../assets/user-icon-email.png');
        right_url = "";
    }else if(src == "password"){
        url = require('../../assets/lock-icon-pass.png');
        right_url =  require('../../assets/lock-right.png');
    }else if(src == "username"){
        url = require('../../assets/name-icon.png');
    }else{
        url = require('../../assets/lock-icon-pass.png');        
    }
    if(src == 'password_register'){
        url = require('../../assets/lock-icon-pass.png');
    }else if(src == 'hand'){
        url =  require('../../assets/handicap-icon.png');
    }else if(src == 'start'){
        url =  require('../../assets/starting-position-icon.png');
    }else if(src == "west"){
        url =  require('../../assets/starting-position-icon.png');
        right_url =  require('../../assets/lock-right.png');
    }else if(src == 'white'){
        url =  require('../../assets/starting-position-icon.png');
    }else if(src == 'search'){
        url =  require('../../assets/icon/icon_search.png');
    }                      
    const {containerStyle, inputStyle, hidden} = styles;
    return(
        <View style={[containerStyle, mainStyle]}>
                <Text style={hidden}>{label}</Text>
            <View>
        
            <Image source={url} style={[styles.ImageStyleLeft , imgStyle]} />
            </View>
            <View style={{flex:1}}>
            <TextInput
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    autoCorrect={false}
                    style={inputStyle}
                    value={value}
                    onChangeText={onChangeText} />
            </View>   
            <Image source={right_url} style={styles.ImageStyleRight} />

        </View>
    )
};

const styles = {
    inputStyle: {        
        color: "#000",        
        fontSize: 16,        
        borderWidth: 0,        
        textAlign: 'left',                     
    },
   
    containerStyle: {
        alignSelf: 'stretch',
        height: 50,
        backgroundColor:'#f5f5f5',                
        flexWrap:"wrap",
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft:15,
        paddingTop:0,
        paddingBottom:0,
        borderRadius:5,
    },
    hidden:{
        showCancel: true,
        height:0,
        width:0,
    },
    
    ImageStyleLeft:{      
        width:19,
        height:23, 
        resizeMode: 'stretch',
        marginRight:5, 
    },

    ImageStyleRight:{
        height: 25,
        width: 25,
        resizeMode: 'stretch',   
        marginRight:15, 
    }

};

export default Input;

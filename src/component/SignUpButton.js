import React,{Component} from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export const SignUpButton = (props) => {

    const {title = 'Enter', style={}, textStyle={}, onPress} = props;
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>          
                <Text style={[styles.text, textStyle]}>{props.title}</Text>          
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    button: {
        display: 'flex',   
        flex:1,
        flexDirection:"row",
        height: 50,        
        justifyContent: 'center',
        alignItems: 'center',        
        shadowColor: '#7adbae',
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 30,
        borderRadius: 7, 
        borderColor:"#FFF",
        borderWidth: 1.5,
    },

    text: {
        fontSize: 16,
        textTransform: 'uppercase',
        color: '#FFFFFF',
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 15, 
      },

});

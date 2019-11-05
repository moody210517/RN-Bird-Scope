import React,{Component} from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export const SignButton = (props) => {

    const {title = 'Enter', style={}, textStyle={}, onPress} = props;
    return (
        <TouchableOpacity onPress={onPress} style={[style]}>
            <LinearGradient 
                start={{x: 1, y: 1}} end={{x: 1.0, y: 0.8}}
                colors={['#7adbae', '#29caa1', '#05c39b']} 
                style={styles.button}>
                <Text style={[styles.text, textStyle]}>{props.title}</Text>
            </LinearGradient>            
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
        backgroundColor: '#7adbae',
        shadowColor: '#7adbae',
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 30,
        borderRadius: 7, 
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

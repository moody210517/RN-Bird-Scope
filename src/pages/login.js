import React , {Component} from 'react';
import{StyleSheet,ScrollView,View,ImageBackground,Image } from 'react-native';

import Input from '../component/Input';
import {SignButton} from '../component/SignButton';
import {SignUpButton} from '../component/SignUpButton';
import {Actions} from 'react-native-router-flux';

export default class Login extends Component{
    state = {
        email:'',
        password:''
    };    
    onLogin = () =>{
    }
    triggerAddTripState = () =>{
        console.log("download data from server placeholder");
        Actions.Register();
    }
    render(){
        return(
            <ScrollView>
                
                <View style={styles.container}>
                   
                    <ImageBackground 
                        source={require('../../assets/back-image-update.png')}
                        style={{
                            width:"100%",         
                            height:500,
                            resizeMode: 'stretch',                             
                        }}
                        >
                        <View style={{flex:1, marginTop:80,
                                    alignItems: 'center'}}>
                            <Image source = {require('../../assets/header.png')} 
                                style={{                                    
                                    width:220,
                                    height:220,                           
                                }}
                            />
                        </View>
                                               
                        <View style={{height:50, marginBottom:20,marginRight:20,marginLeft:20}}>
                        <SignUpButton
                                title="Create New Account"
                                onPress={() => {this.triggerAddTripState()} }                                
                                textStyle={{ /* styles for button title */ }}
                            />       
                        </View>
                                         
                    </ImageBackground >
            
                    
                    <View style={{padding:20}}>

                            <Input 
                                src="email"
                                placeholder="Email"
                                label="Email"
                                value={this.state.email}
                                onChangeText={email=>this.setState({email})}
                            />
                            <View style={{marginTop:5}} />

                            <Input 
                                src="pass"
                                placeholder="Password"
                                label="Email"
                                value={this.state.email}
                                onChangeText={email=>this.setState({email})}
                            />

                            <View style={{margin:14}} />                                                                               

                            <SignButton
                                title="Sign In to My Account"
                                onPress={() => Alert.alert(`Why you opened me? Go away, it's mine!`)}
                                style={{ /* some styles for button */ }}
                                textStyle={{ /* styles for button title */ }}
                            />

                            <View style={{margin:7}} />
                            
                    </View>
                </View>
                                        
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',      
      flexDirection:"column"
    },
});

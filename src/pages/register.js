import React , {Component} from 'react';
import{StyleSheet,ScrollView,View,ImageBackground,Image ,Text} from 'react-native';

import Input from '../component/Input';
import {SignButton} from '../component/SignButton';

export default class Register extends Component{
    state = {
        email:'',
        name:'',
        handicap:'',
        starting_position:'',        
        password:'',
        confirm_password:'',
    };    
    onLogin = () =>{
    }
    render(){
        return(
            <ScrollView>
                
                <View style={styles.container}>
                   
                    <ImageBackground 
                        source={require('../../assets/back-image-update.png')}
                        style={{
                            width:"100%",         
                            height:300,                                                    
                            resizeMode: 'stretch',                             
                            paddingBottom:-200,
                        }}
                        >
                        <View style={{flex:1, marginTop:50,
                                    alignItems: 'center'}}>
                            <Image source = {require('../../assets/header.png')} 
                                style={{                                    
                                    width:220,
                                    height:220,                           
                                }}
                            />
                        </View>
                                                                                                                
                    </ImageBackground >
            
                    


                    <View style={{padding:20}}>
                            
                            <Text style={{fontSize:16,fontWeight:'bold', marginBottom:5}} >Create New Account</Text>
                            <Input 
                                src="email"                                
                                placeholder="Email"
                                label="Email"
                                value={this.state.email}
                                onChangeText={email=>this.setState({email})}
                            />
                            <View style={{marginTop:10}} />

                            <Input 
                                src="username"
                                imgStyle = {{ width:24,height:23}}
                                placeholder="Name"
                                label="Name"
                                value={this.state.name}
                                onChangeText={name=>this.setState({name})}
                            />
                            <View style={{margin:10}} />
                                                                               


                            <View  style={styles.profile}>                                
                                <Image source={require('../../assets/profile-photo.png')} style={{width: 110, height: 110}} />                                
                                <View style={{flex:1, paddingLeft:15,}}>

                                    <Input 
                                        src="hand"
                                        imgStyle = {{ width:24,height:23}}
                                        placeholder="Handicap"
                                        label="Handicap"
                                        value={this.state.handicap}
                                        onChangeText={handicap=>this.setState({handicap})}
                                    />
                                    <View style={{margin:5}} />
                                    <Input 
                                        src="start"
                                        imgStyle = {{ width:24,height:23}}
                                        placeholder="Starting position"
                                        label="Starting position"
                                        value={this.state.starting_position}
                                        onChangeText={starting_position=>this.setState({starting_position})}
                                    />
                                </View>
                            </View>                            
                            <View style={{margin:10}} />

                            <Input 
                                src="password_register"
                                placeholder="Password"
                                label="Password"
                                value={this.state.password}
                                onChangeText={password=>this.setState({password})}
                            />
                            <View style={{marginTop:10}} />

                            <Input 
                                src="repeat"
                                placeholder="Repeat Password"
                                label="Repeat Password"
                                value={this.state.confirm_password}
                                onChangeText={confirm_password=>this.setState({confirm_password})}
                            />
                            <View style={{marginTop:10}} />
                            

                            <SignButton
                                title="Create Account"
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
    profile:{
        flexDirection:"row",
    }
        
    
});

import React from 'react';
import {
  StyleSheet,
  View,  
  Text,  
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,  
} from 'react-native';

import { colors, fonts , commonStyles } from '../../styles';
import { RadioGroup, Button, Input,  TextInput } from '../../component';
import { FlatList } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Modal from "react-native-modal";
import {SignButton} from '../../component/SignButton';
import common from '../../styles/common';


export default class SettingScreen extends React.Component {  

   listData = [
    {
      id: 1,      
      title: 'Hana Marks',
      subtitle: 'Handicap 7',      
    },
    {
      id: 2,
      title: 'Jhon Does',
      subtitle: 'Handicap 14'
    },
  ];
  cardData = [
    {
      id: 1,      
      name: 'Chase Unlimited',
      number: '342323532452342',      
      expire:'11/22',
      des:'chris Arock'
    },
    {
      id: 2,    
      name: 'Chase Unlimited',
      number: '342323532452342',      
      expire:'11/22',
      des:'chris Arock'
    },
  ];


  state = {      
      name:'',
      handicap:'',
      whites:'',
      west_palm:'',
      email:'',
      visibleModal: null,
  };    

  _openArticle = article => {
    this.props.navigation.navigate({
      routeName: 'Article',
      params: { ...article },
    });
  };
  
  renderView = () => {    
    if(this.props.tabIndex == 0){
      return this.renderMyProfile();
    }else if(this.props.tabIndex == 1){
      return this.renderMyTeam();
    }else if(this.props.tabIndex == 2){      
      return this.renderPaymentInfo();
    }
  }
    
  renderMyProfile() {    
    return (
      <ScrollView>
         <View style={styles.container}>      
                    
                    <View style={{padding:20}}>          
                        <Input 
                            src="name"                                
                            placeholder="Chris Arack"
                            label="Chris"
                            value={this.state.name}                        
                            onChangeText={name=>this.setState({name})}
                        />
          
                        <View style={{flexDirection:"row", marginTop:10,}}>
          
                          <Input 
                              src="hand"                                
                              placeholder="Handicap"
                              label="Handicap"
                              value={this.state.handicap}   
                              mainStyle={{flex:1, marginRight:2,}}               
                              onChangeText={handicap=>this.setState({handicap})}
                          />
                          
                          <Input 
                              src="white"                                
                              placeholder="Whites"
                              label="Whites"
                              value={this.state.whites}           
                              mainStyle={{flex:1, marginLeft:2,}}       
                              onChangeText={whites=>this.setState({whites})}
                          />
                        </View>              
                        <Input 
                              src="west"                                
                              placeholder="West Palm Beach, FL"
                              label="West Palm"
                              value={this.state.west_palm}           
                              mainStyle={{marginTop:10,}}       
                              onChangeText={west_palm=>this.setState({west_palm})}
                          />
          
                        <Input 
                              src="email"                                
                              placeholder="hello@decarock.com"
                              label="Email"
                              value={this.state.email}  
                              mainStyle={{marginTop:10,}}                         
                              onChangeText={email=>this.setState({email})}
                          />
                       
                         
                          <Button
                              style={styles.demoButton}
                              bgColor = '#47d1a6'                  
                              caption="Subscribed to newsletter"                  
                              onPress={() => {}}
                            />                                                          
                          
                          <Button
                              style={styles.demoButton}
                              bgColor = '#47d1a6'
                              caption="Change password"
                              onPress={() => {}}
                            />
                    </View>
                </View>
      </ScrollView>     
    )
  }
  
  

  renderMyTeam() {    
    return (
      <View style={commonStyles.container}>
          <View style={{padding:20}}>
              <Text style={commonStyles.title}>Edit your team</Text>
              <Text style={commonStyles.description}>Keep your teamates scores and quickly add them to your games by having them ready</Text>

              <FlatList 
                data = {this.listData}
                renderItem={({item}) =>

                  <View style={styles.itemContainer}>

                    <View style={styles.circleLabel}>
                      <Text style={{color:colors.white, fontWeight:"bold",}}>HM</Text>
                    </View>

                    <View style={{flex:1, flexDirection:"column",marginLeft:10}}>
                      <Text style={styles.itemTitle}>{item.title}</Text>
                      <Text style={styles.itemDescription}>{item.title}</Text>
                    </View>
                    
                    <Image 
                      source={require('../../../assets/icon/icon_red_close.png')}
                      style={[styles.itemIcon, {marginRight:15}]}
                     />

                    <Image 
                      source={require('../../../assets/icon/icon_grey_edit.png')}
                      style={styles.itemIcon}
                     />
                  </View>
                }
              >                  
              </FlatList>

              <Image 
                source={require('../../../assets/icon/btn_grey_add.png')}
                style={{width:Dimensions.get('window').width - 40, resizeMode:"contain", height:60, marginTop:20,}}
              />
          </View>
      </View>
    )
  }
  renderPaymentInfo() {    
    return (
      <View style={commonStyles.container}>

          <View style={{padding:20}}>
              <Text style={commonStyles.title}>Payment Details</Text>
              <Text style={commonStyles.description}>
                Manage your saved payment methods below.
              </Text>

              <FlatList 
                horizontal={true}
                data = {this.cardData}
                renderItem={({item}) =>

                  <View style={styles.itemContainer}>

                    <LinearGradient 
                        start={{x: 0, y: 0}} end={{x: 1.0, y: 1.8}}
                        colors={['#05c2f7', '#2793dd', '#3a75cf']} 
                        style={styles.blueCard}>
                        
                        <Image
                          source={require('../../../assets/icon/icon_red_close.png')}
                          style={[styles.itemIcon, {position:"absolute", right:0, margin:15}]}
                         />

                        <View style={{flex:1, flexDirection:"column",padding:20}}>
                          <Text style={styles.cardTitle}>{item.name}</Text>
                          <Text style={styles.cardTitle}>{item.number}</Text>
                          <Text style={styles.cardTitle}>{item.expire}</Text>
                          <Text style={styles.cardTitle}>{item.des}</Text>
                        </View>
                        
                    </LinearGradient>                                                                                
                  </View>
                }
              >                  
              </FlatList>

              <TouchableOpacity onPress={()=>this.setState( {visibleModal: 'bottom'} )}>
                  <Image                     
                    source={require('../../../assets/icon/btn_add_card.png')}
                    style={{width:Dimensions.get('window').width - 40, resizeMode:"contain", height:60, marginTop:20,}}
                  />
              </TouchableOpacity>

              
              <Text style={commonStyles.title}>Billing information</Text>
              <Text style={commonStyles.description}>
                Edit your billing information settings
              </Text>

              <View style={{flexDirection:"row", alignItems:"center" , marginTop:10 }}>
                <Text style={styles.textTitleStyle}>Name</Text>
                <View style={{flex:1}}>
                  <TextInput 
                    placeholder = "Enter Your Name" 
                    placeholderTextColor = {colors.grey}
                    autoCorrect={false}
                    style={styles.inputTextStyle}                   
                    placeholder="Chris Arock" />
                </View>         
              </View>

              <View style={{flexDirection:"row", alignItems:"center" , marginTop:5 }}>
                <Text style={styles.textTitleStyle}>Street</Text>
                <View style={{flex:1}}>
                  <TextInput 
                    placeholder = "1547 Kamena AVe" 
                    placeholderTextColor = {colors.grey}
                    autoCorrect={false}
                    style={styles.inputTextStyle}                   />
                </View>                
              </View>


              <View style={{flexDirection:"row", alignItems:"center" , marginTop:5 }}>
                <Text style={styles.textTitleStyle}>City</Text>
                <View style={{flex:1}}>
                  <TextInput 
                    placeholder = "Lake Worth" 
                    placeholderTextColor = {colors.grey}
                    autoCorrect={false}
                    style={styles.inputTextStyle}/>
                </View>                
              </View>

              <View style={{flexDirection:"row", alignItems:"center" , marginTop:5 }}>
                <Text style={styles.textTitleStyle}>State</Text>
                <View style={{flex:1}}>
                  <TextInput 
                    placeholder = "Florida" 
                    placeholderTextColor = {colors.grey}
                    autoCorrect={false}
                    style={styles.inputTextStyle}                   
                     />
                </View>                
              </View>

              <View style={{flexDirection:"row", alignItems:"center" , marginTop:5 }}>
                <Text style={styles.textTitleStyle}>Zip</Text>
                <View style={{flex:1}}>
                  <TextInput 
                    placeholder = "33435" 
                    placeholderTextColor = {colors.grey}
                    autoCorrect={false}
                    style={styles.inputTextStyle}                   
                     />
                </View>                
              </View>
              
          </View>
      </View> 
    )
  }

  handleOnPress = () => {
    console.warn('puff')
    this.setState({visibleModal: null})
  }


  renderModalContent = () => (
    <View style={commonStyles.modalContent}>
    
      <View style={{flexDirection:"row", alignItems:"flex-start" , marginTop:5 }}>
        <View style={{flex:1}}>
          <TouchableOpacity onPress={this.handleOnPress.bind(this)}  disabled={false}> 
            <Image
              source={require('../../../assets/icon/btn_white_close.png')}
              style={{width:55, height:55 , marginTop:-55, alignSelf:'flex-end', zIndex:100,}}  />
          </TouchableOpacity>
          
          <Text style={commonStyles.title}>  Add card </Text>
          <Text style={commonStyles.description}> Select a color for this card </Text>
        </View>
      </View>

      <View style={{flexDirection:"row", alignItems:"center"}}>
        <Image 
            source={require('../../../assets/icon/circle_black.png')}
            style={{width:35, height:35, margin:10, }} />
        <Image 
            source={require('../../../assets/icon/circle_blue.png')}
            style={{width:35, height:35 , margin:10}}   />

        <Image 
            source={require('../../../assets/icon/circle_red.png')}
            style={{width:50, height:50 , margin:10}}   />

        <Image 
            source={require('../../../assets/icon/circle_green.png')}
            style={{width:35, height:35 , margin:10}}   />
        
        <Image 
            source={require('../../../assets/icon/circle_gray.png')}
            style={{width:35, height:35 , margin:10}}   />
        
      </View>


      <View style={{flexDirection:"row", alignItems:"center" , marginTop:5 }}>
          
          <View style={{flex:1}}>
            <TextInput 
              placeholder = "Give this card a name" 
              placeholderTextColor = {colors.grey}
              autoCorrect={false}
              style={styles.inputTextStyle}/>
          </View>                
        </View>

        <View style={{flexDirection:"row", alignItems:"center" , marginTop:5 }}>
          
          <View style={{flex:1}}>
            <TextInput 
              placeholder = "Card number" 
              placeholderTextColor = {colors.grey}
              autoCorrect={false}
              style={styles.inputTextStyle} 
              />
          </View>                
        </View>

        <View style={{flexDirection:"row", alignItems:"center" , marginTop:5 }}>
        <View style={{flex:1, marginRight:5}}>
            <TextInput 
              placeholder = "Expiration" 
              placeholderTextColor = {colors.grey}
              autoCorrect={false}
              style={styles.inputTextStyle}/>
        </View>  

        <View style={{flex:1, marginLeft:5,}}>
            <TextInput 
              placeholder = "CCV" 
              placeholderTextColor = {colors.grey}
              autoCorrect={false}
              style={styles.inputTextStyle}/>
        </View>   
        </View>


        <View style={{flexDirection:"row", alignItems:"center" , marginTop:5 }}>
        <View style={{flex:1}}>
            <TextInput 
              placeholder = "Name on card" 
              placeholderTextColor = {colors.grey}
              autoCorrect={false}
              style={styles.inputTextStyle}/>
        </View>   
        </View>
          

      <SignButton
            title="Add This Player"
            onPress={() => {this.setState({visibleModal: null})} }
            style={{ height:50, width:300, marginTop:10}}
            textStyle={{ /* styles for button title */ }}
        />

     
    </View>
  );


  render() {
    console.warn('render')
    return (
      <ScrollView>
          <View style={styles.container}>
            
            <View style={commonStyles.header}>
                <Image
                  source={require('../../../assets/icon/btn_back.png')}
                  style={commonStyles.back_icon}
                />
                <View style={{justifyContent:"center", alignItems:"center", flex:1,paddingRight:60,}}>
                  <Image
                    source={require('../../../assets/icon/avatar.png')}
                    style={commonStyles.avatar}              
                  />
                </View>
            </View>


            <View style={{paddingLeft:20}}>
              <Text style={commonStyles.main_title}>Settings</Text>
            </View>

            <View style={{ height: 50 , }}>
              <RadioGroup
                selectedIndex={this.props.tabIndex}
                items={this.props.tabs}
                onChange={this.props.setTabIndex}
                underline
              />
            </View>
            
            <View style={{flexDirection:"row"}}>
              {this.renderView()}    
            </View>

            <Modal
              isVisible={this.state.visibleModal === 'bottom'}
              onSwipeComplete={() => this.setState({visibleModal: null})}
              swipeDirection={['up', 'left', 'right', 'down']}
              style={commonStyles.bottomModal}>
              {this.renderModalContent()}
            </Modal>

            
          </View>

      </ScrollView>
      
    );
  }
}


const styles = StyleSheet.create({

  demoButton: {
    marginTop: 8,
    marginBottom: 8,
  },

  itemContainer:{
    flex:1,
    flexDirection:"row",
    marginTop:5,
    padding:5,
    alignItems:"center"
  },
  circleLabel:{
    backgroundColor:"red",
    width:45,
    height:45,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:30,
    color:colors.white,    
  },
  itemTitle:{
    color:colors.black,
    fontSize:18,
    fontWeight:"bold",
  },  
  itemDescription:{
    color:colors.grey,
    fontSize:14,    
  },

  itemIcon:{
    width:40,
    height:40,
  }
  ,
  blueCard:{
    backgroundColor:colors.blue,  
    width:Dimensions.get('window').width - 100,    
    borderRadius:7,
    shadowOpacity:0.4,
    shadowOffset:{height:10, width:10},
    shadowRadius:30,
    elevation:3,
  },
  cardTitle:{
    padding:3,
    color:colors.white,
    fontSize:18,
  },

  textTitleStyle:{
     fontSize:15,
     color:colors.grey,
     width:80,
  },  
  inputTextStyle: {    
    fontSize:16,
    color:colors.black,
    paddingLeft:15,
    borderRadius:5,
    backgroundColor:colors.inputTextBackground,                
  },

  textContainer:{
    flexDirection:"row", 
    alignItems:"center", 
    marginTop:5 ,
  }

});




import React, {Component} from 'react';
import {StyleSheet, 
    View, 
    Text,     
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';
import { colors, fonts, commonStyles } from '../../styles';
import { ScrollView } from 'react-native-gesture-handler';
import {Input, Button, TextInput, Dropdown } from '../../component';
import Modal from "react-native-modal";
import {SignButton} from '../../component/SignButton';
import { FlatList } from 'react-native-gesture-handler';
import MultiSlider from "@ptomasroos/react-native-multi-slider"; 
import CustomMarker from '../custom/CustomMarker';


export default class Score extends Component{
  
  state = {
    visibleModal:null,   
    visibleModalEdit:null, 
    first_name:'',
    last_name:'',
    handicap:'',
    plays_form:''
  }
          
  renderModalContent = (titlte, des, btn, type) => (                                 
      <View style={commonStyles.modalMainContent}>

        <TouchableOpacity style={{ zIndex:100}} onPress={() => this.closePlayerModal(type) }  disabled={false}> 
          <Image
            source={require('../../../assets/icon/btn_white_close.png')}
            style={{width:55, height:55 , alignSelf:'flex-end', marginRight:40, marginBottom:-28,}}  />
        </TouchableOpacity>        

        <View style={commonStyles.modalContent}>         
            <View style={{flexDirection:"row", alignItems:"flex-start" , marginTop:5 }}>
              <View style={{flex:1}}>                                                 
                <Text style={commonStyles.main_title}>  {titlte} </Text>
                <Text style={commonStyles.description}>  {des} </Text>            
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

                <Input 
                    src="username"                                
                    placeholder="First Name"
                    label="First Name"
                    imgStyle={{width:25, height:25,}}
                    value={this.state.first_name}                   
                    onChangeText={first_name => this.setState({first_name})}
                />

                <Input 
                      mainStyle={{marginTop:10,}}      
                      imgStyle={{width:25, height:25,}}
                      src="username"                                
                      placeholder="Last Name"
                      label="Last Name"
                      value={this.state.last_name}                        
                      onChangeText={last_name=>this.setState({last_name})}
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
                      placeholder="Plays form"
                      label="Plays form"
                      value={this.state.plays_form}           
                      mainStyle={{flex:1, marginLeft:2,}}       
                      onChangeText={plays_form=>this.setState({plays_form})}
                  />
                </View>

                <SignButton
                      title={btn}
                      onPress={() => {this.savePlayer(type)} }
                      style={{ height:50, width:300, marginTop:10}}
                      textStyle={{ /* styles for button title */ }}
                  />      
        </View>    
      </View>        
  );  
  
  addPlayer(){
    this.setState({visibleModal:'bottom'});
  }
  editPlayer(){
    this.setState({visibleModalEdit:'bottom'});
  }

  savePlayer(type){
      
      if(type == "add"){        
        this.setState({visibleModal:null});
        let item = {
          id: 1,    
          title: 'Chris Arock',
          subtitle: 'Handicap 11',
          image:
            'https://reactnativestarter.com/demo/images/city-sunny-people-street.jpg',
        };
        listData.push(item);      
      }else{
        this.setState({visibleModalEdit:null});
      }
  }
  
  
  closePlayerModal(type){
    if(type == 'add'){
      this.setState({visibleModal:null});
    }else{
      this.setState({visibleModalEdit:null});
    }    
  }


    

    render(){        
        const groupedData = listData;
        return(                 
            <ScrollView>
              <View style={commonStyles.container}> 

                  <View style={{padding:20, marginTop:20}}>
                    <Text style={commonStyles.main_title}>Scorecard</Text>
                    <Text style={commonStyles.description}>Keep track of your handicap by using the app as a simple scorecard</Text>
                  </View>
                  
                  <View style={{paddingLeft:20, paddingRight:20}}>
                    <FlatList 
                      data = {groupedData}
                      renderItem={({item}) =>
                          <View style={{flexDirection:"column"}}>
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

                                  {/* edit player */}
                                  <TouchableOpacity onPress={()=>this.editPlayer() }>
                                    <Image 
                                      source={require('../../../assets/icon/icon_grey_edit.png')}
                                      style={styles.itemIcon}
                                    />
                                  </TouchableOpacity>
                                  
                              </View> 
                              <View style={{backgroundColor:colors.grey, height:0.5}} />
                          </View>
                          
                        }>                  
                    </FlatList>

                    <TouchableOpacity onPress={()=>this.addPlayer() }>
                        <Image 
                          source={require('../../../assets/icon/btn_grey_add.png')}
                          style={{width:Dimensions.get('window').width - 40, resizeMode:"contain", height:60, marginTop:20,}}
                        />
                    </TouchableOpacity>


                    <Text style={[commonStyles.title,{marginTop:20,}]}>Number of holes</Text>
                    <View style={{alignItems:"center"}}>
                    <MultiSlider                              
                        containerStyle={{
                            height: 40,
                        }}
                        trackStyle={{
                            height: 3,
                            backgroundColor: colors.grey,
                        }}
                        touchDimensions={{
                            height: 40,
                            width: 40,
                            borderRadius: 20,
                            slipDisplacement: 40,
                        }}
                        customMarker={CustomMarker}
                        sliderLength={Dimensions.get("window").width - 100} 
                      />
                    </View>
                   

                    <Text style={[commonStyles.title, {marginTop:10}]}>Starting hole</Text>
                    <View style={{alignItems:"center"}}>
                    <MultiSlider         
                        // selectedStyle={{
                        //     backgroundColor: colors.light_white,
                        // }}                             
                        containerStyle={{
                            height: 40,                            
                        }}
                        trackStyle={{
                            height: 3,
                            backgroundColor: colors.grey,
                        }}
                        touchDimensions={{
                            height: 40,
                            width: 40,
                            borderRadius: 20,
                            slipDisplacement: 40,
                            
                        }}
                        customMarker={CustomMarker}
                        sliderLength={Dimensions.get("window").width - 100} 
                      />
                    </View>
                    

                    <Button    
                        style={{marginTop:10,}}                        
                        bgColor = {colors.primary}
                        caption="Click to start playing" 
                        onPress={() => {}}
                      />  
                    
                  </View>
                  
                                             
                  <Modal
                    isVisible={this.state.visibleModal === 'bottom'}
                    onSwipeComplete={() => this.setState({visibleModal: null})}
                    swipeDirection={['up', 'down']}
                    style={commonStyles.bottomModal}>
                    {this.renderModalContent("Add Player", "Select a color for this player", "Add this player","add")}
                  </Modal>

                  <Modal 
                      isVisible={this.state.visibleModalEdit === 'bottom'}
                      onSwipeComplete={() => this.setState({visibleModalEdit: null})}
                      swipeDirection={['up', 'down']}
                      style={commonStyles.bottomModal}>                        
                      {this.renderModalContent("Edit Player", "Select a color for this player", "Save Edits", "edit")}                      
                  </Modal>

                  
              </View>
            </ScrollView>

              
        )
    }
}

const styles = StyleSheet.create({        

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

});
  




const listData = [
  {
    id: 1,    
    title: 'Chris Arock',
    subtitle: 'Handicap 11',    
    image:
      'https://reactnativestarter.com/demo/images/city-sunny-people-street.jpg',
  },
  {
    id: 1,    
    title: 'Hanna Marks',
    subtitle: 'Handicap 7',    
    image:
      'https://reactnativestarter.com/demo/images/city-sunny-people-street.jpg',
  }];



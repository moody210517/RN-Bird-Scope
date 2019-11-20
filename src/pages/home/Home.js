import React, {Component} from 'react';
import {StyleSheet, 
    View, 
    Text, 
    FlatList,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';

import { colors, fonts, commonStyles } from '../../styles';
import { ScrollView } from 'react-native-gesture-handler';
import {Input,  TextInput, Dropdown } from '../../component';
import Modal from "react-native-modal";
import {SignButton} from '../../component/SignButton';
import Slider from "react-native-slider";
import MultiSlider from "@ptomasroos/react-native-multi-slider"; 
import CustomMarker from '../custom/CustomMarker';
import Video from 'react-native-video';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component{
    _getRenderItemFunction = () =>
    [this.renderRowUnlock][0];
  
    _openArticle(item){
      Actions.VideoPlayer();   
    }

  state = {
    search_icon_url : require('../../../assets/icon/icon_search_m.png'),
    filter_icon_url : require('../../../assets/icon/icon_filter.png'),
    is_search:false,    
    search_text:'',
    visibleModal:null,
    filter_key:'',
    slider_value:0,
  }

  renderRowUnlock = ({item}) =>(
    <TouchableOpacity
      key={item.id}
      style={styles.itemTwoContainer}
      onPress={() => this._openArticle(item)}>

      <View style={{ flex: 1, alignItems: "stretch", justifyContent: "center"}}>  
        <View style={styles.card}>

          <View style={{ flexDirection:"row", overflow: 'hidden' }}>
              <Image                            
                source = {require('../../../assets/back-image.png')} 
                style={{flex:1, height:150}}                            
              />

              <View style={styles.itemTwoOverlay} >
                <View style={{ flex:1, justifyContent:"flex-start", flexDirection:"column"}}>

                  <View style={{flexDirection:"row", marginTop:15, justifyContent:"center", alignItems:"center"}}>
                    <Image                          
                      source = {require('../../../assets/header.png')} 
                      style={{width:40, height:40, flex:1, resizeMode:"contain"}} 
                    />
                    <Image                          
                      source = {require('../../../assets/header.png')} 
                      style={{width:60, height:60, flex:1, resizeMode:"contain"}} 
                    />
                    <Image                          
                      source = {require('../../../assets/header.png')} 
                      style={{width:40, height:40, flex:1, resizeMode:"contain"}} 
                    />
                  </View>
                  
                  <View style={{marginLeft:20}}>
                      <Text style={styles.itemTwoTitle}>title</Text>
                      <Text style={styles.itemTwoSubTitle}>Sub title</Text>
                      <Text style={styles.itemTwoSubTitle}>Sub title</Text>
                  </View>                
                </View>              
              </View>            
          </View>
          

        </View>
      </View>
      
    </TouchableOpacity>
  )
  

    doneSearch(){
      this.setState({is_search:true});
      this.setState({search_icon_url:require('../../../assets/icon/icon_remove.png')});
      this.setState({filter_icon_url:require('../../../assets/icon/icon_filter_green.png')});
    }
    doClear(){      
      this.setState({search_text:''});
      this.setState({search_icon_url:require('../../../assets/icon/icon_search_m.png')});
      this.setState({filter_icon_url:require('../../../assets/icon/icon_filter.png')});
    }    
    handleOnPress(){
        this.setState({visibleModal:null});
    }
    
    
    
    renderModalContent = () => (
     
                        
        <View style={commonStyles.modalMainContent}>

          <TouchableOpacity style={{ zIndex:100}} onPress={this.handleOnPress.bind(this)}  disabled={false}> 
            <Image
              source={require('../../../assets/icon/btn_white_close.png')}
              style={{width:55, height:55 , alignSelf:'flex-end', marginRight:40, marginBottom:-28,}}  />
          </TouchableOpacity>        

          <View style={commonStyles.modalContent}>         
              <View style={{flexDirection:"row", alignItems:"flex-start" , marginTop:5 }}>
                <View style={{flex:1}}>                                   
                  <Text style={commonStyles.main_title}>  Filters </Text>            
                </View>
              </View>

              <Input 
                  src="search"                                
                  placeholder="Search terms (optional) "
                  label="Chris"
                  imgStyle = {{width:25, height:25}}
                  value={this.state.filter_key}                        
                  onChangeText={filter_key=>this.setState({filter_key})}
                />
              
              <View style={{flexDirection:"row", marginTop:10}} >
                <View style={{flex:1}} >
                  <Text style={commonStyles.normal_text} > Number of holes </Text>
                </View>
                <View>
                  <Image
                        source={require('../../../assets/icon/btn_white_close.png')}
                        style={{width:40, height:40 , marginRight:10, }}  />
                  </View>
                <View>
                  <Image
                      source={require('../../../assets/icon/btn_white_close.png')}
                      style={{width:40, height:40 , marginRight:10, }}  />
                </View>          
              </View>

              <View style={{flexDirection:"column", alignSelf:"flex-start", marginTop:5}} >
                  <Text style={commonStyles.normal_text} > Max distance from you </Text>   
                                  
                  <View style={{alignItems:"center", marginLeft:35,}}>
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

                        
              </View>

              <View style={{flexDirection:"column", alignSelf:"flex-start", marginTop:5, marginLeft:30,}} >
                  <Text style={commonStyles.normal_text} > Sort results by  </Text>   
                  <Dropdown
                    style={{ width:Dimensions.get("window").width - 100,  alignSelf: 'center' }}
                    onSelect={() => {}}
                    items={['option 1', 'option 2', , 'option 3', , 'option 4',, 'option 5']}
                  />                  
              </View>

              <View style={{flexDirection:"row", marginTop:10}} >
                <View style={{flex:1}} >
                  <Text style={commonStyles.normal_text} > Save as default filters </Text>
                </View>          
                <Image
                    source={require('../../../assets/icon/btn_white_close.png')}
                    style={{width:40, height:40 , marginRight:10, }}  />                  
              </View>

              <SignButton
                    title="Search & Filter"
                    onPress={() => {this.setState({visibleModal: null})} }
                    style={{ height:50, width:300, marginTop:10}}
                    textStyle={{ /* styles for button title */ }}
                />
                
          </View>    
        </View>
        
    );

 

    render(){
        const groupedData = listData;                                 
        return(                 
            <ScrollView>
              <View style={commonStyles.container}> 
                  
                  <View style={commonStyles.header}>

                      <View style={{flexDirection:"column", justifyContent:"center" , flex:0.8 , paddingLeft:30}}>
                        <View style={{flexDirection:"row", alignItems:"center"}}>
                          <Image
                              source={require('../../../assets/icon/icon_sun.png')}
                              style={{width:30 ,height:20}}
                            />
                            <View style={{flex:1, marginLeft:5}}>
                                <Text style={{color:colors.grey}}>Handicap</Text>
                                <Text style={{fontSize:16, fontWeight:"bold", marginTop:-5}}>11.04</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row", alignItems:"center"}}>
                          <Image
                              source={require('../../../assets/icon/icon_wind.png')}
                              style={{width:30 ,height:20}}
                            />                            
                        </View>                      
                      </View>

                      <View style={{justifyContent:"center", alignItems:"center", flex:1,}}>
                        <Image
                          source={require('../../../assets/icon/avatar.png')}
                          style={commonStyles.avatar}
                        />
                      </View>


                      <View style={{flexDirection:"column", justifyContent:"center" , flex:0.8 , paddingLeft:20}}>
                        <View style={{flexDirection:"row", alignItems:"center"}}>
                          <Image
                              source={require('../../../assets/icon/icon_sun.png')}
                              style={{width:30 ,height:20}}
                            />
                            <View style={{flex:1, marginLeft:5}}>
                                <Text style={{color:colors.grey}}>Temp</Text>
                                <Text style={{fontSize:16, fontWeight:"bold", marginTop:-5}}>75</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row", alignItems:"center"}}>
                          <Image
                              source={require('../../../assets/icon/icon_wind.png')}
                              style={{width:30 ,height:20}}
                            />
                            <View style={{flex:1, marginLeft:5}}>
                                <Text style={{color:colors.grey}}>Wind</Text>
                                <Text style={{fontSize:16, fontWeight:"bold", marginTop:-5}}> 24 </Text>
                            </View>
                        </View>                      
                      </View>
                  </View>

               
                  <View style={styles.searchBox}>   
                      <TouchableOpacity onPress={() =>this.doClear()}>
                      <Image
                        source={this.state.search_icon_url}
                        style={[commonStyles.defaultIcon40, {marginLeft:5}]} />
                      </TouchableOpacity>
                      
                      <View style={{flex:1, height:40}}>
                        <TextInput
                            returnKeyLabel='Done'
                            returnKeyType='done'
                            onSubmitEditing={() => this.doneSearch()}
                            placeholder = "Enter Your Name" 
                            placeholderTextColor = {colors.grey}
                            autoCorrect={false}        
                            value={this.state.search_text}             
                            onChangeText={search_text=>this.setState({search_text})}       
                            style={{fontSize:16, color:colors.black}}/>
                      </View>
                      
                      <TouchableOpacity onPress={()=>this.setState( {visibleModal: 'bottom'} )}>
                        <Image
                          source={this.state.filter_icon_url}
                          style={[commonStyles.defaultIcon40, {marginRight:5}]} />                          
                      </TouchableOpacity>
                      
                  </View>




                  <FlatList
                      keyExtractor={item =>
                      item.id
                          ? `${this.props.tabIndex}-${item.id}`
                          : `${item[0] && item[0].id}`
                      }
                      style={{ backgroundColor: colors.white, paddingHorizontal: 15 }}
                      data={groupedData}
                      renderItem={this._getRenderItemFunction()}
                  />


                  <Modal
                    isVisible={this.state.visibleModal === 'bottom'}
                    onSwipeComplete={() => this.setState({visibleModal: null})}
                    swipeDirection={['up', 'down']}
                    style={commonStyles.bottomModal}>
                    {this.renderModalContent()}
                    
                  </Modal>


                    

                  
              </View>
            </ScrollView>

              
        )
    }
}

const styles = StyleSheet.create({        
    itemTwoContainer: {
      paddingBottom: 10,
      backgroundColor: 'white',
      marginVertical: 5,
    },
  
    itemTwoOverlay: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      // backgroundColor: '#6271da',
      opacity: 0.5,
    },

    itemTwoTitle: {
      color: colors.white,
      fontFamily: fonts.primaryBold,    
      fontWeight:"bold",
      fontSize: 20,
    },

    itemTwoSubTitle: {
      color: colors.white,
      fontFamily: fonts.primaryRegular,
      fontSize: 13,
      marginVertical: 0,
    },
          
    searchBox:{      
      marginTop:10,
      height:45,
      marginBottom:10,      
      flexDirection:"row", marginRight:50, marginLeft:50,      
      alignItems:"center",      
      backgroundColor: "#fff", 
      borderRadius: 25,   shadowOffset:{  width: 15,  height: 15,  },
      shadowColor: '#000', 
      elevation: 3,
      shadowOpacity: 1.0,      
    },
    thumb: {
      width: 30,
      height: 30,
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.5,
      shadowRadius: 1,
    },
    value: {
      flex: 1,
      textAlign: 'right',
      marginLeft: 10,
    },
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },


});
  





const listData = [
  {
    id: 1,
    brand: 'Citizen',
    title: 'CITIZEN ECO-DRIVE',
    subtitle: 'Limited Edition',
    price: '$129.99',
    badge: 'NEW',
    badgeColor: '#3cd39f',
    image:
      'https://reactnativestarter.com/demo/images/city-sunny-people-street.jpg',
  },
  {
    id: 1,
    brand: 'Citizen',
    title: 'CITIZEN ECO-DRIVE',
    subtitle: 'Limited Edition',
    price: '$129.99',
    badge: 'NEW',
    badgeColor: '#3cd39f',
    image:
      'https://reactnativestarter.com/demo/images/city-sunny-people-street.jpg',
  },
    {
      id: 1,
      brand: 'Citizen',
      title: 'CITIZEN ECO-DRIVE',
      subtitle: 'Limited Edition',
      price: '$129.99',
      badge: 'NEW',
      badgeColor: '#3cd39f',
      image:
        'https://reactnativestarter.com/demo/images/city-sunny-people-street.jpg',
    },
    {
      id: 2,
      brand: 'Weeknight',
      title: 'NEXT-LEVEL WEAR',
      subtitle: 'Office, prom or special parties is all dressed up',
      price: '$29.99',
      priceFrom: true,
      image: 'https://reactnativestarter.com/demo/images/pexels-photo-26549.jpg',
    }];

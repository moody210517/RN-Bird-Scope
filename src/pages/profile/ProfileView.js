import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  
} from 'react-native';

import VerticalText from 'react-native-vertical-text';
import { colors, fonts , commonStyles } from '../../styles';
import { RadioGroup, GridRow } from '../../component';
import { ScrollView } from 'react-native-gesture-handler';


export default class GridsScreen extends React.Component {
  
  _getRenderItemFunction = () =>
    [this.renderRowUnlock, this.renderRowTwo, this.renderRowThree][
      this.props.tabIndex
    ];

  _openArticle = article => {
    this.props.navigation.navigate({
      routeName: 'Article',
      params: { ...article },
    });
  };


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
  

  
  renderRowTwo = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      style={styles.itemTwoContainer}
      onPress={() => this._openArticle(item)}
    >

      <View style={{flexDirection:"row"}}>
        <View style={{height:150,flexDirection:"row", paddingTop:10, paddingRight:5}}>
          <VerticalText style={{color: "black",fontSize: 14}} text={ item.title }/>
        </View>        

        <View style={{ flex: 1, alignItems: "stretch", justifyContent: "center"}}>
        <View style={styles.card}>

          <View style={{ flexDirection:"row", overflow: 'hidden' }}>
            <Image                            
              source = {require('../../../assets/back-image.png')} 
              style={{flex:1, width:150, height:75}}                            
            />

            <View style={styles.itemTwoOverlay} >
              <View style={{ flex:1, justifyContent:"flex-start", alignItems:"center", flexDirection:"row"}}>
                <Image                          
                  source = {require('../../../assets/header.png')} 
                  style={{width:30, height:30, marginLeft:10}} 
                />
                <View style={{flex:1, marginLeft:10}}>
                    <Text style={styles.itemTwoTitle}>{item.title}</Text>
                    <Text style={styles.itemTwoSubTitle}>{item.title}</Text>
                </View>                
              </View>              
            </View>            
          </View>
          

          <View style={{ flexDirection:"row", justifyContent:'flex-start', alignItems:"center",  height:70}}>
              <View                               
                  style={{width:40, height:40, marginLeft:10, backgroundColor:"black", justifyContent:"center", alignItems:"center", borderRadius:20}} 
                >
                  <Text style={{color:colors.white}}>+1</Text>
              </View>

              <View style={{flex:1, marginLeft:10}}>
                  <Text>Title</Text>
                  <Text style={{ color: "#777" }}>
                    Description of the image
                  </Text>
              </View>
              <View                               
                  style={{width:40, height:40, marginLeft:10, borderWidth:1, borderColor:"black", justifyContent:"center", alignItems:"center", borderRadius:20, marginRight:10}} 
                >
                  <Text style={{color:colors.black, fontSize:20, paddingBottom:3}}>+</Text>
              </View>          
          </View>

        </View>
        </View>
        
      </View>

 
    
     
    </TouchableOpacity>
  );


  renderRowThree = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      style={styles.itemThreeContainer}
      onPress={() => this._openArticle(item)}
    >

    </TouchableOpacity>
  );


  showLeftPan(tabIndex){
    switch(tabIndex){
      case 0:
        return "flex";  
      case  1:
        return "flex";
      case 2:
        return "none"; 
    }
  }

  showMyStats(tabIndex){
    switch(tabIndex){
      case 0:
        return "none";  
      case  1:
        return "none";
      case 2:
        return "flex"; 
    }
  }
    
  render() {
    const groupedData =
      this.props.tabIndex === 0
        ? GridRow.groupByRows(this.props.data, 2)
        : this.props.data;

    return (

      <ScrollView>
          <View style={commonStyles.container}>

          <View style={commonStyles.header}>
              <Image
                source={require('../../../assets/icon/btn_back.png')}
                style={commonStyles.back_icon}
              />
              <View style={{justifyContent:"center", alignItems:"flex-end", flex:1,}}>
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
          <View style={{paddingLeft:20}}>
            <Text style={commonStyles.main_title}>My Profile</Text>
          </View>


          <View style={{ height: 50 }}>
            <RadioGroup
              selectedIndex={this.props.tabIndex}
              items={this.props.tabs}
              onChange={this.props.setTabIndex}
              underline
            />
          </View>

          <View style={{flexDirection:"row"}}>          
            <View style={{ display:this.showMyStats(this.props.tabIndex) , padding:30}}>    
                <ScrollView style={{width:500}}>

                      <View style={{flexDirection:"row", alignItems:"center"}}>
                          <Text style={{color:colors.primary, fontWeight:"bold", fontSize:30}}>11.04</Text>
                          <Text style={{marginLeft:5}}>  Current Handicap </Text>
                      </View>
                      <View style={{flexDirection:"row", alignItems:"center"}}>
                          <Text style={{color:colors.yellow, fontWeight:"bold", fontSize:20}}>1.61</Text>
                          <Text style={{marginLeft:5}}>  since sign up </Text>
                      </View>

                      <Text style={commonStyles.title}>Handicap Evolution </Text>
                      <Text style={commonStyles.description}>By time </Text>

                      <Text style={commonStyles.title}>Par Average </Text>
                      <View style={{flexDirection:"row"}}>
                          <Image 
                              source={require('../../../assets/image/bg1.png')} 
                              style={{width:60,resizeMode:"contain"}}
                              />

                          <Image 
                              source={require('../../../assets/image/bg2.png')} 
                              style={{width:60,resizeMode:"contain", marginLeft:20}}
                              />
                          <Image 
                              source={require('../../../assets/image/bg3.png')} 
                              style={{width:60,resizeMode:"contain", marginLeft:20}}
                              />

                      </View>

                      <View style={{flexDirection:"row", alignItems:"center"}}>
                          <Text style={{color:colors.primary, fontWeight:"bold", fontSize:20}}>42</Text>
                          <Text style={{marginLeft:5}}>game played total </Text>
                      </View>
                      <View style={{flexDirection:"row", alignItems:"center"}}>
                          <Text style={{color:colors.primary, fontWeight:"bold", fontSize:20}}>24</Text>
                          <Text style={{marginLeft:5}}>game played with </Text>
                      </View>
                      <View style={{flexDirection:"row", alignItems:"center"}}>
                          <Text style={{color:colors.primary, fontWeight:"bold", fontSize:20}}>2</Text>
                          <Text style={{marginLeft:5}}>game played total </Text>
                      </View>
                      <View style={{flexDirection:"row", alignItems:"center"}}>
                          <Text style={{color:colors.primary, fontWeight:"bold", fontSize:20}}>4</Text>
                          <Text style={{marginLeft:5}}>game played total </Text>
                      </View>
                      <View style={{flexDirection:"row", alignItems:"center"}}>
                          <Text style={{color:colors.primary, fontWeight:"bold", fontSize:20}}>42</Text>
                          <Text style={{marginLeft:5}}>game played total </Text>
                      </View>
                      <View style={{flexDirection:"row", alignItems:"center"}}>
                          <Text style={{color:colors.primary, fontWeight:"bold", fontSize:20}}>42</Text>
                          <Text style={{marginLeft:5}}>game played total </Text>
                      </View>
                      <View style={{flexDirection:"row", alignItems:"center"}}>
                          <Text style={{color:colors.primary, fontWeight:"bold", fontSize:20}}>42</Text>
                          <Text style={{marginLeft:5}}>game played total </Text>
                      </View>
                      <View style={{flexDirection:"row", alignItems:"center"}}>
                          <Text style={{color:colors.primary, fontWeight:"bold", fontSize:20}}>42</Text>
                          <Text style={{marginLeft:5}}>game played total </Text>
                      </View>

                </ScrollView>                   
              </View>
                    
            <FlatList
              keyExtractor={item =>
                item.id
                  ? `${this.props.tabIndex}-${item.id}`
                  : `${item[0] && item[0].id}`
              }
              style={{ backgroundColor: colors.white, paddingHorizontal: 15 , display:this.showLeftPan(this.props.tabIndex)}}
              data={groupedData}
              renderItem={this._getRenderItemFunction()}
            />
            
          </View>        
          </View>


      </ScrollView>
     
    );
  }
}

const styles = StyleSheet.create({
  
  tabsContainer: {
    alignSelf: 'stretch',
    marginTop: 30,
  },

  itemOneContainer: {
    flex: 1,
    width: Dimensions.get('window').width / 2 - 40, /// 
  },
  itemOneImageContainer: {
    borderRadius: 3,
    overflow: 'hidden',
  },
  itemOneImage: {
    height: 200,
    width: Dimensions.get('window').width / 2 - 40,
  },
  itemOneTitle: {
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  itemOneSubTitle: {
    fontFamily: fonts.primaryRegular,
    fontSize: 13,
    color: '#B2B2B2',
    marginVertical: 3,
  },
  itemOnePrice: {
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  itemOneRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  itemOneContent: {
    marginTop: 5,
    marginBottom: 10,
  },
  itemTwoContainer: {
    paddingBottom: 10,
    backgroundColor: 'white',
    marginVertical: 5,
  },
  itemTwoContent: {
    flex:1,
    padding: 20,
    position: 'relative',
    marginHorizontal: Platform.OS === 'ios' ? -15 : 0,
    height: 150,
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
  itemTwoPrice: {
    color: colors.white,
    fontFamily: fonts.primaryBold,
    fontSize: 20,
  },
  itemTwoImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
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
 
  
  card:{
    flex:1,    
    flexWrap: 'wrap',
    backgroundColor: "#eee", 
    borderRadius: 3,   shadowOffset:{  width: 15,  height: 15,  },
    shadowColor: '#000', 
    elevation: 2,
    shadowOpacity: 1.0,
    
  }
});

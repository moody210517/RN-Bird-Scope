import { StyleSheet, StatusBar, Platform } from 'react-native';

import colors from './colors';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.select({ ios: 0, android: StatusBar.currentHeight }),
  },
  container: {
    flex: 1,
    backgroundColor: colors.light_white,
    flexDirection:"column",
    paddingBottom:30,
  },
  header:{
    marginTop:20,
    height:150,
    flexDirection:"row",
  },
  main_title:{
    fontSize:30,fontWeight:"bold",
  },
    
  title:{
    marginTop:10,
    fontSize:20,
    color:colors.black,
  },

  description:{
    fontSize:14,color:colors.grey, paddingBottom:10
  },
  normal_text:{
    fontSize:16,color:colors.grey,padding:5,
  },

  back_icon:{
    width:55, height:55, marginTop:20, marginLeft:10,
  },

  defaultIcon:{
    width:25, height:25,
  },
  defaultIcon30:{
    width:30, height:30,
  },
  defaultIcon40:{
    width:38, height:38,
  },
  avatar:{
    width:100, height:100, marginLeft:10,
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  
  modalMainContent: {                
    alignItems: 'flex-end',
    borderRadius: 0,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContent: {    
    backgroundColor: colors.white,    
    padding:25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  


});

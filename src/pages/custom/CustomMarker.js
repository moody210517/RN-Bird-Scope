import React from 'react';
import { StyleSheet, Image , Text} from 'react-native';
import { View } from 'react-native-animatable';

class CustomMarker extends React.Component {

  state = {
      value:'12',
  }
  
  render() {
    return (
    <View style={{alignSelf:"center", alignItems:"center", justifyContent:"center"}}>
        <Image
            style={styles.image}
            source={
            this.props.pressed ? require('../../../assets/icon/icon_slide.png') : require('../../../assets/icon/icon_slide.png')
            }
            resizeMode="contain"
        />
        <Text style={{position:"absolute", color:"white", fontWeight:"bold", fontSize:18}}> {this.state.value} </Text>
    </View>
      
    );
  }
}


const styles = StyleSheet.create({
  image: {
    height: 40,
    width: 40,
  },
});

export default CustomMarker;
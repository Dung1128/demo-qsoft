import {StyleSheet,Dimensions} from 'react-native';
var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;
var Style = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#212121',
    opacity: 0.7
  },
  _header:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  _content:{
    flex: 1.5, 
    marginLeft: 40,
    marginRight: 40
  },
  _row:{
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    flexDirection: 'row',
    marginTop: 5
  },
  _icon:{
      width: 25, 
      height: 25, 
      bottom: -20, 
      left: 5
  },
  _inputtext:{
      color:'white', 
      paddingLeft:20, 
      bottom: -10, 
      flex: 1, 
      left: 10
  },
  _buttonLogin:{
      backgroundColor:'yellow',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      marginTop: 15,
      height: 50
  },
  _bottonRegister:{
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'center',
  }

});

export default Style;

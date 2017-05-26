import React, {Component} from 'react';
import{
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native';

import Style from './Style';

export default class RegisterView extends Component{
    render(){
        return(
            <View style ={Style.body}>
                <View style={Style._header}>
                    <Text style={{fontSize: 50, color:'white'}}> 
                        LOGO
                    </Text>

                </View>
                
                <View style={Style._content}>
                    <View style = {Style._row}>
                        <Image style={Style._icon} source={require('../icons/user.png')}/>
                        <Image style={Style._icon} source={require('../icons/phone.png')}/>
                        <TextInput
                            underlineColorAndroid='transparent' 
                            placeholderTextColor= "white"
                            returnKeyType="next"
                            style={Style._inputtext} placeholder='Trandung@gmail.com'/>
                    </View>

                    <TouchableOpacity>
                        <View style = {{alignItems:'center', justifyContent:'center', flexDirection:'row', marginBottom: 20, marginTop: 50}}>
                            <Image style={{width: 17, height: 17}} source={require('../icons/check.png')}/>
                            <Text style={{color: 'white', paddingLeft: 10}}>
                                Ghi nhớ đăng nhập
                             </Text>
                        </View>
                        
                    </TouchableOpacity>
                    
                    
                    
                    <TouchableOpacity>
                        <View style={Style._buttonLogin}>
                            <Text style={{fontWeight: 'bold'}}>
                                ĐĂNG NHẬP
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={Style._bottonRegister}>
                            <Text style={{color:'white', fontSize: 13}}>
                            Bạn đã chưa có tài khoản?
                            </Text>
                            <Text style={{color: 'yellow', fontWeight:'bold'}}>
                                Đăng ký
                            </Text>
                        </View>
                    </TouchableOpacity>
                    
                </View>
            </View>
        );
    }
}

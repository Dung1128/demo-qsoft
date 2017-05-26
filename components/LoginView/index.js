import React, {Component} from 'react';
import{
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native';

import Style from './Style';

export default class LoginView extends Component{
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
                        <TextInput
                            underlineColorAndroid='transparent' 
                            placeholderTextColor= "white"
                            returnKeyType="next"
                            style={Style._inputtext} placeholder='Họ và tên'/>
                    </View>
                    <View style = {Style._row}>
                        <Image style={Style._icon} source={require('../icons/email.png')}/>
                        <TextInput
                            underlineColorAndroid='transparent' 
                            placeholderTextColor= "white"
                            returnKeyType="next"
                            style={Style._inputtext} placeholder='Trandung1128@hotmail.com'/>
                    </View>
                    <View style = {Style._row}>
                        <Image style={Style._icon} source={require('../icons/phone.png')}/>
                        <TextInput
                            underlineColorAndroid='transparent' 
                            placeholderTextColor= "white"
                            returnKeyType="next"
                            style={Style._inputtext} placeholder='0868867596'/>
                    </View>
                    <TouchableOpacity>
                        <View style={Style._buttonRegister}>
                            <Text style={{fontWeight: 'bold'}}>
                                ĐĂNG KÝ
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={Style._bottonLogin}>
                            <Text style={{color:'white', fontSize: 13}}>
                            Bạn đã có tài khoản rồi?
                            </Text>
                            <Text style={{color: 'yellow', fontWeight:'bold'}}>
                                Đăng nhập
                            </Text>
                        </View>
                    </TouchableOpacity>
                    
                </View>
            </View>
        );
    }
}

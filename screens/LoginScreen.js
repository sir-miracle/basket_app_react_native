import { Text, View, Image, TextInput, Pressable, ScrollView, SafeAreaView } from 'react-native'
import React, { useState } from 'react';
import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import Logo from '../assets/images/logo2.png';
import { Icon } from 'react-native-elements';
import GoogleSymbol from '../assets/images/GoogleSymbol.png';
import MailSymbol from '../assets/images/mailSymbol.png';
import PasswordSymbol from '../assets/images/passwordSymbol.png';
import FacebookSymbol from '../assets/images/FacebookSymbol.png';
import Checkbox from 'expo-checkbox';
import Toast from 'react-native-root-toast';
import {loginScreenStyles} from '../styles'

const LoginScreen = ({ navigation }) => {

    const [isChecked, setChecked] = useState(false);
    const [isSecureEntry, setIsSecureEntry] = useState(true)
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [buttonText, setButtonText] = useState('LOGIN')
    const pwVisbililtyIconName = (isSecureEntry) ? "visibility-off" : "visibility";
    const APIURL = "https://kasppe.com.ng/farmsolhub/wp-json/niishcloud_api/v1/login/"

    //email authentication is done using standard regex notations
    const validateEmailAndPassword = (email, password) => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (emailRegex.test(email) && password.trim()) {
            return true
        } else {
            return false
        }
    };
    //this functions toggles the password visibility icon
    const passwordVisibility = () => {
        if (isSecureEntry == false) {
            setIsSecureEntry(true)
        } else {
            setIsSecureEntry(false)
        }
    };
    //checks if networks is available before making a network call
    const isNetworkAvailable = ()=>{
        NetInfo.fetch().then(state =>{
            if(state.isConnected) return true
            else return false
        })
    };
    //this function authenticates the user login details, 
    //and upon successful login, navigates the user to the dashboard
    const loginAuthentication = (customerEmail, customerPassword) => {
        const credentials = {
            email: customerEmail,
            password: customerPassword
        };

        axios.post(APIURL, credentials)
            .then((response) => {
                if(response.data.status == "success"){
                    Toast.show("Login successful", {
                        duration: Toast.durations.LONG,
                    });
                    navigation.replace("BottomTab")
                }else{
                    setButtonText("LOGIN")
                    Toast.show('Login failed. Incorrect email or password. Please check and try again.', {
                        duration: Toast.durations.LONG,
                    });
                }
                
            }).catch(error => {
                console.log(error.JSON())
            });
    };

    const goToDashboard = () => {
        setButtonText("Loading...")
        
        if (validateEmailAndPassword(userEmail, userPassword)) {
            if(isNetworkAvailable){
                loginAuthentication(userEmail, userPassword);
            }else{
                setButtonText("LOGIN")
                Toast.show('It seems you are not connect to the internet. Please check and try again.', {
                    duration: Toast.durations.LONG,
                });
                return
            }
           
        } else {
            setButtonText("LOGIN");
            Toast.show('Please fill email and password fields correctly.', {
                duration: Toast.durations.LONG,
            });
            return
        };

    };

    return (
        <SafeAreaView style={{flex: 1, marginTop: 3}}>
        <ScrollView style={loginScreenStyles.scrollView}>
            <View style={loginScreenStyles.root}>

                <View style={loginScreenStyles.logo}>
                    <Image source={Logo} />
                </View>
                <View>
                    <Text style={loginScreenStyles.title}>Log into your account</Text>
                    <Text style={loginScreenStyles.body}>Enter your email and password to access your account or create an account.</Text>
                </View>

                <View style={loginScreenStyles.emailView}>
                    <View style={loginScreenStyles.mailSymbol}>
                        <Image
                            source={MailSymbol} />
                    </View>
                    <View style={loginScreenStyles.email}>
                        <TextInput
                            placeholder="Type your email here"
                            value={userEmail}
                            onChangeText={(text) => setUserEmail(text)}
                        />
                    </View>
                </View>
                <View style={loginScreenStyles.divider}></View>

                <View style={loginScreenStyles.passwordView}>

                    <View style={loginScreenStyles.mailSymbol}>
                        <Image
                            source={PasswordSymbol} />
                    </View>
                    <View style={loginScreenStyles.email}>
                        <TextInput
                            placeholder="Type your password here"
                            value={userPassword}
                            onChangeText={(text) => setUserPassword(text)}
                            secureTextEntry={isSecureEntry}
                        />
                    </View>
                    <View style={{ marginLeft: 40, width: 30 }}>
                        <Icon
                            name={pwVisbililtyIconName}
                            type="material"
                            color='#797676'
                            onPress={passwordVisibility}
                        />
                    </View>
                </View>

                <View style={loginScreenStyles.divider}></View>

                <View style={loginScreenStyles.rememberMeView}>
                    <Checkbox style={loginScreenStyles.checkbox} value={isChecked} onValueChange={setChecked} />

                    <Text>Remember me</Text>
                </View>
                <Pressable style={loginScreenStyles.button} onPress={goToDashboard}>
                    <Text style={loginScreenStyles.loginText}>{buttonText}</Text>
                </Pressable>
                <View style={loginScreenStyles.forgotpwView}>
                    <Text style={loginScreenStyles.forgotpw}>Forgot password</Text>
                    <Text style={loginScreenStyles.continueWith}>-Or continue with-</Text>
                </View>

                <View style={loginScreenStyles.socialLoginView}>
                    <View style={loginScreenStyles.facebookLoginView}>
                        <Image source={FacebookSymbol} />
                        <Text style={loginScreenStyles.facebook}>Facebook</Text>
                    </View>
                    <View style={loginScreenStyles.googleLoginView}>
                        <Image source={GoogleSymbol} />
                        <Text style={loginScreenStyles.google}>Google</Text>
                    </View>

                </View>
                <View style={loginScreenStyles.bottomView}>
                    <Text style={loginScreenStyles.dontHaveAcct}>Don't have an account? </Text>
                    <Text style={loginScreenStyles.signUp}>Sign up</Text>

                </View>

            </View>
        </ScrollView>
        </SafeAreaView>
    )
};

export default LoginScreen;


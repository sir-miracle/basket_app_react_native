import { StyleSheet, Text, View, Image, TextInput, Pressable, ScrollView, Dimensions, Keyboard } from 'react-native'
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

const LoginScreen = ({ navigation }) => {

    const [isChecked, setChecked] = useState(false);
    const [isSecureEntry, setIsSecureEntry] = useState(true)
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [buttonText, setButtonText] = useState('LOGIN')
    const pwVisbililtyIconName = (isSecureEntry) ? "visibility-off" : "visibility";
    const APIURL = "https://kasppe.com.ng/farmsolhub/wp-json/niishcloud_api/v1/login/"

    const validateEmailAndPassword = (email, password) => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (emailRegex.test(email) && password.trim()) {
            return true
        } else {
            return false
        }
    };

    const passwordVisibility = () => {
        if (isSecureEntry == false) {
            setIsSecureEntry(true)
        } else {
            setIsSecureEntry(false)
        }
    };

    const isNetworkAvailable = ()=>{
        NetInfo.fetch().then(state =>{
            if(state.isConnected) return true
            else return false
        })
    };

    const loginAuthentication = (customerEmail, customerPassword) => {
        const credentials = {
            email: customerEmail,
            password: customerPassword
        };

        axios.post(APIURL, credentials)
            .then((response) => {
                if(response.data.status == "success"){
                    Toast.show(response.data.email, {
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
        <ScrollView style={styles.scrollView}>
            <View style={styles.root}>

                <View style={styles.logo}>
                    <Image source={Logo} />
                </View>
                <View>
                    <Text style={styles.title}>Log into your account</Text>
                    <Text style={styles.body}>Enter your email and password to access your account or create an account.</Text>
                </View>

                <View style={styles.emailView}>
                    <View style={styles.mailSymbol}>
                        <Image
                            source={MailSymbol} />
                    </View>
                    <View style={styles.email}>
                        <TextInput
                            placeholder="Type your email here"
                            value={userEmail}
                            onChangeText={(text) => setUserEmail(text)}
                        />
                    </View>
                </View>
                <View style={styles.divider}></View>

                <View style={styles.passwordView}>

                    <View style={styles.mailSymbol}>
                        <Image
                            source={PasswordSymbol} />
                    </View>
                    <View style={styles.email}>
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

                <View style={styles.divider}></View>

                <View style={styles.rememberMeView}>
                    <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />

                    <Text>Remember me</Text>
                </View>
                <Pressable style={styles.button} onPress={goToDashboard}>
                    <Text style={styles.loginText}>{buttonText}</Text>
                </Pressable>
                <View style={styles.forgotpwView}>
                    <Text style={styles.forgotpw}>Forgot password</Text>
                    <Text style={styles.continueWith}>-Or continue with-</Text>
                </View>

                <View style={styles.socialLoginView}>
                    <View style={styles.facebookLoginView}>
                        <Image source={FacebookSymbol} />
                        <Text style={styles.facebook}>Facebook</Text>
                    </View>
                    <View style={styles.googleLoginView}>
                        <Image source={GoogleSymbol} />
                        <Text style={styles.google}>Google</Text>
                    </View>

                </View>
                <View style={styles.bottomView}>
                    <Text style={styles.dontHaveAcct}>Don't have an account? </Text>
                    <Text style={styles.signUp}>Sign up</Text>

                </View>

            </View>
        </ScrollView>
    )
};

export default LoginScreen;

const deviceWidth = Dimensions.get("window").width
const styles = StyleSheet.create({
    root: {
        //flex: 1
    },
    scrollView: {
        flex: 1,
        height: '100%'
    },

    logo: {
        marginTop: 30,
        alignItems: "center",
        width: '100%',
    },
    title: {
        color: '#112D42',
        fontSize: 32,
        fontStyle: 'normal',
        lineHeight: 39,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 30,
        //fontFamily: 'Raza'
    },
    body: {
        color: '#112D42',
        fontSize: 22,
        fontStyle: 'normal',
        lineHeight: 26.8,
        fontWeight: '400',
        textAlign: 'center',
        marginTop: 20,
        //fontFamily: 'Raza'
    },
    emailView: {
        flexDirection: 'row',
        marginHorizontal: 34,
        marginTop: 50,
        paddingHorizontal: 7,
    },
    passwordView: {
        flexDirection: 'row',
        marginHorizontal: 34,
        marginTop: 30,
        paddingHorizontal: 7,
    },
    email: {
        marginLeft: 26,
        flexDirection: 'row',
        width: 200

    },
    mailSymbol: {
    },
    password: {

    },
    divider: {
        height: 2,
        width: '80%',
        backgroundColor: '#FF8137',
        marginHorizontal: 34,
        marginTop: 8,
    },
    rememberMeView: {
        flexDirection: "row",
        marginHorizontal: 34,
        marginTop: 40,
        paddingHorizontal: 7,
    },
    checkbox: {
        marginRight: 30,
    },
    button: {
        alignItems: "center",
        height: 48,
        backgroundColor: "#112D42",
        width: '80%',
        marginHorizontal: 30,
        marginVertical: 20,
        borderRadius: 7,
    },
    loginText: {
        color: "#FFFFFF",
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 22,
        fontStyle: 'normal',
        lineHeight: 26.8,
        fontWeight: '500',
        //fontFamily: 'Raza'
    },
    forgotpwView: {
        alignItems: 'center',
    },
    forgotpw: {
        color: "#FF8137",
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 22,
        fontStyle: 'normal',
        lineHeight: 26.8,
        fontWeight: '400',
        //fontFamily: 'Raza'
    },
    continueWith: {
        color: "#112D42B0",
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 16,
        fontStyle: 'normal',
        lineHeight: 26.8,
        fontWeight: '400',
        //fontFamily: 'Raza'
    },
    socialLoginView: {
        flexDirection: "row",
        alignItems: "center",
        alignContent: 'center'
    },
    facebookLoginView: {
        flexDirection: "row",
        width: 163,
        height: 48,
        borderWidth: 2,
        borderColor: '#BDC1BF',
        borderRadius: 8,
        alignItems: 'center',
        marginHorizontal: 10,
        paddingLeft: 10,
    },
    googleLoginView: {
        flexDirection: "row",
        width: 163,
        height: 48,
        borderWidth: 2,
        borderColor: '#BDC1BF',
        borderRadius: 8,
        alignItems: 'center',
        marginHorizontal: 10,
        paddingLeft: 10,
    },
    bottomView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        marginLeft: 30,
        marginTop: 30,
        marginBottom: 60,
    },
    dontHaveAcct: {
        color: "#112D429E",
        textAlign: 'center',
        fontSize: 22,
        fontStyle: 'normal',
        lineHeight: 26.8,
        fontWeight: '400',
        //fontFamily: 'Raza'
    },
    signUp: {
        marginLeft: 20,
        color: "#FF8137",
        textAlign: 'center',
        fontSize: 22,
        fontStyle: 'normal',
        lineHeight: 26.8,
        fontWeight: '600',
        //fontFamily: 'Raza'
    },
    facebook: {
        color: "#112D42",
        textAlign: 'center',
        fontSize: 18,
        fontStyle: 'normal',
        lineHeight: 21.92,
        fontWeight: '600',
        marginLeft: 16,
        //fontFamily: 'Raza'
    },
    google: {
        color: "#112D42",
        textAlign: 'center',
        fontSize: 18,
        fontStyle: 'normal',
        lineHeight: 21.92,
        fontWeight: '600',
        marginLeft: 16,
        //fontFamily: 'Raza' 
    }





});
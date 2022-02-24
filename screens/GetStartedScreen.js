import { StyleSheet, Text, View, ImageBackground, Image, Pressable } from 'react-native'
import React from 'react';
import background from '../assets/images/background2.png';
import Logo from '../assets/images/logo2.png'
import FamilyImage from '../assets/images/Family_with_Kids.png'
import ButtonArrow from '../assets/images/arrow.png'
import {getStartedScreenStyles} from '../styles'



const GetStartedScreen = ({navigation}) => {
//This function navigates the user to the login screen
const goToLogin = ()=>{
    navigation.navigate("LoginScreen")
};

    return (
        <View>
            <ImageBackground source={background}
                style={{
                    width: '100%', height: '100%', opacity: 0.99, backgroundColor: '#112D42',
                }}>
                <View style={getStartedScreenStyles.logo}>
                    <Image source={Logo} />
                </View>
                <View style={{marginTop: 50, alignItems: 'center'}}>
                    <Text style={getStartedScreenStyles.txtWelcome}>Welcome to</Text>
                    <Text style={getStartedScreenStyles.boStore}>basket online store</Text>
                    <Text style={getStartedScreenStyles.desc}>basket is the no1 online store for both new and used products.</Text>
                </View>

                <View style={getStartedScreenStyles.familyImageView}>
                    <Image source={FamilyImage} resizeMode={'contain'}/>
                </View>
                <Pressable style={getStartedScreenStyles.button} onPress={goToLogin}>
                    <Text style={getStartedScreenStyles.getStarted}>GET STARTED</Text>
                    
                    <Image source={ButtonArrow} style={{marginBottom: 6}}/>
                     
                </Pressable>
            </ImageBackground>
        </View>

    )
}

export default GetStartedScreen;


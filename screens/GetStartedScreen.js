import { StyleSheet, Text, View, ImageBackground, Image, Pressable } from 'react-native'
import React from 'react';
import background from '../assets/images/background2.png';
import Logo from '../assets/images/logo2.png'
import FamilyImage from '../assets/images/Family_with_Kids.png'
import ButtonArrow from '../assets/images/arrow.png'
import * as Font from 'expo-font';


const GetStartedScreen = ({navigation}) => {

const goToLogin = ()=>{
    navigation.navigate("LoginScreen")
};

    return (
        <View>
            <ImageBackground source={background}
                style={{
                    width: '100%', height: '100%', opacity: 0.99, backgroundColor: '#112D42',
                    color: '#FFFFFF'
                }}>
                <View style={styles.logo}>
                    <Image source={Logo} />
                </View>
                <View style={{marginTop: 50, alignItems: 'center'}}>
                    <Text style={styles.txtWelcome}>Welcome to</Text>
                    <Text style={styles.boStore}>basket online store</Text>
                    <Text style={styles.desc}>basket is the no1 online store for both new and used products.</Text>
                </View>

                <View style={styles.familyImageView}>
                    <Image source={FamilyImage} resizeMode={'contain'}/>
                </View>
                <Pressable style={styles.button} onPress={goToLogin}>
                    <Text style={styles.getStarted}>GET STARTED</Text>
                    
                    <Image source={ButtonArrow} style={{marginBottom: 6, color:'#112D42'}}/>
                     
                </Pressable>
            </ImageBackground>
        </View>

    )
}

export default GetStartedScreen

const styles = StyleSheet.create({
    logo: {
        alignItems: 'center',
        marginTop: 50,
    },
    txtWelcome:{
        color: '#FFFFFF',
        fontSize: 28,
        fontStyle:'normal',
        lineHeight: 34.1,
        fontWeight: '400',
        marginBottom: 16,
        //fontFamily: 'Raza'
    },
    boStore:{
        color: '#FFFFFF',
        fontSize: 40,
        fontStyle:'normal',
        lineHeight: 54.81,
        fontWeight: '700',
        marginBottom: 16,
        marginHorizontal: 1,
        //fontFamily: 'Raza' 
    },
    desc:{
        color: '#FFFFFF',
        fontSize: 22,
        fontStyle:'normal',
        lineHeight: 26.8,
        fontWeight: '400',
        marginBottom: 16,
        marginHorizontal: 3,
        textAlign:'center'
        //fontFamily: 'Raza'  
    },
    familyImageView:{
       alignItems:'center',
       marginTop: 5
    },
    button:{
        backgroundColor: '#FF8137',
        height: 40,
        width:'70%',
        marginLeft: 50,
        alignItems:"flex-end",
        borderRadius: 5,
        flexDirection:'row'
    },
    getStarted:{
        color:'#FFFFFF',
        marginVertical: 10,
        fontSize: 22,
        fontStyle:'normal',
        lineHeight: 26.8,
        fontWeight: '500',
        textAlign:'center',
        marginRight: 30,
        marginLeft: 40
        //fontFamily: 'Raza'
    },
});
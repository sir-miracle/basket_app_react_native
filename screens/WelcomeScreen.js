import { StyleSheet, Text, View, ImageBackground, Image,} from 'react-native'
import React from 'react'
import BackgroundImage from '../assets/images/basketappbackground.jpeg'
import Logo from '../assets/images/basketapplogo.png'

const WelcomeScreen = ({navigation}) => {

    const goToGetStarted = () => {
        navigation.navigate('GetStartedScreen');
    };

    return (
        <View style={{backgroundColor:  '#112D42'}}>
            
            <ImageBackground source={BackgroundImage} 
            style={{ width: '100%', height: '100%', opacity: 0.4,  backgroundColor:  '#00000070', shadowColor:'#000', 
            }}/>
            
           <View style={{position: 'absolute',  top: 0,  left: 0}}>
            <View style={styles.logo}>
                    <Image
                        source={Logo}
                    />
                </View>
                <View style={ styles.middleWriteUp}>
                    <Text style={styles.middleWriteUps}>Start Shopping</Text>
                    <Text style={styles.middleWriteUps}>Stay Happy</Text>
                    <Text style={styles.middleWriteUps}>Anytime</Text>
                </View>

                <View style={styles.BOmarketplaceView}>
                    <Text style={styles.BOmarketplaceText}>Basket Online marketplace</Text>
                </View>

                <View style={styles.bottomView}>
                    <Text style={styles.skip}>Skip</Text>
                    <Text style={styles.next} onPress={goToGetStarted}>Next</Text>
                </View>
                </View>
        </View>
        
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    logo:{
        marginTop: 200,
        alignItems:'center',
    },
    middleWriteUp:{
        alignItems: 'center',
        marginTop: 16,
    },
    middleWriteUps:{
        color: '#FFFFFF',
        fontSize: 35,
        fontStyle:'normal',
        lineHeight: 42.63,
        fontWeight: '400',
        //fontFamily: 'Raza'
    },
    BOmarketplaceView:{
        alignItems:'center',
        marginTop: 150,
    },
    BOmarketplaceText:{
        color: '#FF8137',
        fontWeight: '700',
        fontSize: 25,
        fontStyle:'normal',
        lineHeight: 30.45,
        //fontFamily: 'Raza'
    },
    bottomView:{
        flexDirection: 'row',
        width:'95%',
        maxWidth:'95%',
        marginLeft:10, 
        alignItems:'center'
    },
    next:{
        color: '#FF8137',
        fontWeight: '700',
        fontSize: 25,
        fontStyle:'normal',
        lineHeight: 30.45,
        marginLeft: 250,
        marginTop: 30,
        alignItems:'flex-end',
        marginRight: 20,
        //fontFamily: 'Raza' 
    },
    skip:{
        color: '#FF8137',
        fontWeight: '700',
        fontSize: 25,
        fontStyle:'normal',
        lineHeight: 30.45,
        marginTop: 30,
        //fontFamily: 'Raza'
    },

})
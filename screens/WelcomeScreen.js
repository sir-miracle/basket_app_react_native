import {Text, View, ImageBackground, Image,} from 'react-native'
import React from 'react'
import BackgroundImage from '../assets/images/basketappbackground.jpeg'
import Logo from '../assets/images/basketapplogo.png'
import {welcomeScreenStyles} from '../styles'

const WelcomeScreen = ({navigation}) => {
    //this function navigates user to the  getStarted screen
    const goToGetStarted = () => {
        navigation.navigate('GetStartedScreen');
    };

    return (
        <View style={{backgroundColor:  '#112D42'}}>
            
            <ImageBackground source={BackgroundImage} 
            style={{ width: '100%', height: '100%', opacity: 0.4,  backgroundColor:  '#00000070', shadowColor:'#000', 
            }}/>
            
           <View style={{position: 'absolute',  top: 0,  left: 0}}>
            <View style={welcomeScreenStyles.logo}>
                    <Image
                        source={Logo}
                    />
                </View>
                <View style={ welcomeScreenStyles.middleWriteUp}>
                    <Text style={welcomeScreenStyles.middleWriteUps}>Start Shopping</Text>
                    <Text style={welcomeScreenStyles.middleWriteUps}>Stay Happy</Text>
                    <Text style={welcomeScreenStyles.middleWriteUps}>Anytime</Text>
                </View>

                <View style={welcomeScreenStyles.BOmarketplaceView}>
                    <Text style={welcomeScreenStyles.BOmarketplaceText}>Basket Online marketplace</Text>
                </View>

                <View style={welcomeScreenStyles.bottomView}>
                    <Text style={welcomeScreenStyles.skip}>Skip</Text>
                    <Text style={welcomeScreenStyles.next} onPress={goToGetStarted}>Next</Text>
                </View>
                </View>
        </View>
        
    );
};

export default WelcomeScreen;


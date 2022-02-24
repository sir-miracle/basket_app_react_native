import { Text, TextInput, View, Image, ImageBackground, SafeAreaView,  TouchableOpacity } from 'react-native';
import React from 'react';
import ActivityHistory from '../assets/images/ActivityHistory.png'
import Bell from '../assets/images/Bell.png'
import CardPayment from '../assets/images/CardPayment.png'
import Export from '../assets/images/Export.png'
import Gear from '../assets/images/Gear.png'
import HBMenu from '../assets/images/HBMenu.png'
import Logo from '../assets/images/Logo.png'
import profileImage from '../assets/images/profileImage.png'
import Rectangle from '../assets/images/Rectangle81.png'
import Registration from '../assets/images/Registration.png'
import starFilled from '../assets/images/StarFilled.png'
import Tracking from '../assets/images/Tracking.png'
import searchIcon from '../assets/images/searchIcon.png'
import { accountScreenStyles } from '../styles'


const Account = ({ navigation }) => {
    
    const logOut = () => {
        navigation.navigate("LoginScreen")
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={accountScreenStyles.root}>

                <View style={accountScreenStyles.topView}>
                    <View style={accountScreenStyles.logo}>
                        <Image source={Logo} />
                    </View>
                    <View style={accountScreenStyles.searchBar}>
                        <View style={accountScreenStyles.searchIcon}>
                            <Image source={searchIcon} />
                        </View>
                        <View style={accountScreenStyles.searchHere}>
                            <TextInput
                                placeholder='Search in basket'
                            />
                        </View>
                    </View>
                    <View style={accountScreenStyles.menu}>
                        <Image source={HBMenu} />
                    </View>
                </View>

                <View style={accountScreenStyles.middleView}>
                    <ImageBackground source={Rectangle}
                        style={{ width: '100%', height: '100%' }}>
                        <View style={accountScreenStyles.profileSpace}>
                            <View>
                                <Image source={profileImage}
                                    style={{ width: 75, height: 75, borderRadius: 75 / 2 }} />
                            </View>

                            <View style={{ marginLeft: 20, marginTop: 10 }}>
                                <Text style={accountScreenStyles.name}>Daniel Obi</Text>
                                <Text style={accountScreenStyles.email}>danielobi@gmail.com</Text>
                            </View>

                        </View>

                        <View style={accountScreenStyles.bodyView}>
                            <View style={accountScreenStyles.bodyContainerstyle}>
                                <View style={accountScreenStyles.bodyContainerIcons}>
                                    <Image source={Bell} />
                                </View>
                                <View style={accountScreenStyles.bodyTextView}>
                                    <Text style={accountScreenStyles.bodyTextsStyle}>Notification</Text>
                                </View>
                            </View>

                            <View style={accountScreenStyles.bodyContainerstyle}>
                                <View style={accountScreenStyles.bodyContainerIcons}>
                                    <Image source={Registration} />
                                </View>
                                <View style={accountScreenStyles.bodyTextView}>
                                    <Text style={accountScreenStyles.bodyTextsStyle}>Edit profile</Text>
                                </View>
                            </View>

                            <View style={accountScreenStyles.bodyContainerstyle}>
                                <View style={accountScreenStyles.bodyContainerIcons}>
                                    <Image source={starFilled} />
                                </View>
                                <View style={accountScreenStyles.bodyTextView}>
                                    <Text style={accountScreenStyles.bodyTextsStyle}>Wishlist</Text>
                                </View>
                            </View>

                            <View style={accountScreenStyles.bodyContainerstyle}>
                                <View style={accountScreenStyles.bodyContainerIcons}>
                                    <Image source={ActivityHistory} />
                                </View>
                                <View style={accountScreenStyles.bodyTextView}>
                                    <Text style={accountScreenStyles.bodyTextsStyle}>Order history</Text>
                                </View>
                            </View>

                            <View style={accountScreenStyles.bodyContainerstyle}>
                                <View style={accountScreenStyles.bodyContainerIcons}>
                                    <Image source={Tracking} />
                                </View>
                                <View style={accountScreenStyles.bodyTextView}>
                                    <Text style={accountScreenStyles.bodyTextsStyle}>Track order</Text>
                                </View>
                            </View>

                            <View style={accountScreenStyles.bodyContainerstyle}>
                                <View style={accountScreenStyles.bodyContainerIcons}>
                                    <Image source={CardPayment} />
                                </View>
                                <View style={accountScreenStyles.bodyTextView}>
                                    <Text style={accountScreenStyles.bodyTextsStyle}>Payment option</Text>
                                </View>
                            </View>

                            <View style={accountScreenStyles.bodyContainerstyle}>
                                <View style={accountScreenStyles.bodyContainerIcons}>
                                    <Image source={Gear}/>
                                </View>
                                <View style={accountScreenStyles.bodyTextView}>
                                    <Text style={accountScreenStyles.bodyTextsStyle}>Settings</Text>
                                </View>
                            </View>

                            <View style={accountScreenStyles.bodyContainerstyle}>
                                <View style={accountScreenStyles.bodyContainerIcons}>
                                    <Image source={Export} />
                                </View>
                                <TouchableOpacity style={accountScreenStyles.bodyTextView} onPress={()=> logOut()}>
                                    <Text style={accountScreenStyles.bodyTextsStyle}>Log out</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Account;

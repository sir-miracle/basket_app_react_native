import { StyleSheet, Text, TextInput, View, Image, ImageBackground, SafeAreaView, Dimensions } from 'react-native';
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


const Account = () => {

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={styles.root}>

                <View style={styles.topView}>
                    <View style={styles.logo}>
                        <Image source={Logo} />
                    </View>
                    <View style={styles.searchBar}>
                        <View style={styles.searchIcon}>
                            <Image source={searchIcon} />
                        </View>
                        <View style={styles.searchHere}>
                            <TextInput
                                placeholder='Search in basket'
                            />
                        </View>
                    </View>
                    <View style={styles.menu}>
                        <Image source={HBMenu} />
                    </View>
                </View>

                <View style={styles.middleView}>
                    <ImageBackground source={Rectangle}
                        style={{ width: '100%', height: '100%' }}>
                        <View style={styles.profileSpace}>
                            <View>
                                <Image source={profileImage} 
                                style={{ width: 75, height: 75, borderRadius: 75 / 2 }} />
                            </View>

                            <View style={{marginLeft: 20, marginTop: 10}}>
                                <Text style={styles.name}>Daniel Obi</Text>
                                <Text style={styles.email}>danielobi@gmail.com</Text>
                            </View>

                        </View>

                        <View style={styles.bodyView}>
                            <View style={styles.bodyContainerstyle}>
                                <View style={styles.bodyContainerIcons}>
                                    <Image source={Bell} />
                                </View>
                                <View style={styles.bodyTextView}>
                                <Text style={styles.bodyTextsStyle}>Notification</Text>
                                </View>
                            </View>

                            <View style={styles.bodyContainerstyle}>
                                <View style={styles.bodyContainerIcons}>
                                    <Image source={Registration} />
                                </View>
                                <View style={styles.bodyTextView}>
                                <Text style={styles.bodyTextsStyle}>Edit profile</Text>
                                </View>
                            </View>

                            <View style={styles.bodyContainerstyle}>
                                <View style={styles.bodyContainerIcons}>
                                    <Image source={starFilled} />
                                </View>
                                <View style={styles.bodyTextView}>
                                <Text style={styles.bodyTextsStyle}>Wishlist</Text>
                                </View>
                            </View>

                            <View style={styles.bodyContainerstyle}>
                                <View style={styles.bodyContainerIcons}>
                                    <Image source={ActivityHistory} />
                                </View>
                                <View style={styles.bodyTextView}>
                                <Text style={styles.bodyTextsStyle}>Order history</Text>
                                </View>
                            </View>

                            <View style={styles.bodyContainerstyle}>
                                <View style={styles.bodyContainerIcons}>
                                    <Image source={Tracking} />
                                </View>
                                <View style={styles.bodyTextView}>
                                <Text style={styles.bodyTextsStyle}>Track order</Text>
                                </View>
                            </View>

                            <View style={styles.bodyContainerstyle}>
                                <View style={styles.bodyContainerIcons}>
                                    <Image source={CardPayment} />
                                </View>
                                <View style={styles.bodyTextView}>
                                <Text style={styles.bodyTextsStyle}>Payment option</Text>
                                </View>
                            </View>

                            <View style={styles.bodyContainerstyle}>
                                <View style={styles.bodyContainerIcons}>
                                    <Image source={Gear} />
                                </View>
                                <View style={styles.bodyTextView}>
                                <Text style={styles.bodyTextsStyle}>Settings</Text>
                                </View>
                            </View>

                            <View style={styles.bodyContainerstyle}>
                                <View style={styles.bodyContainerIcons}>
                                    <Image source={Export} />
                                </View>
                                <View style={styles.bodyTextView}>
                                <Text style={styles.bodyTextsStyle}>Log out</Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Account;
const deviceHeight = Dimensions.get("window").height

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    topView: {
        flexDirection: 'row',
        backgroundColor: '#112D42',
        paddingTop: 40,
        paddingBottom: 10,
        alignItems: 'center',
    },
    searchBar: {
        flexDirection: 'row',
        width: 230,
        height: 32,
        backgroundColor: '#FFF',
        color: '#fff',
        borderRadius: 8,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    menu: {
        marginLeft: 20,
        marginRight: 10,
    },
    logo: {
        marginRight: 20,
        marginLeft: 15,
    },
    searchIcon: {
        marginRight: 31,
    },
    searchHere: {
        marginRight: 40
    },
    middleView: {
        width: '100%',
        height: 200
    },
    bodyView: {
        backgroundColor: '#FFF',
        height: deviceHeight - 260,
        marginTop: 10,
        marginHorizontal: 16,
        borderTopStartRadius: 12,
        borderTopRightRadius: 12,
        elevation: 3,
        alignItems: 'center',
    },
    bodyTextsStyle: {
        color: '#112D42',
        fontWeight: '600',
        fontSize: 22,
        fontStyle: 'normal',
        lineHeight: 26.8,
        marginTop: 30,
        //fontFamily: 'Raza'
    },
    bodyContainerstyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bodyContainerIcons: {
        marginTop: 20,
        marginRight: 30,
        marginLeft: 10
    },
    profileSpace: {
        flexDirection: 'row',
        marginTop: 20,
        marginHorizontal: 16
    },
    name:{
        color: '#112D42',
        fontWeight: '600',
        fontSize: 26,
        fontStyle: 'normal',
        lineHeight: 31.67,
        //fontFamily: 'Raza'
    },
    email:{
        color: '#112D42',
        fontWeight: '400',
        fontSize: 18,
        fontStyle: 'normal',
        lineHeight: 21.92,
        //fontFamily: 'Raza'
    },
    bodyTextView:{
        marginLeft: 20,
        width: 136,
        maxWidth: 140,
    },
});
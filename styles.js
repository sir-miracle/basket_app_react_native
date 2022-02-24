import { StyleSheet, Dimensions } from "react-native"
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export const welcomeScreenStyles = StyleSheet.create({
    logo: {
        marginTop: 200,
        alignItems: 'center',
    },
    middleWriteUp: {
        alignItems: 'center',
        marginTop: 16,
    },
    middleWriteUps: {
        color: '#FFFFFF',
        fontSize: 35,
        fontStyle: 'normal',
        lineHeight: 42.63,
        fontWeight: '400',
        fontFamily: 'Rasa_400Regular'
    },
    BOmarketplaceView: {
        alignItems: 'center',
        marginTop: 150,
    },
    BOmarketplaceText: {
        color: '#FF8137',
        fontWeight: '700',
        fontSize: 25,
        fontStyle: 'normal',
        lineHeight: 30.45,
        fontFamily: 'Rasa_400Regular'
    },
    bottomView: {
        flexDirection: 'row',
        width: '95%',
        maxWidth: '95%',
        marginLeft: 10,
        alignItems: 'center'
    },
    next: {
        color: '#FF8137',
        fontWeight: '700',
        fontSize: 25,
        fontStyle: 'normal',
        lineHeight: 30.45,
        marginLeft: 250,
        marginTop: 30,
        alignItems: 'flex-end',
        marginRight: 20,
        fontFamily: 'Rasa_400Regular'
    },
    skip: {
        color: '#FF8137',
        fontWeight: '700',
        fontSize: 25,
        fontStyle: 'normal',
        lineHeight: 30.45,
        marginTop: 30,
        fontFamily: 'Rasa_400Regular'
    },

});

export const getStartedScreenStyles = StyleSheet.create({
    logo: {
        alignItems: 'center',
        marginTop: 50,
    },
    txtWelcome: {
        color: '#FFFFFF',
        fontSize: 28,
        fontStyle: 'normal',
        lineHeight: 34.1,
        fontWeight: '400',
        marginBottom: 16,
        fontFamily: 'Rasa_400Regular'
    },
    boStore: {
        color: '#FFFFFF',
        fontSize: 40,
        fontStyle: 'normal',
        lineHeight: 54.81,
        fontWeight: '700',
        marginBottom: 16,
        marginHorizontal: 1,
        fontFamily: 'Rasa_400Regular'
    },
    desc: {
        color: '#FFFFFF',
        fontSize: 22,
        fontStyle: 'normal',
        lineHeight: 26.8,
        fontWeight: '400',
        marginBottom: 16,
        marginHorizontal: 3,
        textAlign: 'center',
        fontFamily: 'Rasa_400Regular'  
    },
    familyImageView: {
        alignItems: 'center',
        marginTop: 5
    },
    button: {
        backgroundColor: '#FF8137',
        height: 40,
        width: '70%',
        marginLeft: 50,
        alignItems: "flex-end",
        borderRadius: 5,
        flexDirection: 'row'
    },
    getStarted: {
        color: '#FFFFFF',
        marginVertical: 10,
        fontSize: 22,
        fontStyle: 'normal',
        lineHeight: 26.8,
        fontWeight: '500',
        textAlign: 'center',
        marginRight: 30,
        marginLeft: 40,
        fontFamily: 'Rasa_400Regular'
    },
});

export const loginScreenStyles = StyleSheet.create({
    root: {
        //flex: 1
    },
    scrollView: {
        flex: 1,
        height: '100%'
    },

    logo: {
        marginTop: 40,
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
        fontFamily: 'Rasa_400Regular'
    },
    body: {
        color: '#112D42',
        fontSize: 22,
        fontStyle: 'normal',
        lineHeight: 26.8,
        fontWeight: '400',
        textAlign: 'center',
        marginTop: 20,
        fontFamily: 'Rasa_400Regular'
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
        fontFamily: 'Rasa_400Regular'
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
        fontFamily: 'Rasa_400Regular'
    },
    continueWith: {
        color: "#112D42B0",
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 16,
        fontStyle: 'normal',
        lineHeight: 26.8,
        fontWeight: '400',
        fontFamily: 'Rasa_400Regular'
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
        paddingLeft: 20,
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
        fontFamily: 'Rasa_400Regular'
    },
    signUp: {
        marginLeft: 20,
        color: "#FF8137",
        textAlign: 'center',
        fontSize: 22,
        fontStyle: 'normal',
        lineHeight: 26.8,
        fontWeight: '600',
        fontFamily: 'Rasa_400Regular'
    },
    facebook: {
        color: "#112D42",
        textAlign: 'center',
        fontSize: 18,
        fontStyle: 'normal',
        lineHeight: 21.92,
        fontWeight: '600',
        marginLeft: 16,
        fontFamily: 'Rasa_400Regular'
    },
    google: {
        color: "#112D42",
        textAlign: 'center',
        fontSize: 18,
        fontStyle: 'normal',
        lineHeight: 21.92,
        fontWeight: '600',
        marginLeft: 16,
        fontFamily: 'Rasa_400Regular'
    }

});

export const accountScreenStyles = StyleSheet.create({
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
        fontFamily: 'Rasa_400Regular'
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
    name: {
        color: '#112D42',
        fontWeight: '600',
        fontSize: 26,
        fontStyle: 'normal',
        lineHeight: 31.67,
        fontFamily: 'Rasa_400Regular'
    },
    email: {
        color: '#112D42',
        fontWeight: '400',
        fontSize: 18,
        fontStyle: 'normal',
        lineHeight: 21.92,
        fontFamily: 'Rasa_400Regular'
    },
    bodyTextView: {
        marginLeft: 20,
        width: 136,
        maxWidth: 140,
    },
});
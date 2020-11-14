import {Dimensions, StyleSheet, PixelRatio} from 'react-native';

let { height, width } = Dimensions.get('window');

let font = 'OpenSans-Light';
let fontSize = 30;
// let modalFontSize = 25;
let modalFontSize = PixelRatio.getPixelSizeForLayoutSize(12);

//TODO %
export let gameUserWidth = 50;

let colorRed = '#ff634c';
let colorGreen = '#39f6c6';
let colorBlue = '#059eb1';
let colorNo = '#404345';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'ghostwhite'
    },

    buttons: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        opacity: 0.8
    },

    button: {
        width: '50%',
        height: '50%'
    },

    done: {
        backgroundColor: colorBlue
    },
    like: {
        backgroundColor: colorGreen
    },
    dislike: {
        backgroundColor: colorRed
    },
    skip: {
        backgroundColor: colorNo
    },


    card: {
        position: 'absolute',

        width: '80%',
        height: '80%',

        top: '10%',
        left: '10%',

        backgroundColor: 'ghostwhite',

        borderRadius: 16,
        overflow: 'hidden',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    // font-size: 20px;
    // font-weight: 300;
    // padding: 20px;
    // box-sizing: border-box;
    //
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // text-align: center;
    //
    // line-height: normal;
    // letter-spacing: 1px;
    //
    // color: #292929;
    // background-color: ghostwhite;
    // border-radius: 16px;
    //
    // box-shadow: 0 14px 28px rgba(0, 0, 0, 0.24), 0 10px 10px rgba(0, 0, 0, 0.20);
    //
    //
    // /*pointer-events: none;*/
    // /*transition: 0.1s left, 1s top;*/
    // overflow: hidden;
    // opacity: 0.95;
    },












    modal: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,

        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: 'white',
        opacity: 1.0,

        // margin: 50
    },

    modalTitle: {
        fontFamily: font,
        fontSize: modalFontSize,
        textAlign: 'center',
        backgroundColor: 'transparent',

        fontWeight: '400',
        padding: 25,
        // margin: 50
    },


    modalText: {
        fontFamily: font,
        fontSize: modalFontSize,
        textAlign: 'center',
        backgroundColor: 'transparent',

        // fontWeight: '400',
        padding: 25,
    },
    modalButtons: {

        position: 'absolute',
        right: 0,
        left: 0,
        // bottom: 0,
        bottom: 50,

        // backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        // margin: 50
    },


    //MAIN

        menu: {
            position: 'absolute',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
        },
        welcomeText: {
            fontFamily: font,
            position: 'absolute',
            right: 0,
            left: 0,
            top: 0,
            justifyContent: 'center',
            backgroundColor: 'transparent',
            fontSize: fontSize,
            textAlign: 'center',
            margin: 50
        },
        swiperView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        textData: {
            fontFamily: font,
            position: 'absolute',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            fontSize: modalFontSize,
            textAlign: 'center',
            margin: 50
        },

        anyText: {
            fontFamily: font,
            fontSize: fontSize,
            textAlign: 'center',
            // justifyContent: 'center',
            backgroundColor: 'transparent',
        },
        select: {
            position: 'absolute',
            right: 0,
            left: 0,
            bottom: 50,
            // margin: 50
        },

    //GAME

        gameMapTouchable: {
            flex: 1,

        },

        gameMenu: {
            // flex: 1,
            position: 'absolute',
            left: 20,
            right: 20,
            // top: 0,
            bottom: 20,

            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',

            // backgroundColor: 'rgba(255, 255, 255, 0.5)',
            // pointerEvents: 'none',
            // opacity: 0.5,

            // zIndex: 2,
        },
        gameMenuText: {
            fontFamily: font,
            fontSize: fontSize/1.5,
            backgroundColor: 'transparent',
        },

        gameUserMarker: {
            width: gameUserWidth,
            height: gameUserWidth,
            zIndex: 3
        },
        gameUser: {
            // position: 'absolute',
            width: gameUserWidth,
            height: gameUserWidth,
            // backgroundColor: 'rgba(255, 255, 255, 0.5)',
            zIndex: 3
        },
        gameUserTouchable: {
            // backgroundColor: 'transparent',
            // backgroundColor: 'green',
            width: gameUserWidth,
            height: gameUserWidth,
            zIndex: 3
        },

        mapItem: {
            width: 30,
            height: 30
        },

        gameUsers: {
            position: 'relative',
            width: gameUserWidth,
            // height: gameUserWidth,
            zIndex: 2
        },

        userMenu: {
            position: 'absolute',
            right: 0,
            left: 0,
            bottom: 20,

            flexDirection: 'row',
            justifyContent: 'space-between',

            // backgroundColor: 'red',

            margin: 20
        },
});

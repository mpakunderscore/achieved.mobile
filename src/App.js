/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {styles} from './js/styles/styles';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView style={styles.container}>
                <View style={styles.buttons}>
                    <View style={[styles.button, styles.done]} />
                    <View style={[styles.button, styles.like]} />
                    <View style={[styles.button, styles.dislike]} />
                    <View style={[styles.button, styles.skip]} />
                </View>
                <View style={styles.card}>
                </View>
            </SafeAreaView>
        </>
    );
};

export default App;

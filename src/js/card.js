import React, { Component } from 'react';
import { Button, StyleSheet, View, TouchableOpacity } from 'react-native';
import {styles} from './styles/styles';

export default class Card extends Component {
    _onPressButton(e) {
        console.log('Event')
        console.log(e)
    }

    render() {
        return (
            <View style={styles.card}>
                <TouchableOpacity
                    style={styles.container}
                    onPressIn={(e) => {this._onPressButton(e)}}
                    onPressOut={(e) => {this._onPressButton(e)}}>
                </TouchableOpacity>
            </View>
        );
    }
}

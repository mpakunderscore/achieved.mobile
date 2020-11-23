import React, { Component, useRef } from 'react';
import { Animated, Button, StyleSheet, View, TouchableOpacity, PanResponder } from 'react-native';
import {styles} from './styles/styles';

export default class Card extends Component {
    render() {

        return (
            <Animated.View style={styles.card}>
                <TouchableOpacity
                    style={styles.container}>
                </TouchableOpacity>
            </Animated.View>
        );
    }
}

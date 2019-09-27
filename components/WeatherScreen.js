import React from 'react';
import Weather from './Weather';
import { Button, StyleSheet, FlatList, View, Text, TouchableHighlight } from 'react-native';

export default class WeatherScreen extends React.Component{
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: (<Text style = {styles.title}>Weather</Text>),
            headerRight: (
                <Button style = {styles.button} title="Change zip" onPress={() => navigation.navigate('ZipCodes')}
                />
            )
        }
    }

    render() {
        const z = this.props.navigation.getParam('ZipCodes')
        return (
            <Weather ZipCodes={z}/>
        );
    }
}
const styles = StyleSheet.create({
    title: {
        paddingStart: 20
    },
    button: {
        padding: 8,
        margin: 8
    }
});
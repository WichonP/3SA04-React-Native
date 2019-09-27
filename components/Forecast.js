import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Forecast extends React.Component {
    render() {
        return (
            <View style = {{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                
            }}>
                <Text style = {styles.mainword}>{this.props.main}</Text>
                <Text style = {styles.mainword}>{this.props.description}</Text>
                <Text style = {styles.mainword}>{this.props.temp}°C</Text>
                
            </View>
         );
        }
   }
   const styles = StyleSheet.create({
    mainword: { color: 'black',
                fontSize : 30}
});
import React from 'react';
import { StyleSheet, FlatList, View, Text, TouchableHighlight, ImageBackground } from 'react-native';

const availableZipItems = [
    { place: 'Hatyai' , code: '90110'},
    { place: 'Trang' , code: '92000'},
    { place: 'Chiangmai' , code: '50000'},
    { place: 'Khonkaen' , code: '40000'},
    { place: 'Chonburi' , code: '20000'},
]

const ZipItem = ({place, code, navigate}) => (
    <TouchableHighlight onPress={() => navigate('Weather' , {ZipCodes: code})}>
    <View style={styles.zipItem}>
        <Text style={styles.zipPlace}>{place}</Text>
        <Text style={styles.zipCode}>{code}</Text>
    </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code

export default class ZipCodeScreen extends React.Component{
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle:(<Text>Choose a zip code</Text>)
            
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
           
            <View>
                <FlatList
                    data={availableZipItems}
                    keyExtractor={_keyExtractor}
                    renderItem={({item}) => <ZipItem {...item} navigate={navigate}/>}
                />
            </View>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    zipItem: {
        flexDirection: 'row',
        textAlign: 'center',
        backgroundColor: 'white',
        opacity: 0.5,
        line
    },
    zipPlace: {
        flex: 2,
        margin: 20,
        fontSize: 30
    },
    zipCode: {
        textAlign: 'right',
        flex: 2,
        margin: 20,
        fontSize: 30
    },
    backdrop: { width: '100%', height: '100%',},
});
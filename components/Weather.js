import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Forecast from './Forecast'


export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: {
                 main: 'main', 
                 description: 'description', 
                 temp: 0
            }
        }
    }
    componentDidUpdate = (prevProps) => {
        if (prevProps.ZipCodes !== this.props.ZipCodes){
            this.fetchData()
        }
    }
    fetchData = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.ZipCodes},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
            .then((response) => response.json())
            .then((json) => {
                this.setState(
                    {
                     forecast: {
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    }
                });
        })
        .catch((error) => {
            console.warn(error);
            });
        }
       
        componentDidMount = () => this.fetchData()
    
    render() {
        return ( 
             <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                        <View style = {styles.container} >
                        <Text style = {styles.mainword}>Zip code is {this.props.ZipCodes}.</Text>
                        <Forecast {...this.state.forecast} />
                        </View>     
            </ImageBackground>
            
        );
    }
}
const styles = StyleSheet.create({
        container: { paddingTop: 0,  
                     justifyContent: 'center',
                     flexDirection: 'column',
                     backgroundColor: 'white',
                     opacity: 0.5},
        backdrop: { width: '100%', height: '100%',},
        mainword: { textAlign: 'center',
                    color: 'black',
                    fontSize : 30}
});
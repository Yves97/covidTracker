import React, {Component} from 'react'
import { View  , StyleSheet , TextInput, Button, ImageBackground} from 'react-native'

//IMPORT CONFIG & DEPENDENCIES
import data from '../../helpers/fakeData'
import {Picker} from '@react-native-community/picker';

//IMPORT COMPONENTS
import  CardItem from '../../components/news/cardItem'

//IMPORT IMAGES
import CoronaImg from '../../assets/images/virus-covid.png'

class Search extends Component{
    constructor(props){
        super(props)
        this.state = {
            country : 'USA'
        }
    }
    _searchFormCountryName(){
        console.log('searching...')
    }
    _goToHomePage(){
        const {navigation} = this.props
        navigation.navigate('home')
    }

    render(){
        return (
                <ImageBackground style={styles.mainView} source={CoronaImg}>
                    <View style={styles.boxSearch}>
                    <Picker selectedValue={this.state.country} style={styles.picker} onValueChange={(itemValue, itemIndex) => this.setState({country: itemValue}) }>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" /> 
                    </Picker>

                        {/* <TextInput placeholder='rechercher un pays ici'></TextInput> */}
                        <View style={styles.boxButton}>
                            <Button color="#ab4d8b" style={styles.space}  title='Rechercher' onPress={ () => this._searchFormCountryName() } />
                            <Button title='accueil' onPress={ () => this._goToHomePage() } />
                        </View>
                    </View>
                </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    mainView : {
        padding : 10,
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
    },
    picker : {
        borderWidth : 50,
        borderStyle : "solid",
    },
    boxSearch : {
        backgroundColor : "#fff",
        width : '100%',
        padding : 25,
        resizeMode : "cover"
    },
    boxButton : {
        flexDirection : "row",
        justifyContent : "space-around"
    },
})

export default Search
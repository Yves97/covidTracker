import React, {Component} from 'react'
import { View , Text, FlatList ,ScrollView , StyleSheet , TextInput, Button, ImageBackground} from 'react-native'

//IMPORT CONFIG & DEPENDENCIES
import data from '../../helpers/fakeData'

//IMPORT COMPONENTS
import  CardItem from '../../components/news/cardItem'

//IMPORT IMAGES
import CoronaImg from '../../assets/images/virus-covid.png'

class Search extends Component{
    _searchFormCountryName(){
        console.log('searching...')
    }

    render(){
        return (
                <ImageBackground style={styles.mainView} source={CoronaImg}>
                    <View style={styles.boxSearch}>
                        <TextInput placeholder='rechercher un pays ici'></TextInput>
                        <Button color="#ab4d8b"  title='Rechercher' onPress={ () => this._searchFormCountryName() } />
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
    boxSearch : {
        backgroundColor : "#fff",
        width : '100%',
        padding : 25,
        resizeMode : "cover"
    }
})

export default Search
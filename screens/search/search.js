import React, {Component} from 'react'
import { View  , StyleSheet , TextInput, Button, ImageBackground,Text, ActivityIndicator} from 'react-native'

//IMPORT CONFIG & DEPENDENCIES
import data, { countryData } from '../../helpers/fakeData'
import {Picker} from '@react-native-community/picker';
import { getSummaryData } from '../../api/covid/covidApi'

//IMPORT COMPONENTS
import  CardItem from '../../components/news/cardItem'

//IMPORT IMAGES
import CoronaImg from '../../assets/images/virus-covid.png'

class Search extends Component{
    constructor(props){
        super(props)
        this.state = {
            country : '',
            loadingSlug : false,
            slugs : ''
        }
    }
    componentDidMount(){
        console.log('hello')
        this._getSlugData()
    }

    _searchFormCountryName(){
        console.log('searching...')
    }

    _goToHomePage(){
        const {navigation} = this.props
        navigation.navigate('home')
    }

    _getSlugData = () => {

        this.setState({loadingSlug : true})
            getSummaryData()
                .then((data)=> {
                    this.setState({
                        slugs : this._renderSlugs(data.Countries),
                        loadingSlug : false
                    })
                    // console.log(this._renderSlugs(data.Countries))
                })
                .catch((error)=> console.log(error))
    }

    _renderSlugs = (slug) => slug.map((item,index) => item.Slug )

    render(){
        if( this.state.slugs === '' ){
            // console.log('loading')
            return (
                <View>
                    <ActivityIndicator size='large' color='#ab4d8b' />
                </View>
            )
        }
        // console.log(this.state.slugs)
        let country = this.state.slugs
        let Data = country.map((item,index) => <Picker.Item key={index} label={item.Slug}   value={item.slug} />)
        
        return (
                <ImageBackground style={styles.mainView} source={CoronaImg}>
                    <View style={styles.boxSearch}>
                    <Picker selectedValue={this.state.country} style={styles.picker} onValueChange={(itemValue, itemIndex) => this.setState({country: itemValue}) }>
                        {Data}

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
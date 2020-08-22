import React, {Component} from 'react'
import { View  , StyleSheet , TextInput, Button, ImageBackground,Text, ActivityIndicator} from 'react-native'

//IMPORT CONFIG & DEPENDENCIES
import data, { countryData } from '../../helpers/fakeData'
import {Picker} from '@react-native-community/picker';
import { getSummaryData , getLiveDataFromCountries} from '../../api/covid/covidApi'
import moment from 'moment'
import 'moment/locale/fr'
//IMPORT COMPONENTS



class Search extends Component{
    constructor(props){
        super(props)
        this.state = {
            country : '' || 'afghanistan',
            loadingSlug : false,
            slugs : '',
            loadingLive : false,
            liveData : null
        }
    }
    componentDidMount(){
        // console.log('hello')
        this._getSlugData()
    }

    _searchFormCountryName = () => {
        // console.log('trigger')
        this.setState({loadingLive : true})
        getLiveDataFromCountries(this.state.country)
            .then((data) => {
                this.setState({
                    liveData : data,
                    loadingLive : false
                })
            })
            .catch((error)=> console.log(error))
        // console.log('searching...')
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

    _lastElementOfArray(array) {
        return array[array.length - 1]
    }

    _formatedDataToFrench = () => {
        let localLocale = moment();
        localLocale.locale('fr');
        return localLocale.format('LL');
    }

    //RENDER
    render(){
        if( this.state.slugs === '' ){
            // console.log('loading')
            return (
                <View style={styles.indicator}>
                    <ActivityIndicator size='large' color='#ab4d8b' />
                </View>
            )
        }
        let slugs = this.state.slugs

        let slugsData = slugs.map((item,index) => { 
            return  <Picker.Item key={index} label={item}   value={item} /> 
        })
        
        let LiveDATA = (
            <View />
        )
        if(this.state.liveData === null){
            LiveDATA = (
                <View/>
            )
        }
        else{
            const LiveData = this._lastElementOfArray(this.state.liveData)
            console.log(LiveData)
            LiveDATA = (
                <View style={styles.liveData}>
                    <Text>Date  : {this._formatedDataToFrench(LiveData.Date)} </Text>
                    <Text>Pays : {LiveData.Country}</Text>
                    <Text>Nombre de cas confirmés : {LiveData.Cases}</Text>
                </View>
            )
        }
        return (
                <View style={styles.mainView}>
                    <View style={styles.boxSearch}>
                    <Text style={styles.text}>Obtenez les données en temps réels</Text>
                    <Picker selectedValue={this.state.country} style={styles.picker} onValueChange={(itemValue, itemIndex) => this.setState({country: itemValue}) }>
                        {slugsData}
                    </Picker>
                        <View style={styles.boxButton}>
                            <Button color="#ab4d8b" style={styles.text}  title='Rechercher' onPress={ () => this._searchFormCountryName() } />
                            <Button title='accueil' style={styles.text}  onPress={ () => this._goToHomePage() } />
                        </View>
                    </View>
                    {LiveDATA}
                </View>
        )
    }
}

const styles = StyleSheet.create({
    text : {
        fontFamily : "Montserrat-Regular"
    },
    indicator : {
        flex : 1,
        backgroundColor : "#fff",
        padding : 10
    },  
    mainView : {
        padding : 10,
        flex : 1,
        // justifyContent : "center",
        alignItems : "center",
        backgroundColor : '#fff'
    },
    picker : {
        borderWidth : 50,
        borderStyle : "solid",
    },
    boxSearch : {
        backgroundColor : "#ab4d8c5b",
        width : '100%',
        padding : 25,
        resizeMode : "cover"
    },
    boxButton : {
        flexDirection : "row",
        justifyContent : "space-around"
    },
    liveData: {
        padding : 10,
        marginTop : 10,
        height : 100,
        flexDirection : "column",
        backgroundColor : "#ab4d8c5b",
        width : '100%'
    }
})

export default Search
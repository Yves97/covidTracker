import React, { Component } from 'react';
import {
    View,
    Text, 
    ScrollView, 
    StyleSheet, 
    Button, 
    ActivityIndicator
} from 'react-native'

//IMPORT CONFIG & DEPENDENCIES
import {getSummaryData} from '../../api/covid/covidApi'
import moment from 'moment'
import 'moment/locale/fr'
import LinearGradient from 'react-native-linear-gradient';

//IMPORT COMPONENTS

//IMPORT IMAGES

class News extends Component {
    constructor(props){
        super(props)
        this.state = {
            summary : '',
            isLoading : false
        }
    }

    componentDidMount(){
        // this._handlerSummaryData()
        if(this.state.summary.length >= 0 ){
            this._handlerSummaryData()
        }
    }

    _formatedDataToFrench = () => {
        let localLocale = moment();
        localLocale.locale('fr');
        return localLocale.format('LL');
    }
    
    _handlerSummaryData = () => {
        this.setState({isLoading : true})
        getSummaryData()
            .then((data) => {
                this.setState({
                    summary : data.Global,
                    isLoading : false
                })
            })
            .catch((error)=> console.log(error))
    }

    _goToSearchScreen(){
        const { navigation } = this.props
        navigation.navigate('search')
    }

    _goToHomePage(){
        const {navigation} = this.props
        navigation.navigate('home')
    }
    render() {
        const {summary} = this.state
        // console.log(summary)
        let Content  = (
                <View>
                    <View style={styles.inTheWorld}>
                        <Text style={styles.title}>Dans le monde</Text>
                        <Text style={styles.date}> Date : { this._formatedDataToFrench()} </Text>
                        <View style={styles.boxStats}>
                            <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}} locations={[0,0.5]} colors={['#ea5455', '#febf63']} style={[styles.space,styles.boxStat,styles.boxStatSick]}>
                                <Text style={styles.colorWhite}>Nombre total de cas confirmés</Text>
                                <Text style={styles.numbers}>{summary.TotalConfirmed}</Text>
                                {/* <Text style={styles.numbers}>98498465456</Text> */}
                            </LinearGradient>
                            <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}} locations={[0,0.5]} colors={[ '#206a5d', '#a8df65']} style={[styles.space,styles.boxStat,styles.boxStatHealth]}>
                                <Text style={styles.colorWhite}>Nombre de cas guerris  </Text>
                                <Text style={styles.numbers}>{summary.TotalRecovered}</Text>
                                {/* <Text style={styles.numbers}>8998456464</Text> */}
                            </LinearGradient>
                            <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}} locations={[0,0.5]} colors={['#ea5455', '#810000']} style={[styles.boxStat,styles.boxStatDeath]}>
                                <Text style={styles.colorWhite}>Nombre de cas morts </Text>
                                <Text style={styles.numbers}>{summary.TotalDeaths}</Text>
                                {/* <Text style={styles.numbers}>8496465464</Text> */}
                            </LinearGradient>
                        </View>
                    </View>
                    <View style={styles.button}>
                        <Button title='rechercher'  color="#ab4d8b" onPress={ () => this._goToSearchScreen()} />
                    </View>
                    <Button title='accueil' onPress={ () => this._goToHomePage() } />
                </View>
            
        )
        if(this.state.isLoading && summary.length ===0){
            Content = (
                <View style={styles.indicator}>
                    <ActivityIndicator size='large' color='#ab4d8b' />
                </View>
            )
        }
        return (
            <ScrollView style={styles.main}>
                {Content}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    main : {
        flex : 1,
        padding : 10,
        backgroundColor : "#fff",
        flexDirection : "column",
    },
    indicator : {
        flex : 2,
    },
    inTheWorld : {
        marginBottom : 40
    },
    date : {
        fontSize : 15,
        marginBottom : 10,
        fontFamily : "Montserrat-Regular"
    },
    title :  {
        fontSize : 25,
        marginBottom : 10,
        fontFamily : "Montserrat-Regular"
    },
    boxStats : {
        flexDirection : "column",
    },
    space : {
        marginBottom : 10
    },
    boxStat : {
        padding : 10,
    },
    boxStatSick : {
        backgroundColor : "orange",
        
    },
    boxStatHealth : {
        backgroundColor : "green",
    },
    boxStatDeath : {
        backgroundColor : "red",
    },  
    colorWhite : {
        color : '#fff',
        fontSize : 15,
        fontFamily : "Montserrat-Regular"
    },
    numbers : {
        textAlign : "center",
        fontSize : 35,
        fontWeight : "bold",
        color : "#fff"
    },
    button : {
        marginBottom : 10
    }
})


export default News
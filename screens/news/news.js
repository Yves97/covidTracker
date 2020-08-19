import React, { Component } from 'react';
import {View,Text, ScrollView, StyleSheet, Button, ActivityIndicator} from 'react-native'

//IMPORT CONFIG & DEPENDENCIES
import {getSummaryData} from '../../api/covid/covidApi'
import moment from 'moment'

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
        this._handlerSummaryData()
        if(this.state.summary.length >= 0 ){
            this._handlerSummaryData()
        }
    }

    _getFormatedCurrentDate = () => {
        let dateFr = moment.locale('fr')
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
                <ScrollView style={styles.main}>
                    <View style={styles.inTheWorld}>
                        <Text style={styles.title}>Dans le monde</Text>
                        {/* <Text style={styles.date}> Date : { this._getFormatedCurrentDate()} </Text> */}
                        <View style={styles.boxStats}>
                            <View style={[styles.space,styles.boxStat,styles.boxStatSick]}>
                                <Text style={styles.colorWhite}>Nombre total de cas confirmés</Text>
                                <Text style={styles.numbers}>{summary.TotalConfirmed}</Text>
                            </View>
                            <View style={[styles.space,styles.boxStat,styles.boxStatHealth]}>
                                <Text style={styles.colorWhite}>Nombre de cas guerris  </Text>
                                <Text style={styles.numbers}>{summary.TotalRecovered}</Text>
                            </View>
                            <View style={[styles.boxStat,styles.boxStatDeath]}>
                                <Text style={styles.colorWhite}>Nombre de cas morts </Text>
                                <Text style={styles.numbers}>{summary.TotalDeaths}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.button}>
                        <Button title='rechercher'  color="#ab4d8b" onPress={ () => this._goToSearchScreen()} />
                    </View>
                    <Button title='accueil' onPress={ () => this._goToHomePage() } />
                </ScrollView>
            
        )
        if(this.state.isLoading && this.state.summary.length ===0){
            Content = (
                <View style={styles.indicator}>
                    <ActivityIndicator size='large' color='#ab4d8b' />
                </View>
            )
        }
        return (
            <ScrollView styles={styles.main}>
                {Content}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    indicator : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    main : {
        padding : 10,
        backgroundColor : "#fff"
    },
    inTheWorld : {
        marginBottom : 40
    },
    date : {
        fontSize : 15,
        marginBottom : 10
    },
    title :  {
        fontSize : 25,
        marginBottom : 10
    },
    boxStats : {
        flexDirection : "column",
    },
    space : {
        marginBottom : 10
    },
    boxStat : {
        padding : 10
    },
    boxStatSick : {
        backgroundColor : "orange",
        borderRadius : 5,
    },
    boxStatHealth : {
        backgroundColor : "green",
        borderRadius : 5,
    },
    boxStatDeath : {
        backgroundColor : "red",
        borderRadius : 5
    },  
    colorWhite : {
        color : '#fff',
        fontSize : 15
    },
    numbers : {
        textAlign : "center",
        fontSize : 35,
        fontWeight : "bold"
    },
    button : {
        marginBottom : 10
    }
})


export default News
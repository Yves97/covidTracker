import React, { Component } from 'react';
import {View,Text, ScrollView, StyleSheet, Button, ActivityIndicator} from 'react-native'

//IMPORT CONFIG & DEPENDENCIES
import {getSummaryData} from '../../api/covid/covidApi'

//IMPORT COMPONENTS

//IMPORT IMAGES

class News extends Component {
    constructor(props){
        super(props)
        this.state = {
            summary : [],
            isLoading : false
        }
    }

    componentDidMount(){
        console.log('hello')
        this._handlerSummaryData()
        if(this.state.summary.length >= 1 ){
            this._handlerSummaryData()
        }
        
    }


    _handlerSummaryData = () => {
        // this.setState({isLoading : true})
        getSummaryData()
            .then((data) => {
                console.log(data.Global)
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
        return (
            <ScrollView style={styles.main}> 
                <View style={styles.inTheWorld}>
                    <Text style={styles.title}>Dans le monde</Text>
                    <Text style={styles.date}> Date : 18/08/2020 </Text>
                    <View style={styles.boxStats}>
                        <View style={[styles.space,styles.boxStat,styles.boxStatSick]}>
                            <Text style={styles.colorWhite}>Nombre de cas contaminés</Text>
                            <Text style={styles.numbers}>1479899870</Text>
                        </View>
                        <View style={[styles.space,styles.boxStat,styles.boxStatHealth]}>
                            <Text style={styles.colorWhite}>Nombre de cas guerris  </Text>
                            <Text style={styles.numbers}>984654654</Text>
                        </View>
                        <View style={[styles.boxStat,styles.boxStatDeath]}>
                            <Text style={styles.colorWhite}>Nombre de cas morts </Text>
                            <Text style={styles.numbers}>9846545465456</Text>
                        </View>
                    </View>
                </View>
                    <View style={styles.button}>
                        <Button title='rechercher'  color="#ab4d8b" onPress={ () => this._goToSearchScreen()} />
                    </View>
                    <Button title='accueil' onPress={ () => this._goToHomePage() } />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
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
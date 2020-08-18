import React, { Component } from 'react';
import {View,Text, ScrollView, StyleSheet} from 'react-native'

class News extends Component {
    render() {
        return (
            <ScrollView style={styles.main}> 
                <View style={styles.inTheWorld}>
                    <Text style={styles.title}>Dans le monde</Text>
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
                <View style={styles.inTheWorld}>
                    <Text style={[styles.title,styles.continent]}>Par Contient</Text>
                    <View style={styles.continentName}>
                        <Text>Afrique</Text>
                        
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    main : {
        padding : 10,
        
    },
    inTheWorld : {
        marginBottom : 40
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
    continent : {
        marginBottom : 15
    }
})


export default News
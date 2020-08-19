import React , {Component} from 'react'
import { View, 
    StyleSheet, 
    Text ,
    ScrollView , 
    ImageBackground ,
    Button } from 'react-native'

//IMPORT CONFIG & DEPENDENCIES
import data from '../../helpers/fakeData'


//IMPORT IMAGES
import CoronaImg from '../../assets/images/virus-covid.png'

class Home extends Component {

    _getNewsInfos = () => {
        const { navigation } = this.props
        navigation.navigate('news')
    }

    render(){
        return (
            <ScrollView style={styles.scrool_view} >
                <ImageBackground  source={CoronaImg} style={styles.hero}>
                    <View>
                        <Text style={styles.title}>COVID-19</Text>
                    </View>
                </ImageBackground>
                    <View style={styles.buttons}>
                        <Button title="Actualité" style={styles.customButton}  color="#ab4d8b" onPress={ () => this._getNewsInfos()} />
                    </View>
                    <View  style={styles.main}>
                        <Text style={styles.descriptionTitle}>Historique</Text>
                        <Text style={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Mollitia error fuga alias suscipit ab, modi voluptate libero facere eaque molestias maxime obcaecati consequuntur minima ipsa nihil amet earum quae illo?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia error fuga alias suscipit ab, modi voluptate libero facere eaque molestias maxime obcaecati consequuntur minima ipsa nihil amet earum quae illo?
                        </Text>
                    </View>
                    <View  style={styles.main}>
                        <Text style={styles.descriptionTitle}>Symptômes</Text>
                        <Text style={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Mollitia error fuga alias suscipit ab, modi voluptate libero facere eaque molestias maxime obcaecati consequuntur minima ipsa nihil amet earum quae illo?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia error fuga alias suscipit ab, modi voluptate libero facere eaque molestias maxime obcaecati consequuntur minima ipsa nihil amet earum quae illo?
                        </Text>
                    </View>
                    <View  style={styles.main}>
                        <Text style={styles.descriptionTitle}>Que faire quand on recent les symptômes</Text>
                        <Text style={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Mollitia error fuga alias suscipit ab, modi voluptate libero facere eaque molestias maxime obcaecati consequuntur minima ipsa nihil amet earum quae illo?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia error fuga alias suscipit ab, modi voluptate libero facere eaque molestias maxime obcaecati consequuntur minima ipsa nihil amet earum quae illo?
                        </Text>
                    </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    scrool_view : {
        flex : 1,
        backgroundColor  : '#fff'
    },
    mainBox : {
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20,
    },
    main : {
        flex : 1,
        padding : 10
    },
    hero : {   
        height : 300,
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        resizeMode : "cover"
    },
    buttons : {
        marginTop: 10,
        padding : 10
    },
    customButton: {
        width :50 ,
    },
    title : {
        color : "#fff",
        fontSize : 40,
        backgroundColor : "#ab4d8b"
    },
    descriptionTitle : {
        fontSize : 25,
        color : "#220406",
        fontWeight : "bold",
        marginBottom : 10
    },
    description : {
        fontSize : 15,
        fontStyle : 'italic'
    }
})

export default Home
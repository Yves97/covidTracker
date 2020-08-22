import React , {Component} from 'react'
import { 
    View, 
    StyleSheet, 
    Text ,
    ScrollView , 
    ImageBackground ,
    Button } from 'react-native'

//IMPORT CONFIG & DEPENDENCIES
import data from '../../helpers/fakeData'


//IMPORT IMAGES
import CoronaImg from '../../assets/images/covid-19_virus.jpg'

class Home extends Component {

    render(){
        return (
            <ScrollView style={styles.scrool_view} >
                <ImageBackground  source={CoronaImg} style={styles.hero}>
                    <View>
                        <Text style={styles.title}>COVID-19</Text>
                    </View>
                </ImageBackground>
                    <View  style={styles.main}>
                        <Text style={styles.descriptionTitle}>Historique</Text>
                        <Text style={styles.description}>La maladie à coronavirus 2019 Écouter, ou la ou lenote 1 Covid-19 Écouter (acronyme anglais de coronavirus disease 2019), est une maladie infectieuse émergente de type zoonose virale causée par la souche de coronavirus SARS-CoV-2. Les symptômes les plus fréquents sont la fièvre, la toux, la fatigue et la gêne respiratoire. Dans les formes les plus graves, l'apparition d'un syndrome de détresse respiratoire aiguë peut entraîner la mort, notamment chez les personnes plus fragiles du fait de leur âge ou en cas de comorbidités. Une autre complication mortelle est une réponse exacerbée du système immunitaire inné (choc cytokinique).
                            Une perte brutale de l'odorat (anosmie), associée ou non à une perte du goût (agueusie), est une manifestation relativement fréquente et parfois révélatrice de l'infection par le SARS-CoV-2.
                            Il existe un taux important de formes asymptomatiques. La transmission interhumaine se fait surtout via des gouttelettes respiratoires, postillons comme pour la grippe saisonnière, surtout lors de la parole, de la toux et des éternuements ou lorsque le contact d'une surface contaminée est suivi par celui d'une muqueuse du visage (bouche, nez, yeux). La période d'incubation est en moyenne de 5 à 6 jours, avec des extrêmes pouvant aller de deux à quatorze jours. 
                        </Text>
                    </View>
                    <View  style={styles.main}>
                        <Text style={styles.descriptionTitle}>Symptômes</Text>
                        <Text style={styles.description}>fièvre,
                        toux sèche ,
                        fatigue
                        ,courbatures ,
                        maux de gorge,
                        diarrhée, 
                        conjonctivite,
                        maux de tête,
                        perte de l’odorat ou du goût,éruption cutanée, 
                        ou décoloration des doigts ou des orteils
                        </Text>
                    </View>
                    <View  style={styles.main}>
                        <Text style={styles.descriptionTitle}>Que faire quand on ressent les symptômes ?</Text>
                        <Text style={styles.description}>Soins auto-administrés
                            Si vous pensez être malade, reposez-vous, buvez ‎abondamment et consommez des aliments nutritifs. ‎Restez dans une chambre séparée des autres ‎membres de la famille et utilisez une salle de bains ‎différente, si possible. Nettoyer et désinfecter ‎régulièrement les surfaces que vous touchez.
                            Tous les membres du ménage doivent conserver un ‎mode de vie sain. Maintenez un régime alimentaire ‎adapté, pratiquez des activités physiques et gardez ‎le contact avec vos proches par téléphone ou sur les ‎réseaux sociaux. Dans les périodes difficiles, les ‎enfants ont particulièrement besoin d’amour et ‎d’attention de la part des adultes. Conservez autant ‎que possible vos habitudes et vos horaires.‎
                            Il est normal d’être triste, stressé ou troublé durant ‎une période de crise. Cela peut vous aider de parler ‎à des gens en qui vous avez confiance, comme vos ‎amis et les membres de votre famille. Si vous vous ‎sentez dépassé par les événements, parlez-en à des ‎professionnels de la santé ou à un conseiller.
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
        padding : 10,
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
        backgroundColor : "#ab4d8b",
        fontFamily : "Montserrat-Regular"
    },
    descriptionTitle : {
        fontSize : 25,
        color : "#220406",
        fontWeight : "bold",
        marginBottom : 10,
        fontFamily : "Montserrat-Regular"
    },
    description : {
        fontSize : 18,
        fontFamily : "Montserrat-Regular",
        lineHeight : 20
    }
})

export default Home
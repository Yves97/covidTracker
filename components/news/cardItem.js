import React , {Component}  from 'react'
import {View,Text, StyleSheet} from 'react-native'

class CardItem extends Component {
    render(){
        // console.log('render')
        // const { covid } = this.props
        // console.log(this.props)
        // console.log('hello')
        return (
            
            <View style={styles.main_view}>
                <View style={styles.card_view}>
                    <Text>Pays</Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    main_view : {
        flex : 1,
        padding : 10,
        flexDirection : "column"
    },
    card_view : {
        padding : 5,
        height : 200,
        backgroundColor : "red",
        borderRadius : 15
    }
})
export default CardItem
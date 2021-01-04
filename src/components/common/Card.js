import React, { Component } from 'react';
import {View} from 'react-native';

const card =(props) =>{
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    )
}

const styles ={
    containerStyle:{
        borderWidth:1,
        borderRadious:2,
        borderColor:'#ddd',
        borderButtomWidth:0,
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.1,
        shadowRadius:1,
        marginLeft:5,
        marginRight:5,
        marginTop:10
    }
}

export default card;
import React from 'react'
import { View,Text,StyleSheet,Pressable } from 'react-native'

function GoalItem(props) {
  return (
   
   <View>
     <Pressable android_ripple={{color:"#210644 "}} onPress={props.handleDelete.bind(this,props.id)}>
     <Text style={styles.goalItem} key={props.index} >
              {props.cgoal}
            </Text>
            </Pressable>
   </View>
   
  )
}

export default GoalItem


const styles=StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
        color: "white",
        padding:10
      },
})
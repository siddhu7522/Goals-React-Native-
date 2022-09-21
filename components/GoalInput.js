import React from 'react'
import {StyleSheet,View,Text,TextInput,Button} from "react-native"
function GoalInput({goalInputHandler,addGoalHandler,enteredGoalText}) {
  return (
    
    <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button onPress={addGoalHandler} title="Add Goal" />
      </View>
      
  )
}


export default GoalInput


const styles=StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
      },
      textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        marginRight: 8,
        padding: 8,
      },
})
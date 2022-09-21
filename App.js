import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View ,ScrollView, FlatList} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  

  
  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };
  const addGoalHandler = (e) => {
  setCourseGoals((currentCourseGoals)=>[
    ...currentCourseGoals,
    {Text:enteredGoalText,id:Math.random().toString()}
  ])
  setEnteredGoalText("")
  };

  const handleDelete=(id)=>{
    console.log("deleting")
   setCourseGoals((currentCourseGoals)=>{
    return currentCourseGoals.filter((goal)=>goal.id!==id)
   })
  }
  return (
    <View style={styles.appContainer}>
      
    <GoalInput  goalInputHandler={goalInputHandler} addGoalHandler={addGoalHandler} enteredGoalText={enteredGoalText}/>
      <ScrollView style={styles.goalsContainer}>
        {courseGoals.map((cgoal, index) => {
          return (
           <GoalItem cgoal={cgoal.Text} id={cgoal.id}  handleDelete={handleDelete}/>
          );
        })}
      </ScrollView>
    
     

   </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 15,
    flex: 1,
  },
  
 
  goalsContainer: {
    flex: 5,
  },
  
});

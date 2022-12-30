import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useState } from "react";

import GoalItem from "./components/Goal-Item";
import GoalInput from "./components/Goal-Input";

export default function App() {
  // Goals state
  const [goalsList, setGoalsList] = useState([]);

  // Handler for adding new goals
  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText) {
      setGoalsList(currentGoalsList =>
        [{ text: enteredGoalText, id: Math.random().toString() }, ...currentGoalsList,]);
    }
  }

  // Handler for clearing all goals
  function clearGoalsHandler() {
    setGoalsList([]);
  }

  // Handler for deleting a single goal
  function deleteGoalHandler(id) {
    setGoalsList(currentGoals => {
      return currentGoals.find((goal) => goal.id === id);
    });
  }

  return (
    <View style={styles.baseContainer}>
      <StatusBar style="auto" />
      <Text>Add your goals below</Text>

      <GoalInput
        onAddGoal={addGoalHandler}
        onClearGoals={clearGoalsHandler}
      />

      <View style={styles.goalListContainer}>
        <FlatList
          data={goalsList}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  baseContainer: {
    paddingTop: 50,
    paddingHorizontal: 15,
    flex: 1
  },
  goalListContainer: {
    flex: 5
  },
});

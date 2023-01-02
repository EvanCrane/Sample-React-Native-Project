import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useState } from "react";

import { DefaultColors } from "./constants/colors";

import ActionButtons from "./components/Action-Buttons";
import GoalListContent from "./components/goals/Goal-List-Content";
import GoalInput from "./components/goals/Goal-Input";

export default function App() {
  // Modal state
  const [isModalVisible, setIsModalVisible] = useState(false);
  // Goals state
  const [goalsList, setGoalsList] = useState([]);

  function startAddGoalHandler() {
    setIsModalVisible(true);
  }
  function closeAddGoalModal() {
    setIsModalVisible(false);
  }
  // Handler for adding new goals
  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText) {
      setGoalsList(currentGoalsList =>
        [{ text: enteredGoalText, id: Math.random().toString() }, ...currentGoalsList]
      );
    }
  }
  // Handler for clearing all goals
  function clearGoalsHandler() {
    setGoalsList([]);
  }
  // Handler for deleting a single goal
  function deleteGoalHandler(id) {
    setGoalsList(currentGoals =>
      currentGoals.filter((goal) => goal.id !== id)
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.baseContainer}>

        <ActionButtons
          primaryButtonTitle='Add New Goal'
          primaryButtonOnPress={startAddGoalHandler}
          secondaryButtonTitle='Clear Goals'
          secondaryButtonOnPress={clearGoalsHandler}
        />

        <GoalInput
          visible={isModalVisible}
          onAddGoal={addGoalHandler}
          onCloseModal={closeAddGoalModal}
        />

        <GoalListContent
          goalsList={goalsList}
          onDeleteItem={deleteGoalHandler}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  baseContainer: {
    paddingTop: 50,
    paddingHorizontal: 15,
    flex: 1,
    alignItems: 'center',
    backgroundColor: DefaultColors.background1,
  },
});

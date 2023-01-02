import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";

import GoalItem from "./components/Goal-Item";
import GoalInput from "./components/Goal-Input";
import GoalTitle from "./components/Goal-Title";
import ActionButtons from "./components/Action-Buttons";

export default function App() {
  // Modal state
  const [isModalVisible, setIsModalVisible] = useState(false);
  // Goals state
  const [goalsList, setGoalsList] = useState([]);

  // 
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

        <View style={styles.goalListContainer}>
          <GoalTitle goalsList={goalsList} />
          <FlatList
            style={styles.goalList}
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
    </>
  );
}

const styles = StyleSheet.create({
  baseContainer: {
    paddingTop: 50,
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: '#1d2354',
    alignItems: 'center'
  },
  goalListContainer: {
    flex: 1,
    margin: 10,
    padding: 10,
    width: '100%'
  },
  goalList: {
    borderTopWidth: 1,
    borderColor: 'white',
    paddingTop: 10
  }
});

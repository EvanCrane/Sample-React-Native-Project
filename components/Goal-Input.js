import { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function GoalInput(props) {
    // Input text state
    const [enteredGoalText, setEnteredGoalText] = useState('');
    // Handler for text changes to the input
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }
    // Handler for adding new goal. Clear input text after adding goal
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }
    // Handler for clearing all goals
    function clearGoalsHandler() {
        props.onClearGoals();
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="My goals:"
                style={styles.textInput}
                onChangeText={goalInputHandler}
                value={enteredGoalText}
                clearTextOnFocus
            />
            <View>
                <Button
                    title="Add Goal"
                    color='blue'
                    onPress={addGoalHandler}
                />
                <Button
                    title="Clear Goals"
                    color='red'
                    onPress={clearGoalsHandler}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        width: '75%'
    },
});
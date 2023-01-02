import { useState } from 'react';
import { StyleSheet, View, TextInput, Modal, Image, Text, KeyboardAvoidingView, ScrollView, useWindowDimensions } from 'react-native';

import { DefaultColors } from '../../constants/colors';
import ActionButtons from '../Action-Buttons';

export default function GoalInput(props) {
    // Input text state
    const [enteredGoalText, setEnteredGoalText] = useState('');
    // Warning text state
    const [warningText, setWarningText] = useState('');
    // Calculate margin top distance
    const { width, height } = useWindowDimensions();
    const marginTopDistance = height < 380 ? 30 : 150;


    // Handler for text changes to the input
    function goalInputHandler(enteredText) {
        if (enteredText) {
            setWarningText('');
            setEnteredGoalText(enteredText);
        } else {
            setWarningText('Please Enter a Valid Goal');
        }
    }
    // Handler for adding new goal. 
    // Clear input text after adding goal
    // Close modal after inputting goal
    function addGoalHandler() {
        if (enteredGoalText) {
            props.onAddGoal(enteredGoalText);
            setEnteredGoalText('');
            onCloseModalHandler();
        } else {
            setWarningText('Please Enter a Valid Goal');
        }
    }
    // Close Modal Handler
    function onCloseModalHandler() {
        props.onCloseModal();
    }

    return (
        <Modal
            visible={props.visible}
            animationType="slide"
        >
            <ScrollView style={styles.screen}>
                <KeyboardAvoidingView style={styles.screen} behavior="position">
                    <View style={[styles.inputContainer, { marginTop: marginTopDistance }]}>
                        <View style={styles.titleView}>
                            <Image
                                style={styles.image}
                                source={require('../../assets/images/check.png')}
                            />
                            <Text style={styles.text}>{"Keep Track of Your Goals!"}</Text>
                        </View>
                        <TextInput
                            placeholder="Add New Goal"
                            style={styles.textInput}
                            onChangeText={goalInputHandler}
                            value={enteredGoalText}
                            clearTextOnFocus
                        />

                        <ActionButtons
                            primaryButtonTitle='Add Goal'
                            primaryButtonOnPress={addGoalHandler}
                            secondaryButtonTitle='Cancel'
                            secondaryButtonOnPress={onCloseModalHandler}
                        />
                        <Text style={styles.warningText}>{warningText}</Text>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: DefaultColors.background1,
    },
    inputContainer: {
        justifyContent: "space-evenly",
        alignItems: 'center',
    },
    textInput: {
        borderWidth: 1,
        borderColor: DefaultColors.borderLight,
        backgroundColor: DefaultColors.backgroundLight1,
        color: DefaultColors.textDark,
        fontSize: 18,
        padding: 10,
        width: '75%'
    },
    buttonView: {
        flexDirection: 'row',
        margin: 20
    },
    titleView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    text: {
        color: DefaultColors.textLight,
        fontSize: 24
    },
    warningText: {
        marginTop: 20,
        color: DefaultColors.warning,
        fontSize: 26
    }
});
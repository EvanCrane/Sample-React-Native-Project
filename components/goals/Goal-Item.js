import { StyleSheet, View, Text, Pressable } from 'react-native'

import { DefaultColors } from '../../constants/colors';

export default function GoalItem(props) {

    return (
        <View style={styles.goalItem}>
            <Pressable
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    goalItem: {
        margin: 10,
        padding: 20,
        borderRadius: 6,
        backgroundColor: 'purple'
    },
    goalText: {
        color: DefaultColors.textLight
    },
    pressedItem: {
        opacity: 0.5
    },
    noGoals: {

    },
    noGoalsImg: {

    }
});
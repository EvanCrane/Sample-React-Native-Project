import { StyleSheet, Text } from 'react-native';

export default function GoalTitle(props) {

    return (
        <Text style={styles.goalListTitle}>{props.goalsList.length ? 'Current Goals' : 'No Goals Yet...'}</Text>
    );
}

const styles = StyleSheet.create({
    goalListTitle: {
        alignSelf: 'center', marginBottom: 25, color: 'white', fontSize: 18
    },
});
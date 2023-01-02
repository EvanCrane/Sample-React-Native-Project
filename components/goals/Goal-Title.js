import { StyleSheet, Text } from 'react-native';

import { DefaultColors } from '../../constants/colors';

export default function GoalTitle(props) {

    return (
        <Text style={styles.goalListTitle}>{props.goalsList?.length ? 'Current Goals' : 'No Goals Yet...'}</Text>
    );
}

const styles = StyleSheet.create({
    goalListTitle: {
        alignSelf: 'center', marginBottom: 25, color: DefaultColors.textLight, fontSize: 18
    },
});
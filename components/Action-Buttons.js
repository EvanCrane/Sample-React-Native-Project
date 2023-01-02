import { StyleSheet, Button, View } from "react-native";

import { DefaultColors } from "../constants/colors";

export default function ActionButtons(props) {

    return (
        <View style={styles.actionView}>
            <View style={styles.actionButton} >
                <Button
                    title={props.primaryButtonTitle}
                    color={DefaultColors.primary}
                    onPress={props.primaryButtonOnPress}
                />
            </View>
            <View style={styles.actionButton}>
                <Button
                    title={props.secondaryButtonTitle}
                    color={DefaultColors.secondary}
                    onPress={props.secondaryButtonOnPress}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    actionView: {
        flexDirection: 'row',
        margin: 20,
        paddingRight: 20,
        justifyContent: "center",
        width: '75%',
    },
    actionButton: {
        marginHorizontal: 10,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: 'white',
        backgroundColor: 'white',
    },
});
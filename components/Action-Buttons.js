import { StyleSheet, Button, View } from "react-native";

export default function ActionButtons(props) {

    return (
        <View style={styles.actionView}>
            <View style={styles.actionButton} >
                <Button
                    title={props.primaryButtonTitle}
                    color='blue'
                    onPress={props.primaryButtonOnPress}
                />
            </View>
            <View style={styles.actionButton}>
                <Button
                    title={props.secondaryButtonTitle}
                    color='red'
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
        borderWidth: 2,
        borderRadius: 20,
        borderColor: 'white',
        backgroundColor: 'white',
        marginHorizontal: 10
    },
});
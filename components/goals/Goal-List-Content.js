
import { View, FlatList, Image, StyleSheet, ImageBackground } from 'react-native';

import { DefaultColors } from '../../constants/colors';
import GoalTitle from './Goal-Title';
import GoalItem from './Goal-Item';


export default function GoalListContent(props) {
    const isThereGoals = props.goalsList?.length;
    console.log(isThereGoals);

    return (
        <View style={styles.goalListContainer}>
            <GoalTitle goalsList={props.goalsList} />

            {isThereGoals ?
                <FlatList
                    style={styles.goalList}
                    data={props.goalsList}
                    renderItem={(itemData) => {
                        return (
                            <GoalItem
                                text={itemData.item.text}
                                id={itemData.item.id}
                                onDeleteItem={props.onDeleteItem}
                            />
                        );
                    }}
                    keyExtractor={(item, index) => {
                        return item.id;
                    }}
                    alwaysBounceVertical={false}
                />
                :
                <View style={styles.noGoals}>
                    <ImageBackground
                        style={styles.noGoalsImg}
                        source={require('../../assets/images/travolta.png')}
                        resizeMode="contain"
                    />
                </View>
            }

        </View>
    );
}

const styles = StyleSheet.create({
    goalListContainer: {
        flex: 1,
        margin: 10,
        padding: 10,
        width: '100%'
    },
    goalList: {
        paddingTop: 10,
        borderTopWidth: 1,
        borderColor: DefaultColors.borderLight,
    },
    noGoals: {
        flex: 1,
    },
    noGoalsImg: {
        flex: 1,
        opacity: 0.25,
    }
});

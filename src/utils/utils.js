import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItemLocally = async (data) => {
    try {
        let jsonValue = JSON.stringify(data)
        await AsyncStorage.setItem('myListItem', jsonValue)
        return { jsonValue };

    } catch (error) {
        // console.log(error);
        // return false;
        console.log("error rasied to store data locally")
    }
}

export const getItem = async () => {
    try {
        const savedItem = await AsyncStorage.getItem('myListItem');
        let paresSavedItem = JSON.parse(savedItem);
        console.log("getItemLocallyConsole---------", paresSavedItem);
        return paresSavedItem;

    } catch (error) {
        console.log(error);
    }
};
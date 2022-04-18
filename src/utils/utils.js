import AsyncStorage from "@react-native-async-storage/async-storage";

//-------------------------------Store and get task on Async storage--------------------------------
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

//-------------------------------Store and get login on Async storage--------------------------------
export const setLoginLocally = async (loginData) => {
    try {
        let jsonValue = JSON.stringify(loginData)
        await AsyncStorage.setItem('LoginLocalStatus', jsonValue)
        return jsonValue;
    } catch (error) {
        console.log("error rasied to store login locally")
    }
}

export const getLoginLocally = async () => {
    try {
        const savedItem = await AsyncStorage.getItem('LoginLocalStatus');
        let paresSavedItem = JSON.parse(savedItem);
        console.log("getItemLocallyConsole---------", paresSavedItem);
        return paresSavedItem;

    } catch (error) {
        console.log(error);
    }
};

export const removeLoginLocally = async () => {
    try {
        await AsyncStorage.removeItem('LoginLocalStatus');
        console.log("remove login");

    } catch (error) {
        console.log("error",error);
    }
};
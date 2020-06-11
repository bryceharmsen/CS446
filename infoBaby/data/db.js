import {AsyncStorage} from 'react-native';

export async function setItem(key, value) {
    try {
        if (typeof(value) === Object) value = JSON.stringify(value);
        await AsyncStorage.setItem(
            `@DB:${key}`,
            value
        )
    } catch (error) {
        console.log('Unable to store data.')
    }
}

export async function getItem(key) {
    try {
        return (await AsyncStorage.getItem(key));
    } catch (error) {
        console.log('Unable to get data.')
    }
}
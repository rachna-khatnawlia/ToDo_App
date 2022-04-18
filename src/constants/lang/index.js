import AsyncStorage from '@react-native-async-storage/async-storage';
import LocalizedStrings from 'react-native-localization';
import en from './en';
import fr from './fr';

let strings = new LocalizedStrings({
    en: en,
    fr: fr
});

export default strings;
import { StatusBar, Platform } from 'react-native';


export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;;
export const test = 'test';

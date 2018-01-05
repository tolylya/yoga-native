import { Platform, Dimensions } from 'react-native';
import { STATUSBAR_HEIGHT } from '../variables/main';

const deviceHeight = Dimensions.get('window').height;
export default () => {
  const theme = {
    flex: 1,
    backgroundColor: 'white',
    height: Platform.OS === 'ios' ? deviceHeight : deviceHeight - 20,
    marginTop: STATUSBAR_HEIGHT,
  };

  return theme;
};

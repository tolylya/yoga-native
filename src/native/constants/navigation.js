import Colors from '../../../native-base-theme/variables/commonColor';
import { STATUSBAR_HEIGHT } from '../../../native-base-theme/variables/main';

export default {
  navbarProps: {
    navigationBarStyle: { backgroundColor: 'white', marginTop: STATUSBAR_HEIGHT },
    titleStyle: {
      color: Colors.textColor,
      alignSelf: 'center',
      letterSpacing: 2,
      fontSize: Colors.fontSizeBase,
    },
    backButtonTintColor: Colors.textColor,
  },

  tabProps: {
    swipeEnabled: false,
    activeBackgroundColor: 'rgba(255,255,255,0.1)',
    inactiveBackgroundColor: Colors.brandPrimary,
    tabBarStyle: { backgroundColor: Colors.brandPrimary },
  },

  icons: {
    style: { color: 'white' },
  },
};

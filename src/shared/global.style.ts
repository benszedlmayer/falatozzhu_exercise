import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  tabbarIconWrapper: {
    width: 32,
    height: 32,
    padding: 8,
    opacity: 0.2,
  },
  tabbarIconWrapperActive: {
    opacity: 1,
  },
  tabbarIcon: {
    height: '100%',
    width: '100%',
  },
});

export default globalStyles;

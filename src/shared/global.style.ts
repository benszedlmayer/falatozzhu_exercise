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
  screenContainer: {
    flex: 1,
    padding: 16,
    paddingBottom: 0,
  },
  screenTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 32,
  },
  screenSubtitle: {
    textAlign: 'center',
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  errorMessage: {
    marginTop: -8,
    marginBottom: 16,
    color: 'red',
  },
});

export default globalStyles;

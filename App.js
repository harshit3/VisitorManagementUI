import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './components/Home';
import RequestRaise from './components/RequestRaise';
import VisitorVerification from './components/VisitorVerification';

console.disableYellowBox = true;

const App = createStackNavigator({
  home: { screen: Home },
  requestraise: { screen: RequestRaise },
  visitorverification: { screen: VisitorVerification }
});

export default createAppContainer(App);

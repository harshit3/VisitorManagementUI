import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './components/Home';
import RequestRaise from './components/RequestRaise';
import VisitorVerification from './components/VisitorVerification';
import Visitor from './components/RequestForms/Visitor';

console.disableYellowBox = true;

const App = createStackNavigator({
    home: { screen: Home },
    requestraise: { screen: RequestRaise },
    visitorverification: { screen: VisitorVerification },
    visitor: { screen: Visitor }
  },{
    defaultNavigationOptions:{
      headerTitleStyle: {
        color: 'white'    
      },
      headerStyle: {
        backgroundColor: '#45484c'
      },
      headerTintColor: '#fff'
    }
  }
);

export default createAppContainer(App);

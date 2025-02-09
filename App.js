import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Navigation from './navigations/navigation';



export default function App() {
  return (
    <>
      <Provider store={store}>
        <Navigation />
      </Provider>
      <Toast />
    </>
  );
}



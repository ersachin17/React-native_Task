import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from '../src/navigation/AuthStack';
import RootNavigation from '../src/navigation/MainStack';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const AppContent = () => {
  const token = useSelector((state: any) => state.login?.loginToken);

  return token ? <RootNavigation /> : <AuthStack />;
};
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
              <AppContent />
            </NavigationContainer>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};
export default App;

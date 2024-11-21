import { StatusBar } from 'react-native';
import { Home } from './screens/Home/index';

export default function App() {
    return (
        <>
            <StatusBar 
                barStyle="light-content"
                backgroundColor="#121212"
                translucent
            />
            <Home />
        </>
    );
}
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Catalogo } from "../screens/Catalogo"


export function UserRoutes(){

    const {Navigator, Screen} = createNativeStackNavigator()
    return(
        <Navigator screenOptions={{headerShown:false}}>
            <Screen name="catalogo" component={Catalogo} />
        </Navigator>

    )
}
import { NavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  SignUp: undefined;
  Login: undefined;
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

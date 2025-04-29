import { Redirect } from "expo-router"

const Index=()=>{
    return <Redirect href="/signup" />
}

export const options = {
  headerShown: false,
};

export default Index;
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { typography } from "@/styles/typography";
import InputBar from "./components/InputBar";
import { useState } from "react";
import { router } from "expo-router";
import { validateRegisterForm } from "@/utils/validation";
import { signUpApi } from "@/apis/auth";
import { ApiResponse } from "@/types/responseType";
import { signUpType } from "@/types/auth";
import Toast from "react-native-toast-message";
import Loading from "./components/Loading";

const SignUp = () => {
  const [isLoading ,setIsLoading]= useState<Boolean>(false)
  const [form, setForm] = useState<signUpType>({
    name: "",
    email: "",
    password: "",
  });
    
    const [formErrors, setFormErrors] = useState<{
        name: string | null;
        email: string | null;
        password: string | null;
    }>({
        name: null,
        email: null,
        password: null,
    });

    const handleChange = (field: string, value: string) => {
        const updatedForm = { ...form, [field]: value };
        setForm(updatedForm);
        // Validate on change for real-time feedback
        const errors = validateRegisterForm(updatedForm);
        setFormErrors(errors);
    };

    const handleSignUp = async() => {
        const errors = validateRegisterForm(form);
        setFormErrors(errors);

        // Check if there are any errors
        const isValid = Object.values(errors).every((error) => error === null);
        console.log("printing is valid : ",isValid)
        if (!isValid){
            return
        }
        setIsLoading(true)
          try{
            const data : ApiResponse<null>= await signUpApi(form)
            console.log("data : ",data)
            if (data.success){
                console.log('Triggering toast');
                Toast.show({
                  type:"success",
                  text1:"Success",
                  text2:data.message
                  
                })
                
            }
            else{
            console.log('Triggering toast');
              Toast.show({
                type:"error",
                text1:"Error",
                text2:data.message
                
              })
            }
          }
          catch(error:any){
            Toast.show({
              type:"error",
              text1:"Error",
              text2:error.message
            })
          }
          finally{
            setIsLoading(false)
          }

    };

    return (
        <View className="">
            <View className="flex flex-col justify-center items-center h-[30%]">
                <Text style={typography.heading} className="font-bold text-4xl">
                    Sign Up
                </Text>
                <Text style={typography.lightText} className="mt-3">
                    Create an account to start tracking stock prices
                </Text>
            </View>
            <View className="flex items-center">
                <View className="w-[90%]">
                    <View className="flex mt-5">
                        <Text className="my-1 text-base" style={typography.semiboldText}>
                            Name
                        </Text>
                        <InputBar
                            placeholder="Enter your name"
                            onChangeText={(text) => handleChange("name", text)}
                        />
                        {formErrors.name && <Text className="text-red-500 mt-2">{formErrors.name}</Text>}
                    </View>
                    <View className="flex mt-5">
                        <Text className="my-1 text-base" style={typography.semiboldText}>
                            Email
                        </Text>
                        <InputBar
                            placeholder="Enter your email"
                            onChangeText={(text) => handleChange("email", text)}
                        />
                        {formErrors.email && <Text className="text-red-500 mt-2">{formErrors.email}</Text>}
                    </View>
                    <View className="flex mt-5">
                        <Text className="my-1 text-base" style={typography.semiboldText}>
                            Password
                        </Text>
                        <InputBar
                            placeholder="Enter your password"
                            onChangeText={(text) => handleChange("password", text)}
                            secureTextEntry
                        />
                        {formErrors.password && (
                            <Text className="text-red-500 mt-2">{formErrors.password}</Text>
                        )}
                    </View>

                    <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                       {isLoading ? <Loading color="white" /> :  <Text style={[typography.boldText, styles.buttonText]}>Sign Up</Text>}
                    </TouchableOpacity>
                    <View className="flex flex-row justify-center mt-2">
                        <Text style={typography.regularText}>Already have an account? </Text>
                        <Text style={typography.boldText} onPress={()=>router.push("/login")}>Login</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        marginTop: 28,
        backgroundColor: "#000000",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
    },
});

export default SignUp;
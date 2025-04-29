import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { typography } from "@/styles/typography";
// import "../global.css";
import InputBar from "./components/InputBar";
import { useState } from "react";
import { router } from "expo-router";
import { validateLoginForm } from "@/utils/validation";
import { loginType } from "@/types/auth";
import { loginApi } from "@/apis/auth";
import { ApiResponse } from "@/types/responseType";
import Toast from "react-native-toast-message";
import Loading from "./components/Loading";

const Login = () => {
    const [isLoading, setIsLoading] = useState<Boolean>(false)
    const [form, setForm] = useState<loginType>({
        email: "",
        password: "",
    });
    // Explicitly type formErrors to allow string | null
    const [formErrors, setFormErrors] = useState<{
        email: string | null;
        password: string | null;
    }>({
        email: null,
        password: null,
    });

    const handleChange = (field: string, value: string) => {
        const updatedForm = { ...form, [field]: value };
        setForm(updatedForm);
        // Validate on change for real-time feedback
        const errors = validateLoginForm(updatedForm);
        setFormErrors(errors);
    };

    const handleLogin = async () => {
        const errors = validateLoginForm(form);
        setFormErrors(errors);

        // Check if there are any errors
        const isValid = Object.values(errors).every((error) => error === null);
        if (!isValid) {
            return
        }
        setIsLoading(true)
        try {
            const data: ApiResponse<null> = await loginApi(form)
            console.log("data : ", data)
            if (data.success) {
                console.log('Triggering toast');
                Toast.show({
                    type: "success",
                    text1: "Success",
                    text2: data.message

                })

            }
            else {
                console.log('Triggering toast');
                Toast.show({
                    type: "error",
                    text1: "Error",
                    text2: data.message
                })
            }
        }
        catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Error",
                text2: error.message
            })
        }
        finally {
            setIsLoading(false)
        }
    };

    return (
        <View className="">
            <View className="flex flex-col justify-center items-center h-[35%]">
                <Text style={typography.heading} className="font-bold text-4xl">
                    Login
                </Text>
                <Text style={typography.lightText} className="mt-3">
                    Login to start tracking stock prices
                </Text>
            </View>
            <View className="flex items-center">
                <View className="w-[90%]">
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

                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        {isLoading ? <Loading color="white" /> : <Text style={[typography.boldText, styles.buttonText]}>Login</Text>}
                    </TouchableOpacity>
                    <View className="flex flex-row justify-center mt-2">
                        <Text style={typography.regularText}>Don't have an account? </Text>
                        <Text style={typography.boldText} onPress={() => router.push("/signup")}>Sign Up</Text>
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

export default Login;
import { typography } from "@/styles/typography";
import { InteractionManager, TextInput } from "react-native";

interface Props {
  placeholder: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
}

function InputBar({ placeholder, secureTextEntry = false,onChangeText }: Props) {
  return (
    <TextInput
      className="border border-black h-30 px-2"
      style={typography.regularText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      onChangeText={(text) => onChangeText(text)}
    />
  );
}

export default InputBar;

import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      className="bg-background"
    >
      <Text className="text-red-400 text-2xl">Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

import React, { useState } from "react";
import { StyleSheet, TextInput, Text, Button, View } from "react-native-web";

export default function Form({ addHandler }) {
    const [text, setValue] = useState("");

    const onChange = (text) => {
        setValue(text);
    };

    return (
        <View>
            <TextInput 
                style={styles.input} 
                placeholder="Впишите задачу..." 
                onChangeText={onChange} 
            />
            <Button
                color="#5fa8d3"
                onPress={() => addHandler(text)}
                title="Добавьте задачу..."
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        backgroundColor: "#def1f3",
        textAlign: "center",
        padding: 5,
        margin: 10,
      },
});

export { Form };
import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function ListItem({ el, deleteHandler }) {
    return (
        <TouchableOpacity onPress={() => deleteHandler(el.key)}>
            <Text style={styles.text}>{el.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 20,
        textAlign: "center",
        borderRadius: 15,
        borderColor: "#fff",
        backgroundColor: "#EAF5F7",
        borderWidth: 3,
        marginTop: 20,
        width: "60%",
        marginLeft: "20%",
    },
});

export { ListItem };
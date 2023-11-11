import React from "react";
import { StyleSheet, View, Text } from "react-native-web";

export default function Header() {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Список дел</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#5fa8d3",
        padding: 20,
        
    },
    text: {
        textAlign: "center",
        fontSize: "30px",
        fontWeight: 'bold',
        color: "#fff",
    },
});

export { Header };
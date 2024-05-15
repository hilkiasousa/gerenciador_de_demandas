import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
            />
            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.terms}>Termos e política de privacidade</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: 250,
        height: 30,
        borderRadius: 15,
        borderWidth: 1,
        marginBottom: 15,
        padding: 5,
        paddingHorizontal: 10,
    },
    forgotPassword: {
        marginTop: 10,
    },
    terms: {
        marginTop: 20,
    },
});

export default LoginScreen;

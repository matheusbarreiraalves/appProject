import * as React from 'react';

import { TextInput, Button, View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { forRevealFromBottomAndroid } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators";

let nome = "";
let email = "";
let sexo = "";
let usuario = "";
let senha = "";

export default function Cadastro() {

    const [frNome, setFrNome] = React.useState("");
    const [frEmail, setFrEmail] = React.useState("");
    const [frSexo, setFrSexo] = React.useState("");
    const [frUsuario, setFrUsuario] = React.useState("");
    const [frSenha, setFrSenha] = React.useState("");

    return (
        <View>
            <ScrollView>
                <TextInput placeholder="Nome" onChangeText={(value) => setFrNome(value)} value={frNome} />
                <TextInput placeholder="Email" keyboardType="email-address" onChangeText={(value) => setFrEmail(value)} value={frEmail} />
                <TextInput placeholder="Sexo" onChangeText={(value) => setFrSexo(value)} value={frSexo} />
                <TextInput placeholder="Usuario" onChangeText={(value) => setFrUsuario(value)} value={frUsuario} />
                <TextInput placeholder="Senha" secureTextEntry onChangeText={(value) => setFrSenha(value)} value={frSenha} />

                <Button onPress={() => {
                    nome = frNome;
                    email = frEmail;
                    sexo = frSexo;
                    usuario = frUsuario;
                    senha = frSenha;

                    efetuarCadastro();

                }} title="Cadastrar" />
            </ScrollView>
        </View>
    )
}

function efetuarCadastro() {
    fetch('http://192.168.56.1/revisao/services/cliente/cadastrar.php', {
        method: "POST",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            sexo: sexo,
            usuario: usuario,
            senha: senha,
        }),
    }).then((response) => response.json())
        .then((resposta) => {
            console.log(resposta);
            alert("Foi Cadastrado");
        }).catch((error) => console.error(error))
}

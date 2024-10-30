import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import { CheckBox } from 'react-native-elements';
import { StatusBar } from "expo-status-bar";

export default function Index() {
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.view}>
      <Text style={styles.logo}>NeoApp</Text>

      <Text style={styles.heading}>Sign in to your {'\n'}Acount</Text>

      <Text style={styles.desc_head}>Enter your email and password to log in</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput placeholder="exampele@gmail.com" style={styles.input}></TextInput>

      <Text style={styles.label}>Password</Text>
      <TextInput placeholder="" style={styles.input}></TextInput>

      <Text style={styles.forgot}>Forgot Password</Text>

      <TouchableOpacity style={styles.button} onPress={() => alert('Button pressed!')}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

      <Text style={styles.signWith}>Sign With</Text>
      <View style={styles.otherSignLogoGroup}>
        <Image source={require('../assets/images/google.png')} style={styles.logoSign}></Image>
        <Image source={require('../assets/images/facebook.png')} style={styles.logoSign}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  statusbar: {
    backgroundColor: "#363636"
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold"
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 70
  },
  desc_head: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 30
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 20
  },
  input: {
    padding: 5,
    height: 40,
    borderWidth: 1,
    fontSize: 15,
    borderRadius: 5
  },
  forgot: {
    marginTop: 5
  },
  button: {
    marginTop: 30,
    backgroundColor: '#841584',
    paddingVertical: 15,
    borderRadius: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  signWith: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 15
  },
  otherSignLogoGroup: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginTop:20,
    marginHorizontal: 'auto'
  },
  logoSign: {
    width: 40,
    height: 40
  }
})
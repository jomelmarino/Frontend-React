// App.js
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import Dashboard from './Dashboard';



export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    setIsLoggedIn(true); // Set logged in state to true
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Reset logged in state
    setUsername('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <Dashboard username={username} onLogout={handleLogout} /> // Show Dashboard if logged in
      ) : (
        <View>
          <View style={styles.imageContainer}>
            <Image 
              source={require('./assets/Medicine.png')} 
              style={styles.image} 
            />
          </View>
            <Text style={[styles.title, { marginTop: 25, marginLeft: 80}]}>LOG IN</Text>

            <TextInput 
              style={styles.input} 
              placeholder="Username" 
              value={username} 
              onChangeText={setUsername} 
            />
            <TextInput  
              style={styles.input} 
              placeholder="Password" 
              secureTextEntry 
              value={password} 
              onChangeText={setPassword} 
            />
            <Text style={{ fontSize: 14, color: 'white', marginBottom: 30,marginLeft: 75}}>
              Forgot Password?
            </Text>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 14, color: 'white', justifyContent: 'center', marginTop: 40 ,marginLeft: 90}}>
              Don't have an account? <Text style={{ color: 'white', fontWeight: 'bold' }}>sign up</Text>
            </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#68BA7F',
  },
  
  imageContainer: {
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#CFFFDC',
    borderRadius: 5,
    width: 230,
    height: 50,
    alignContent: 'center',
    justifyContent:'center',
    marginLeft: 70,
    marginBottom: 100,
    marginTop: 20,
    
    
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    
  },
  image: {
    width: 330,
    height: 260,
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 25,
    marginLeft: 15,
    
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 70,
  },
  input: {
    width: 250,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginTop: 15,
    marginLeft: 60,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 10, height: 5 },
    elevation: 10,
    
  },
});

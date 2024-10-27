import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importing FontAwesome icons
import App from './App';
import AboutUs from './AboutUs';
import Mental from './Mental';
import Physical from './Physical';

const Dashboard = () => {
  const [isHomePressed, setIsHomePressed] = React.useState(false);
  const [isAboutUsPressed, setIsAboutUsPressed] = React.useState(false);
  const [isLoggedOut, setIsLoggedOut] = React.useState(false);
  const [isMentalPressed, setIsMentalPressed] = React.useState(false);
  const [isPhysicalPressed, setIsPhysicalPressed] = React.useState(false);

  const MentalHealth = () => {
    setIsMentalPressed(true);
  };

  const physicalhealth = () => {
    setIsPhysicalPressed(true);
  };

  const handleHomePress = () => {
    setIsHomePressed(true);
  };

  const handleAboutUsPress = () => {
    setIsAboutUsPressed(true);
  };

  const handleLogOut = () => {
    setIsLoggedOut(true);
  };

  if (isLoggedOut) {
    return <App />;
  } else if (isHomePressed) {
    return <Dashboard />; // Changed back to refer to this component
  } else if (isAboutUsPressed) {
    return <AboutUs />;
  } else if (isMentalPressed) {
    return <Mental />;
  } else if (isPhysicalPressed) {
    return <Physical />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={[styles.title, { marginTop: 120 }]}>WELCOME</Text>
        <Text style={styles.title}>TO HEALTH</Text>
        <Text style={[styles.text, {marginTop: 25, marginBottom: -20 }]}>JUST CLICK</Text>
        <View style={styles.boxcontainer}>
          <View style={styles.box}>
            <TouchableOpacity 
              style={styles.customButton} 
              onPress={MentalHealth}
            >
              <Text style={styles.buttonText}>MENTAL HEALTH</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <TouchableOpacity 
              style={styles.customButton} 
              onPress={physicalhealth}
            >
              <Text style={styles.buttonText}>PHYSICAL HEALTH</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleHomePress}>
            <Icon name="home" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleAboutUsPress}>
            <Icon name="users" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogOut}>
            <Icon name="sign-out" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  box: {
    marginTop: 30,
    backgroundColor: '#CFFFDC',
    width: 300,
    height: 150,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderTopStartRadius: 30,
    borderBottomEndRadius: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  customButton: {
    backgroundColor: 'white',
    padding: 15,
    width: 260,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderWidth: 1, // Add border width
    borderColor: 'gray', // Set border color to gray
    shadowOpacity: 10.1,
    shadowRadius: 10,
    shadowOffset: { width: 10, height: 5 },
    elevation: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 23,
    fontWeight: 'bold',
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  buttonContainer: {
    marginBottom: -60,
    bottom: 60,
    width: 400,
    height: 50,
    flexDirection: 'row',
    paddingHorizontal: 20,
    position: 'absolute',
  },
  button: {
    backgroundColor: '#80A9D4',
    padding: 10,
    flex: 1,
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: '#80A9D4',
    padding: 10,
    flex: 1,
    alignItems: 'center',
  },
});

export default Dashboard;

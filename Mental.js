import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Dashboard from './Dashboard';

const Mental = () => {
  const [isHomePressed, setIsHomePressed] = React.useState(false);

  const handleHomePress = () => {
    setIsHomePressed(true);
  };

  if (isHomePressed) {
    return <Dashboard />;
  } else {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handleHomePress}>
          <Icon name="arrow-left" size={40} color="black" marginLeft={20} />
        </TouchableOpacity>
        <ScrollView 
          style={styles.subcontainer} 
          showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
          showsHorizontalScrollIndicator={false} // Hide horizontal scroll indicator
        >
          <View style={styles.BackGroundColor}>
            <Text style={styles.title}>MENTAL</Text>
            <Text style={styles.subtitle}>HEALTH</Text>
            <Image source={require('./assets/logo.png')} style={styles.logo} />

            <View style={styles.main}>
              <Text style={styles.text}>Mental health is a state of mental well-being that enables people to cope with the stresses of life,
                realize their abilities, learn well and work well, and contribute to their community.</Text>
            </View>

            <View style={{ marginTop: 80, marginBottom: 20 }}>
              <Text style={styles.subtitle3}>Tips to maintain</Text>
              <Text style={styles.subtitle3}>mental health healthy</Text>
            </View>

            {[
              { title: "Stay Physically Active:", text: "Mental health is a state of mental well-being that enables people to cope with the stresses of life, realize their abilities, learn well and work well, and contribute to their community." },
              { title: "Practice Mindfulness and Meditation:", text: "Mental health is a state of mental well-being that enables people to cope with the stresses of life, realize their abilities, learn well and work well, and contribute to their community." },
              { title: "Connect with Others", text: "Spending time with friends, family, or support groups can help you feel connected and reduce feelings of loneliness." },
              { title: "Get Adequate Sleep", text: "Quality sleep is essential for mental clarity and emotional regulation. Try to maintain a consistent sleep schedule." },
              { title: "Limit Alcohol and Avoid Drugs", text: "These can negatively impact your mood and mental clarity and increase the risk of mental health issues." },
              { title: "Practice Gratitude", text: "Take a moment each day to reflect on things you’re grateful for. This can shift focus away from negative thoughts and improve your mood." },
              { title: "Set Realistic Goals", text: "Having goals provides direction and purpose. Break larger goals into small, achievable steps to avoid feeling overwhelmed." },
              { title: "Take Breaks and Relax", text: "Regular breaks, even short ones, allow you to recharge and prevent burnout." },
              { title: "Seek Professional Help When Needed", text: "Therapists or counselors can provide support, tools, and guidance for managing mental health challenges." },
            ].map((item, index) => (
              <View key={index} style={styles.box1}>
                <Text style={styles.subtitle1}>{item.title}</Text>
                <Text style={styles.text1}>{item.text}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    marginLeft : -10,
  },
  subcontainer: {
    flex: 1,
    marginTop: 15,
  },
  logo: {
    width: 50,
    height: 50,
    marginLeft: 200,
    marginTop: -65,
  },
  main: {
    backgroundColor: '#EEEEEE',
    width: 270,
    height: 248,
    marginTop: 100,
    justifyContent: 'center',
    borderRadius: 14,
  },
  text1: {
    fontSize: 20,
    paddingLeft: 10,
  },
  text: {
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
    textAlign: 'center',
  },
  subtitle3: {
    fontSize: 26,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle1: {
    textAlign: 'center',
    fontSize: 26,
    marginBottom: 5,
    fontWeight: 'bold',
    marginTop: 15,
  },
  box1: {
    backgroundColor: 'white',
    width: 260,
    height: 290,
    marginBottom: 20,
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1, // Add border width
    borderColor: 'gray', // Set border color to gray
  },
  BackGroundColor: {
    backgroundColor: '#CFFFDC',
    width: 320,
    height: '100%',
    borderRadius: 30,
    alignItems: 'center',
    marginLeft: 30,
  },
  title: {
    backgroundColor: 'white',
    textAlign: 'center',
    borderRadius: 10,
    width: 270,
    height: 150,
    marginTop: 40,
    fontSize: 32,
    padding: 35,
    fontFamily: 'serif',
    borderWidth: 1, // Add border width
    borderColor: 'gray', // Set border color to gray
    
  },
  subtitle: {
    fontSize: 32,
    marginTop: -80,
    fontFamily: 'serif',
    
  },
});

export default Mental;

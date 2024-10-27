import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Dashboard from './Dashboard';

const Physical = () => {
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
            <Text style={styles.title}>PHYSICAL</Text>
            <Text style={styles.subtitle}>HEALTH</Text>
            <Image source={require('./assets/bel.png')} style={styles.logo} />

            <View style={styles.main}>
              <Text style={styles.text}>
                Physical health is defined as the condition of your body, taking into consideration everything from the absence of disease to fitness level. Physical health is critical for overall well-being, and can be affected by: Lifestyle: diet, level of physical activity, and behavior.
              </Text>
            </View>

            <View style={{ marginTop: 80, marginBottom: 20 }}>
              <Text style={styles.subtitle3}>Tips to maintain</Text>
              <Text style={styles.subtitle3}>physically fit</Text>
            </View>

            {[
              { title: "Exercise Regularly", text: "Aim for at least 150 minutes of moderate-intensity aerobic activity (like brisk walking) or 75 minutes of vigorous activity (like running) per week." },
              { title: "Incorporate Strength Training", text: "Do strength-training exercises for all major muscle groups at least twice a week. This helps build muscle, increase metabolism, and strengthen bones." },
              { title: "Connect with Others", text: "Spending time with friends, family, or support groups can help you feel connected and reduce feelings of loneliness." },
              { title: "Stay Hydrated", text: "Drink enough water daily, as proper hydration is essential for muscle function, energy, and overall health." },
              { title: "Eat a Balanced Diet", text: "Focus on a diet rich in whole foods, including vegetables, fruits, lean proteins, and whole grains. Limit processed foods and sugar." },
              { title: "Get Enough Sleep", text: "Aim for 7-9 hours of quality sleep each night to support recovery, energy levels, and overall fitness." },
              { title: "Stretch and Improve Flexibility", text: "Regular stretching helps prevent injuries, improves posture, and increases flexibility, which benefits overall movement." },
              { title: "Take Rest Days", text: "Allow your muscles time to recover by taking at least one or two rest days per week. This helps prevent injury and fatigue." },
              { title: "Keep Moving Throughout the Day", text: "Avoid prolonged periods of sitting. Take short breaks to move around, especially if you work at a desk." },
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
    marginLeft: -10,
  },
  subcontainer: {
    flex: 1,
    marginTop: 15,
  },
  logo: {
    width: 50,
    height: 70,
    marginLeft: 200,
    marginTop: -75,
  },
  main: {
    backgroundColor: '#EEEEEE',
    width: 270,
    height: 330,
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
    borderColor: 'gray', // Set border color to gray
    borderWidth: 1, // Add border width
    backgroundColor: 'white',
    width: 260,
    height: 290,
    marginBottom: 20,
    justifyContent: 'center',
    borderRadius: 20,
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
    paddingLeft: 0,
    marginLeft: 3,
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

export default Physical;

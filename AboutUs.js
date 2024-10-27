import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView ,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Dashboard from './Dashboard';
import App from './App';

const AboutUs = () => {
  const [isHomePressed, setIsHomePressed] = React.useState(false);
  const [isAboutUsPressed, setIsAboutUsPressed] = React.useState(false);
  const [isLoggedOut, setIsLoggedOut] = React.useState(false);

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
    return <Dashboard />;
  } else if (isAboutUsPressed) {
    return <AboutUs
    />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>ABOUT US</Text>
        <Text style={styles.text}>
          Hi we are the Group 1 in Application Development and Emerging Technologies and this 
          is our mobile app that we will present as our midterm project.
        </Text>
        <Text style={styles.text}>
          The topic given to us is about the health subject and some of what you saw in the 
          content section are some of the health topics related.
        </Text>
        <Text style={[styles.text, { fontWeight: 'bold'}]}>COLOR PALETTE</Text>
        <View style={[styles.circle, { marginBottom: 25 }]}>
          <View style={[styles.circle1, { backgroundColor: '#68BA7F' }]} />
          <View style={[styles.circle1, { backgroundColor: '#CFFFDC' }]} />
          <View style={[styles.circle1, { backgroundColor: '#80A9D4' }]} />
        </View>

        <ScrollView 
          style={styles.scrollView} 
          showsVerticalScrollIndicator={false} 
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.contentContainer}>
            <View style={styles.memberContainer}>
              <Image
                source={require('./assets/damaso.jpg')}
                style={styles.image}
              />
              <View style={styles.BoxContainer2}>
                <View style={styles.BoxContainer}>
                  <Text style={styles.text1}>           LEADER</Text>
                  <Text style={styles.text1}>                     DAMASO, ERICA JANNE C</Text>
                  <Text style={styles.text1}>                     UX DESIGN THEORY</Text>
                  <View style={styles.circleButtonContainer}>
                    <TouchableOpacity
                      style={styles.circleButton}
                      onPress={() => Alert.alert("DAMASO, ERICA JANNE C", " ")}
                    >
                      <Text style={styles.buttonText}>Here</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.memberContainer}>
              <Image
                source={require('./assets/regie.jpg')}
                style={styles.image}
              />
              <View style={styles.BoxContainer2}>
                <View style={styles.BoxContainer}>
                  <Text style={[styles.text1, { paddingTop: 10 }]}>             REGILISA, LOVELY</Text>
                  <Text style={styles.text1}>             60-30-10</Text>
                  <View style={styles.circleButtonContainer}>
                    <TouchableOpacity
                      style={styles.circleButton}
                      onPress={() => Alert.alert("REGILISA, LOVELY", " Dominant Color(60%) The green color used extensively is the dominant color. It's present in various shades and elements throughout the design. Secondary Color (30%) The white color used for text and some background elements. Accent Color (10%) The blue and purple accents used in some icons and text.")}
                    >
                      <Text style={styles.buttonText}>Here</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.memberContainer}>
              <Image
                source={require('./assets/mel.jpg')}
                style={styles.image}
              />
              <View style={styles.BoxContainer2}>
                <View style={styles.BoxContainer}>
                  <Text style={styles.text1}>                  MARINOÑO JOMEL M.</Text>
                  <Text style={styles.text1}>                  UI DESIGN PRINCIPLE</Text>
                  <View style={styles.circleButtonContainer}>
                    <TouchableOpacity
                      style={styles.circleButton}
                      onPress={() => Alert.alert("MARINOÑO JOMEL M.", " ")}
                    >
                      <Text style={styles.buttonText}>Here</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.memberContainer}>
              <Image
                source={require('./assets/lee.jpg')}
                style={styles.image}
              />
              <View style={styles.BoxContainer2}>
                <View style={styles.BoxContainer}>
                  <Text style={styles.text1}>             ARCILLA, JOHM LEE
                  </Text>
                  <Text style={styles.text1}>             USER PERSONA</Text>
                  <View style={styles.circleButtonContainer}>
                    <TouchableOpacity
                      style={styles.circleButton}
                      onPress={() => Alert.alert("ARCILLA, JOHM LEE", " ")}
                    >
                      <Text style={styles.buttonText}>Here</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.memberContainer}>
              <Image
                source={require('./assets/kelly.jpg')}
                style={styles.image}
              />
              <View style={styles.BoxContainer2}>
                <View style={styles.BoxContainer}>
                  <Text style={styles.text1}>         GARCIA KHELLY</Text>
                  <Text style={styles.text1}>         COLOR THEORY</Text>
                  <View style={styles.circleButtonContainer}>
                    <TouchableOpacity
                      style={styles.circleButton}
                      onPress={() => Alert.alert("GARCIA KHELLY", " ")}
                    >
                      <Text style={styles.buttonText}>Here</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.memberContainer}>
              <Image
                source={require('./assets/bro.jpg')}
                style={styles.image}
              />
              <View style={styles.BoxContainer2}>
                <View style={styles.BoxContainer}>
                  <Text style={styles.text1}>                      RONCESSVALLES, REYNOLD</Text>
                  <Text style={styles.text1}>                   SPACING AND TYPOGRAPHY</Text>
                  <View style={styles.circleButtonContainer}>
                    <TouchableOpacity
                      style={styles.circleButton}
                      onPress={() => Alert.alert("RONCESSVALLES, REYNOLD", " ")}
                    >
                      <Text style={styles.buttonText}>Here</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <Text style={[styles.text2, { fontSize: 14,  marginTop : 15,marginLeft: 10}]}>
          education prepares students for emergencies by </Text>
          <Text style={[styles.text2, { fontSize: 14, marginLeft: 10}]}> 
          teaching basic first aid skills and safety practices.</Text>
          <Text style={[styles.text2, { fontSize: 15, fontWeight:'bold', marginTop: 10, marginLeft: 10 }]}>
          Phone Number: 0946-1513-009</Text>
          <Text style={[styles.text2, { fontSize: 15, fontWeight:'bold',marginLeft: 10}]}>
          Email: healthsubject@gmail.com</Text>
          <Text style={[styles.text2, { fontSize: 15, fontWeight:'bold', marginBottom: 70 ,marginLeft: 10 }]}>
          username: healthsubject</Text>

          
        </ScrollView>

       
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#68BA7F',
    padding: 20,
  },
  circleButtonContainer: {
    alignItems: 'flex-end', // Align to the right
    width: '100%', // Full width to position button on the right
    paddingRight: 10,
  },
  circleButton: {
    width: 43,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#80A9D4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
    fontFamily: 'serif',
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  circle: {
    width: 131,
    height: 40,
    backgroundColor: '#000000',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
  },
  circle1: {
    width: 30,
    height: 30,
    marginLeft: 10,
    backgroundColor: 'white',
    borderRadius: 100,
  },
  scrollView: {
    backgroundColor: '#CFFFDC',
    borderRadius: 20,
    width: '100%', // Full width
    paddingVertical: 20, // Add some padding
  },
  contentContainer: {
    alignItems: 'center', // Center align all items
  },

  image: {
    width: 110,
    height: 110,
    marginTop: 20,
    borderRadius: 100,
    marginLeft: -15,
    zIndex: 100,
  },
  BoxContainer: {
    backgroundColor: '#80D6B1',
    width: 300,
    height: 100,
    marginTop: -80,
    borderRadius: 20,
    alignItems: 'center', // Center align text inside the box
    justifyContent: 'center',
  },
  BoxContainer2: {
    backgroundColor: '#CFFFDC',
    width: 300,
    height: 50,
    borderRadius: 20,
    alignItems: 'center', // Center align text inside the box
    justifyContent: 'center',
    paddingVertical: 10,
  },
  text1: {
    borderColor: 'grey',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center', // Center align the text
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
    padding: 12,
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

export default AboutUs;

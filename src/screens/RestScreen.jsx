import { Image, SafeAreaView, StyleSheet, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const RestScreen = () => {
  const navigation = useNavigation();
  const [timeLeft, setTimeLeft] = useState(3);

  useEffect(() => {
    if (timeLeft === 0) {
      navigation.goBack(); 
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(prev => prev - 1); 
    }, 1000);

    return () => clearTimeout(timer); 
  }, [timeLeft]); 

  return (
    <SafeAreaView>
      <Image
        source={require('../assets/sport.png')}
        style={{ width: '100%', height: 400 }}
      />

      <Text style={styles.title}>TAKE A BREAK!</Text>
      <Text style={styles.counter}>{timeLeft}</Text>
    </SafeAreaView>
  );
};

export default RestScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '900',
    marginTop: 50,
    textAlign: 'center',
  },
  counter: {
    fontSize: 40,
    fontWeight: '900',
    marginTop: 50,
    textAlign: 'center',
  },
});

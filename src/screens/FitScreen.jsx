import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useContext, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { FıtnessItem } from '../../Context';

const FitScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { excersises } = route.params;
  const [index, setIndex] = useState(0);
  const current = excersises[index];

  const {
    completed,
    setCompleted,
    minutes,
    setMinutes,
    calories,
    setCalories,
    workout,
    setWorkout,
  } = useContext(FıtnessItem);

  const handleDone = () => {
    setCompleted([...completed, current.name]);
    setWorkout(workout + 1);
    setMinutes(minutes + 2.5);
    setCalories(calories + 6.3);

    navigation.navigate('Rest');

    setTimeout(() => {
      setIndex(index + 1);
    });
  };

  const handleSkip = () => {
    navigation.navigate('Rest');
    setTimeout(() => {
      setIndex(index + 1);
    });
  };

  const handlePrev = () => {
    navigation.navigate('Rest');
    setTimeout(() => {
      setIndex(index - 1);
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: current?.image }} style={styles.image} />

      <Text style={styles.exerciseName}>{current?.name}</Text>
      <Text style={styles.setsText}>x{current?.sets}</Text>

      {index + 1 >= excersises.length ? (
        <Pressable
          onPress={() => navigation.navigate('Home')}
          style={styles.doneButton}
        >
          <Text style={styles.doneButtonText}>Done</Text>
        </Pressable>
      ) : (
        <Pressable onPress={handleDone} style={styles.doneButton}>
          <Text style={styles.doneButtonText}>Done</Text>
        </Pressable>
      )}

      <View style={styles.navigationButtonsContainer}>
        <Pressable
          disabled={index === 0}
          onPress={handlePrev}
          style={[styles.navButton, index === 0 && styles.disabledButton]}
        >
          <Text style={styles.navButtonText}>PREV</Text>
        </Pressable>

        {index + 1 >= excersises.length ? (
          <Pressable
            onPress={() => navigation.navigate('Home')}
            style={styles.navButton}
          >
            <Text style={styles.navButtonText}>SKIP</Text>
          </Pressable>
        ) : (
          <Pressable onPress={handleSkip} style={styles.navButton}>
            <Text style={styles.navButtonText}>SKIP</Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
};

export default FitScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 370,
  },
  exerciseName: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  setsText: {
    marginTop: 30,
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  doneButton: {
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 30,
    width: 150,
    alignSelf: 'center',
    borderRadius: 20,
  },
  doneButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  navigationButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  navButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 20,
    width: 100,
  },
  navButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  disabledButton: {
    opacity: 0.5,
  },
});

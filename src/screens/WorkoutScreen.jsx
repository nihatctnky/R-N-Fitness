import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useContext } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Back, TickSquare } from 'iconsax-react-native';
import { FıtnessItem } from '../../Context';

const WorkoutScreen = () => {
  const route = useRoute();
  const { id, excersises, image } = route.params;
  const navigation = useNavigation();
  const { completed, setCompleted } = useContext(FıtnessItem);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image style={styles.bannerImage} source={{ uri: image }} />
        <Back
          onPress={() => navigation.goBack()}
          size="32"
          color="#d9e3f0"
          style={styles.backIcon}
        />

        {excersises.map((item, index) => (
          <Pressable key={item.id || index} style={styles.exerciseItem}>
            <Image style={styles.exerciseImage} source={{ uri: item?.image }} />
            <View style={styles.exerciseInfo}>
              <Text style={styles.exerciseName}>{item?.name}</Text>
              <Text style={styles.setsText}>x{item?.sets}</Text>
            </View>
            {completed.includes(item.name) && (
              <View style={styles.tickContainer}>
                <TickSquare size="32" color="#37d67a" />
              </View>
            )}
          </Pressable>
        ))}
      </ScrollView>

      <Pressable
        onPress={() => {
          navigation.navigate('Fit', { excersises });
          setCompleted([]);
        }}
        style={styles.startButton}
      >
        <Text style={styles.startButtonText}>START</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default WorkoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bannerImage: {
    width: '100%',
    height: 170,
  },
  backIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  exerciseItem: {
    alignItems: 'center',
    marginTop: 30,
    flexDirection: 'row',
    marginLeft: 15,
  },
  exerciseImage: {
    width: 90,
    height: 90,
  },
  exerciseInfo: {
    marginLeft: 10,
    width: 170,
  },
  exerciseName: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  setsText: {
    fontSize: 16,
    marginTop: 4,
    color: 'gray',
  },
  tickContainer: {
    alignItems: 'center',
    paddingLeft: 40,
    paddingBottom: 20,
  },
  startButton: {
    backgroundColor: 'blue',
    padding: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 20,
    borderRadius: 20,
    width: 120,
  },
  startButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
});

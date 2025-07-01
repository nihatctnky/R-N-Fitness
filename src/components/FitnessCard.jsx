import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import fitness from '../data/fitness';
import { Flash } from 'iconsax-react-native';
import { useNavigation } from '@react-navigation/native';
import WorkoutScreen from '../screens/WorkoutScreen';

const FitnessCard = () => {
  const FitnessData = fitness;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {FitnessData.map(item => (
        <Pressable
          onPress={() =>
            navigation.navigate('Workout', {
              image: item.image,
              excersises: item.excersises,
              id: item.id,
            })
          }
          style={styles.card}
          key={item.id}
        >
          <Image style={styles.image} source={{ uri: item.image }} />
          <Text style={styles.text}>{item.name}</Text>
          <Flash style={styles.icons} size={22} color="white" variant="Bold" />
        </Pressable>
      ))}
    </View>
  );
};

export default FitnessCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 130,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  image: {
    width: '90%',
    height: 180,
    margin: 2,
    borderRadius: 8,
  },
  text: {
    position: 'absolute',
    top: 20,
    left: 20,
    color: 'white',
    paddingLeft: 14,
    fontSize: 16,
    fontWeight: 'bold',
  },
  icons: {
    bottom: 45,
    left: -150,

    fontWeight: 'bold',
  },
});

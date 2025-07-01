import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useContext } from 'react';
import FitnessCard from '../components/FitnessCard';
import { FıtnessItem } from '../../Context';

const HomeScreen = () => {
  const { minutes, calories, workout } = useContext(FıtnessItem);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>HOME WORKOUT</Text>

          <View style={styles.statsContainer}>
            <View style={styles.statBox}>
              <Text style={styles.statValue}>{workout}</Text>
              <Text style={styles.statLabel}>WORKOUT</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statValue}>{calories}</Text>
              <Text style={styles.statLabel}>KCAL</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statValue}>{minutes}</Text>
              <Text style={styles.statLabel}>MINS</Text>
            </View>
          </View>

          <View style={styles.imageWrapper}>
            <Image
              style={styles.bannerImage}
              source={{
                uri: 'https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png',
              }}
            />
          </View>
        </View>

        <FitnessCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    backgroundColor: '#CD853F',
    padding: 10,
    height: 200,
    width: '100%',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  statBox: {
    alignItems: 'center',
  },
  statValue: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 5,
  },
  statLabel: {
    color: '#D0D0D0',
    fontSize: 18,
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImage: {
    width: '90%',
    height: 180,
    marginTop: 20,
    borderRadius: 7,
  },
});

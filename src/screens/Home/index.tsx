import React, { useState, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Appointments, { AppointmentsProps } from '../../components/Appointments';
import Background from '../../components/Background';
import ButtonAdd from '../../components/ButtonAdd';
import CategorySelect from '../../components/CategorySelect';
import ListDivider from '../../components/ListDivider';
import ListHeader from '../../components/ListHeader';
import Profile from '../../components/Profile';

import styles from './styles';
import { COLLECTION_APPOINTMENTS } from '../../configs/storage';
import Loading from '../../components/Loading';

const Home: React.FC = () => {
  const navigation = useNavigation();
  
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState<AppointmentsProps[]>([]);

  function handleSetCategory(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentsDetails(guildSelected: AppointmentsProps) {
    navigation.navigate('AppointmentsDetails', { guildSelected });
  }

  function handleAppointmentsCreate() {
    navigation.navigate('AppointmentsCreate')
  }

  async function loadAppointments() {
    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const appointmentStorage: AppointmentsProps[] = storage ? JSON.parse(storage) : [];

    if(category) {
      setAppointments(appointmentStorage.filter(item => item.category === category));
    } else {
      setAppointments(appointmentStorage)
    }

    setLoading(false);
  }

  useFocusEffect( useCallback(() => {
    loadAppointments();
  }, [category]));

  return (
    <Background>

      <View style={styles.header}>
        <Profile/>
        <ButtonAdd onPress={handleAppointmentsCreate} />
      </View>

      <View>
        <CategorySelect
          categorySelect={category}
          setCategory={handleSetCategory}
        />
      </View>
    
      {   
        loading ? <Loading /> :
        <>  
          <ListHeader
            title='Partidas agendadas'
            subTitle={`Total ${appointments.length}`}
          />

          <FlatList
            data={appointments}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider/>}
            style={styles.matches}
            contentContainerStyle={{ paddingBottom: 69 }}
            renderItem={({ item }) => (
              <Appointments
                data={item}
                onPress={() => handleAppointmentsDetails(item)}
              />
            )}
          />
        </>
      }

    </Background>
  );
}

export default Home;
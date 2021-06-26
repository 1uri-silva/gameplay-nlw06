import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';

import GuildItems, { GuildProps } from '../../components/GuildItems';
import ListDivider from '../../components/ListDivider';
import Loading from '../../components/Loading';
import api from '../../services/api';

import styles from './styles';

type Props = {
  handleGuildsSelect: (guild: GuildProps) => void
}

const Guilds: React.FC<Props> = ({handleGuildsSelect}) => {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchGuilds() {
    const response = await api.get('/users/@me/guilds');

    setGuilds(response.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchGuilds();
  }, []);
  
  return (
    <View style={styles.container}>
      {
        loading ? <Loading/> :
          <FlatList
            data={guilds}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <ListDivider isCenter />}
            ListHeaderComponent={() => <ListDivider isCenter />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 68, paddingTop: 104 }}
            style={styles.guilds}
            renderItem={({item}) => (
              <GuildItems
                data={item}
                onPress={() => handleGuildsSelect(item)}
              />
            )}
          />
      }
    </View>
  );
}

export default Guilds;
import React from 'react';
import { View, FlatList } from 'react-native';
import GuildItems, { GuildProps } from '../../components/GuildItems';
import ListDivider from '../../components/ListDivider';

import styles from './styles';

type Props = {
  handleGuildsSelect: (guild: GuildProps) => void
}

const Guilds: React.FC<Props> = ({handleGuildsSelect}) => {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true
    },
    {
      id: '2',
      name: 'Lendários',
      icon: null,
      owner: true
    },
  ];

  return (
    <View style={styles.container}>
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
    </View>
  );
}

export default Guilds;
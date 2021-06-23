import React from 'react';
import { ScrollView } from 'react-native';

import { categories } from '../../utils/categories';
import Category from '../Category';

import styles from './styles';

type Props = {
  categorySelect: string;
  setCategory: (categoryId: string) => void;
}

const CategorySelect: React.FC<Props> = ({categorySelect, setCategory}) => {
  return (
   <ScrollView
    horizontal
    style={styles.container}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{ paddingRight: 40 }}
   >
     {
       categories.map(category => (
         <Category
            key={category.id}
            title={category.title}
            icon={category.icon}
            checked={category.id === categorySelect }
            onPress={() => setCategory(category.id)}
         />
       ))
     }
   </ScrollView>
  );
}

export default CategorySelect;
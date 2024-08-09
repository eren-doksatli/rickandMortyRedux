import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {FilterSearch, SearchNormal} from 'iconsax-react-native';
import Colors from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {FILTERCHARACTERS, SEARCHCHARACTERS} from '../../utils/routes';

export default function HeaderRight() {
  const navigation = useNavigation();
  return (
    <View style={Styles.container}>
      <Pressable
        onPress={() => navigation.navigate(SEARCHCHARACTERS)}
        style={Styles.button}>
        <SearchNormal size={27} color={Colors.BLACK} />
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate(FILTERCHARACTERS)}
        style={Styles.button}>
        <FilterSearch size={27} color={Colors.BLACK} />
      </Pressable>
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  button: {
    marginHorizontal: 5,
  },
});

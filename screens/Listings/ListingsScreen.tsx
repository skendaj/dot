import { FlashList } from '@shopify/flash-list';
import { Dimensions } from 'react-native';
import { Text, View } from 'tamagui';

const data = [
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
];
export const ListingsScreen = () => {
  return (
    <View flexGrow={1}>
      <Text>ListingsScreen</Text>
      <FlashList
        estimatedItemSize={120}
        estimatedListSize={{ height: 120, width: Dimensions.get('screen').width }}
        data={data}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

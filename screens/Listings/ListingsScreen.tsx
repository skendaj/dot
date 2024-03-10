import { Text, View } from 'tamagui';
import { FlashList } from '@shopify/flash-list';

const DATA = [
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
];
export const ListingsScreen = () => {
  return (
    <View>
      <Text>ListingsScreen</Text>
      <FlashList
        data={DATA}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        estimatedItemSize={200}
      />
    </View>
  );
};

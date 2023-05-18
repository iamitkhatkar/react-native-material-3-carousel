import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import {sampleData} from './data';
import ListItem from './ListItem';
import {useSharedValue} from 'react-native-reanimated';

const App = () => {
  const scrollX = useSharedValue(0);

  const onScroll = e => {
    scrollX.value = e.nativeEvent.contentOffset.x;
  };

  return (
    <SafeAreaView>
      <FlatList
        data={sampleData}
        horizontal
        style={{margin: 16}}
        bounces={false}
        onScroll={onScroll}
        scrollEventThrottle={18}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => (
          <ListItem
            uri={item.uri}
            scrollX={scrollX}
            index={index}
            dataLength={sampleData.length}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default App;

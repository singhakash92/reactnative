import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useCallback, useRef, useState } from "react";
// import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
// import { ScrollView } from "react-native-gesture-handler";


const { width, height } = Dimensions.get("window");

const array = [
  {
    id: 1,
    img: "https://picsum.photos/1440/2842?random=1",
    title: "This is Title of  random image 1",
    subtitle: "This is subtitle of random image 1",
  },
  {
    id: 2,
    img: "https://picsum.photos/1440/2842?random=2",
    title: "This is Title of  random image 2",
    subtitle: "This is subtitle of random image 2",
  },
  {
    id: 3,
    img: "https://picsum.photos/1440/2842?random=3",
    title: "This is Title of  random image 3",
    subtitle: "This is subtitle of random image 3",
  },
  {
    id: 4,
    img: "https://picsum.photos/1440/2842?random=4",
    title: "This is Title of  random image 4",
    subtitle: "This is subtitle of random image 4",
  },
  {
    id: 5,
    img: "https://picsum.photos/1440/2842?random=5",
    title: "This is Title of  random image 5",
    subtitle: "This is subtitle of random image 5",
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0)
  const indexRef = useRef(index)
  indexRef.current = index

  const onScroll = useCallback((event) => {
    const visiblewidth = event.nativeEvent.layoutMeasurement.width;
    console.log("the width is ")
    const offsetX = event.nativeEvent.contentOffset.x;
    console.log(offsetX)
    const index = offsetX / visiblewidth
    const roundedIndex = Math.round(index)

    const distance = Math.abs(index - roundedIndex)
    
    const nomanland = 0.4 < distance

    if (indexRef.current != roundedIndex && !nomanland) {
      setIndex(roundedIndex)
    }


        
  }, [])


  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{position : "relative"}}>
        <FlatList
          style={{ flex: 1 }}
          data={array}
          renderItem={({ item }) => (
            <View>
              <View
                style={{
                  width: width,
                  height: height,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={{ uri: item.img }}
                  style={{
                    width: width * 0.8,
                    height: height * 0.8,
                    resizeMode: "cover",
                    position: "relative",
                  }}
                ></Image>
                <Text>{item.title}</Text>
                <Text>{item.subtitle}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={true}
          horizontal
          pagingEnabled={true}
          onScroll={onScroll}
        ></FlatList>
      </View>

      <View style={{ flexDirection: "row", position: "absolute", bottom : 40, left : 120}}>
        {array.map((item, ind) => {
          return (
            <View
              style={[
                styles.dot(item.id),
                { opacity: item.id - 1 == index ? 1 : 0.3 },
              ]}
            ></View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  dot: (currindex) => ({ height: 10, width: 10, margin: 10, backgroundColor: "black" })
});




//
// Paging enabled removes the sliding feature of the flatlist or scoll view and on movement all appear in a page

// 2) when we are working with scrollable components
// event.nativeEvent = {
//   layoutMeasurement ={
//     width: it consist of visble width of the scrollable components
//     height : visible height
//   },
//   contentOffset: {
//     x: "total horizontal distance traveled from start"
//     y : "verical distance"
//   },
//   manyother things
// }


// 3) just get the index value and on teh basis of index value change the opacity of that dot
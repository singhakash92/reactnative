import { StyleSheet, Text, View, FlatList, Image, Dimensions, TouchableOpacity,Appearance } from "react-native";
import React from "react";
import { convertToRGBA } from "react-native-reanimated";


const mostBoughtShare = [
  {
    name: "Zomato",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png",
    currentPrice: 257.49,
    dayChangeValue: -13.1,
    daychangePercentage: 4.84,
  },
  {
    name: "NHPC",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/NHPC_Logo_PNG_File.png/640px-NHPC_Logo_PNG_File.png",
    currentPrice: 84.13,
    dayChangeValue: -0.82,
    daychangePercentage: 0.97,
  },
  {
    name: "Manappuram Finance",
    img: "https://bsmedia.business-standard.com/_media/bs/img/article/2018-11/07/full/1541609492-7319.jpg?im=FeatureCrop,size=(826,465)",
    currentPrice: 153.27,
    dayChangeValue: -24.06,
    daychangePercentage: 13.57,
  },
  {
    name: "Mazagon Dock Ship",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCTAck0rq6zi9Tcwak_1VRLwgCb6Ga3VThsw&s",
    currentPrice: 4526.27,
    dayChangeValue: 288.65,
    daychangePercentage: 6.81,
  }
];

const index = () => {
  const colorScheme = Appearance.getColorScheme();
  if (colorScheme === "dark") {
    // Use dark color scheme
  }


  const smallCard = ({ item }) => {
    return (
      <TouchableOpacity>
        <View
          style={{
            borderWidth: 2,
            borderStyle: "solid",
            borderColor: "dimgrey",
            borderRadius: 20,
            padding: 15,
            width: Dimensions.get("window").width / 2 - 20,
            
          }}
        >
          <View style={{ marginBottom: 12 }}>
            <Image
              source={{ uri: item.img }}
              style={{
                width: 50,
                height: 50,
                borderWidth: 2,
                borderColor: "black",
                borderStyle: "solid",
                borderRadius: 5,
                resizeMode: "fill",
                marginBottom: 5,
              }}
            />
            <Text style={{ color: "black", fontSize: 15, fontWeight: "bold" }}>
              {item.name}
            </Text>
          </View>

          <View>
            <Text style={{ color: "black", fontSize: 18, marginBottom: 5 }}>
              ₹{item.currentPrice}
            </Text>
            <Text style={styles.redOrGreen(item.dayChangeValue)}>
              {item.dayChangeValue} ({item.daychangePercentage})%
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ backgroundColor: "white", height: "100%", padding: 5 }}>
      {/* card which top selling on groww */}
      <View
        style={{
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "dimgray",
          borderRadius: 6,
        }}
      >
        <View style={{ marginTop: 5, marginBottom: 15 }}>
          <Text
            style={{
              color: "black",
              fontSize: 20,
              fontFamily: "Roboto",
              fontWeight: "bold",
            }}
          >
            Most Bought on Groww
          </Text>
        </View>

        {/* now will render all the objects inside this view*/}
        <View
          style={{ marginBottom: 10, shadowColor: "black", elevation: 20 }}
        >
          <FlatList
            data={mostBoughtShare}
            renderItem={smallCard}
            keyExtractor={(item, index) => index}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: "space-evenly", // Adjust as per your spacing needs
            }}
            ItemSeparatorComponent={() => <View style={{ margin: 5 }}></View>}
          />
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  redOrGreen: (value) => ({
    color: (value > 0) ? "green" : "red",
    fontSize: 15
  
  }
  )
}
);

// 1)
// if the childern present inside a container is flex: 1 then the parent should have a fixed dimension(i.e either a fixed width, height, or it should be flex : 1)

// 2) default flex direction is conlumn

// 3) borderRadius
// borderWidth
// borderStyle
// borderColor

// 4) Text
// fontFamily
// fontSize
// fontWeight
// fontColor

// 5) to have a blurring bg image inside the image component there is a blurradius prop use it and have blurry image

// 6) shadows
// shadowColor
// shadowOffset: {
//   width: 
//   height
// }
// shadowopacity
// shadowradius //how much blurry
// elvation



// 7) positon 5
// static nothing as usual
// reltative: from its original position
// absolute: relative to the nearest positioned element
// fiexed
// sticky


// 8) resizeMode // how much the image should displayed
// cover  : the image keeps its aspect ratio and fills the given dimension.
//   contain : the image keeps its aspect ratio, but is resized to fit within the given dimension so it may leave blank spaces
// fill:the image is resized to fill the given dimension. If necessary, the image will be stretched or squished to fit




import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Farmous Kitchen Thai Causine",
    image_url:
      "https://visitbath.co.uk/imageresizer/?image=%2Fdbimgs%2FGallery%20-%20The%20Scallop%20Shell%20Bath%20interior.jpg&action=FeaturedItemsGalleryProElite3x2",
    categories: ["Cafe", "Bar"],
    price: "$$",
    review: "1244",
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://res.cloudinary.com/culturemap-com/image/upload/ar_4:3,c_fill,g_faces:center,w_980/v1627337765/photos/322524_original.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    review: "1244",
    rating: 3.7,
  },
  {
    name: "Indian Kitchen",
    image_url:
      "https://assets.gqindia.com/photos/5e79f8f1daa717000852d708/master/w_1600%2Cc_limit/Bhukhara-New-Delhi.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    review: "1244",
    rating: 3.7,
  },
];

export default function RestaurantItem(props) {
  return (
    <>
      {props.restaurantData.map((restaurant, index) => (
        <View
          key={index}
          style={{
            marginTop: 10,
            padding: 15,
            backgroundColor: "#fff",
          }}
        >
          <TouchableOpacity activeOpacity={0.8}>
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </TouchableOpacity>
        </View>
      ))}
    </>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>35-40 · min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);

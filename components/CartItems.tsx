import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { elementsInCart } from "@/global/export-images";
import Header from "./utilities/Header";
import { ScrollView } from "react-native";

const deleteButton = require("../assets/images/remove.png");

const CartItems = () => {
  // Function to handle deletion of elements in the cart items list
  const handleDelete = (id: number) => {
    elementsInCart.filter((element) => {
      return element.id !== id;
    });
    // This line ensures that elementsInCart is updated correctly
  };

  return (
    <>
      <Header />
      <ScrollView>
        <View>
          {elementsInCart.map((cartItem, index) => (
            <View key={cartItem.id} style={styles.itemContainer}>
              <Image source={cartItem.image} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.topDescription}>
                  {cartItem.topDescription}
                </Text>
                <Text style={styles.bottomDescription}>
                  {cartItem.bottomDescription}
                </Text>
                <Text style={styles.price}>{cartItem.price}</Text>
                <Pressable onPress={() => handleDelete(cartItem.id)}>
                  <Image source={deleteButton} style={styles.deleteIcon} />
                </Pressable>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default CartItems;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    flexDirection: "column",
  },
  topDescription: {
    fontSize: 16,
    fontWeight: "bold",
  },
  bottomDescription: {
    fontSize: 14,
  },
  price: {
    fontSize: 14,
    color: "orange",
  },
  deleteIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
});

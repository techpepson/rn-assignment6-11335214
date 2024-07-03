import { Image, Pressable, StatusBar, Text, View } from "react-native";
import React from "react";
import { landingPageImages } from "@/global/export-images";
import { FlatList } from "react-native";
import Header from "./utilities/Header";
import { ScrollView } from "react-native";
import { elementsInCart } from "@/global/export-images";

const filter = require("../assets/images/Filter.png");
const listView = require("../assets/images/Listview.png");

const LandingPage = () => {
  //state management for adding to cart

  // const [addedToCart, setAddedToCart] = useState<Boolean>(false);

  //function to handle adding to cart when a button is pressed
  const handleAddToCart = (element) => {
    //map through images array to add to the empty cart array
    elementsInCart.push({
      image: element.image,
      price: element.price,
      topDescription: element.topDescription,
      bottomDescription: element.bottomDescription,
      id: element.id,
    });
    // setAddedToCart(true);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <Header />
        <View>
          <View style={styles.flexItems}>
            <Text style={styles.boldText}>OUR STORY</Text>
            <View style={styles.headerIcons}>
              <Image source={filter} />
              <Image source={listView} />
            </View>
          </View>
          <View>
            <FlatList
              data={landingPageImages}
              renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                  <View style={styles.imageContainer}>
                    <Image source={item.image} />
                    {/*wrap addToCartButton in a pressable to make it able to press*/}
                    <Pressable
                      onPress={() => {
                        handleAddToCart(item);
                      }}
                    >
                      <Image
                        source={item.addToCartButton}
                        style={styles.cartIcon}
                      />
                    </Pressable>
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.imageText}>{item.topDescription}</Text>
                    <Text style={styles.descriptionText}>
                      {item.bottomDescription}
                    </Text>
                    <Text style={styles.currencyColor}>{item.price}</Text>
                  </View>
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default LandingPage;

const styles = {
  flexItems: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  boldText: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 10,
  },
  headerIcons: {
    display: "flex",
    flexDirection: "row",
    width: 80,
    height: 80,
    gap: 10,
    justifyContent: "space-between",
  },
  itemContainer: {
    display: "flex",
    flexDirection: "column",
    marginVertical: 10,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  textContainer: {
    marginLeft: 10,
    display: "flex",
    flexDirection: "column",
  },
  cartIcon: {
    width: 35,
    height: 35,
    marginLeft: 10,
  },
  imageText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  descriptionText: {
    fontSize: 20,
  },
  currencyColor: {
    fontSize: 22,
    fontWeight: "bold",
    color: "orange",
  },
};

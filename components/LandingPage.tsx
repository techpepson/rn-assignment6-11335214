import { Image, Text, View } from "react-native";
import React from "react";
import { landingPageImages } from "@/global/export-images";
import { FlatList } from "react-native-gesture-handler";
import Header from "./utilities/Header";

const LandingPage = () => {
  return (
    <>
      {/*import the header component to be used in the landing page*/}
      <Header />
      {/*view component for the landing page*/}
      <View>
        <View>
          <Text>OUR STORY</Text>
        </View>
        {/*View component that renders the images in the image-texts array*/}
        <View>
          {/*render flatlist items here*/}
          <FlatList
            data={landingPageImages}
            renderItem={({ item }) => (
              //containing view for flatlist items
              <View>
                {/*container for the individual objects in the array*/}
                <View>
                  <Image source={item.image} />
                  <Image source={item.addToCartButton} />
                  <View>
                    <Text>{item.topDescription}</Text>
                    <Text>{item.bottomDescription}</Text>
                    <Text>{item.price}</Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </>
  );
};

export default LandingPage;

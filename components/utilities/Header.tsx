import { Image, Text, View } from "react-native";
import React from "react";

const menu = require("../../assets/images/Menu.png");
const logo = require("../../assets/images/Logo.png");
const search = require("../../assets/images/Search.png");
const cartIcon = require("../../assets/images/shoppingBag.png");

const Header = () => {
  return (
    <View>
      <View style={styles.headerPosition}>
        <Image source={menu} />
        <Image source={logo} style={styles.headerSizes} />
        <Image source={search} />
        <Image source={cartIcon} />
      </View>
    </View>
  );
};

export default Header;

const styles = {
  headerPosition: {
    marginTop: 40,
    display: "flex",
    flexDirection: "row",
    gap: 5,
    justifyContent: "space-around",
  },
  headerSizes: {
    width: 85,
    height: 35,
  },
};

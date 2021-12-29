import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";

const CoinDetailHeader = (props) => {
  const { image, name, symbol, market_cap_rank } = props;

  return (
    <View style={styles.container}>
      <Ionicons name="chevron-back-sharp" size={30} color="white" />
      <View style={styles.tickerContainer}>
        <Image
          source={{ uri: image.small }}
          style={{ width: 25, height: 25 }}
        />
        <Text style={styles.symbol}>{symbol.toUpperCase()}</Text>
        <Text style={styles.rank}>#{market_cap_rank}</Text>
      </View>
      <EvilIcons name="user" size={30} color="white" />
    </View>
  );
};

export default CoinDetailHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tickerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  symbol: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    marginHorizontal: 5,
  },
  rank: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    backgroundColor: "#585858",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
  },
});

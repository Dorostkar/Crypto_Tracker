import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import CoinDetailHeader from "../../components/CoinDetailHeader";
import coinData from "../../../assets/data/crypto.json";
import { AntDesign } from "@expo/vector-icons";

const CoinDetailsScreen = () => {
  const {
    name,
    symbol,
    image,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
  } = coinData;

  const percentageColor =
    price_change_percentage_24h < 0 ? "#ea3943" : "#16c784";

  return (
    <View style={styles.container}>
      <CoinDetailHeader
        image={image}
        name={name}
        symbol={symbol}
        market_cap_rank={market_cap_rank}
      />
      <View style={styles.priceContainer}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.currentPrice}>${current_price.usd}</Text>
        </View>
        <View
          style={[
            styles.percentageContainer,
            { backgroundColor: percentageColor },
          ]}
        >
          <AntDesign
            name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
            size={13}
            color={"white"}
            style={{ alignSelf: "center", marginRight: 5 }}
          />
          <Text style={styles.percentage}>
            {price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CoinDetailsScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  name: { color: "white", fontSize: 15 },
  currentPrice: {
    color: "white",
    fontSize: 30,
    fontWeight: "600",
    letterSpacing: 1,
  },
  priceContainer: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  percentageContainer: {
    padding: 8,
    borderRadius: 5,
    flexDirection: "row",
  },
  percentage: {
    color: "white",
    fontSize: 17,
    fontWeight: "500",
  },
});

import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const CoinItem = ({ marketCoin }) => {
  const {
    name,
    current_price,
    market_cap_rank,
    price_change_percentage_24h: percentage,
    symbol,
    market_cap,
    image,
  } = marketCoin;

  const percentageColor = percentage < 0 ? "#ea3943" : "#16c784";

  const normalizeMarketCap = (marketCap) => {
    if (marketCap > 1000000000000) {
      return `${Math.floor(marketCap / 1000000000000)} T`;
    } else if (marketCap > 1000000000) {
      return `${Math.floor(marketCap / 1000000000)} B`;
    } else if (marketCap > 1000000) {
      return `${Math.floor(marketCap / 1000000)} M`;
    } else if (marketCap > 1000) {
      return `${Math.floor(marketCap / 1000)} K`;
    }
    return marketCap;
  };

  return (
    <View style={styles.coinContainer}>
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: 30,
          height: 30,
          marginRight: 10,
          alignSelf: "center",
        }}
      />
      <View>
        <Text style={styles.title}>{name}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.rank}>{market_cap_rank}</Text>
          <Text style={styles.text}>{symbol.toUpperCase()}</Text>
          <AntDesign
            name={percentage < 0 ? "caretdown" : "caretup"}
            size={13}
            color={percentageColor}
            style={{ alignSelf: "center", marginRight: 5 }}
          />
          <Text style={{ color: percentageColor }}>
            {percentage.toFixed(2)}%
          </Text>
        </View>
      </View>
      <View style={{ marginLeft: "auto", alignItems: "flex-end" }}>
        <Text style={styles.title}>{current_price.toFixed(2)}</Text>
        <Text style={{ color: "white" }}>
          MCap {normalizeMarketCap(market_cap)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  coinContainer: {
    flexDirection: "row",
    borderBottomColor: "#282828",
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 15,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 3,
  },
  text: {
    color: "white",
    marginRight: 5,
  },
  rank: {
    color: "white",
    fontWeight: "bold",
    marginRight: 5,
    backgroundColor: "#585858",
    paddingHorizontal: 5,
    borderRadius: 5,
  },
});

export default CoinItem;

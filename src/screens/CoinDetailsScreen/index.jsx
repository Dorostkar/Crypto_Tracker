import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import CoinDetailHeader from "../../components/CoinDetailHeader";
import coinData from "../../../assets/data/crypto.json";

const CoinDetailsScreen = () => {
  const {
    name,
    symbol,
    image,
    market_data: { market_cap_rank },
  } = coinData;

  return (
    <CoinDetailHeader
      image={image}
      name={name}
      symbol={symbol}
      market_cap_rank={market_cap_rank}
    />
  );
};

export default CoinDetailsScreen;

const styles = StyleSheet.create({});

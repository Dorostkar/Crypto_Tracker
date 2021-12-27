import React from 'react'
import { StyleSheet, Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const CoinItem = () => {
    return (
        <View style={styles.coinContainer}>
        <Image
          source={{
            uri: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
          }}
          style={{
            width: 30,
            height: 30,
            marginRight: 10,
            alignSelf: "center",
          }}
        />
        <View>
          <Text style={styles.title}>Bitcoin</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.rank}>1</Text>
            <Text style={styles.text}>BTC</Text>
            <AntDesign
              name="caretdown"
              size={13}
              color="white"
              style={{ alignSelf: "center", marginRight: 5 }}
            />
            <Text style={styles.text}>0.63%</Text>
          </View>
        </View>
        <View style={{ marginLeft: "auto" }}>
          <Text style={styles.title}>56265.09</Text>
          <Text style={styles.text}>MCap 1.076 T</Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({ coinContainer: {
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
  },})

export default CoinItem

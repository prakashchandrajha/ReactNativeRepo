import { useState } from "react";
import { FlatList, Text, View } from "react-native"

const RideHistoryScreen = ()=>{

    const [rideHistory,setRideHistory] = useState([
    { id: "1", from: "Delhi", to: "Noida", price: 220 },
    { id: "2", from: "Noida", to: "Gurgaon", price: 340 },
    { id: "3", from: "Noida", to: "Gurgaon", price: 340 },
    { id: "5", from: "Noida", to: "Gurgaon", price: 340 },
    { id: "2", from: "Noida", to: "Gurgaon", price: 340 },
    { id: "2", from: "Noida", to: "Gurgaon", price: 340 },
    { id: "2", from: "Noida", to: "Gurgaon", price: 340 },
    { id: "2", from: "Noida", to: "Gurgaon", price: 340 },
    { id: "2", from: "Noida", to: "Gurgaon", price: 340 },
    { id: "2", from: "Noida", to: "Gurgaon", price: 340 },
    { id: "2", from: "Noida", to: "Gurgaon", price: 340 }
  ]);
    return (
        <View>
              <FlatList
      data={rideHistory}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={{ padding: 15, borderBottomWidth: 1 }}>
          <Text>{item.from} → {item.to}</Text>
          <Text>₹{item.price}</Text>
        </View>
      )}
    />

        </View>
    )
}

export default RideHistoryScreen;
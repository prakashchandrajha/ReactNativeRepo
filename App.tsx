import { useState } from "react";
import { Text, View } from "react-native"
import RideCard from "./RideCard";

// Type definition for Ride
type Ride = {
  id: number;
  type: string;
  price: number;
};

const App=()=>{
 // 🔥 STATE
  const [selectedRide, setSelectedRide] = useState<Ride | null>(null);

 // Ride data (normally API se aata hai)
  const rides: Ride[] = [
    { id: 1, type: "Mini", price: 120 },
    { id: 2, type: "Sedan", price: 180 },
    { id: 3, type: "SUV", price: 250 },
  ];

  return (
    <View style={{ padding: 20 }}>

      <Text>Select Your Ride</Text>

      {rides.map((ride) => (
        <RideCard
          key={ride.id}
          ride={ride}
          selectedRide={selectedRide}
          onSelect={setSelectedRide}
        />
      ))}

      {selectedRide && (
        <Text>
          Selected Ride: {selectedRide.type} - ₹{selectedRide.price}
        </Text>
      )}

    </View>
  );
}
export default App

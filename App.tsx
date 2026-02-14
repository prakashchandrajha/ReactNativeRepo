import { useState } from "react";
import { Text, View } from "react-native"
import RideType from "./RideType";

const App = () => {
  const rideData = [
    { id: 1, title: "Bike" },
    { id: 2, title: "Car" },
    { id: 3, title: "Auto" }
  ];

  const [selectedRide, setSelectedRide] = useState<any>(null);

  const handleSelectRide = (ride: any) => {
    setSelectedRide(ride);
  };

  return (
    <View>
      <RideType 
        rideData={rideData} 
        selectedRide={selectedRide}
        onSelectRide={handleSelectRide}
      />
      {selectedRide && (
        <Text>You selected: {selectedRide.title}</Text>
      )}
    </View>
  );
};

export default App;
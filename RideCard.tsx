import { View, Text, TouchableOpacity } from "react-native";

// Type definitions for props
type Ride = {
  id: number;
  type: string;
  price: number;
};

type RideCardProps = {
  ride: Ride;
  selectedRide: Ride | null;
  onSelect: (ride: Ride) => void;
};

const RideCard = ({ ride, selectedRide, onSelect }: RideCardProps) => {

  const isSelected = selectedRide?.id === ride.id;

  return (
    <TouchableOpacity
      onPress={() => onSelect(ride)}
      style={{
        padding: 15,
        marginVertical: 5,
        backgroundColor: isSelected ? "lightgreen" : "white",
        borderWidth: 1,
      }}
    >
      <Text>{ride.type}</Text>
      <Text>₹{ride.price}</Text>
    </TouchableOpacity>
  );
};

export default RideCard;

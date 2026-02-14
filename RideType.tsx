import { Text, View, TouchableOpacity } from "react-native"

const RideType = ({ rideData, onSelectRide }: any) => {
  return (
    <View>
      <Text>Select Ride Type</Text>
      {rideData.map((ride: any) => (
        <TouchableOpacity
          key={ride.id}
          onPress={() => onSelectRide(ride)}
        >
          <Text>{ride.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default RideType
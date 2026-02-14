import { useEffect, useState } from "react"
import { Button, Text, View } from "react-native"



const App=()=>{
  const [count,setCount]=useState(0);
  console.log(count);
  const fetchRides = () => {
  console.log("Fetching rides...");
};

// fetchRides();

useEffect(()=>{
  fetchRides();
},[])

  return(
    <View>
          <Text>Hello</Text>
          <Button title="Click Me" onPress={()=>setCount(count+1)}></Button>
    </View>
  )
}

export default App
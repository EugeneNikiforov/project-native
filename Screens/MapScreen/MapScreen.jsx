import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const MapScreen = ({ route }) => {
  const [initialRegion, setInitialRegion] = useState({
    latitude: route.params?.location?.coords?.latitude || 50.5085300,
    longitude: route.params?.location?.coords?.longitude || 30.5007400,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyles}
        initialRegion={initialRegion}
      >
        {initialRegion.latitude && initialRegion.longitude && (
          <Marker
            coordinate={{
              latitude: initialRegion.latitude,
              longitude: initialRegion.longitude,
            }}
            title="Travel photo"
          />
        )}
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapStyles: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

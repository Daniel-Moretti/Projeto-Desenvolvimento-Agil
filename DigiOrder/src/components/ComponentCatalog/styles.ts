import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    //flexDirection: 'row',
    padding: 16,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    marginBottom: 10,
  },
  colorsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  colorItem: {
    marginRight: 10,
    alignItems: "center",
  },
  colorIcon: {
    width: 20,
    height: 20,
    resizeMode: "cover",
  },
});

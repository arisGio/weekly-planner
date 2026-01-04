import { Text, View } from "@react-pdf/renderer";

import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    display: "flex",
    flexDirection: "row",
  },
  text: { padding: 10 },
});

const WeekHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Week 05</Text>
      <Text style={styles.text}>January - February</Text>
    </View>
  );
};

export default WeekHeader;

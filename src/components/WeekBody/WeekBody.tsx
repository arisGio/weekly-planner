import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  day: {},
});

const WeekBody = () => {
  return (
    <View style={styles.body}>
      <View style={styles.day}>
        <Text>Monday</Text>
      </View>
      <View style={styles.day}>
        <Text>Tuesday</Text>
      </View>
      <View style={styles.day}>
        <Text>Wednesday</Text>
      </View>
      <View style={styles.day}>
        <Text>Thursday</Text>
      </View>
      <View style={styles.day}>
        <Text>Friday</Text>
      </View>
      <View style={styles.day}>
        <Text>Saturday</Text>
      </View>
      <View style={styles.day}>
        <Text>Sunday</Text>
      </View>
    </View>
  );
};

export default WeekBody;

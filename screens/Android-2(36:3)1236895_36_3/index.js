import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <View style={styles.View_41_7}>
        <Text style={styles.Text_41_7}>AUDIT 5S</Text>
      </View>
      <View style={styles.View_36_81}>
        <Text style={styles.Text_36_81}> Créer un nouveau compte </Text>
      </View>
      <View style={styles.View_56_4}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20d2/9bb6/eb95ca911e817381d8f1f7c930da962f"
          }}
          style={styles.ImageBackground_36_71}
        />
        <View style={styles.View_36_83}>
          <Text style={styles.Text_36_83}>Username</Text>
        </View>
      </View>
      <View style={styles.View_56_5}>
        <View style={styles.View_36_72} />
        <View style={styles.View_36_84}>
          <Text style={styles.Text_36_84}>Nom</Text>
        </View>
      </View>
      <View style={styles.View_56_6}>
        <View style={styles.View_36_73} />
        <View style={styles.View_36_85}>
          <Text style={styles.Text_36_85}>Prenom</Text>
        </View>
      </View>
      <View style={styles.View_56_10}>
        <View style={styles.View_36_76} />
        <View style={styles.View_36_87}>
          <Text style={styles.Text_36_87}>Departement</Text>
        </View>
      </View>
      <View style={styles.View_56_11}>
        <View style={styles.View_36_78} />
        <View style={styles.View_36_90}>
          <Text style={styles.Text_36_90}>Role</Text>
        </View>
      </View>
      <View style={styles.View_56_7}>
        <View style={styles.View_36_74} />
        <View style={styles.View_36_86}>
          <Text style={styles.Text_36_86}>Email</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91f0/01ee/ad35268f153686cdf2d30abeab997c6b"
          }}
          style={styles.ImageBackground_38_1}
        />
      </View>
      <View style={styles.View_56_8}>
        <View style={styles.View_36_75} />
        <View style={styles.View_36_89}>
          <Text style={styles.Text_36_89}>Telephone </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/583e/d879/eb64342c5ddc27a1e3e1456688ab204f"
          }}
          style={styles.ImageBackground_38_4}
        />
      </View>
      <View style={styles.View_56_9}>
        <View style={styles.View_36_77} />
        <View style={styles.View_36_88}>
          <Text style={styles.Text_36_88}>Photo</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7247/4ca5/52465e1e8e18156236ddc8a634a593cd"
          }}
          style={styles.ImageBackground_39_0}
        />
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("50_24"))
        }
      >
        <View style={styles.View_56_12}>
          <View style={styles.View_39_3} />
          <View style={styles.View_39_4}>
            <Text style={styles.Text_39_4}>Créer un compte </Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_41_7: {
    width: wp("23.333333333333332%"),
    minWidth: wp("23.333333333333332%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333334%"),
    top: hp("0.3125%")
  },
  Text_41_7: {
    color: "rgba(79, 76, 87, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_36_81: {
    width: wp("71.11111111111111%"),
    minWidth: wp("71.11111111111111%"),
    minHeight: hp("8.4375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.666666666666664%"),
    top: hp("12.65625%")
  },
  Text_36_81: {
    color: "rgba(79, 76, 87, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_56_4: {
    width: wp("79.72222222222223%"),
    minWidth: wp("79.72222222222223%"),
    height: hp("8.4375%"),
    minHeight: hp("8.4375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.11111111111111%"),
    top: hp("21.09375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_36_71: {
    flexGrow: 1,
    width: wp("79.72222222222223%"),
    height: hp("5.46875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.96875%")
  },
  View_36_83: {
    flexGrow: 1,
    width: wp("34.44444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_36_83: {
    color: "rgba(105, 105, 105, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_56_5: {
    width: wp("79.72222222222223%"),
    minWidth: wp("79.72222222222223%"),
    height: hp("8.28125%"),
    minHeight: hp("8.28125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.11111111111111%"),
    top: hp("29.375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_72: {
    flexGrow: 1,
    width: wp("79.72222222222223%"),
    height: hp("5.3125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.96875%"),
    backgroundColor: "rgba(242, 240, 240, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_36_84: {
    flexGrow: 1,
    width: wp("34.44444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_36_84: {
    color: "rgba(105, 105, 105, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_56_6: {
    width: wp("79.72222222222223%"),
    minWidth: wp("79.72222222222223%"),
    height: hp("8.125%"),
    minHeight: hp("8.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.11111111111111%"),
    top: hp("37.8125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_73: {
    flexGrow: 1,
    width: wp("79.72222222222223%"),
    height: hp("5.3125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.8125%"),
    backgroundColor: "rgba(242, 240, 240, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_36_85: {
    flexGrow: 1,
    width: wp("34.44444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_36_85: {
    color: "rgba(105, 105, 105, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_56_10: {
    width: wp("79.72222222222223%"),
    minWidth: wp("79.72222222222223%"),
    height: hp("8.28125%"),
    minHeight: hp("8.28125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.11111111111111%"),
    top: hp("70.78125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_76: {
    flexGrow: 1,
    width: wp("79.72222222222223%"),
    height: hp("5.3125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.96875%"),
    backgroundColor: "rgba(242, 240, 240, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_36_87: {
    flexGrow: 1,
    width: wp("34.44444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_36_87: {
    color: "rgba(105, 105, 105, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_56_11: {
    width: wp("79.72222222222223%"),
    minWidth: wp("79.72222222222223%"),
    height: hp("8.28125%"),
    minHeight: hp("8.28125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.11111111111111%"),
    top: hp("79.0625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_78: {
    flexGrow: 1,
    width: wp("79.72222222222223%"),
    height: hp("5.46875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.8125%"),
    backgroundColor: "rgba(242, 240, 240, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_36_90: {
    flexGrow: 1,
    width: wp("34.44444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_36_90: {
    color: "rgba(105, 105, 105, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_56_7: {
    width: wp("90.83333333333333%"),
    minWidth: wp("90.83333333333333%"),
    height: hp("7.968749999999999%"),
    minHeight: hp("7.968749999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("46.25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_74: {
    flexGrow: 1,
    width: wp("79.72222222222223%"),
    height: hp("5.3125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.11111111111111%"),
    top: hp("2.65625%"),
    backgroundColor: "rgba(242, 240, 240, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_36_86: {
    flexGrow: 1,
    width: wp("34.44444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.11111111111111%"),
    top: hp("0%")
  },
  Text_36_86: {
    color: "rgba(105, 105, 105, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_38_1: {
    flexGrow: 1,
    width: wp("9.722222222222223%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.8125%")
  },
  View_56_8: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("8.125%"),
    minHeight: hp("8.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333334%"),
    top: hp("54.53125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_75: {
    flexGrow: 1,
    width: wp("79.72222222222223%"),
    height: hp("5.3125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.277777777777777%"),
    top: hp("2.5%"),
    backgroundColor: "rgba(242, 240, 240, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_36_89: {
    flexGrow: 1,
    width: wp("34.44444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.277777777777777%"),
    top: hp("0%")
  },
  Text_36_89: {
    color: "rgba(105, 105, 105, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_38_4: {
    flexGrow: 1,
    width: wp("9.444444444444445%"),
    height: hp("5.625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5625%")
  },
  View_56_9: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("8.28125%"),
    minHeight: hp("8.28125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333334%"),
    top: hp("62.5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_36_77: {
    flexGrow: 1,
    width: wp("79.72222222222223%"),
    height: hp("5.3125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.277777777777777%"),
    top: hp("2.96875%"),
    backgroundColor: "rgba(242, 240, 240, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_36_88: {
    flexGrow: 1,
    width: wp("34.44444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.277777777777777%"),
    top: hp("0%")
  },
  Text_36_88: {
    color: "rgba(105, 105, 105, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_39_0: {
    flexGrow: 1,
    width: wp("8.333333333333332%"),
    height: hp("5.3125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.96875%")
  },
  View_56_12: {
    width: wp("90.55555555555556%"),
    minWidth: wp("90.55555555555556%"),
    height: hp("5.625%"),
    minHeight: hp("5.625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.833333333333333%"),
    top: hp("91.40625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_39_3: {
    flexGrow: 1,
    width: wp("90.55555555555556%"),
    height: hp("5.625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_39_4: {
    flexGrow: 1,
    width: wp("62.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.777777777777779%"),
    top: hp("0.46875%")
  },
  Text_39_4: {
    color: "rgba(79, 76, 87, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

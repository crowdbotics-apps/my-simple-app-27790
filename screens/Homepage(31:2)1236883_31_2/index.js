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
      <View style={styles.View_36_1}>
        <View style={styles.View_31_13} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0aec/f0b9/5f1c0a3f6c533aba367f8d0e1cae6063"
          }}
          style={styles.ImageBackground_31_14}
        />
      </View>
      <View style={styles.View_119_1}>
        <View style={styles.View_39_6}>
          <View style={styles.View_I39_6_31_13} />
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("36_3"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0aec/f0b9/5f1c0a3f6c533aba367f8d0e1cae6063"
              }}
              style={styles.ImageBackground_I39_6_31_14}
            />
          </TouchableOpacity>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8fcb/5a89/6653bf5bc4d316cc9691ee6013a1c400"
          }}
          style={styles.ImageBackground_119_0}
        />
      </View>
      <View style={styles.View_55_14}>
        <View style={styles.View_91_0}>
          <Text style={styles.Text_91_0}>AUDIT 5S</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/071d/d033/06497283896341f17abbeab0db609413"
          }}
          style={styles.ImageBackground_39_10}
        />
        <View style={styles.View_95_0}>
          <Text style={styles.Text_95_0}>AUDIT 5S</Text>
        </View>
      </View>
      <View style={styles.View_55_19}>
        <View style={styles.View_55_17} />
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("50_24"))
          }
        >
          <View style={styles.View_55_18}>
            <Text style={styles.Text_55_18}>COMMENCEZ MAINTENANT </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_36_1: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.5%"),
    minHeight: hp("7.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("92.5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_13: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("7.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_31_14: {
    flexGrow: 1,
    width: wp("75%"),
    height: hp("4.0625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.61111111111111%"),
    top: hp("1.71875%")
  },
  View_119_1: {
    width: wp("104.72222222222223%"),
    minWidth: wp("104.72222222222223%"),
    height: hp("48.4375%"),
    minHeight: hp("48.4375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3.6111111111111107%"),
    top: hp("51.5625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_39_6: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("7.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6111111111111107%"),
    top: hp("40.9375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I39_6_31_13: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("7.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I39_6_31_14: {
    flexGrow: 1,
    width: wp("75%"),
    height: hp("4.0625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.61111111111111%"),
    top: hp("1.71875%")
  },
  ImageBackground_119_0: {
    flexGrow: 1,
    width: wp("104.72222222222223%"),
    height: hp("43.4375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_55_14: {
    width: wp("104.72222222222223%"),
    minWidth: wp("104.72222222222223%"),
    height: hp("42.1875%"),
    minHeight: hp("42.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.722222222222222%"),
    top: hp("-0.9375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_91_0: {
    flexGrow: 1,
    width: wp("23.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.5%"),
    top: hp("1.71875%")
  },
  Text_91_0: {
    color: "rgba(79, 76, 87, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_39_10: {
    flexGrow: 1,
    width: wp("104.72222222222223%"),
    height: hp("42.18749523162842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9444444444444446%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_95_0: {
    flexGrow: 1,
    width: wp("23.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.5%"),
    top: hp("2.5%")
  },
  Text_95_0: {
    color: "rgba(79, 76, 87, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_55_19: {
    width: wp("103.33333333333334%"),
    minWidth: wp("103.33333333333334%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.2222222222222223%"),
    top: hp("39.6875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_17: {
    flexGrow: 1,
    width: wp("103.33333333333334%"),
    height: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_55_18: {
    flexGrow: 1,
    width: wp("76.38888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.166666666666668%"),
    top: hp("5.625%")
  },
  Text_55_18: {
    color: "rgba(79, 76, 87, 1)",
    fontSize: 16,
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

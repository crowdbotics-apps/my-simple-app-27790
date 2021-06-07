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
      <View style={styles.View_59_24}>
        <Text style={styles.Text_59_24}>AUDIT 5S</Text>
      </View>
      <View style={styles.View_67_52}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0670/5730/c5d83ad50348747395a91b532f85f6c9"
          }}
          style={styles.ImageBackground_I67_52_36_71}
        />
        <View style={styles.View_I67_52_36_83}>
          <Text style={styles.Text_I67_52_36_83}>Nom</Text>
        </View>
      </View>
      <View style={styles.View_67_53}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5aa/ffa5/cd69c20b2f27c01879aa9dc9462ac4eb"
          }}
          style={styles.ImageBackground_I67_53_36_71}
        />
        <View style={styles.View_I67_53_36_83}>
          <Text style={styles.Text_I67_53_36_83}>Numéro de la Zone</Text>
        </View>
      </View>
      <View style={styles.View_67_54}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fc6/36f1/842baee96b8aac1fbf34b0d0918d95cd"
          }}
          style={styles.ImageBackground_I67_54_36_71}
        />
        <View style={styles.View_I67_54_36_83}>
          <Text style={styles.Text_I67_54_36_83}>Responsable </Text>
        </View>
      </View>
      <View style={styles.View_67_64}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4992/790b/f60246701d7a93a52bed9377de93c90d"
          }}
          style={styles.ImageBackground_67_55}
        />
        <View style={styles.View_67_56}>
          <Text style={styles.Text_67_56}>+ Ajouter</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f480/f09d/8831fa292eb21855b31c4fa16d3f1e86"
        }}
        style={styles.ImageBackground_74_5}
      />
      <View style={styles.View_74_4}>
        <Text style={styles.Text_74_4}>Créer une nouvelle Zone </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_59_24: {
    width: wp("23.333333333333332%"),
    minWidth: wp("23.333333333333332%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_59_24: {
    color: "rgba(79, 76, 87, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_52: {
    width: wp("90.27777777777779%"),
    minWidth: wp("90.27777777777779%"),
    height: hp("8.59375%"),
    minHeight: hp("8.59375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%"),
    top: hp("53.59374999999999%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I67_52_36_71: {
    flexGrow: 1,
    width: wp("90.27777777777779%"),
    height: hp("5.570023059844971%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.0237269401550364%")
  },
  View_I67_52_36_83: {
    flexGrow: 1,
    width: wp("39.00503370496962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I67_52_36_83: {
    color: "rgba(105, 105, 105, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_53: {
    width: wp("91.38888888888889%"),
    minWidth: wp("91.38888888888889%"),
    height: hp("8.4375%"),
    minHeight: hp("8.4375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("42.34375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I67_53_36_71: {
    flexGrow: 1,
    width: wp("91.38888888888889%"),
    height: hp("5.46875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.96875%")
  },
  View_I67_53_36_83: {
    flexGrow: 1,
    width: wp("39.48509216308594%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I67_53_36_83: {
    color: "rgba(105, 105, 105, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_54: {
    width: wp("90.27777777777779%"),
    minWidth: wp("90.27777777777779%"),
    height: hp("9.84375%"),
    minHeight: hp("9.84375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%"),
    top: hp("65%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I67_54_36_71: {
    flexGrow: 1,
    width: wp("90.27777777777779%"),
    height: hp("6.380208730697631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.463541269302368%")
  },
  View_I67_54_36_83: {
    flexGrow: 1,
    width: wp("39.00503370496962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I67_54_36_83: {
    color: "rgba(105, 105, 105, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_64: {
    width: wp("23.333333333333332%"),
    minWidth: wp("23.333333333333332%"),
    height: hp("4.375%"),
    minHeight: hp("4.375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.05555555555556%"),
    top: hp("79.84375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_67_55: {
    flexGrow: 1,
    width: wp("23.333333333333332%"),
    height: hp("4.0625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.15625%")
  },
  View_67_56: {
    flexGrow: 1,
    width: wp("18.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("0%")
  },
  Text_67_56: {
    color: "rgba(49, 34, 82, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_74_5: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.75%"),
    resizeMode: "cover"
  },
  View_74_4: {
    width: wp("94.16666666666667%"),
    top: hp("28.4375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777777%")
  },
  Text_74_4: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
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

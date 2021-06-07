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
      <View style={styles.View_59_11}>
        <Text style={styles.Text_59_11}>AUDIT 5S</Text>
      </View>
      <View style={styles.View_67_30}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24d7/6674/00b083092fe685af3d44ce8653c1d6e0"
          }}
          style={styles.ImageBackground_I67_30_36_71}
        />
        <View style={styles.View_I67_30_36_83}>
          <Text style={styles.Text_I67_30_36_83}>Numero de l’Audit</Text>
        </View>
      </View>
      <View style={styles.View_67_36}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24d7/6674/00b083092fe685af3d44ce8653c1d6e0"
          }}
          style={styles.ImageBackground_I67_36_36_71}
        />
        <View style={styles.View_I67_36_36_83}>
          <Text style={styles.Text_I67_36_36_83}>Date</Text>
        </View>
      </View>
      <View style={styles.View_67_42}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24d7/6674/00b083092fe685af3d44ce8653c1d6e0"
          }}
          style={styles.ImageBackground_I67_42_36_71}
        />
        <View style={styles.View_I67_42_36_83}>
          <Text style={styles.Text_I67_42_36_83}>TauxMin</Text>
        </View>
      </View>
      <View style={styles.View_67_31}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8381/d37f/e8f67fac9f7dbff2acb6b3cb9ef62f51"
          }}
          style={styles.ImageBackground_I67_31_36_71}
        />
        <View style={styles.View_I67_31_36_83}>
          <Text style={styles.Text_I67_31_36_83}>Zone</Text>
        </View>
      </View>
      <View style={styles.View_67_43}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c41/38be/bb60abdd1b1d4582ed79ce543e9e9e19"
          }}
          style={styles.ImageBackground_I67_43_36_71}
        />
        <View style={styles.View_I67_43_36_83}>
          <Text style={styles.Text_I67_43_36_83}>Auditeur</Text>
        </View>
      </View>
      <View style={styles.View_67_63}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4992/790b/f60246701d7a93a52bed9377de93c90d"
          }}
          style={styles.ImageBackground_67_49}
        />
        <View style={styles.View_67_50}>
          <Text style={styles.Text_67_50}>+ Ajouter</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f480/f09d/8831fa292eb21855b31c4fa16d3f1e86"
        }}
        style={styles.ImageBackground_74_6}
      />
      <View style={styles.View_59_12}>
        <Text style={styles.Text_59_12}> Créez un nouveau Audit </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_59_11: {
    width: wp("23.333333333333332%"),
    minWidth: wp("23.333333333333332%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_59_11: {
    color: "rgba(79, 76, 87, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_30: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("8.59375%"),
    minHeight: hp("8.59375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.833333333333333%"),
    top: hp("35.15625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I67_30_36_71: {
    flexGrow: 1,
    width: wp("85%"),
    height: hp("5.570023059844971%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.0237269401550293%")
  },
  View_I67_30_36_83: {
    flexGrow: 1,
    width: wp("36.72473907470703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I67_30_36_83: {
    color: "rgba(105, 105, 105, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_36: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("8.59375%"),
    minHeight: hp("8.59375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.833333333333333%"),
    top: hp("55.00000000000001%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I67_36_36_71: {
    flexGrow: 1,
    width: wp("85%"),
    height: hp("5.570023059844971%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.023726940155022%")
  },
  View_I67_36_36_83: {
    flexGrow: 1,
    width: wp("36.72473907470703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I67_36_36_83: {
    color: "rgba(105, 105, 105, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_42: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("8.59375%"),
    minHeight: hp("8.59375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.833333333333333%"),
    top: hp("66.71875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I67_42_36_71: {
    flexGrow: 1,
    width: wp("85%"),
    height: hp("5.570023059844971%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.0237269401550293%")
  },
  View_I67_42_36_83: {
    flexGrow: 1,
    width: wp("36.72473907470703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I67_42_36_83: {
    color: "rgba(105, 105, 105, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_31: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("8.4375%"),
    minHeight: hp("8.4375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.833333333333333%"),
    top: hp("45.15625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I67_31_36_71: {
    flexGrow: 1,
    width: wp("85%"),
    height: hp("5.46875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.96875%")
  },
  View_I67_31_36_83: {
    flexGrow: 1,
    width: wp("36.72473907470703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I67_31_36_83: {
    color: "rgba(105, 105, 105, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_43: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("9.0625%"),
    minHeight: hp("9.0625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.833333333333333%"),
    top: hp("76.71875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I67_43_36_71: {
    flexGrow: 1,
    width: wp("85%"),
    height: hp("5.873842239379883%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.188657760620117%")
  },
  View_I67_43_36_83: {
    flexGrow: 1,
    width: wp("36.72473907470703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I67_43_36_83: {
    color: "rgba(105, 105, 105, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_63: {
    width: wp("23.333333333333332%"),
    minWidth: wp("23.333333333333332%"),
    height: hp("4.375%"),
    minHeight: hp("4.375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.5%"),
    top: hp("92.96875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_67_49: {
    flexGrow: 1,
    width: wp("23.333333333333332%"),
    height: hp("4.0625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.3125%")
  },
  View_67_50: {
    flexGrow: 1,
    width: wp("18.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("0%")
  },
  Text_67_50: {
    color: "rgba(49, 34, 82, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_74_6: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.375%"),
    resizeMode: "cover"
  },
  View_59_12: {
    width: wp("88.33333333333333%"),
    top: hp("28.59375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-13.333333333333334%")
  },
  Text_59_12: {
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

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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f480/f09d/8831fa292eb21855b31c4fa16d3f1e86"
        }}
        style={styles.ImageBackground_70_40}
      />
      <View style={styles.View_70_41}>
        <Text style={styles.Text_70_41}>AUDIT 5S</Text>
      </View>
      <View style={styles.View_70_42}>
        <Text style={styles.Text_70_42}>Créer un Plan d’Action</Text>
      </View>
      <View style={styles.View_70_43}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aed5/f2cd/2bc7e4b2225c0ccec1e1d86c32afbb7f"
          }}
          style={styles.ImageBackground_70_44}
        />
        <View style={styles.View_70_45}>
          <Text style={styles.Text_70_45}>Numéro du Plan d’Action</Text>
        </View>
      </View>
      <View style={styles.View_70_46}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/856c/36df/79e7e44fa9794117b714e5db37d4a060"
          }}
          style={styles.ImageBackground_I70_46_36_71}
        />
        <View style={styles.View_I70_46_36_83}>
          <Text style={styles.Text_I70_46_36_83}>Numéro d’Audit</Text>
        </View>
      </View>
      <View style={styles.View_70_47}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81d0/548f/53298ad0639ddeb62a0b89ff4d434959"
          }}
          style={styles.ImageBackground_I70_47_67_55}
        />
        <View style={styles.View_I70_47_67_56}>
          <Text style={styles.Text_I70_47_67_56}>+ Ajouter</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  ImageBackground_70_40: {
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
  View_70_41: {
    width: wp("23.333333333333332%"),
    minWidth: wp("23.333333333333332%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_70_41: {
    color: "rgba(79, 76, 87, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_70_42: {
    width: wp("94.16666666666667%"),
    top: hp("28.4375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.277777777777778%")
  },
  Text_70_42: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_70_43: {
    width: wp("88.05555555555556%"),
    minWidth: wp("88.05555555555556%"),
    height: hp("9.84375%"),
    minHeight: hp("9.84375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.277777777777778%"),
    top: hp("47.34375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_70_44: {
    width: wp("88.05555555555556%"),
    height: hp("6.380208730697631%"),
    top: hp("3.463541567325599%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_70_45: {
    width: wp("86.38888888888889%"),
    top: hp("-0.625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_70_45: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_70_46: {
    width: wp("87.77777777777777%"),
    minWidth: wp("87.77777777777777%"),
    height: hp("8.59375%"),
    minHeight: hp("8.59375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("59.21875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I70_46_36_71: {
    flexGrow: 1,
    width: wp("87.77777777777777%"),
    height: hp("5.570023059844971%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.0237269401550364%")
  },
  View_I70_46_36_83: {
    flexGrow: 1,
    width: wp("37.92489369710286%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I70_46_36_83: {
    color: "rgba(105, 105, 105, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_70_47: {
    width: wp("22.77777777777778%"),
    minWidth: wp("22.77777777777778%"),
    height: hp("4.21875%"),
    minHeight: hp("4.21875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.55555555555556%"),
    top: hp("72.8125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I70_47_67_55: {
    flexGrow: 1,
    width: wp("22.77777777777778%"),
    height: hp("3.917410969734192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.15066862106323242%")
  },
  View_I70_47_67_56: {
    flexGrow: 1,
    width: wp("18.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4404568142361%"),
    top: hp("0%")
  },
  Text_I70_47_67_56: {
    color: "rgba(49, 34, 82, 1)",
    fontSize: 12,
    fontWeight: "400",
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

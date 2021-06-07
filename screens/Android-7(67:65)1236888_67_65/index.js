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
        style={styles.ImageBackground_67_66}
      />
      <View style={styles.View_67_67}>
        <Text style={styles.Text_67_67}>AUDIT 5S</Text>
      </View>
      <View style={styles.View_67_68}>
        <Text style={styles.Text_67_68}>Créer un nouveau Standard </Text>
      </View>
      <View style={styles.View_70_8}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a65/86e6/f936ec421d8a6865ea472100e713e01f"
          }}
          style={styles.ImageBackground_70_9}
        />
        <View style={styles.View_70_13}>
          <Text style={styles.Text_70_13}>ValStandard</Text>
        </View>
      </View>
      <View style={styles.View_67_71}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/856c/36df/79e7e44fa9794117b714e5db37d4a060"
          }}
          style={styles.ImageBackground_I67_71_36_71}
        />
        <View style={styles.View_I67_71_36_83}>
          <Text style={styles.Text_I67_71_36_83}>Zone</Text>
        </View>
      </View>
      <View style={styles.View_70_4}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5629/1c61/86908b59295159856214be65b55b13a8"
          }}
          style={styles.ImageBackground_I70_4_36_71}
        />
        <View style={styles.View_I70_4_36_83}>
          <Text style={styles.Text_I70_4_36_83}>Description</Text>
        </View>
      </View>
      <View style={styles.View_70_10}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/856c/36df/79e7e44fa9794117b714e5db37d4a060"
          }}
          style={styles.ImageBackground_I70_10_36_71}
        />
        <View style={styles.View_I70_10_36_83}>
          <Text style={styles.Text_I70_10_36_83}>Date de création</Text>
        </View>
      </View>
      <View style={styles.View_67_72}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81d0/548f/53298ad0639ddeb62a0b89ff4d434959"
          }}
          style={styles.ImageBackground_I67_72_67_55}
        />
        <View style={styles.View_I67_72_67_56}>
          <Text style={styles.Text_I67_72_67_56}>+ Ajouter</Text>
        </View>
      </View>
      <View style={styles.View_70_80}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aed5/f2cd/2bc7e4b2225c0ccec1e1d86c32afbb7f"
          }}
          style={styles.ImageBackground_69_1}
        />
        <View style={styles.View_70_1}>
          <Text style={styles.Text_70_1}>Numéro du Standard </Text>
        </View>
      </View>
      <View style={styles.View_70_81}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4b5/4445/070df1752f432c95feb91cdfdf8337ff"
          }}
          style={styles.ImageBackground_70_3}
        />
        <View style={styles.View_70_5}>
          <Text style={styles.Text_70_5}>Categorie</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  ImageBackground_67_66: {
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
  View_67_67: {
    width: wp("23.333333333333332%"),
    minWidth: wp("23.333333333333332%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_67_67: {
    color: "rgba(79, 76, 87, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_68: {
    width: wp("94.16666666666667%"),
    top: hp("28.281250000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777777%")
  },
  Text_67_68: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_70_8: {
    width: wp("88.61111111111111%"),
    minWidth: wp("88.61111111111111%"),
    height: hp("9.375%"),
    minHeight: hp("9.375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("72.5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_70_9: {
    width: wp("88.61111111111111%"),
    height: hp("6.07638955116272%"),
    top: hp("3.298611640930176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_70_13: {
    width: wp("28.888888888888886%"),
    top: hp("0.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_70_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_71: {
    width: wp("87.77777777777777%"),
    minWidth: wp("87.77777777777777%"),
    height: hp("8.59375%"),
    minHeight: hp("8.59375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("45.625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I67_71_36_71: {
    flexGrow: 1,
    width: wp("87.77777777777777%"),
    height: hp("5.570023059844971%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.0237269401550293%")
  },
  View_I67_71_36_83: {
    flexGrow: 1,
    width: wp("37.92489369710286%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I67_71_36_83: {
    color: "rgba(105, 105, 105, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_70_4: {
    width: wp("87.77777777777777%"),
    minWidth: wp("87.77777777777777%"),
    height: hp("8.75%"),
    minHeight: hp("8.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("64.53125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I70_4_36_71: {
    flexGrow: 1,
    width: wp("87.77777777777777%"),
    height: hp("5.671296119689941%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.0787038803100586%")
  },
  View_I70_4_36_83: {
    flexGrow: 1,
    width: wp("37.92489369710286%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I70_4_36_83: {
    color: "rgba(105, 105, 105, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_70_10: {
    width: wp("87.77777777777777%"),
    minWidth: wp("87.77777777777777%"),
    height: hp("8.59375%"),
    minHeight: hp("8.59375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("81.875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I70_10_36_71: {
    flexGrow: 1,
    width: wp("87.77777777777777%"),
    height: hp("5.570023059844971%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.0237269401550293%")
  },
  View_I70_10_36_83: {
    flexGrow: 1,
    width: wp("37.92489369710286%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I70_10_36_83: {
    color: "rgba(105, 105, 105, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_72: {
    width: wp("22.77777777777778%"),
    minWidth: wp("22.77777777777778%"),
    height: hp("4.21875%"),
    minHeight: hp("4.21875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.88888888888889%"),
    top: hp("93.28125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I67_72_67_55: {
    flexGrow: 1,
    width: wp("22.77777777777778%"),
    height: hp("3.917410969734192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.15067100524902344%")
  },
  View_I67_72_67_56: {
    flexGrow: 1,
    width: wp("18.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4404568142361143%"),
    top: hp("0%")
  },
  Text_I67_72_67_56: {
    color: "rgba(49, 34, 82, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_70_80: {
    width: wp("88.05555555555556%"),
    minWidth: wp("88.05555555555556%"),
    height: hp("9.687498807907104%"),
    minHeight: hp("9.687498807907104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.277777777777778%"),
    top: hp("35.625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_69_1: {
    flexGrow: 1,
    width: wp("88.05555555555556%"),
    height: hp("6.380208730697631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.3072900772094727%")
  },
  View_70_1: {
    flexGrow: 1,
    width: wp("86.38888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_70_1: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_70_81: {
    width: wp("88.05555555555556%"),
    minWidth: wp("88.05555555555556%"),
    height: hp("8.750000596046448%"),
    minHeight: hp("8.750000596046448%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.277777777777778%"),
    top: hp("55.46875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_70_3: {
    flexGrow: 1,
    width: wp("87.77777777777777%"),
    height: hp("6.076388955116272%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2777777777777777%"),
    top: hp("2.673611640930176%")
  },
  View_70_5: {
    flexGrow: 1,
    width: wp("86.38888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_70_5: {
    color: "rgba(0, 0, 0, 1)",
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

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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96e8/2147/70d27c20e77ab2f4449cf550ca03ad3d"
        }}
        style={styles.ImageBackground_57_8}
      />
      <View style={styles.View_41_8}>
        <Text style={styles.Text_41_8}>AUDIT 5S</Text>
      </View>
      <View style={styles.View_50_60}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ab/fae3/bad88ecc5f51d5b59ce62f4d1691c628"
          }}
          style={styles.ImageBackground_57_2}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c566/4ad5/66a3bd43fb92263eeedff646630fec30"
          }}
          style={styles.ImageBackground_57_3}
        />
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("59_9"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4ce/c77f/fc3e2546daef0cb721f7ea0c5d9b6ae7"
            }}
            style={styles.ImageBackground_50_64}
          />
        </TouchableOpacity>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4ce/c77f/fc3e2546daef0cb721f7ea0c5d9b6ae7"
          }}
          style={styles.ImageBackground_50_75}
        />
      </View>
      <View style={styles.View_50_67}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5a0/ecc3/bfbdff997dda16f1d1080a2c5f8987a0"
          }}
          style={styles.ImageBackground_50_68}
        />
        <View style={styles.View_50_69}>
          <Text style={styles.Text_50_69}>CATÈGORIES</Text>
        </View>
        <View style={styles.View_50_70}>
          <Text style={styles.Text_50_70}>STANDARDS</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("70_14"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af3f/41ee/0a29e45468d86aa711482461adda0a5f"
            }}
            style={styles.ImageBackground_50_78}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("67_65"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c51/ce5b/f7c7d803fec24d5090bbdb7a69e75aca"
            }}
            style={styles.ImageBackground_50_81}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_50_71}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e295/f749/228cef35f09cd65aaa63ee08a000daab"
          }}
          style={styles.ImageBackground_50_72}
        />
        <View style={styles.View_50_73}>
          <Text style={styles.Text_50_73}>UTILISATEURS</Text>
        </View>
        <View style={styles.View_50_74}>
          <Text style={styles.Text_50_74}>AUDITEURS</Text>
        </View>
      </View>
      <View style={styles.View_50_23}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7010/6188/440a0ec82fe716699869d87cd3c378dd"
          }}
          style={styles.ImageBackground_50_20}
        />
        <View style={styles.View_50_21}>
          <Text style={styles.Text_50_21}>PLANS D’ACTION</Text>
        </View>
        <View style={styles.View_50_22}>
          <Text style={styles.Text_50_22}>ACTIONS</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("70_39"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eae5/7069/877e4cf740b3a246a07e00049f4f5533"
            }}
            style={styles.ImageBackground_50_90}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("70_52"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eae5/7069/877e4cf740b3a246a07e00049f4f5533"
            }}
            style={styles.ImageBackground_50_99}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  ImageBackground_57_8: {
    width: wp("108.88888888888889%"),
    height: hp("22.34375%"),
    top: hp("4.375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5.277777777777778%"),
    resizeMode: "cover",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_41_8: {
    width: wp("23.333333333333332%"),
    minWidth: wp("23.333333333333332%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_41_8: {
    color: "rgba(79, 76, 87, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_50_60: {
    width: wp("110.00000000000001%"),
    minWidth: wp("110.00000000000001%"),
    height: hp("19.375%"),
    minHeight: hp("19.375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.78125%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_57_2: {
    width: wp("22.528904808892143%"),
    height: hp("2.226586639881134%"),
    top: hp("2.921624183654785%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1095954047309027%")
  },
  ImageBackground_57_3: {
    width: wp("19.33955298529731%"),
    height: hp("2.22658634185791%"),
    top: hp("11.532740592956543%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.6027323404948%")
  },
  ImageBackground_50_64: {
    width: wp("7.232875823974609%"),
    height: hp("3.690475821495056%"),
    top: hp("2.1527767181396484%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.835611979166664%")
  },
  ImageBackground_50_75: {
    width: wp("7.232869466145833%"),
    height: hp("3.6904752254486084%"),
    top: hp("11.840276718139648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.90411376953125%")
  },
  View_50_67: {
    width: wp("102.77777777777777%"),
    minWidth: wp("102.77777777777777%"),
    height: hp("22.65625%"),
    minHeight: hp("22.65625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.3888888888888888%"),
    top: hp("28.90625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_50_68: {
    width: wp("102.77777777777777%"),
    height: hp("22.65625%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_50_69: {
    width: wp("34.72222222222222%"),
    top: hp("14.53125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.166666666666664%")
  },
  Text_50_69: {
    color: "rgba(38, 44, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_50_70: {
    width: wp("33.611111111111114%"),
    top: hp("2.1874999999999964%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.777777777777777%")
  },
  Text_50_70: {
    color: "rgba(38, 44, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_50_78: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("14.6875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.66666666666667%")
  },
  ImageBackground_50_81: {
    width: wp("6.666666666666667%"),
    height: hp("3.75%"),
    top: hp("2.1874999999999964%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.388888888888886%")
  },
  View_50_71: {
    width: wp("101.94444444444444%"),
    minWidth: wp("101.94444444444444%"),
    height: hp("21.71875%"),
    minHeight: hp("21.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.5555555555555556%"),
    top: hp("53.75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_50_72: {
    width: wp("101.94444444444444%"),
    height: hp("21.71875%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_50_73: {
    width: wp("39.93987613254123%"),
    top: hp("5.4296875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7930026584201384%")
  },
  Text_50_73: {
    color: "rgba(38, 44, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_50_74: {
    width: wp("32.3987791273329%"),
    top: hp("16.2890625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.490865071614586%")
  },
  Text_50_74: {
    color: "rgba(38, 44, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_50_23: {
    width: wp("113.61111111111111%"),
    minWidth: wp("113.61111111111111%"),
    height: hp("22.1875%"),
    minHeight: hp("22.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.3888888888888888%"),
    top: hp("77.8125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_50_20: {
    flexGrow: 1,
    width: wp("113.61111111111111%"),
    height: hp("22.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_50_21: {
    flexGrow: 1,
    width: wp("52.38734351264106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2623426649305556%"),
    top: hp("1.183333396911621%")
  },
  Text_50_21: {
    color: "rgba(38, 44, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_50_22: {
    flexGrow: 1,
    width: wp("28.08719211154514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.592583550347214%"),
    top: hp("14.347915649414062%")
  },
  Text_50_22: {
    color: "rgba(38, 44, 43, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_50_90: {
    flexGrow: 1,
    width: wp("7.574072943793403%"),
    height: hp("3.5499998927116394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.44444444444444%"),
    top: hp("1.40625%")
  },
  ImageBackground_50_99: {
    flexGrow: 1,
    width: wp("7.574072943793403%"),
    height: hp("3.550001382827759%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.62653266059027%"),
    top: hp("14.347915649414062%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

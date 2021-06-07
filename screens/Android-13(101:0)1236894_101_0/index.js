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
      <View style={styles.View_101_1}>
        <Text style={styles.Text_101_1}>AUDIT 5S</Text>
      </View>
      <View style={styles.View_101_3}>
        <View style={styles.View_I101_3_79_26}>
          <View style={styles.View_I101_3_79_26_78_1}>
            <Text style={styles.Text_I101_3_79_26_78_1}> Score:</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7071/9188/363884e83dd9ea06196d634e0886f74f"
            }}
            style={styles.ImageBackground_I101_3_79_26_78_0}
          />
        </View>
        <View style={styles.View_I101_3_79_27}>
          <View style={styles.View_I101_3_79_27_78_1}>
            <Text style={styles.Text_I101_3_79_27_78_1}>Description :</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6a0/d01f/7257865676b17d9feeb933c39f65a4ba"
            }}
            style={styles.ImageBackground_I101_3_79_27_78_0}
          />
        </View>
        <View style={styles.View_I101_3_79_49}>
          <View style={styles.View_I101_3_79_49_78_1}>
            <Text style={styles.Text_I101_3_79_49_78_1}>Numéro :</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2558/7d68/2bbaa31e51895b5f91a8b26edcdfeb6a"
            }}
            style={styles.ImageBackground_I101_3_79_49_78_0}
          />
        </View>
      </View>
      <View style={styles.View_101_4} />
      <View style={styles.View_101_5}>
        <View style={styles.View_I101_5_79_19} />
        <View style={styles.View_I101_5_79_21}>
          <Text style={styles.Text_I101_5_79_21}>Enregistrer</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("77_0"))
        }
      >
        <View style={styles.View_101_6}>
          <View style={styles.View_I101_6_79_19} />
          <View style={styles.View_I101_6_79_21}>
            <Text style={styles.Text_I101_6_79_21}>Annuler</Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_101_1: {
    width: wp("23.333333333333332%"),
    minWidth: wp("23.333333333333332%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_101_1: {
    color: "rgba(79, 76, 87, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_3: {
    width: wp("113.88888888888889%"),
    minWidth: wp("113.88888888888889%"),
    height: hp("22.03125%"),
    minHeight: hp("22.03125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6111111111111107%"),
    top: hp("20.9375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I101_3_79_26: {
    flexGrow: 1,
    width: wp("31.666666666666664%"),
    height: hp("4.53125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.05555555555554%"),
    top: hp("18.28125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I101_3_79_26_78_1: {
    flexGrow: 1,
    width: wp("31.135940551757812%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5307345920138999%"),
    top: hp("0%")
  },
  Text_I101_3_79_26_78_1: {
    color: "rgba(48, 21, 104, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I101_3_79_26_78_0: {
    flexGrow: 1,
    width: wp("24.41340340508355%"),
    height: hp("4.636627733707428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.11924266815185547%")
  },
  View_I101_3_79_27: {
    flexGrow: 1,
    width: wp("113.88888888888889%"),
    height: hp("11.40625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.4687499999999964%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I101_3_79_27_78_1: {
    flexGrow: 1,
    width: wp("111.98014153374567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.908772786458334%"),
    top: hp("0%")
  },
  Text_I101_3_79_27_78_1: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I101_3_79_27_78_0: {
    flexGrow: 1,
    width: wp("87.8025902642144%"),
    height: hp("11.671510934829712%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.3001666069030797%")
  },
  View_I101_3_79_49: {
    flexGrow: 1,
    width: wp("39.166666666666664%"),
    height: hp("4.6875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I101_3_79_49_78_1: {
    flexGrow: 1,
    width: wp("38.51024203830295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6564670138888893%"),
    top: hp("0%")
  },
  Text_I101_3_79_49_78_1: {
    color: "rgba(48, 21, 104, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I101_3_79_49_78_0: {
    flexGrow: 1,
    width: wp("30.19552654690213%"),
    height: hp("4.79651153087616%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.12335538864135742%")
  },
  View_101_4: {
    width: wp("94.72222222222221%"),
    minWidth: wp("94.72222222222221%"),
    height: hp("75.3125%"),
    minHeight: hp("75.3125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("10.46875%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(209, 180, 214, 1)",
    borderWidth: 1
  },
  View_101_5: {
    width: wp("40.55555555555556%"),
    minWidth: wp("40.55555555555556%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.61111111111111%"),
    top: hp("87.8125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I101_5_79_19: {
    flexGrow: 1,
    width: wp("40.55555555555556%"),
    height: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(48, 132, 180, 1)",
    borderColor: "rgba(242, 240, 240, 1)",
    borderWidth: 1
  },
  View_I101_5_79_21: {
    flexGrow: 1,
    width: wp("26.944444444444443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.611111111111114%"),
    top: hp("1.25%")
  },
  Text_I101_5_79_21: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_6: {
    width: wp("40.55555555555556%"),
    minWidth: wp("40.55555555555556%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.444444444444445%"),
    top: hp("87.8125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I101_6_79_19: {
    flexGrow: 1,
    width: wp("40.55555555555556%"),
    height: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(48, 132, 180, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  View_I101_6_79_21: {
    flexGrow: 1,
    width: wp("19.72222222222222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.611111111111109%"),
    top: hp("1.25%")
  },
  Text_I101_6_79_21: {
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

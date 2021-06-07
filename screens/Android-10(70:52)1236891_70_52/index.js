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
        style={styles.ImageBackground_79_18}
      />
      <View style={styles.View_70_54}>
        <Text style={styles.Text_70_54}>AUDIT 5S</Text>
      </View>
      <View style={styles.View_70_55}>
        <Text style={styles.Text_70_55}>Créer une Action </Text>
      </View>
      <View style={styles.View_70_56}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cdb/4bb0/d6fac767f2b451f3c5a8c7c774caac4a"
          }}
          style={styles.ImageBackground_70_57}
        />
        <View style={styles.View_70_58}>
          <Text style={styles.Text_70_58}>Numéro de l’Action</Text>
        </View>
      </View>
      <View style={styles.View_70_65}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d413/d616/40558ccaea9e2422a2d7e0534e58bf15"
          }}
          style={styles.ImageBackground_70_66}
        />
        <View style={styles.View_70_67}>
          <Text style={styles.Text_70_67}>Cause</Text>
        </View>
      </View>
      <View style={styles.View_70_71}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2789/dbde/23879a781dc2441fe52a1c49075c8190"
          }}
          style={styles.ImageBackground_70_72}
        />
        <View style={styles.View_70_73}>
          <Text style={styles.Text_70_73}>Délai</Text>
        </View>
      </View>
      <View style={styles.View_70_77}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc5/de2a/0d207f85f1135d043b485901b8aafc49"
          }}
          style={styles.ImageBackground_70_78}
        />
        <View style={styles.View_70_79}>
          <Text style={styles.Text_70_79}>Plan d’Action</Text>
        </View>
      </View>
      <View style={styles.View_70_59}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d413/d616/40558ccaea9e2422a2d7e0534e58bf15"
          }}
          style={styles.ImageBackground_I70_59_36_71}
        />
        <View style={styles.View_I70_59_36_83}>
          <Text style={styles.Text_I70_59_36_83}>Probléme</Text>
        </View>
      </View>
      <View style={styles.View_70_68}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e582/6dde/1f6b0e3d42b371537f65b6ad4b06e342"
          }}
          style={styles.ImageBackground_I70_68_36_71}
        />
        <View style={styles.View_I70_68_36_83}>
          <Text style={styles.Text_I70_68_36_83}>Action A Faire</Text>
        </View>
      </View>
      <View style={styles.View_70_74}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4da8/a3bd/19582dab17baae07e676e309c5128d57"
          }}
          style={styles.ImageBackground_I70_74_36_71}
        />
        <View style={styles.View_I70_74_36_83}>
          <Text style={styles.Text_I70_74_36_83}>Taux d’Efficacité</Text>
        </View>
      </View>
      <View style={styles.View_70_60}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81d0/548f/53298ad0639ddeb62a0b89ff4d434959"
          }}
          style={styles.ImageBackground_I70_60_67_55}
        />
        <View style={styles.View_I70_60_67_56}>
          <Text style={styles.Text_I70_60_67_56}>+ Ajouter</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  ImageBackground_79_18: {
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
  View_70_54: {
    width: wp("23.333333333333332%"),
    minWidth: wp("23.333333333333332%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_70_54: {
    color: "rgba(79, 76, 87, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_70_55: {
    width: wp("66.66666666666666%"),
    top: hp("27.65625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666666%")
  },
  Text_70_55: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_70_56: {
    width: wp("82.22222222222221%"),
    minWidth: wp("82.22222222222221%"),
    height: hp("6.09375%"),
    minHeight: hp("6.09375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222222%"),
    top: hp("35.625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_70_57: {
    width: wp("82.22222222222221%"),
    height: hp("3.94965261220932%"),
    top: hp("2.144097089767456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_70_58: {
    width: wp("80.66596137152777%"),
    top: hp("-0.3869044780731201%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_70_58: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_70_65: {
    width: wp("82.22222222222221%"),
    minWidth: wp("82.22222222222221%"),
    height: hp("6.71875%"),
    minHeight: hp("6.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222222%"),
    top: hp("48.4375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_70_66: {
    width: wp("82.22222222222221%"),
    height: hp("4.354745447635651%"),
    top: hp("2.3640045523643494%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_70_67: {
    width: wp("80.66596137152777%"),
    top: hp("-0.42658731341362%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_70_67: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_70_71: {
    width: wp("82.5%"),
    minWidth: wp("82.5%"),
    height: hp("7.968749999999999%"),
    minHeight: hp("7.968749999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%"),
    top: hp("74.53125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_70_72: {
    width: wp("82.5%"),
    height: hp("5.164930820465088%"),
    top: hp("2.803819179534912%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_70_73: {
    width: wp("80.93848334418404%"),
    top: hp("-0.5059528350830078%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_70_73: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_70_77: {
    width: wp("82.22222222222221%"),
    minWidth: wp("82.22222222222221%"),
    height: hp("7.656250000000001%"),
    minHeight: hp("7.656250000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222222%"),
    top: hp("66.40625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_70_78: {
    width: wp("82.22222222222221%"),
    height: hp("4.962384402751923%"),
    top: hp("2.6938652992248535%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_70_79: {
    width: wp("80.66596137152777%"),
    top: hp("-0.4861116409301758%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_70_79: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_70_59: {
    width: wp("82.22222222222221%"),
    minWidth: wp("82.22222222222221%"),
    height: hp("6.71875%"),
    minHeight: hp("6.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222222%"),
    top: hp("41.71875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I70_59_36_71: {
    flexGrow: 1,
    width: wp("82.22222222222221%"),
    height: hp("4.354745447635651%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.3640048503875732%")
  },
  View_I70_59_36_83: {
    flexGrow: 1,
    width: wp("35.524582333034935%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I70_59_36_83: {
    color: "rgba(105, 105, 105, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_70_68: {
    width: wp("82.22222222222221%"),
    minWidth: wp("82.22222222222221%"),
    height: hp("9.6875%"),
    minHeight: hp("9.6875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222222%"),
    top: hp("55.15624999999999%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I70_68_36_71: {
    flexGrow: 1,
    width: wp("82.22222222222221%"),
    height: hp("6.278935074806213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.4085649251937937%")
  },
  View_I70_68_36_83: {
    flexGrow: 1,
    width: wp("35.524582333034935%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I70_68_36_83: {
    color: "rgba(105, 105, 105, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_70_74: {
    width: wp("82.5%"),
    minWidth: wp("82.5%"),
    height: hp("7.5%"),
    minHeight: hp("7.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%"),
    top: hp("84.0625%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I70_74_36_71: {
    flexGrow: 1,
    width: wp("82.5%"),
    height: hp("4.861111044883728%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.638888359069824%")
  },
  View_I70_74_36_83: {
    flexGrow: 1,
    width: wp("35.64459906684028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I70_74_36_83: {
    color: "rgba(105, 105, 105, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_70_60: {
    width: wp("22.77777777777778%"),
    minWidth: wp("22.77777777777778%"),
    height: hp("4.21875%"),
    minHeight: hp("4.21875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.44444444444444%"),
    top: hp("95.3125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I70_60_67_55: {
    flexGrow: 1,
    width: wp("22.77777777777778%"),
    height: hp("3.917410969734192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.15067100524902344%")
  },
  View_I70_60_67_56: {
    flexGrow: 1,
    width: wp("18.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4404568142361143%"),
    top: hp("0%")
  },
  Text_I70_60_67_56: {
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

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
      <View style={styles.View_77_2}>
        <Text style={styles.Text_77_2}>AUDIT 5S</Text>
      </View>
      <View style={styles.View_77_31}>
        <Text style={styles.Text_77_31}>Audit N°</Text>
      </View>
      <View style={styles.View_78_10}>
        <View style={styles.View_I78_10_78_1}>
          <Text style={styles.Text_I78_10_78_1}>Taux Respect Min:</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9da8/3754/8d09add717297fd6dacf70d77b1ed315"
          }}
          style={styles.ImageBackground_I78_10_78_0}
        />
      </View>
      <View style={styles.View_78_3}>
        <View style={styles.View_78_1}>
          <Text style={styles.Text_78_1}>Date :</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ef2/55d2/77653ff4d3b06379167d2962821ba4b4"
          }}
          style={styles.ImageBackground_78_0}
        />
      </View>
      <View style={styles.View_78_4}>
        <View style={styles.View_I78_4_78_1}>
          <Text style={styles.Text_I78_4_78_1}>Zone :</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f54a/7901/d14503cdf4898ac2dfb2eaa13d93d07c"
          }}
          style={styles.ImageBackground_I78_4_78_0}
        />
      </View>
      <View style={styles.View_78_7}>
        <View style={styles.View_I78_7_78_1}>
          <Text style={styles.Text_I78_7_78_1}>Taux Respect :</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f54a/7901/d14503cdf4898ac2dfb2eaa13d93d07c"
          }}
          style={styles.ImageBackground_I78_7_78_0}
        />
      </View>
      <View style={styles.View_79_8} />
      <View style={styles.View_79_14}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af48/bc9b/05b050df8532ea59a111e34287825f5b"
          }}
          style={styles.ImageBackground_79_6}
        />
        <View style={styles.View_79_9}>
          <Text style={styles.Text_79_9}> Catégories</Text>
        </View>
      </View>
      <View style={styles.View_79_17}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a843/ee15/555d169e29e55a40ba510f4eb7973094"
          }}
          style={styles.ImageBackground_79_13}
        />
        <View style={styles.View_79_16}>
          <Text style={styles.Text_79_16}>Éliminer</Text>
        </View>
      </View>
      <View style={styles.View_83_1} />
      <View style={styles.View_83_2}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e61/ab71/4f92cda9ef581a6bb11e1cc1e9eeeaa0"
          }}
          style={styles.ImageBackground_83_3}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_77_2: {
    width: wp("22.82608695652174%"),
    minWidth: wp("22.82608695652174%"),
    minHeight: hp("3.779527559055118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_77_2: {
    color: "rgba(79, 76, 87, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_77_31: {
    width: wp("49.184782608695656%"),
    minWidth: wp("49.184782608695656%"),
    minHeight: hp("16.062992125984252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.978260869565215%"),
    top: hp("-11.496062992125983%")
  },
  Text_77_31: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_78_10: {
    width: wp("59.78260869565217%"),
    minWidth: wp("59.78260869565217%"),
    height: hp("6.929133858267717%"),
    minHeight: hp("6.929133858267717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.815217391304344%"),
    top: hp("17.95275590551181%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I78_10_78_1: {
    flexGrow: 1,
    width: wp("58.780670166015625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0019717009171245%"),
    top: hp("0%")
  },
  Text_I78_10_78_1: {
    color: "rgba(48, 21, 104, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I78_10_78_0: {
    flexGrow: 1,
    width: wp("46.08937968378481%"),
    height: hp("7.090276883343074%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.182346133735237%")
  },
  View_78_3: {
    width: wp("59.78260869565217%"),
    minWidth: wp("59.78260869565217%"),
    height: hp("6.771653543307086%"),
    minHeight: hp("6.771653543307086%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0869565217391304%"),
    top: hp("9.133858267716535%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_78_1: {
    flexGrow: 1,
    width: wp("58.780670166015625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0019717009171196%"),
    top: hp("0%")
  },
  Text_78_1: {
    color: "rgba(242, 240, 240, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_78_0: {
    flexGrow: 1,
    width: wp("46.08937968378481%"),
    height: hp("6.929133858267717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1782010296198333%")
  },
  View_78_4: {
    width: wp("59.78260869565217%"),
    minWidth: wp("59.78260869565217%"),
    height: hp("7.086614173228346%"),
    minHeight: hp("7.086614173228346%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0869565217391304%"),
    top: hp("17.95275590551181%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I78_4_78_1: {
    flexGrow: 1,
    width: wp("58.780670166015625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0019717009171196%"),
    top: hp("0%")
  },
  Text_I78_4_78_1: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I78_4_78_0: {
    flexGrow: 1,
    width: wp("46.08937968378481%"),
    height: hp("7.251418706938977%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1864888348917333%")
  },
  View_78_7: {
    width: wp("59.78260869565217%"),
    minWidth: wp("59.78260869565217%"),
    height: hp("7.086614173228346%"),
    minHeight: hp("7.086614173228346%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.815217391304344%"),
    top: hp("9.133858267716535%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I78_7_78_1: {
    flexGrow: 1,
    width: wp("58.780670166015625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0019717009171245%"),
    top: hp("0%")
  },
  Text_I78_7_78_1: {
    color: "rgba(48, 21, 104, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I78_7_78_0: {
    flexGrow: 1,
    width: wp("46.08937968378481%"),
    height: hp("7.251418706938977%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.18648883489173151%")
  },
  View_79_8: {
    width: wp("90.48913043478261%"),
    minWidth: wp("90.48913043478261%"),
    height: hp("67.55905511811024%"),
    minHeight: hp("67.55905511811024%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.804347826086957%"),
    top: hp("29.92125984251969%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(209, 180, 214, 1)",
    borderWidth: 1
  },
  View_79_14: {
    width: wp("81.25%"),
    minWidth: wp("81.25%"),
    height: hp("5.669291338582677%"),
    minHeight: hp("5.669291338582677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.423913043478262%"),
    top: hp("32.44094488188976%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_79_6: {
    flexGrow: 1,
    width: wp("81.25%"),
    height: hp("5.669291338582677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_79_9: {
    flexGrow: 1,
    width: wp("61.684782608695656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.141304347826086%"),
    top: hp("0%")
  },
  Text_79_9: {
    color: "rgba(252, 250, 253, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_79_17: {
    width: wp("50.27173913043478%"),
    minWidth: wp("50.27173913043478%"),
    height: hp("6.929133858267717%"),
    minHeight: hp("6.929133858267717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.82608695652174%"),
    top: hp("51.49606299212598%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_79_13: {
    flexGrow: 1,
    width: wp("50.27173913043478%"),
    height: hp("5.826771653543307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.1023622047244146%")
  },
  View_79_16: {
    flexGrow: 1,
    width: wp("19.293478260869566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.489130434782606%"),
    top: hp("1.1023622047244146%")
  },
  Text_79_16: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_83_1: {
    width: wp("10.326086956521738%"),
    minWidth: wp("10.326086956521738%"),
    height: hp("5.196850393700787%"),
    minHeight: hp("5.196850393700787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.402173913043478%"),
    top: hp("82.51968503937009%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_83_2: {
    width: wp("10.555540997049082%"),
    height: hp("3.6059474194143704%"),
    top: hp("84.53125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.55555260699728%")
  },
  ImageBackground_83_3: {
    width: wp("10.555540997049082%"),
    height: hp("3.6059474194143704%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

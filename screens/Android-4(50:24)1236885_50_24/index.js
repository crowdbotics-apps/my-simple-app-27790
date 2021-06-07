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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b93b/6ff4/51a661b61f5aa2086b2d0b07e9ab59c4"
        }}
        style={styles.ImageBackground_74_3}
      />
      <View style={styles.View_50_25}>
        <Text style={styles.Text_50_25}>AUDIT 5S</Text>
      </View>
      <View style={styles.View_57_14}>
        <Text style={styles.Text_57_14}>
          Connectez -vous pour accéder à votre compte
        </Text>
      </View>
      <View style={styles.View_57_18}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20d2/9bb6/eb95ca911e817381d8f1f7c930da962f"
          }}
          style={styles.ImageBackground_I57_18_36_71}
        />
        <View style={styles.View_I57_18_36_83}>
          <Text style={styles.Text_I57_18_36_83}>Adresse e-mail</Text>
        </View>
      </View>
      <View style={styles.View_57_21}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20d2/9bb6/eb95ca911e817381d8f1f7c930da962f"
          }}
          style={styles.ImageBackground_I57_21_36_71}
        />
        <View style={styles.View_I57_21_36_83}>
          <Text style={styles.Text_I57_21_36_83}>Mot de passe</Text>
        </View>
      </View>
      <View style={styles.View_57_24}>
        <View style={styles.View_I57_24_39_3} />
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("39_66"))
          }
        >
          <View style={styles.View_I57_24_39_4}>
            <Text style={styles.Text_I57_24_39_4}> Connexion </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  ImageBackground_74_3: {
    width: wp("140.83333333333334%"),
    minWidth: wp("140.83333333333334%"),
    height: hp("29.375%"),
    minHeight: hp("29.375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10.277777777777777%"),
    top: hp("4.6875%"),
    resizeMode: "cover"
  },
  View_50_25: {
    width: wp("23.333333333333332%"),
    minWidth: wp("23.333333333333332%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_50_25: {
    color: "rgba(79, 76, 87, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_14: {
    width: wp("94.16666666666667%"),
    top: hp("7.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%")
  },
  Text_57_14: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_18: {
    width: wp("79.72222222222223%"),
    minWidth: wp("79.72222222222223%"),
    height: hp("8.4375%"),
    minHeight: hp("8.4375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222222%"),
    top: hp("39.375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I57_18_36_71: {
    flexGrow: 1,
    width: wp("79.72222222222223%"),
    height: hp("5.46875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.96875%")
  },
  View_I57_18_36_83: {
    flexGrow: 1,
    width: wp("34.44444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I57_18_36_83: {
    color: "rgba(105, 105, 105, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_21: {
    width: wp("79.72222222222223%"),
    minWidth: wp("79.72222222222223%"),
    height: hp("8.4375%"),
    minHeight: hp("8.4375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222222%"),
    top: hp("53.75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I57_21_36_71: {
    flexGrow: 1,
    width: wp("79.72222222222223%"),
    height: hp("5.46875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.968749999999993%")
  },
  View_I57_21_36_83: {
    flexGrow: 1,
    width: wp("34.44444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I57_21_36_83: {
    color: "rgba(105, 105, 105, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_24: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("6.25%"),
    minHeight: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("71.09375%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I57_24_39_3: {
    flexGrow: 1,
    width: wp("95%"),
    height: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I57_24_39_4: {
    flexGrow: 1,
    width: wp("54.44444444444444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.404914008246529%"),
    top: hp("0.5208325386047363%")
  },
  Text_I57_24_39_4: {
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

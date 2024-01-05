import { StyleSheet } from "react-native";
import { FONTS, COLORS, SIZES } from "../Const/theme";


export const Globalstyles = StyleSheet.create({

  container_1: {
    paddingTop: 8,
    flex: 1,
    backgroundColor: COLORS.lightGray4
  },
  container_2: {
    flex: 1,
    padding: 20,
  },
  logo: {
    width: '90%',
    height: '30%',
    marginTop: SIZES.padding * 2,
    marginBottom: SIZES.padding * 4, 
  },
  input: {
    borderRadius: 15,
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 0.75,
    ...FONTS.body3,
    padding: 10,
    marginVertical: 8,
  },
  errorText: {
    color: 'crimson',
    ...FONTS.body5,
    marginBottom: 8,

  },

  hyperlink_container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: SIZES.padding * 3
  },

  hyperlink_text: {
    ...FONTS.body3,
    color: 'blue',
    textDecorationLine: 'underline'
  },

  account_text: {
    ...FONTS.body3,
    color: COLORS.black
  }


});

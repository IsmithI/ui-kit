import { StyleSheet } from "aphrodite/no-important";
import { colors } from "../../styles/colors";

const gradientAngle = "100deg";

export const styles = StyleSheet.create({
  button: {
    display: "inline-flex",
    borderRadius: "1.6em",
    padding: "0.4em 0.6em",
    backgroundColor: colors.white,
    textAlign: "center",
    cursor: "pointer",
    color: colors.gray500,
  },
  primary: {
    background: `linear-gradient(${gradientAngle}, ${colors.primary200}, ${colors.primary500})`,
    color: colors.white
  },
  secondary: {
    background: `linear-gradient(${gradientAngle}, ${colors.secondary100}, ${colors.secondary500})`,
    color: colors.white
  },
  disabled: {
    backgroundColor: colors.gray100,
    color: colors.gray300
  }
});
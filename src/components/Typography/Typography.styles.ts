import { StyleSheet } from "aphrodite/no-important";
import { fonts } from '../../styles/fonts';
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  typography: {
    ...fonts.default,
    margin: '0.4em 0 0.2em',
  },
  muted: {
    color: colors.gray200
  },
  h1: {
    fontSize: '36px',
    fontWeight: 600
  },
  h2: {
    fontSize: '30px',
    fontWeight: 600
  },
  h3: {
    fontSize: '28px',
    fontWeight: 600
  },
  h4: {
    fontSize: '24px',
    fontWeight: 600
  },
  h5: {
    fontSize: '20px',
    fontWeight: 600
  },
  h6: {
    fontSize: '16px',
    fontWeight: 600
  },
});
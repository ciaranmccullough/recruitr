import { createMuiTheme } from '@material-ui/core/styles';
// import grey from "@material-ui/core/colors/grey";
// import red from "@material-ui/core/colors/red";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#F8FFE5',
      main: '#1b9aaa',
      dark: '#000000',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: '#f44330',
    light: '#ff795b',
    dark: '#b90005',
    contrastText: '#000000',
  },
});

export default theme;
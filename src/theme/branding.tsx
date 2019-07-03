import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";
import { ThemeBranding } from "@tidyiq/core/theme";

// ::::::::::::::::::::::::::::::::::::::::::::::::
// Branding settings
// ::::::::::::::::::::::::::::::::::::::::::::::::

const themeBranding: ThemeBranding = {
  palette: {
    primary: blue[700],
    secondary: green[800]
  },
  typography: {
    fontFamily: {
      text: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif'
    }
  }
};

export default themeBranding;

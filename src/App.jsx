import { CssBaseline, ThemeProvider } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import RTL from "components/RTL";
import useSettings from "hooks/useSettings";
import { Toaster } from "react-hot-toast";
import { useRoutes } from "react-router-dom";
import "./i18n";
import routes from "./routes";
import axios from "axios";
import { ukoTheme } from "./theme";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store";

axios.defaults.baseURL = "http://localhost:5001/reps-699b0/us-east1/api";

const App = () => {
    const allPages = useRoutes(routes);
    const { settings } = useSettings(); // App theme

    const appTheme = ukoTheme({
        theme: settings.theme,
        direction: settings.direction,
        responsiveFontSizes: settings.responsiveFontSizes,
    }); // toaster options

    const toasterOptions = {
        style: {
            fontWeight: 500,
            fontFamily: "'Montserrat', sans-serif",
        },
    };
    return (
        <Provider store={store}>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={appTheme}>
                    <RTL direction={appTheme.direction}>
                        <CssBaseline />
                        <Toaster toastOptions={toasterOptions} />
                        {allPages}
                    </RTL>
                </ThemeProvider>
            </StyledEngineProvider>
        </Provider>
    );
};

export default App;

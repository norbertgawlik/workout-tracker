import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { GlobalStyles } from "./theme/GlobalStyles";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { AuthProvider } from "./contexts/AuthContext";

import "./App.css";

function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <RouterProvider router={router} />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;

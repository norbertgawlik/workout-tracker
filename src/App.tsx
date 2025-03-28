import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { GlobalStyles } from "./theme/GlobalStyles";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { AuthProvider } from "./contexts/AuthContext";

import "./App.css";
import { ToastProvider } from "@contexts/ToastContext";

function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <RouterProvider router={router} />
        </ThemeProvider>
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { GlobalStyles } from "./components/GlobalStyles";
import { ChatWidget } from "./components/ChatWidget";
import { createChatTheme } from "./theme/createChatTheme";
function createDynamicTheme() {
  const primaryColor = this.getAttribute("primary-color") || "#7854F7";
  const secondaryColor = this.getAttribute("secondary-color") || "#2ECC71";
  const mode = this.getAttribute("mode") || "dark";

  const myTheme = createChatTheme({ primaryColor, secondaryColor, mode });
  return myTheme;
}

class App extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["background-color", "primary-color", "secondary-color"];
  }

  connectedCallback() {
    const root = document.createElement("div");
    root.id = "root";

    this.shadowRoot.appendChild(root);

    const shadowCache = createCache({
      key: "mui",
      container: this.shadowRoot,
      prepend: true,
    });
    const myTheme = createDynamicTheme.call(this);
    const reactRoot = createRoot(root);
    reactRoot.render(
      <StrictMode>
        <CacheProvider value={shadowCache}>
          <GlobalStyles />
          <ThemeProvider theme={myTheme}>
            <CssBaseline />
            <ChatWidget />
          </ThemeProvider>
        </CacheProvider>
      </StrictMode>
    );
  }
}
customElements.define("chat-widget", App);

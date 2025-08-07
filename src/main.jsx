import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { GlobalStyles } from "./components/GlobalStyles";
import { ChatWidget } from "./components/ChatWidget";
class App extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const root = document.createElement("div");
    root.id = "root";

    this.shadowRoot.appendChild(root);

    const shadowCache = createCache({
      key: "css",
      container: this.shadowRoot,
      prepend: true,
    });

    const reactRoot = createRoot(root);
    reactRoot.render(
      <StrictMode>
        <CacheProvider value={shadowCache}>
          <GlobalStyles />
          <ChatWidget />
        </CacheProvider>
      </StrictMode>
    );
  }
}
customElements.define("chat-widget", App);

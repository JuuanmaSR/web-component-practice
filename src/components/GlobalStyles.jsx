import { Global, css } from "@emotion/react";

const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  #root {
    --primary-color: #007bff;
    --primary-hover: #0056b3;
    --bg-light: #f8f9fa;
    --border-color: #e9ecef;
    --gris-100: hsl(0, 0%, 100%); /* Blanco */
    --gris-95: hsl(0, 0%, 95%);
    --gris-90: hsl(0, 0%, 90%);
    --gris-80: hsl(0, 0%, 80%);
    --gris-70: hsl(0, 0%, 70%);
    --gris-60: hsl(0, 0%, 60%);
    --gris-50: hsl(0, 0%, 50%);
    --gris-40: hsl(0, 0%, 40%);
    --gris-30: hsl(0, 0%, 30%);
    --gris-20: hsl(0, 0%, 20%);
    --gris-10: hsl(0, 0%, 10%); /* Muy oscuro */
    --gris-0: hsl(0, 0%, 0%); /* Negro */
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      sans-serif;
  }

  /* Animaciones globales */
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes typing {
    0% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }

  /* Utilidades globales */
  .fade-in {
    animation: fadeIn 0.3s ease;
  }

  .slide-in {
    animation: slideInUp 0.3s ease;
  }

  .typing {
    animation: typing 0.3s ease-in-out forwards;
  }
`;
export const GlobalStyles = () => {
  return <Global styles={globalStyles} />;
};

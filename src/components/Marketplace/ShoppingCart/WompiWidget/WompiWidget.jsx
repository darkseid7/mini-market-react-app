import React, { useEffect } from "react";

const WompiWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.wompi.co/widget.js";
    script.setAttribute("data-render", "button");
    script.setAttribute(
      "data-public-key",
      "pub_test_X0zDA9xoKdePzhd8a0x9HAez7HgGO2fH"
    );
    script.setAttribute("data-currency", "COP");
    script.setAttribute("data-amount-in-cents", "4950000");
    script.setAttribute("data-reference", "4XMPGKWWPKWQ");
    script.setAttribute(
      "data-signature:integrity",
      "37c8407747e595535433ef8f6a811d853cd943046624a0ec04662b17bbf33bf5"
    );
    // Agrega los demás atributos del script según sea necesario

    document.body.appendChild(script);

    return () => {
      // Limpia el script cuando el componente se desmonte
      document.body.removeChild(script);
    };
  }, []);

  return <></>;
};

export default WompiWidget;

import ppLogoBlue from "../assets/pp-logo-blue.svg";
import paypalLogoBlue from "../assets/paypal-logo-blue.svg";
import ppLogoWhite from "../assets/pp-logo-white.svg";
import paypalLogoWhite from "../assets/paypal-logo-white.svg";

type Props = {
  color: "gold" | "blue" | "silver" | "white" | "black";
};

function Button({ color }: Props) {
  const theme = {
    gold: { bg: "#F6C657", pp: ppLogoBlue, paypal: paypalLogoBlue },
    blue: { bg: "#459AD8", pp: ppLogoWhite, paypal: paypalLogoWhite },
    silver: { bg: "#EEE", pp: ppLogoBlue, paypal: paypalLogoBlue },
    white: { bg: "#FFF", pp: ppLogoBlue, paypal: paypalLogoBlue },
    black: { bg: "#2C2E2F", pp: ppLogoWhite, paypal: paypalLogoWhite },
  };

  return (
    <button
      style={{
        position: "relative",
        width: "250px",
        "box-sizing": "border-box",
        border: "none",
        "vertical-align": "top",
        cursor: "pointer",
        outline: "none",
        overflow: "hidden",
        transition: "opacity 0.25s ease-in-out",
        height: "35px",
        "border-radius": "4px",
        "background-color": theme[color].bg,
      }}
    >
      <span innerHTML={theme[color].pp} />
      <span innerHTML={theme[color].paypal} />
    </button>
  );
}

export default Button;

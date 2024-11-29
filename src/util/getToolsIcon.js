import icon1 from "../assets/icon_html5.svg";
import icon2 from "../assets/icon_css3.svg";
import icon3 from "../assets/icon_js.svg";
import icon4 from "../assets/icon_ps.svg";
import icon5 from "../assets/icon_ai.svg";
import icon6 from "../assets/icon_fig.svg";

export function getToolsIcon(iconId) {
  switch (iconId) {
    case 1:
      return icon1;
    case 2:
      return icon2;
    case 3:
      return icon3;
    case 4:
      return icon4;
    case 5:
      return icon5;
    case 6:
      return icon6;
    default:
      return null;
  }
}

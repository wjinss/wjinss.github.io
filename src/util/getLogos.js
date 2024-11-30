import logo1 from "../assets/logo_sema.svg";
import logo2 from "../assets/logo.svg";
import logo3 from "../assets/logo_disney.png";
import logo4 from "../assets/logo_travel.svg";
import logo5 from "../assets/logo_airbnb.png";
import logo6 from "../assets/logo_pottery.png";

export function getLogos(logoId) {
  switch (logoId) {
    case 1:
      return logo1;
    case 2:
      return logo2;
    case 3:
      return logo3;
    case 4:
      return logo4;
    case 5:
      return logo5;
    case 6:
      return logo6;
    default:
      return null;
  }
}

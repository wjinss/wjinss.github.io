import publishing1 from "../public/images/publishing_bg01.png";
import publishing2 from "../public/images/publishing_bg02.png";
import publishing3 from "../public/images/publishing_bg03.png";
import publishing4 from "../public/images/publishing_bg04.png";
import publishing5 from "../public/images/publishing_bg05.png";
import publishing6 from "../public/images/publishing_bg06.png";

const getPublishingImage = (publishingId) => {
  switch (publishingId) {
    case 1:
      return publishing1;
    case 2:
      return publishing2;
    case 3:
      return publishing3;
    case 4:
      return publishing4;
    case 5:
      return publishing5;
    case 6:
      return publishing6;
    default:
      return null;
  }
};

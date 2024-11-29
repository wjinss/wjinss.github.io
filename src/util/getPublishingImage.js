import publishing1 from "../assets/publishing_01.png";
import publishing2 from "../assets/publishing_02.png";
import publishing3 from "../assets/publishing_03.png";
import publishing4 from "../assets/publishing_04.png";
import publishing5 from "../assets/publishing_05.png";
import publishing6 from "../assets/publishing_06.png";
import defaultImage from "../assets/icon_fig.svg"; // 기본 이미지

export function getPublishingImage(publishingId) {
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
      return defaultImage;
  }
}

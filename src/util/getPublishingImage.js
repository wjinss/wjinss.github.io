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
      return "../assets/publishing_01.png";
    case 2:
      return "../assets/publishing_02.png";
    case 3:
      return "../assets/publishing_03.png";
    case 4:
      return "../assets/publishing_05.png";
    case 5:
      return "../assets/publishing_05.png";
    case 6:
      return "../assets/publishing_05.png";
    default:
      return defaultImage;
  }
}

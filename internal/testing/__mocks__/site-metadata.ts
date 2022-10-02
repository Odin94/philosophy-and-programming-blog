import author from "./author";
import menu from "./menu";

export default {
  site: {
    siteMetadata: {
      url: "https://odin-matthias.de",
      title: "Blog by Odin",
      subtitle:
        "Changed subtitle",
      postsPerPage: 4,
      author,
      menu,
    },
  },
};

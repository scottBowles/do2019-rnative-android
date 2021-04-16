/**
 * Font files exist for each Platform, as each handles spacing differently with
 * this Caslon font. See https://madeintandem.com/blog/dump-fuse/ for process used.
 * hhea table values were changed as follows:
 * {
 *   original: { ascender: 1002, descender: -700 }
 *   web: { ascender: 775, descender: -180}
 *   android: { ascender: 1370, descender: -290 }
 *   ios: { ascender: 1000, descender: -300 }
 * }
 * Android and iOS will use the [file].android.otf and [file].ios.otf files, respectively.
 * Web will use the [file].otf file.
 */

export const fontRequires = {
  "ACaslonPro-Bold": require("./ACaslonPro-Bold.otf"),
  "ACaslonPro-BoldItalic": require("./ACaslonPro-BoldItalic.otf"),
  "ACaslonPro-Italic": require("./ACaslonPro-Italic.otf"),
  "ACaslonPro-Regular": require("./ACaslonPro-Regular.otf"),
  "ACaslonPro-Semibold": require("./ACaslonPro-Semibold.otf"),
  "ACaslonPro-SemiboldItalic": require("./ACaslonPro-SemiboldItalic.otf"),
};

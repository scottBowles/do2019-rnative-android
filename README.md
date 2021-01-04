ANDROID APP FOR https://www.dailyoffice2019.com/

CUSTOM TYPOGRAPHY TAGS
(`H1`, `Rubric`, etc.) -- See typography.js --
This app uses familiar naming conventions for convenience in porting from web to mobile (`H1`, `H2`...) and others familiar to liturgy (`People`, `Rubric`...). React Native uses `Text` elements for all print. In typography.js, the native Text tag is modified with custom styles and exported as `Text` for global use. Text components are then created for each text style commonly used (`H1`, `H2`, etc). This is where you will find the styles applied. Keep in mind that the modified Text component is used as the base for each.

ABSOLUTE PATHS
Absolute paths are used in imports for cleanness and clarity. To allow this, each top level folder inside `src/` must be registered with a matching alias in `babel.config.js`.

import "vuetify/src/stylus/app.styl";
import Vue from "vue";
import {
  Vuetify,
  VApp,
  VBtn,
  VCard,
  VChip,
  VCombobox,
  VDataTable,
  VDialog,
  VDivider,
  VFooter,
  VIcon,
  VGrid,
  VList,
  VMenu,
  VNavigationDrawer,
  VProgressLinear,
  VRadioGroup,
  VResponsive,
  VSelect,
  VSubheader,
  VSwitch,
  VTabs,
  VTextarea,
  VTextField,
  VToolbar,
  transitions
} from "vuetify";
import { Ripple } from "vuetify/es5/directives";
//

// Helper
// import colors from "vuetify/es5/util/colors";

Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn,
    VCard,
    VChip,
    VCombobox,
    VDataTable,
    VDialog,
    VDivider,
    VFooter,
    VIcon,
    VGrid,
    VList,
    VMenu,
    VNavigationDrawer,
    VProgressLinear,
    VRadioGroup,
    VResponsive,
    VSelect,
    VSubheader,
    VSwitch,
    VTabs,
    VTextarea,
    VTextField,
    VToolbar,
    transitions
  },
  theme: {
    primary: "#673AB7", // #E53935
    secondary: "#757575", // #FFCDD2
    accent: "#FF4081", // #3F51B5
    tulip: "#C5F5F1"
  },
  directives: { Ripple }
});

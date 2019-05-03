require('jsdom-global')();

window.Date = Date; // temporal fix - magic stuff: https://github.com/vuejs/vue-test-utils/issues/936
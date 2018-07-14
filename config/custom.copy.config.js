let originalConfig = require('@ionic/app-scripts/config/copy.config');

module.exports = Object.assign({}, originalConfig, {
    copyFontAwesomefonts: {
        src: ['{{ROOT}}/node_modules/font-awesome/fonts/**/*'],
        dest: '{{WWW}}/assets/fonts'
    },
    copyFontAwesome: {
        src: ['{{ROOT}}/node_modules/font-awesome/css/font-awesome.min.css'],
        dest: '{{WWW}}/assets/css'
    }
});

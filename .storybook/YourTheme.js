// .storybook/YourTheme.js

import { create } from '@storybook/theming';

export default create({
    base: 'light',

    colorPrimary: 'hotpink',
    colorSecondary: 'deepskyblue',

    // UI
    appBg: 'white',
    appContentBg: '#fff',
    appBorderColor: 'grey',
    appBorderRadius: 4,

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: '#000',
    textInverseColor: 'rgba(255,255,255)',

    // Текст в рамках
    barTextColor: '#fff',
    barSelectedColor: 'white',
    barBg: '#453636',

    // Form colors
    inputBg: 'white',
    inputBorder: 'white',
    inputTextColor: '#000',
    inputBorderRadius: 3,

    brandTitle: 'My custom storybook',
    brandUrl: 'https://example.com',
    brandImage: 'https://skidka02.ru/800/600/https/i.etsystatic.com/10919371/r/il/b56d68/1896464555/il_fullxfull.1896464555_qh40.jpg',
    brandTarget: '_self',
});
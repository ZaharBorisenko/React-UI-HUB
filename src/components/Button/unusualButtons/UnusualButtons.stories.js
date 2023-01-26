import React from 'react';
import Button from "../Button";

export default {
    title: 'COMPONENTS UI/Button',
    component: Button,
    argTypes:{

        variant: {
            type: 'string',
            description: 'Вариант внешнего вида кнопки',
            defaultValue: 'cyberpunk',
            options: ['cyberpunk'],
            control: {
                type: 'radio',
            },
        },

        size: {
            type: 'string',
            description: 'Размер кнопки: 12px 16px и 20px',
            defaultValue: 'medium',
            options: ['small', 'medium', 'large'],
            control: {
                type: 'radio',
            },
        },

    },
};

const Template = (arg) => <Button {...arg}/>

export const UnusualButtons = Template.bind({});
UnusualButtons.args = {
    text: 'Нажми на меня',
    variant: 'cyberpunk',
    size: 'medium',
};
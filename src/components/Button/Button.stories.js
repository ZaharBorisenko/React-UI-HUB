import React from 'react';
import Button from "./Button";

export default {
    title: 'COMPONENTS UI/Button',
    component: Button,
    argTypes:{

        variant: {
            type: 'string',
            description: 'Вариант внешнего вида кнопки',
            defaultValue: 'primary',
            options: ['primary', 'rounded'],
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

export const normalButtons = Template.bind({});
normalButtons.args = {
    text: 'Нажми на меня',
    variant: 'primary',
    size: 'medium',
};
// export const Primary = () => <Button variant='primary' size='small'>Первая кнопка</Button>
// export const Secondary = () => <Button variant='secondary' size='large'>Вторая кнопка</Button>
// export const Success = () => <Button variant='success'>Третья кнопка</Button>
// export const Danger = () => <Button variant='danger'>Четвертая кнопка</Button>
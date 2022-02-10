import React from 'react';
import cn from 'clsx';

import s from './Button.module.scss';

export const BUTTON_COLOR = {
    main: s.mainButtonColor,
    transparent: s.transparentButtonColor,
    nothing: ''
} as const;

export const BUTTON_SIZE = {
    maxWidth: s.maxButtonSize,
    w350px: s.w350pxButtonSize,
    nothing: ''
} as const;

export const BUTTON_FONT = {
    font25px: s.font25px,
    font33px: s.font33px,
    fontOff: s.fontOff
} as const;

type ButtonColor = typeof BUTTON_COLOR[keyof typeof BUTTON_COLOR];
type ButtonSize = typeof BUTTON_SIZE[keyof typeof BUTTON_SIZE];
type ButtonFont = typeof BUTTON_FONT[keyof typeof BUTTON_FONT];

type ButtonProps = {
    color: ButtonColor;
    size: ButtonSize;
    font: ButtonFont;
    children: React.ReactNode | React.ReactNode[];
    callback: () => void;
    className?: string;
};

const Button = (props: ButtonProps): React.ReactElement => {
    return (
        <button
            onClick={props.callback}
            className={cn(props.color, props.size, props.className, s.button, props.font)}
        >
            {props.children}
        </button>
    );
};

export default Button;
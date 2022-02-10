import React, { useState } from 'react';
import cn from 'clsx';

import OkImage from '../../../images/IconOk.png';

import s from './Option.module.scss';

type OptionProps = {
    text: string;
    turnOnGenre: () => void;
    turnOffGenre: () => void;
};

const Option = (props: OptionProps): React.ReactElement => {
    const [isOn, turnIt] = useState(false);
    return (
        <div className={s.option}>
            <span onClick={() => {
                props.turnOnGenre();
                turnIt(true);
            }} className={cn(s.empty, s.checkbox, isOn ? s.hide : '')}></span>
            <span onClick={() => {
                props.turnOffGenre();
                turnIt(false);
            }} className={cn(s.full, s.checkbox, isOn ? '' : s.hide)}>
                <img src={OkImage} alt='ok'/>
            </span>
            <label onClick={() => {
                if(isOn){
                    props.turnOffGenre();
                    turnIt(false);
                } else {
                    props.turnOnGenre();
                    turnIt(true);
                }
            }}>{props.text}</label>
        </div>
    );
};

export default Option;
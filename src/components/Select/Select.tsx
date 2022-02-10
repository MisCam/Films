import React from 'react';
import { useState } from 'react';
import cn from 'clsx';

import Option from './Option';
import Button from '../Button';
import { BUTTON_SIZE, BUTTON_COLOR, BUTTON_FONT } from '../Button/Button';

import s from './Select.module.scss';

type SelectProps = {

};

const Select = (props: SelectProps): React.ReactElement => {
    const [isGenresOpen, setGenres] = useState(false);
    const [isGenresOff, setGenresDisplay] = useState(true);
    const genres = [
        'Триллер', 'Драма', 'Криминал', 'Мелодрама', 'Детектив',
        'Фантастика', 'Приключения', 'Биография', 'Фильм-нуар', 'Вестерн',
        'Боевик', 'Фэнтези', 'Комедия', 'Военный', 'История',
        'Музыка', 'Ужасы', 'Мультфильм', 'Семейный', 'Мюзикл', 'Спорт',
        'Документальный', 'Короткометражка', 'Аниме', 'Новости', 'Концепт',
        'Для взрослых', 'Церемония', 'Реальное ТВ', 'Игра', 'Ток-Шоу', 'Детский',
    ];
    return (
        <div className={s.select}>
            <Button
                callback={() => {
                    if(isGenresOff){
                        setGenresDisplay(!isGenresOff);
                        setTimeout(() => setGenres(!isGenresOpen), 100);
                    } else {
                        setTimeout(() => setGenresDisplay(!isGenresOff), 250);
                        setGenres(!isGenresOpen);
                    }
                }}
                color={BUTTON_COLOR.main}
                size={BUTTON_SIZE.maxWidth}
                font={BUTTON_FONT.font25px}
                className={s.btn}>
                Жанры
            </Button>
            <div className={
                cn(s.select_body, isGenresOpen ? '' : s.hide, isGenresOff ? s.displayNone : '')
            }>
                {
                    genres.map((value, index) => (
                        <Option text={value} turnOffGenre={()=>{}} turnOnGenre={()=>{}}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Select;
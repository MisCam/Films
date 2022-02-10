import React from 'react';
import cn from 'clsx';

import s from './FilmCard.module.scss';

type FilmCardProps = {
    title: string;
    isFree: boolean;
};
/*
Получаемые с сервака данные для карточки:
posterUrlPreview как ссылка на картинку
ratingAgeLimits как строка age15
ratingKinopoisk как число 8.5
year как число 1999
id как число 123
FilmLength как число 136 минут
genres как массив объектов [ {genre: фантастика}, {genre: боевик}]
*/
const FilmCard = (props: FilmCardProps) : React.ReactElement => {
    return (
        <div className={s.card}>
            <div className={s.image}>
                <img src='https://kinopoiskapiunofficial.tech/images/posters/kp/301.jpg' alt='poster'/>
            </div>  
            <label className={s.title}>{props.title}</label>
            <label className={cn(s.type, props.isFree ? s.free : s.notFree)}>
                {props.isFree ? 'Бесплатный' : 'Платный'}
            </label>
        </div>
    );
};

export default FilmCard;
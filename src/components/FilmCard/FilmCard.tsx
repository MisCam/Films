import React from 'react';
import cn from 'clsx';

import s from './FilmCard.module.scss';

type FilmCardProps = {
    title: string;
    poster: string;
    rating: string;
    genres: string;
    year: string;
    ageLimits: string;
};
const FilmCard = (props: FilmCardProps): React.ReactElement => {
    return (
        <div className={s.card}>
            <div className={s.image}>
                <div className={s.shortInfo}>
                    <label><span className={s.green}>Рейтинг:</span> {props.rating}/10</label>
                    <label><span className={s.green}>Жанры:</span> {props.genres}</label>
                    <label><span className={s.green}>Год</span>: {props.year}</label>
                </div>
                <div className={s.ageLimits}>{props.ageLimits}+</div>
                <img src={props.poster} alt='poster' />
            </div>
            <label className={s.title}>{props.title}</label>
        </div>
    );
};

export default FilmCard;
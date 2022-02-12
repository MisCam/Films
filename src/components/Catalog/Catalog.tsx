import React, { useEffect, useState } from 'react';
import cn from 'clsx';

import FilmCard from '../FilmCard';
import Filter from '../Filter';
import PageLayout from '../PageLayout';

import s from './Catalog.module.scss';

type CatalogProps = {

};

const Catalog = (props: CatalogProps): React.ReactElement => {
    const [films, setFilms] = useState([
        {
            id: '',
            title: '',
            genres_id: '',
            year: '',
            poster: '',
            kinopoisk_id: '',
            description: '',
            rating: '',
            ratingAgeLimits: ''
        }
    ]);
    const getFilms = async function () {
        const answer = await fetch(
            `http://CinemaLog/API/index.php/?method=getAllMovies`
        );
        const result = await answer.json();
        return result.data;
    };
    useEffect(() => {
        getFilms().then(value => {
            setFilms(value);
        });
    });
    return (
        <PageLayout className={s.pl0}>
            <div className={s.page}>
                <Filter />
                <div className={s.page__info}>
                    <div className={s.title}>Каталог</div>
                    <div className={s.cards}>
                        {
                            films.map((value, index) => (
                                <FilmCard
                                    key={index}
                                    poster={value.poster}
                                    title={value.title}
                                    year={value.year}
                                    genres={value.genres_id}
                                    rating={value.rating}
                                    ageLimits={value.ratingAgeLimits}
                                ></FilmCard>
                            ))
                        }
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default Catalog;
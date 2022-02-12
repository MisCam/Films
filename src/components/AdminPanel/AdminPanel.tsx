import { join } from 'path/win32';
import React from 'react';

import PageLayout from '../PageLayout';

import s from './AdminPanel.module.scss';
const AdminPanel = (): React.ReactElement => {
    const genresNames = [
        'Триллер', 'Драма', 'Криминал', 'Мелодрама', 'Детектив',
        'Фантастика', 'Приключения', 'Биография', 'Фильм-нуар', 'Вестерн',
        'Боевик', 'Фэнтези', 'Комедия', 'Военный', 'История',
        'Музыка', 'Ужасы', 'Мультфильм', 'Семейный', 'Мюзикл', 'Спорт',
        'Документальный', 'Короткометражка', 'Аниме', 'Новости', 'Концепт',
        'Для взрослых', 'Церемония', 'Реальное ТВ', 'Игра', 'Ток-Шоу', 'Детский',
    ];
    const a = async (filmId: number) => {
        const answer = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': 'fbdfd976-652d-41cc-8edd-cb1cf90a4999',
                'Content-Type': 'application/json',
            },
        });
        return answer.json();
    };

    const uploadFilm = async function (
        title: string,
        genresId: string,
        kinopoiskId: number,
        year: number,
        poster: string,
        description: string,
        rating: number,
        ratingAgeLimits: number,
    ) {
        const answer = await fetch(
            `http://CinemaLog/API/index.php/?method=uploadMovie&title=${title}&genres_id=${genresId}&year=${year}&poster=${poster}&description=${description}&rating=${rating}&kinopoisk_id=${kinopoiskId}&ratingAgeLimits=${ratingAgeLimits}`
        );
        const result = await answer.json();
        return result.data;
    };

    const Upload = () => {
        let i = 300;
        const interval = setInterval(() => {
            a(i).then(value => {
                let genres = '';
                for(let j = 0; j < value.genres.length; j++){
                    for(let h = 0; h < genresNames.length; h++){
                        if(value.genres[j].genre === genresNames[h].toLowerCase()){
                            genres += h + 1;
                        }
                    }
                    if(j === value.genres.length - 1) continue;
                    genres += ',';
                }              
                uploadFilm(
                    value.nameRu,
                    genres,
                    value.kinopoiskId,
                    value.year,
                    value.posterUrl,
                    value.description,
                    value.ratingKinopoisk,
                    parseInt(value.ratingAgeLimits.substr(3))
                );
                console.log('id ' + i + ' загружен');
            });
            i++;
            if (i === 1000) {
                clearInterval(interval);
            }
        }, 1500);
    };
    return (
        <PageLayout className={s.page}>
            <button className={s.btn} onClick={Upload}>Начать выгрузку данных))0)))0</button>
        </PageLayout>
    );
};

export default AdminPanel;
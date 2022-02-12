import React from 'react';
import cn from 'clsx';

import FilmCard from '../FilmCard';
import PageLayout from '../PageLayout';

import s from './Favorite.module.scss';

type FavoriteProps = {

};

const Favorite = (props: FavoriteProps): React.ReactElement => {
    return (
        <PageLayout>
            <div className={s.page}>
                <div className={s.page__info}>
                    <div className={s.title}>Избранное</div>
                    <div className={s.cards}>
                        {
                            /* [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((value, index) => (
                                <FilmCard key={index} isFree={true} title={'Всё прошло хорошо'}></FilmCard>
                            )) */
                        }
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default Favorite;
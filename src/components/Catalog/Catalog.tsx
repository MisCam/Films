import React from 'react';
import cn from 'clsx';

import FilmCard from '../FilmCard';
import Filter from '../Filter';
import PageLayout from '../PageLayout';

import s from './Catalog.module.scss';

type CatalogProps = {

};

const Catalog = (props: CatalogProps): React.ReactElement => {
    return (
        <PageLayout className={s.pl0}>
            <div className={s.page}>
                <Filter />
                <div className={s.page__info}>
                    <div className={s.title}>Каталог</div>
                    <div className={s.cards}>
                        {
                            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((value, index) => (
                                <FilmCard key={index} isFree={true} title={'Всё прошло хорошо'}></FilmCard>
                            ))
                        }
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default Catalog;
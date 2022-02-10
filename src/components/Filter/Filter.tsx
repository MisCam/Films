import React from 'react';
import cn from 'clsx';

import Button from '../Button';
import { BUTTON_SIZE, BUTTON_COLOR, BUTTON_FONT } from '../Button/Button';
import Select from '../Select';

import s from './Filter.module.scss';

type FilterProps = {

};

const Filter = (props: FilterProps) : React.ReactElement => {
    return (
        <div className={s.filter_body}>
            <label className={s.filter}>Фильтр</label>
            <div className={s.filter_item}>
                <Select />
            </div>
            <div className={s.filter_item}>
                <label className={s.ages_title}>Возрастной рейтинг</label>
                <div className={s.ages}>
                    <input type='checkbox'/>
                </div>
            </div>
            <div className={s.filter_item}>
                <label className={s.years_title}>Год выпуска фильма</label>
                <div className={s.years}>
                    <input className={s.text_form} placeholder='От'/>
                    <div className={s.line}></div>
                    <input className={s.text_form} placeholder='До'/>
                </div>
            </div>
            <div className={s.filter_item}>
                <label className={s.years_title}>Поиск по названию</label>
                <input className={s.search} placeholder='Название'/>
            </div>
            <Button
                callback={() => {}}
                color={BUTTON_COLOR.main}
                size={BUTTON_SIZE.maxWidth}
                font={BUTTON_FONT.font25px}
                className={s.apply}>
                Применить
            </Button>
        </div>
    );
};

export default Filter;
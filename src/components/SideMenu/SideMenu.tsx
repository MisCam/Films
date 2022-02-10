import React from 'react';
import { useState } from 'react';
import cn from 'clsx';
import Button from '../Button';
import { BUTTON_SIZE, BUTTON_COLOR, BUTTON_FONT } from '../Button/Button';
import { CHOOSEN_PAGE } from '../App/App';

import HideMenuImage from '../../images/IconMenuButton.png';
import AccountImage from '../../images/IconAccount.png';
import FavoriteImage from '../../images/IconFavorite.png';
import CatalogImage from '../../images/IconCatalog.png';

import s from './SideMenu.module.scss';

type SideMenuProps = {
    setChoosenPage: (page: string) => void;
};

const CHOOSEN_BUTTON = {
    Account: 'Account',
    Favorite: 'Favorite',
    Catalog: 'Catalog',
    AdminPanel: 'AdminPanel'
};

const SideMenu = (props: SideMenuProps): React.ReactElement => {
    const [menuHidden, setMenu] = useState(false);
    const [choosenButton, setChoosenButton] = useState(CHOOSEN_BUTTON.Catalog);
    return (
        <div className={cn(s.wrapper, menuHidden ? s.hide : '')}>
            <Button
                callback={() => { setMenu(!menuHidden); }}
                color={BUTTON_COLOR.nothing}
                size={BUTTON_SIZE.nothing}
                font={BUTTON_FONT.fontOff}
                className={cn(s.hideMenu, menuHidden ? s.rotated : '')}>
                <img src={HideMenuImage} alt="HideMenuImage" />
            </Button>
            <div className={s.account}>
                <div className={s.account__info}>
                    <label className={s.info__account_name}>Логин пользователя</label>
                    <label className={s.info__account_subscribe}>Без подписки</label>
                </div>
                <div className={s.account__avatar}></div>
            </div>
            <Button
                callback={() => { 
                    setChoosenButton(CHOOSEN_BUTTON.Account); 
                    props.setChoosenPage(CHOOSEN_PAGE.Account);   
                }}
                color={
                    choosenButton === CHOOSEN_BUTTON.Account ? BUTTON_COLOR.main : BUTTON_COLOR.transparent
                }
                size={BUTTON_SIZE.maxWidth}
                font={BUTTON_FONT.font25px}
                className={s.SideMenuButton}>
                Аккаунт
                <img className={s.buttonImage} src={AccountImage} alt="AccountImage" />
            </Button>
            <Button
                callback={() => { 
                    setChoosenButton(CHOOSEN_BUTTON.Favorite);  
                    props.setChoosenPage(CHOOSEN_PAGE.Favorite);    
                }}
                color={
                    choosenButton === CHOOSEN_BUTTON.Favorite ? BUTTON_COLOR.main : BUTTON_COLOR.transparent
                }
                size={BUTTON_SIZE.maxWidth}
                font={BUTTON_FONT.font25px}
                className={s.SideMenuButton}>
                Избранное
                <img className={s.buttonImage} src={FavoriteImage} alt="FavoriteImage" />
            </Button>
            <Button
                callback={() => { 
                    setChoosenButton(CHOOSEN_BUTTON.Catalog);
                    props.setChoosenPage(CHOOSEN_PAGE.Catalog);       
                }}
                color={
                    choosenButton === CHOOSEN_BUTTON.Catalog ? BUTTON_COLOR.main : BUTTON_COLOR.transparent
                }
                size={BUTTON_SIZE.maxWidth}
                font={BUTTON_FONT.font25px}
                className={s.SideMenuButton}>
                Каталог
                <img className={s.buttonImage} src={CatalogImage} alt="CatalogImage" />
            </Button>
            <Button
                callback={() => { 
                    setChoosenButton(CHOOSEN_BUTTON.AdminPanel);
                    props.setChoosenPage(CHOOSEN_PAGE.AdminPanel);       
                }}
                color={
                    choosenButton === CHOOSEN_BUTTON.AdminPanel ? BUTTON_COLOR.main : BUTTON_COLOR.transparent
                }
                size={BUTTON_SIZE.maxWidth}
                font={BUTTON_FONT.font25px}
                className={s.SideMenuButton}>
                Админ панелька
                <img className={s.buttonImage} src={CatalogImage} alt="CatalogImage" />
            </Button>
        </div>
    );
};

export default SideMenu;
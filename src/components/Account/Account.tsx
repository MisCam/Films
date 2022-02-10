import React from 'react';
import cn from 'clsx';

import PageLayout from '../PageLayout';

import s from './Account.module.scss';

type AccountProps = {

};

const Account = (props: AccountProps): React.ReactElement => {
    return (
        <PageLayout>
            <div className={s.page_content}>
                <div className={cn(s.subscribe, s.block)}></div>
                <div className={cn(s.user_id, s.block)}></div>
                <div className={cn(s.logout, s.block)}></div>
                <div className={cn(s.enter_promo, s.block)}></div>
                <div className={cn(s.money, s.block)}></div>
                <div className={cn(s.buttons, s.block)}></div>
                <div className={cn(s.need_help, s.block)}></div>
            </div>
        </PageLayout>
    );
};

export default Account;
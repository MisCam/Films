import React from 'react';
import cn from 'clsx';

import s from './PageLayout.module.scss';

type PageLayoutProps = {
    children: React.ReactNode | React.ReactNode[];
    className?: string; 
};

const PageLayout = (props: PageLayoutProps) : React.ReactElement => {
    return (
        <div className={cn(props.className, s.page)}>
            {props.children}
        </div>
    );
};

export default PageLayout;
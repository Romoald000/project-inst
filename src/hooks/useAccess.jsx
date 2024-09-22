import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { PAGES } from '../router/router';

 export const useAccess = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const {isAuthenticated} = useSelector(({auth}) => auth);

    useEffect(() => {
        if (isAuthenticated) {
            return () => {};
        }

        const pagesArray = Object.values(PAGES)

        if (pagesArray.includes(pathname)) {
            navigate(PAGES.LOGIN)
        }

        return () => {}

    }, [isAuthenticated, pathname, navigate]);

    return () => {}
}

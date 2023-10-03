import { createAction } from '@reduxjs/toolkit';

export const login = createAction<{ userId: string; username: string; password?: string }>('login');

export const logout = createAction('logout');

import { response } from "express"

import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'teste@hotmail.com',
        password: '123456',
        techs: [
            'Node', 
            'ReactJS', 
            'React Native',
            { title: 'JavaScript', experience: 100 }
        ],
    });

    return user;
}
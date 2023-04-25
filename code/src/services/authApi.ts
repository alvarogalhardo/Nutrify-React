import { ApplicationError, SignInResponse, SignUpResponse } from '../protocols';
import api from './api';

export async function signInReq(email: string, password: string): Promise<SignInResponse> {
    const response = await api.post('/sign-in', { email, password });
    return response.data;
}

export async function signUpReq(name: string, email: string, password: string): Promise<SignUpResponse | ApplicationError> {
    const response = await api.post('/sign-up', { name, email, password });
    return response.data;
}
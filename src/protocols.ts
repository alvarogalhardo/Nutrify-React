import { AxiosRequestConfig } from "axios";
import { ReactNode } from "react";

export interface ConfigType extends AxiosRequestConfig {
    headers: {
        Authorization: string
    }
}

export type SignUpFormType = {
    name: string;
    email: string;
    password: string;
    confirmPassword?: string;
    role: Role;
};

export type PatientFormType = {
    name: string,
    email: string
    telephone: string;
    birthday: Date | string;
    gender: Gender
}


export type ChildrenProps = {
    children: ReactNode
}

export type SignInFormType = Pick<SignUpFormType, "email" | "password">

export enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE",
}

export enum Role {
    NUTRITIONIST = "NUTRITIONIST",
    PATIENT = "PATIENT",
}

export type SignInResponse = {
    user: {
        id: number,
        email: string,
    },
    token: string
};

export type SignUpResponse = Pick<User, "id" | "name" | "email">;

export type User = {
    id: number;
    name: string;
    email: string;
    password?: string;
    role?: Role;
    createdAt?: Date;
    updatedAt?: Date;
    Session?: Session;
};

export type PostPatientResponse = {
    id: number
}

export type Session = {
    id?: number;
    userId: number;
    User?: User;
    token: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export type ApplicationError = {
    name: string;
    message: string;
};
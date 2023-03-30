export type SignUpFormType = {
    name: string;
    email: string;
    password: string;
    confirmPassword?: string;
    role: Role;
};

export type SignInFormType = Pick<SignUpFormType, "email" | "password">

export enum Role {
    "NUTRITIONIST",
    "PATIENT",
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
    id?: number;
    name: string;
    email: string;
    password?: string;
    role?: Role;
    createdAt?: Date;
    updatedAt?: Date;
    Session?: Session;
};

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
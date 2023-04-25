import { AxiosRequestConfig } from "axios";
import { ReactNode } from "react";

export type ParamsType = {
    id: string
}

export type PhysicalParamsType = {
    physicalId: string
}
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

export type SignInResponse = {
    user: {
        id: number,
        email: string,
    },
    token: string
};

export type SignUpResponse = Pick<User, "id" | "name" | "email">;

export type PostPatientResponse = {
    id: number
}

export type ApplicationError = {
    name: string;
    message: string;
};

export interface PatientProps {
    data: Patient | undefined;
}
export interface PhysicalAssessmentProps {
    data: PhysicalAssessment | undefined
}

/////////////////////////////////////////////////////////////

export interface User {
    id: number
    name: string
    email: string
    password: string
    role: Role
    createdAt: Date
    updatedAt: Date
    Session?: Session[]
    Patient?: Patient[]
  }

  export interface Session {
    id: number
    userId: number
    User: User
    token: string
    createdAt: Date
    updatedAt: Date
  }

  export interface Patient {
    id: number
    userId: number
    User: User
    name: string
    email: string
    telephone: string
    birthday: Date
    gender: Gender
    PhysicalAssessment?: PhysicalAssessment[]
    createdAt: Date
    updatedAt: Date
  }

  export interface PhysicalAssessment {
    id: number
    patientId: number
    Patient: Patient
    weight: number
    height: number
    sittingHeight: number
    kneeHeight: number
    SkinFolds?: SkinFolds[]
    BodyCircumference?: BodyCircumference[]
    BoneDiameter?: BoneDiameter[]
    createdAt: Date
    updatedAt: Date
  }

  export interface SkinFolds {
    id: number
    physicalAssessmentId: number
    physicalAssessment: PhysicalAssessment
    triceps: number
    biceps: number
    abdominal: number
    subscapular: number
    midAxillary: number
    thigh: number
    thoracic: number
    calf: number
    waist: number
    hip: number
    suprailiac: number
    supraspinatus: number
    createdAt: Date
    updatedAt: Date
  }

  export interface BodyCircumference {
    id: number
    physicalAssessmentId: number
    physicalAssessment: PhysicalAssessment
    neckCircumference: number
    chestCircumference: number
    shoulderCircumference: number
    waistCircumference: number
    hipCircumference: number
    abdomenCircumference: number
    relaxed_right_armCircumference: number
    contracted_right_armCircumference: number
    relaxed_left_armCircumference: number
    contracted_left_armCircumference: number
    forearmCircumference: number
    thighCircumference: number
    calfCircumference: number
    createdAt: Date
    updatedAt: Date
  }

  export interface BoneDiameter {
    id: number
    physicalAssessmentId: number
    physicalAssessment: PhysicalAssessment
    humerus: number
    wrist: number
    femur: number
    createdAt: Date
    updatedAt: Date
  }


  export enum Role {
    NUTRITIONIST = 'NUTRITIONIST',
    PATIENT = 'PATIENT',
    ADMIN = 'ADMIN',
  }

  export enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE",
}
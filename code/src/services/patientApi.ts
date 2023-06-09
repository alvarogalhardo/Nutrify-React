import { ApplicationError, ConfigType, Patient, PatientFormType, PostPatientResponse } from '../protocols';
import api from './api';
interface PostPatientReqType extends PatientFormType {
    userId: number
}

export async function postPatientReq(data: PostPatientReqType, CONFIG: ConfigType): Promise<PostPatientResponse | ApplicationError> {
    const response = await api.post("/patients", data, CONFIG);
    return response.data;
}

export async function getPatientsReq(CONFIG: ConfigType): Promise<Patient[]> {
    const response = await api.get("/patients", CONFIG);
    return response.data
}

export async function getPatientByIdReq(CONFIG: ConfigType, id: number): Promise<Patient> {
    const response = await api.get(`/patients/${id}`, CONFIG);
    return response.data
}

export async function deletePatientByIdReq(CONFIG: ConfigType, id: number): Promise<Patient> {
    const response = await api.delete(`/patients/${id}`, CONFIG);
    return response.data
}  
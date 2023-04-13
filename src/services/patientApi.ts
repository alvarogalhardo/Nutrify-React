import { ApplicationError, ConfigType, PatientFormType, PostPatientResponse } from '../protocols';
import api from './api';

interface PostPatientReqType extends PatientFormType {
    userId: number
}

export async function postPatientReq(data: PostPatientReqType, CONFIG: ConfigType): Promise<PostPatientResponse | ApplicationError> {
    const response = await api.post("/patients", data, CONFIG);
    return response.data;
}

export async function getPatientsReq(CONFIG: ConfigType) {
    const response = await api.get("/patients", CONFIG);
    return response.data
}

export async function getPatientByIdReq(CONFIG:ConfigType, id:number) {
    const response = await api.get(`/patients/${id}`,CONFIG);
    return response.data
}
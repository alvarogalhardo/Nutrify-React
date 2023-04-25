import { BodyCircumference, BoneDiameter, ConfigType, PhysicalAssessment, SkinFolds } from "../protocols";
import api from './api'

export async function postPhysicalReq(
    physicalForm: any,
    skinFoldsForm: any,
    circumferenceForm: any,
    boneDiameterForm: any, CONFIG: ConfigType) {
    const response = await api.post("/physical", physicalForm, CONFIG)
    await api.post(`/physical/skin-folds?physicalId=${response.data.id}`, skinFoldsForm, CONFIG)
    await api.post(`/physical/body-circumference?physicalId=${response.data.id}`, circumferenceForm, CONFIG)
    await api.post(`/physical/bone-diameter?physicalId=${response.data.id}`, boneDiameterForm, CONFIG)
}

export async function getPhysicalReq(id: number, CONFIG: ConfigType): Promise<PhysicalAssessment> {
    const response = await api.get(`/physical/${id}`, CONFIG);
    return response.data
}

export async function getPhysicalDetailsReq(id: number, CONFIG: ConfigType) {
    const response = await api.get(`/physical/details/${id}`, CONFIG)
    return response.data
}
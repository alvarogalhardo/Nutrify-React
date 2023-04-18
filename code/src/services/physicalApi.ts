import { ConfigType } from "../protocols";
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
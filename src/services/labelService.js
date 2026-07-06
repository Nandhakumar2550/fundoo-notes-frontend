import api from "./api";

export const createLabel = async (label) => {

    const response = await api.post("/labels", label);

    return response.data;

};

export const getLabels = async () => {

    const response = await api.get("/labels");

    return response.data;

};

export const assignLabel = async (noteId, labelId) => {

    const response = await api.put(
        `/labels/${labelId}/notes/${noteId}`
    );

    return response.data;

};
import api from "./api";

export const createNote = async (note) => {
    const response = await api.post("/notes", note);
    return response.data;
};

export const getAllNotes = async () => {
    const response = await api.get("/notes");
    return response.data;
};

export const updateNote = async (id, note) => {
    const response = await api.put(`/notes/${id}`, note);
    return response.data;
};

export const deleteNote = async (id) => {
    const response = await api.delete(`/notes/${id}`);
    return response.data;
};

export const archiveNote = async (id) => {
    const response = await api.put(`/notes/archive/${id}`);
    return response.data;
};

export const trashNote = async (id) => {
    const response = await api.put(`/notes/trash/${id}`);
    return response.data;
};

export const pinNote = async (id) => {
    const response = await api.put(`/notes/pin/${id}`);
    return response.data;
};

export const searchNotes = async (keyword) => {
    const response = await api.get(`/notes/search?keyword=${keyword}`);
    return response.data;
};

export const sortNotes = async () => {
    const response = await api.get("/notes/sort");
    return response.data;
};
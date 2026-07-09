import { useState } from "react";
import { createNote } from "../services/noteService";
import { toast } from "react-toastify";

import "../styles/CreateNote.css";

function CreateNote({ refresh }) {

    const [note, setNote] = useState({
        title: "",
        description: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {

        setNote({
            ...note,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (
            note.title.trim() === "" &&
            note.description.trim() === ""
        ) {
            toast.warning("Please enter a title or description.");
            return;
        }

        setLoading(true);

        try {

            await createNote(note);

            toast.success("Note Created Successfully");

            setNote({
                title: "",
                description: ""
            });

            refresh();

        } catch (error) {

            console.log(error);

            toast.error("Unable to create note.");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="create-note-container">

            <form
                className="create-note-form"
                onSubmit={handleSubmit}
            >

                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={note.title}
                    onChange={handleChange}
                />

                <textarea
                    name="description"
                    placeholder="Take a note..."
                    rows="4"
                    value={note.description}
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Adding..." : "Add Note"}
                </button>

            </form>

        </div>

    );

}

export default CreateNote;
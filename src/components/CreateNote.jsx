import { useState } from "react";
import { createNote } from "../services/noteService";

function CreateNote({ refresh }) {

    const [note, setNote] = useState({

        title: "",
        description: ""

    });

    const handleChange = (e) => {

        setNote({

            ...note,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        await createNote(note);

        setNote({

            title: "",
            description: ""

        });

        refresh();

    };

    return (

        <form onSubmit={handleSubmit}>

            <input
                name="title"
                value={note.title}
                onChange={handleChange}
                placeholder="Title"
            />

            <br />

            <textarea
                name="description"
                value={note.description}
                onChange={handleChange}
                placeholder="Description"
            />

            <br />

            <button>

                Add Note

            </button>

        </form>

    );

}

export default CreateNote;
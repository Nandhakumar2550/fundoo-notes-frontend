import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import NoteCard from "../components/NoteCard";
import CreateNote from "../components/CreateNote";

import { getAllNotes } from "../services/noteService";

function Dashboard() {

    const [notes, setNotes] = useState([]);

    const loadNotes = async () => {

        const data = await getAllNotes();

        setNotes(data);

    };

    useEffect(() => {

        loadNotes();

    }, []);

    return (

        <>

            <Navbar />

            <Sidebar />

            <CreateNote refresh={loadNotes} />

            <hr />

            {

                notes.map(note => (

                    <NoteCard

                        key={note.id}

                        note={note}

                    />

                ))

            }

        </>

    );

}

export default Dashboard;
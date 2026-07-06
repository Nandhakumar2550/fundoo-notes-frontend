import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import NoteCard from "../components/NoteCard";
import CreateNote from "../components/CreateNote";

import { getAllNotes, searchNotes } from "../services/noteService";

function Dashboard() {

    const [notes, setNotes] = useState([]);
    const [keyword, setKeyword] = useState("");

    const loadNotes = async () => {
        const data = await getAllNotes();
        setNotes(data);
    };

    const handleSearch = async () => {

        if (keyword.trim() === "") {
            loadNotes();
            return;
        }

        const data = await searchNotes(keyword);
        setNotes(data);
    };

    useEffect(() => {
        loadNotes();
    }, []);

    return (
        <>

            <Navbar />

            <Sidebar />

            <div style={{ margin: "20px" }}>

                <input
                    type="text"
                    placeholder="Search Notes"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />

                <button onClick={handleSearch}>
                    Search
                </button>

            </div>

            <CreateNote refresh={loadNotes} />

            <hr />

            {notes.length > 0 ? (
                notes.map((note) => (
                    <NoteCard
                        key={note.id}
                        note={note}
                    />
                ))
            ) : (
                <h3>No Notes Found</h3>
            )}

        </>
    );
}

export default Dashboard;
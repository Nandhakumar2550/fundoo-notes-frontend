import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import NoteCard from "../components/NoteCard";
import CreateNote from "../components/CreateNote";

import { getAllNotes, searchNotes } from "../services/noteService";

import "../styles/Dashboard.css";

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

        <div className="dashboard-container">

            <Sidebar />

            <div className="dashboard-content">

                <Navbar />

                <div className="dashboard-header">

                    <h2>My Notes</h2>

                    <div className="search-box">

                        <input
                            type="text"
                            placeholder="Search Notes..."
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                        />

                        <button onClick={handleSearch}>
                            Search
                        </button>

                    </div>

                </div>

                <CreateNote refresh={loadNotes} />

                <div className="notes-grid">

                    {notes.length > 0 ? (

                        notes.map((note) => (

                            <NoteCard
                                key={note.id}
                                note={note}
                            />

                        ))

                    ) : (

                        <div className="empty-notes">

                            <h3>No Notes Available</h3>
                            <p>Create your first note.</p>

                        </div>

                    )}

                </div>

            </div>

        </div>

    );

}

export default Dashboard;
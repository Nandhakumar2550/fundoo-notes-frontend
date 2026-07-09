import "../styles/NoteCard.css";

function NoteCard({

    note,

    onDelete,

    onArchive,

    onPin

}) {

    return (

        <div className="note-card">

            <h3>{note.title}</h3>

            <p>{note.description}</p>

            <div className="note-actions">

                <button
                    className="pin-btn"
                    onClick={() => onPin(note.id)}
                >
                    📌 Pin
                </button>

                <button
                    className="archive-btn"
                    onClick={() => onArchive(note.id)}
                >
                    📦 Archive
                </button>

                <button
                    className="delete-btn"
                    onClick={() => onDelete(note.id)}
                >
                    🗑 Delete
                </button>

            </div>

        </div>

    );

}

export default NoteCard;
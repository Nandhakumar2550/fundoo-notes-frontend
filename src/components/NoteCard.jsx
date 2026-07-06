function NoteCard({

    note,

    onDelete,

    onArchive,

    onPin

}) {

    return (

        <div
            style={{
                border: "1px solid gray",
                padding: "15px",
                marginBottom: "15px"
            }}
        >

            <h3>{note.title}</h3>

            <p>{note.description}</p>

            <button
                onClick={() => onPin(note.id)}
            >
                Pin
            </button>

            <button
                onClick={() => onArchive(note.id)}
            >
                Archive
            </button>

            <button
                onClick={() => onDelete(note.id)}
            >
                Delete
            </button>

        </div>

    );

}

export default NoteCard;
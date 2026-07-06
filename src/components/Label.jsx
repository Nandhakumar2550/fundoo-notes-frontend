function Label({ label }) {

    return (

        <span
            style={{
                padding: "5px",
                border: "1px solid gray",
                marginRight: "5px",
                borderRadius: "10px"
            }}
        >
            {label.name}
        </span>

    );

}

export default Label;
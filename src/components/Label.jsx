import "../styles/Label.css";

function Label({ label }) {

    return (

        <span className="label">

            🏷 {label.name}

        </span>

    );

}

export default Label;
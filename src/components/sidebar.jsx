import "../styles/Sidebar.css";

function Sidebar() {

    return (

        <aside className="sidebar">

            <h3 className="sidebar-title">
                Menu
            </h3>

            <ul>

                <li>
                    📝 Notes
                </li>

                <li>
                    📦 Archive
                </li>

                <li>
                    🗑 Trash
                </li>

                <li>
                    🏷 Labels
                </li>

            </ul>

        </aside>

    );

}

export default Sidebar;
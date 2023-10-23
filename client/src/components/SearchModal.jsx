import "../css/searchModal.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import EditModal from "../components/EditModal";

function SearchModal({ closeSearchModal }) {

  const userId = window.localStorage.getItem("id");
  const [tasklist, setTasklist] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/tasklist/user-tasks/" + userId)
      .then((userTasks) => {
        setTasklist(userTasks.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const tasks = tasklist.map((task) => task.task_title);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTasks = tasks.filter((task) =>
    task.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-modal">
      <div className="search-modal-content">
        <div className="search-modal-bar-container">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input
            className="search-modal-bar"
            type="text"
            placeholder="Search...."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <i class="fa-solid fa-xmark" onClick={closeSearchModal}></i>
        </div>

        <ul className="search-ul">
          {filteredTasks.map((taskTitle, index) => (
            <div className="search-list-container">
              <li className="search-info">
                <i class="fa-solid fa-info"></i>
              </li>
              <li key={index}>{taskTitle}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchModal;

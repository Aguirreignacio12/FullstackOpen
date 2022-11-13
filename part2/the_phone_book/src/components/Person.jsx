const Person = ({ name, number, handleDelete }) => <li>{name} {number} <button onClick={handleDelete}>Delete</button></li>
export default Person
import Person from './Person'
const Persons = ({ persons }) => {

    const allPersons = persons.map(person =>
        <Person key={person.id} name={person.name} />
    )
    return <ul>{allPersons}</ul>
}
export default Persons
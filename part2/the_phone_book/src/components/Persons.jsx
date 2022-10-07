import Person from './Person'

const Persons = ({ persons, filter }) => {
    console.log(persons)
    const allPersons = persons.filter(
        person =>
            person.name.toLowerCase().includes(filter.toLowerCase()))
        .map(
            filteredPerson =>
                <Person key={filteredPerson.id} name={filteredPerson.name} number={filteredPerson.number} />
        )
    return (allPersons.length === 0)
        ? <><ul><li>No matches</li></ul></>
        : <ul>{allPersons}</ul>
}
export default Persons
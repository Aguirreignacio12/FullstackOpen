import Person from './Person'
const Persons = ({ persons }) => {
    console.log(persons)
    const allPersons = persons.map(person =>
        <Person key={person.id} name={person.name} number={person.number}/>
    )
    return <ul>{allPersons}</ul>
}
export default Persons
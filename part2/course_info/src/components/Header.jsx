const Header = ({ txt, size }) => {
    if (size === 1) return <h1>{txt}</h1>
    if (size === 2 || size !== 1) return <h2>{txt}</h2>
}
export default Header
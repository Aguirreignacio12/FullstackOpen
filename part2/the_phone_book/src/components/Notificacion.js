const Notification = ({ successMessage, errorMessage }) => {
  if (!successMessage && !errorMessage) {
    return null
  }
  return <>
    <p className={`message ? ${successMessage}` ? "success" : "error"} >{successMessage ? successMessage : errorMessage}</p>
  </>
}
export default Notification
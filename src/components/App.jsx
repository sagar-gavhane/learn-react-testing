import React from 'react'

const App = () => {
  const [firstName, setFirstName] = React.useState('')

  return (
    <React.Fragment>
      <form>
        <input data-testid="firstName" value={firstName} onChange={(e) => {
          setFirstName(e.target.value);
        }} />
      </form>
    </React.Fragment>
  );
}

export default App;

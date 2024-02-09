import React, { useEffect, useState } from 'react';

function LogIn() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    fetch('/how')
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.log(err));
  }, []);
console.log(message)
  return (
    <div>
      <>ermmmmmm</>
      <h1>{message}</h1>
    </div>
  );
}
export default LogIn;
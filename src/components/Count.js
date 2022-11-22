import React, { useEffect, useState } from 'react';
 
const Count = () => {
  const [count, setCount] = useState(0);

  console.log('** Re-Rendering **');

  useEffect(() => {
      console.log('I only run once on initial render');
  }, [])

  useEffect(() => {
      console.log('I run after every render and at initial render');
  })

  useEffect(() => {
      console.log('I run after every render only if the TERM has changed');
  }, [count])

  const onClick = () => {
    setCount(count + 1);
  };
 
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
};
 
export default Count;
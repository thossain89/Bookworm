import React, { useEffect } from 'react';

export default function Success() {
  useEffect(() => {
    async function redirect() {
      setTimeout(() => {
        window.location.assign('/');
      }, 3000);
    }
    redirect();
  }, []);

  return (
    <div>
      <h1>Success!</h1>
      <h2>Thank you for your donation!</h2>
      <h2>You will now be redirected to the home page</h2>
    </div>
  );
}

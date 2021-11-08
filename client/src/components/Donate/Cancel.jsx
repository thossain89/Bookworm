import React, { useEffect } from 'react';

export default function Cancel() {
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
      <h1>Cancelled!</h1>
      <h2>You can still enjoy our platform and can donate later. Thanks!</h2>
      <h2>You will now be redirected to the home page</h2>
    </div>
  );
}
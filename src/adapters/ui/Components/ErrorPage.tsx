import { useEffect } from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
const error = useRouteError()
useEffect(()=> {
  console.log('sebas error:',error)
},[])
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}
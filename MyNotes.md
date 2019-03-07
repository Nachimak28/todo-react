JSX <==> js <==> HTML

# If you want to put js between the react elements :

```js
function App() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }

  return <h1>Good {timeOfDay}!</h1>;
  // return <h1> Good {`${timeofDay}`}</h1>; might need this someday for ref
}
```

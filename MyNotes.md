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

# Inline Styling

- jsx expects the inline style to be an object so outer curly brace pair for js between HTML as describede above and inner curly brace pair for the style object

```js
return <h1 style={{ color: "#FF8C00" }}>Good {timeOfDay}!</h1>;
```

# Output of inline styling

![Output](images-ml/inline-style.JPG)

# JSX <==> js <==> HTML

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

- Also after a point there may be too many inline styles for an element. To combat this, put all styles in a variable and put that variablein the inline style attribute of html.

- The style attributes here are different due to JSX.
  Previously we used to do:

```css
background-color: "#00000";
```

But the style being a js object for jsx cannot have '-'(hyphens) between the style attribute words
Hence we have to use CamelCase here.

```js
backgroundColor: "#00000";
```

```js
const styles = {
    color: "#FF8C00",
    backgroundColor: "#000000"
  }

  return (
    <h1 style={styles}>Good {timeOfDay}!</h1>
  )
}
```

# Output of inline styling

![Output](/images-md/inline-style.png)

## Some js refs for noobs (me)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex

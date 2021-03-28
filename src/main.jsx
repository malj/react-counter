// We need the React package
import React from "react"

// React can be used on multiple platforms, we need the package to run it on the web
import ReactDOM from "react-dom"

// This is our component
function Counter() {
    // We use the `useState` hook with the initial value of `0`
    // this hook returns a "tuple" of two values which are named arbitrarily here, 
    // but follow a convention of `[name, setName]`: 
    // 1. variable which holds the current value, named `count`
    // 2. function to change the value, named `setCount()`
    const [count, setCount] = React.useState(0)

    return (
        // JSX starts here. It's very similar to HTML, with these differences:
        // 1. attribute names are bit different because they use the JS names, instead of HTML names. 
        // 2. you can use `{}` signs as placeholders, similar to some templating languages
        // 3. JSX supports custom React components, which are used like regular HTML tags,
        // but their name must start with a capital letter: `<MyComponent/>`
        <div>
            <h1
                // One of the most noticable differences between HTML and JSX is that
                // `class` attribute is called `className`, but it's used the same
                // `<div className="class1 class2 class3"/>`
                // To make things a bit more interesting, we're using a conditional class here
                // by invoking a JS "ternary operator": `condition ? value if true : value if false`, 
                // meaning that this <h1> element will have class "good" if the count
                // is above or equal to zero, and "bad" if below
                className={count >= 0 ? "good" : "bad"}
            >
                    The current count is {count}
            </h1>

            <button
                // `onClick` is a prop which requires a function which will be called each time
                // this button is clicked.
                // this function will increment the current count by 1
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>

            <button 
                // same as above, but this function will reset the count to 0
                onClick={() => setCount(0)}
            >
                Reset
            </button>

            <button 
                // same as above, but this function will decrement the current count by 1
                onClick={() => setCount(count - 1)}
            >
                Decrement
            </button>
        </div>
    )
}


// We need to "mount" our component, which just means placing it on the web page.
// We should have a div with ID "app" somewhere: `<div id="app"></div>`
// This is done only once per application, and the mounted component is called the "root" component.
ReactDOM.render(<Counter/>, document.getElementById("app"))

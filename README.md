# POMODORO CLOCK

[demo](https://souperstition.github.io/pomodoro/)

Built using React and styled using Tailwind CSS. 

In order to pass FCC tests, I had to use the outdated render method as shown here:

```
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

Using this method allows all FCC tests to pass, but gives a warning in devtools that it is deprecated and that the app will behave as if it is running React 17 instead of 18. 
https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis

I had a lot of trouble coming to a solution which used functional instead of class-based components. This solution allowed me to use hooks and functional components, while still passing the tests. 

Once I got all tests to pass, I removed the above code and updated it to match current guidelines. 
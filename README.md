## :bookmark_tabs: Table of Contents

<ul id="contents">

- [Purpose](#chart_with_upwards_trend-purpose-top)
- [Project Overview](#mag_right-project-overview-top)
- [Build Process](#triangular_ruler-build-process-top)

</ul>

## :chart_with_upwards_trend: Purpose [:top:](#bookmark_tabs-table-of-contents)

This was the last project needed to complete the [Front End Development Libraries Certification](https://www.freecodecamp.org/learn/front-end-development-libraries/) from [https://www.freecodecamp.org](freeCodeCamp). 

It was also the most challenging, but not in terms of making it work. I had multiple different working projects that did everything the guidelines said it had to do, but I needed a solution that would pass all the tests. 

Additionally, I was working on a functional-based solution. This challenge was made for an older version of React, and there are [known issues](https://github.com/freeCodeCamp/freeCodeCamp/issues/45922) with the fCC test suit regarding React 18. As far as I could see, I was doing everything correctly, but the tests still wouldn't pass. When I turned to the internet for help, all I could find were class-based solutions. I couldn't find a single person who got all tests to pass using React hooks. I was on my own.

Not to blame the fCC tests, however: the fact that the tests wouldn't pass taught me so much about how the useState() hook *actually* works behind the scenes. My original solutions, though working, were not actually as efficient as they could have been and I was forced to simplify things down drastically, resulting in much cleaner code.

So am I glad the tests wouldn't pass despite my "working" solutions? Yes! I'm thankful that I had to go through this struggle because I learned that I didn't know React quite as well as I thought I did. I came out on the other end not only victorious, but also a great deal more knowledgeable.

## :mag_right: Project Overview [:top:](#bookmark_tabs-table-of-contents)

This project was built using React hooks and styled with Tailwind CSS. It was my first time working with Tailwind, and I have to admit I enjoyed it much more than any other CSS framework I've used so far.

My file structure:

~~~
📦src
 ┣ 📂components
 ┃ ┣ 📂icons
 ┃ ┃ ┣ 📜minusIcon.svg
 ┃ ┃ ┣ 📜plusIcon.svg
 ┃ ┃ ┣ 📜refreshButton.svg
 ┃ ┃ ┣ 📜startIcon.svg
 ┃ ┃ ┗ 📜stopIcon.svg
 ┃ ┣ 📜Break.jsx
 ┃ ┣ 📜Display.jsx
 ┃ ┗ 📜Session.jsx
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┗ 📜index.js
~~~

The index css file didn't actually have any styling in it, it just provided basic Tailwind setup:

~~~css
@tailwind base;
@tailwind components;
@tailwind utilities;
~~~

## :triangular_ruler: Build Process [:top:](#bookmark_tabs-table-of-contents)

I was able to get the components onto the page and styled very quickly thanks to Tailwind. I downloaded the SVG icons from [Font Awesome](https://fontawesome.com/) rather than importing the library, since I only needed a few icons.

Using Tailwind's [flex](https://tailwindcss.com/docs/flex) containers, I ended up with a nice, clean-looking UI:

![screenshot](https://github.com/souperstition/pomodoro/blob/master/img/screenshot.png?raw=true)



In order to pass FCC tests, I had to use the outdated render method as shown here:

```
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

Using this method allows all FCC tests to pass, but gives a warning in devtools that it is deprecated and that the app will [behave as if it is running React 17 instead of 18](https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis).

Once I got all tests to pass, I removed the above code and updated it to match current guidelines. 


:top: [back to top](#bookmark_tabs-table-of-contents)
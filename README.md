# WEATHA [Weather APP]

[WEATHA] ( https://sofanittesfaye.github.io/WEATHA-Weather-app-/ )

# Project Overview

## project name
WEATHA [Weather App]



## Project Description
This weather app will let you know the weather information in the city you are searching for.


## API and Data Sample

[Openweather API]( http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b351ed20610d69f0305baa374dd8c604)
```
{
   "coord":{
      "lon":-0.13,
      "lat":51.51
   },
   "weather":[
      {
         "id":300,
         "main":"Drizzle",
         "description":"light intensity drizzle",
         "icon":"09d"
      }
   ],
   "base":"stations",
   "main":{
      "temp":280.32,
      "pressure":1012,
      "humidity":81,
      "temp_min":279.15,
      "temp_max":281.15
   },
   "visibility":10000,
   "wind":{
      "speed":4.1,
      "deg":80
   },
   "clouds":{
      "all":90
   },
   "dt":1485789600,
   "sys":{
      "type":1,
      "id":5091,
      "message":0.0103,
      "country":"GB",
      "sunrise":1485762037,
      "sunset":1485794875
   },
   "id":2643743,
   "name":"London",
   "cod":200
  }
```
## Wireframes

[wireframe](https://wireframepro.mockflow.com/editor.jsp?editor=off&publicid=M824a5b6aa1b95979287d558f3755be611627919036317&projectid=M6399d0c99000f89df18067c9a21418231627840180577&perm=Owner#/page/d09fe70a6b2d4fdf910dfbe2b857596a)

### MVP/PostMVP

#### MVP 

- Use external weather api to access as data.
- Allow user to get current weather information by searching the city.
- Remove previous search data when new search is made.
- Use CSS to style the page.
- Use media query for small screen.

#### PostMVP  
- Daily forcast 7days
- Show dates with the weather info
- Use a second API


## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|July 30|  Wireframes / Priority Matrix / Timeframes / API and data samples | Complete
|August 2| Project Approval / Core Application Structure (HTML, CSS, .etc) | Complete
|August 3| Pseudocode / JS | Complete
|August 4|CSS, MVP   | Complete
|August 5|Refactor, PMVP| Complete
|August 6| Presentations | Complete

## Priority Matrix

[Priority Matrix](https://wireframepro.mockflow.com/editor.jsp?editor=on&bgcolor=white&perm=Create&ptitle=WEATHA&category=featured&projectid=M6399d0c99000f89df18067c9a21418231627840180577&publicid=dd2df16ea2ed4c6aa870d49b186e1338#/page/D3fe0d0c51c22b594cdbb8f523a1ddec5)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Research API | H | 3hrs| 2hrs | 3hr |
|Adding form | H | 3hrs| 1hr |2hr|
|CSS|H| 4hrs|5hrs | 4hrs  |
|HTML| H | 3hrs|  2hrs| 3hrs |
| Pseudocode | H | 4hrs|1hr | 2hrs|
|Madiaquery for smaller device| H | 4hrs|4hrs |  1hr|
|Refactoring code|H | 3hrs |  6hrs |6hrs|
| City Api callback function  | H | 4hrs| 3hrs| 3hrs |
| Remove previous search result | H | 3hrs| 1hr| 2hrs |
| MVP check| H | 4hrs| 3hrs | 2hrs |
| Post MVP check | H | 3hrs| 0 |  0|
|CSS styling for smaller devices | H | 3hrs|2hrs |  3hrs|
| Total | H | 41hrs|30hrs|31hrs |








## Code Snippet
```
 const icon = data.weather[0].icon;
  const imgTag = document.createElement("img");
  imgTag.setAttribute("src", "https://openweathermap.org/img/wn/" + `${icon}` + ".png");
  weatherSection.append(imgTag);
  console.log(icon)

```

## Change Log
Only mvp lists were made because of time constraint.

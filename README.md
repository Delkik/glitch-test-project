# Pre-work - *Gaming Lite: Sound Time*

**Gaming Lite: Sound Time** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Daniel Elkik**

Time spent: **6** hours spent in total

Link to project: https://glitch.com/~funky-common-allspice

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![]https://i.imgur.com/NYnLnPP.gif


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
- https://www.w3schools.com/tags/ref_colornames.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
 - A challenge I had was dealing with the game logic. For some reason, the game would continue after a single guess, the game would not start properly,
 and the game would not end after winning. It turns out it had been a combination of small errors that came together to make larger errors. "winGame()" had
 been calling "startGame()" rather than stop and "stopGame()" had called the next sequence rather than start. The logic itself had to do with the positioning 
 of each variable change. At one point I had updated the guessCounter *before* I had checked to see if the guessCounter == progress which would always be false. 
 I handled these problems by taking my time to think about what each line had done. I also logged to the console various variables and conditions to see what
 was being changed when. As an example, in order to figure out that stopGame was calling play sequence, I paid attention to the console log and noticed that 
 it would schedule the next sequence only when the stop button was pressed. I had done something similar for the guess counter. I ran the game and logged
 whether guessCounter == progress and I logged both progress and guess counter. I found out that it was never becoming false because guess counter kept updating
 too early.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
- Since this project was about half front-end and half back-end, how much time is usually spent on backend? The front-end seemed to be relatively simple while
the backend had more to do. Moreover, how much actual HTML/CSS vs javascript is actually used? Often times I have seen code where a website is almost purely
in javascript. This website, on the other hand, had a good mix of javascript and HTML/CSS. It seemed to not use much styling so it is hard to tell if that
will be used relatively often in the future.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
- If I had a few more hours to work on this project, I would spend it trying to "game-ify" the website more. This would be done more visually. The user could
be granted a score for every round he completes which could be displayed on a leaderboard of some sorts where they can challenge their friends. A better way to do
this would be to implement an "endless" mode where each cue would randomize in length and pattern while also becoming increasingly tough. There would be a random
function to take care of the endless part of this and another function to calculate how many points they should be given based on a number of factors such as
length of cue, speed, and current round. This would mean the user has two options, go through a randomized specified set of rounds where each sequence would
repeat or go through an endless mode where the length of the sequence would vary every round.



## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

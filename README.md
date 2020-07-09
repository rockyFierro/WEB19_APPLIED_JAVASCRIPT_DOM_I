# DOM I - JavaScript Content Management System

## Project Description

You are going to be emulating a content management system by controlling the content in the JavaScript file instead of the HTML file. This project is an exercise pointed at selecting elements and then updating them without touching the HTML file using the DOM.

You have been provided an [object](src/index.js) with all the necessary data to accomplish this task. Use dot or bracket notation to traverse the data provided. All of your work should be done in the `src/index.js` file.

**ONE RULE: You cannot update the HTML or CSS files directly. You must use JavaScript and the DOM only for your tasks today.**

## Set Up The Project With Git

**Follow these steps to set up and work on your project:**

* [x] Create a forked copy of this project.
* [x] Add your team lead as collaborator on Github.
* [x] Clone your OWN version of the repository (Not Lambda's by mistake!).
* [x] Move into the project folder with the command line.
* [x] Run the command `npm install` to download project dependencies.
* [x] Run the command `npm start` to spin up a development server.
* [x] Navigate Chrome to `http://localhost:1234` to see your project. The port number might be different.
* [x] Create a new branch: git checkout -b `<firstName-lastName>`.
* [x] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
* [x] Push commits: git push origin `<firstName-lastName>`.

**Follow these steps for completing your project.**

* [x] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**
* [x] Add your team lead as a reviewer on the pull-request
* [x] Your team lead will count the project as complete by merging the branch back into master.

## Task 1: Create selectors to point your data into elements

* [x] Create selectors by using any of the DOM element's methods
* [x] Note that IDs have been used on all images.  Use the IDs to update src path content

## Task 2: Update the HTML with the JSON data

* [x] Remember, NO direct updating of the HTML source is allowed.
* [x] Using your selectors, update the content to match the example file.
* [x] Remember to update the src attributes on images

## Task 3: Add new content

* [x] Change the color of the navigation text to be green.
* [x] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
* [x] Check your work by looking at the [original html](src/design-files/original.html) in the browser

## Stretch Goals

* [ ] Update styles throughout the page as you see fit.  Study what happens when you updated the DOM using style in JavaScript.  
* [ ] Study tomorrow's lesson on events and try to integrate a button that can update content on the site with a click of a button.  You could build a similar data object with new values to help you test the click event.

## Stretch Project: Digital Timer

This project is heavier on logic but employs some DOM manipulation to achieve its goals. Go check it out here: [stretch assignment](src/stretch-assignment/README.md) and see how far you can get.

# Last updated 6 December 2017

<img src="https://raw.githubusercontent.com/dwpdigitaltech/code-examples/master/claim-history/screenshot.png" alt="A screenshot of a claim history component" height="450"/>

## General info
**Name**   
Claim history

**Description**   
A vertical timeline to log entries at different dates.

**Services**
  - Access to work
  - Bereavement

---

## Notes
### Design
The component is a list of self contained entries. Each entry has a heading, a date stamp and a name, followed by a description of the action.

The line up the side is GOVUK blue and each entry is marked with a dash creating a train line.

### User reserch
**Bereavement**   
The claim history has been through 6 rounds of user research.

The name was not originally present, but it quickly became apparent this was a need for the agents.

The claim history has been met with predominantly positive responses. Agents immediately know what it is and can find the information they need in it quickly.

## Development
The code at the moment is prototype code. It consists of an unordered list (`<ul`), a `<h3>` tag, two `<span>` tags and `<p>` tags.

More work will be needed to determine the correct markup for each entry as the spans are currently floating between the heading and the paragraphs.

## Accessibility
This has not been accessibility tested yet.

---

# How to use

### Step 1 - The CSS
Copy the file `_claim-history.scss` into your `app/assets/sass/` folder.

Open your `application.scss` file and add the following line at the bottom:

```@import 'claim-history';```

### Step 2 - The HTML
Copy the HTML wherever you want to display the claim history in your prototype. Can fit into `column-one-third` layouts.

Edit the existing enteries or add new ones.

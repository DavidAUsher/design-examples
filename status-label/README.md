# Last updated 4 April 2018

<img src="screenshot.png" alt="A screenshot of the status-label component" width="500" />

## General info
**Name**   
Status labels

**Description**   
Coloured blocks that allow you to show the status of something. For example, a 
claim that is complete.

**Services**
  - Bereavement

---

## Notes
### Design
They were influenced heavily by the director labels on companies house. We use 
them at the top of a claim to show whether it is unfinished, allowed or disallowed.

They should sit along side other information to give them context.

### User reserch
**Bereavement**   
We needed a way for the agents to be able to quickly identify the state of a claim 
so that they could orientate themselves with the information that was being displayed.

Having it red on disallowed claims really helped the agent to quickly get to grips 
with what was going on with a claim early on. This meant when they were taking 
phone calls there wasn't long periods of time wasted trying to figure out exactly 
what state the claim was in before offering advice to the citizen.

## Development
The colours use variable from the GOVUK colour pallet.

The labels are set as spans so they don't really have a preference as to what 
elements you use them on. They can be applied to pretty much anything.

The SCSS uses the BEM naming convention and consists of a block and a modifier. 
By using the class `.status-label` you will get the grey block and all of its 
properties. Applying one of the following modifier classes will change the background 
colour:

```
.status-label--primary  // blue   ($govuk-blue)
.status-label--danger   // red    ($mellow-red)
.status-label--warning  // amber  ($brown)
.status-label--success  // green  ($grass-green)
```

## Accessibility
The colours used all conform to WCAG AA standards when used with white text.

# How to use

### Step 1 - The CSS
Copy the file `_status-label.scss` into your `app/assets/sass/` folder.

Open your `application.scss` file and add the following line at the bottom:

```@import 'status-label';```

### Step 2 - The HTML
Copy the HTML wherever you want to display the tabs in your prototype.
Edit the existing enteries or add new ones.

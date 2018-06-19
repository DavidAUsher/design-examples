module.exports = {
  h1: 'Tags',
  // status: 1 = experimental, 2 = tried and tested, 3 = recommended
  status: 1,
  description: `
    <p>
      Modifier classes for the GOVUK tag component. Because these are modifier 
      classes, the class name has been changed to app-c-tag instead of govuk-c-tag. 
      This will prevent conflicts if the design system gets updated.
    </p>
  `,
  whenToUse: `
    <p>
      Use the Tag component to indicate the status of something, such as an item 
      on a Task list or a Phase banner. 
    </p>
    <p>
      Use the modifier classes to change the colour of the tags.
    </p>
  `,
  whenNotToUse: `
    <p>
      To follow.
    </p>
  `,
  howToUse: `
    <p>
      Add the class <code class="language-html">app-c-tag</code> to any tag such 
      as a span. Add any of the additional modifiers to change the colour.
    </p>
    <ul class="list list-bullet">
      <li><code class="language-html">app-c-tag--success</code></li>
      <li><code class="language-html">app-c-tag--warning</code></li>
      <li><code class="language-html">app-c-tag--danger</code></li>
    </ul>
  `,
  research: `
    <ul class="list list-bullet">
      <li>User type: Citizens and agents</li>
      <li>Accessibility: Tested on JAWS, Dragon, Zoomtext and Read&Write</li>
    </ul>
  `,
  servicesUsing: `
    <ul class="list list-bullet">
      <li>Manage Bereavement Support Payment</li>
    </ul>
  `,
  stillToDo: `
    <p>
      More work is needed to work out what colours need to be available.
    </p>
  `,
  discussion: {
    linkText: 'Discuss tags on GitHub',
    linkURL: 'https://github.com/dwp/design-examples/issues/9'
  }
}
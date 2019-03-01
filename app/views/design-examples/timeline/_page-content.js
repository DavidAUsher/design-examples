module.exports = {
  h1: 'Timeline',
  // status: 1 = experimental, 2 = tried and tested, 3 = recommended
  status: 2,
  description: `
    <p>
      The timeline is a way to display updates to something or actions that have 
      been done. For example a claim history.
    </p>
  `,
  whenToUse: `
    <p>
      Use the timeline when you need to show a list of entries that can be 
      followed in chronological order.
    </p>
    <p>
      The timeline should use give a brief overview of what has happened, and not used 
      to display large bodies of text.
    </p>
    <p>
      The timeline has currently only been researched in agent-facing systems so 
      you will need to research it thouroughly in a citizen-facing service.
    </p>
  `,
  whenNotToUse: `
    <p>
      The timeline should not mix past and future events. If you need to show 
      both past and future events, show them as separate timelines or use an 
      alternative design.
    </p>
    <p>
      The timeline should not be used as a dumping ground for notes. It is to 
      give an understanding of what has happened, not all the details of the task.
    </p>
  `,
  howToUse: ``,
  research: `
    <ul class="list list-bullet">
      <li>User type: Agents</li>
      <li>Accessibility: Tested on JAWS, Dragon, Zoomtext and Read&Write</li>
    </ul>
  `,
  servicesUsing: `
    <ul class="list list-bullet">
      <li>Manage Bereavement Support Payment</li>
      <li>Access to work</li>
      <li>Prepare for Universal Credit</li>
      <li>Support for Mortgage Interest</li>
    </ul>
  `,
  stillToDo: ``,
  discussion: {
    linkText: 'Discuss the timeline on GitHub',
    linkURL: 'https://github.com/dwp/design-examples/issues/3'
  }
}
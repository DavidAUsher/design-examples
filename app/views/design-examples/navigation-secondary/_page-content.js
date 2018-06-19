module.exports = {
  h1: 'Secondary Navigation',
  // status: 1 = experimental, 2 = tried and tested, 3 = recommended
  status: 1,
  description: `
    <p>
      A way to navigate between subsections of a service. You may also 
      want to look at <a href="/example/navigation-global">global navigation</a>
      and <a href="/example/tabs">tabs</a>.
    </p>
  `,
  whenToUse: `
    <p>
      The secondary navigation should only be used inside the main tag of the 
      page. It acts as a way to navigate between sub sections. For example, if 
      you're viewing an application you might want to navigate between the claimant 
      details and the evidence they have provided.
    </p>
  `,
  whenNotToUse: `
    <p>
      Do not use the secondary navigation in the header of a service. For this,  
      use the <a href="/example/navigation-global">global navigation</a> instead.
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
      <li>Move to Universal Credit</li>
    </ul>
  `,
  stillToDo: ``,
  discussion: {
    linkText: 'Discuss secondary navigation on GitHub',
    linkURL: 'https://github.com/dwp/design-examples/issues/4'
  }
}
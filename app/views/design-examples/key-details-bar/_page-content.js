module.exports = {
  h1: 'Key details bar',
  // status: 1 = experimental, 2 = tried and tested, 3 = recommended
  status: 1,
  description: `
    <p>
      The key information is visible so DWP agents know and are reassured about 
      which claim or record they are viewing.
    </p>
    <p>
      Common info may include: Name, Date of Birth, NI number, claim status.
    </p>
  `,
  whenToUse: `
    <p>
      The key details bar should only be used when an agent is completing several 
      tasks and needs to be sure they are still viewing the correct claim or record.
    </p>
    <p>
      Only use the key details bar to show the information that is crucial to the 
      task the agent is working on.
    </p>
  `,
  whenNotToUse: `
    <p>
      Do not use the key details bar if the details in it are not relevant to 
      the task the agent is working on.
    </p>
    <p>
      Do not use the key details bar as a dumping ground for all of the citizens 
      details. If you need to include more than 3 or 4 bits of information an 
      alternate solution should be used.
    </p>
  `,
  research: `
    <ul class="list list-bullet">
      <li>User type: Agents</li>
      <li>Accessibility: No research done</li>
    </ul>
  `,
  howToUse: `
    <p>
      The key details bar should be placed outside of the main tag. This will 
      allow a screen reader user to skip past it using the skip link.
    </p>
    <p>
      You may need your h1 to reference something from the key details 
      to make sure it still makes sense when a screen reader user skips the  
      bar. Even if your h1 is visually hidden. For example: Claim details for John Doe.
    </p>
  `,
  servicesUsing: `
    <ul class="list list-bullet">
      <li>Access to work</li>
      <li>DCAMS</li>
      <li>Move to Universal Credit</li>
    </ul>
  `,
  stillToDo: ``,
  discussion: {
    linkText: 'Discuss the key details bar on GitHub',
    linkURL: 'https://github.com/dwp/design-examples/issues/7'
  }
}
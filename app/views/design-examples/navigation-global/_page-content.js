module.exports = {
  h1: 'Global Navigation',
  // status: 1 = experimental, 2 = tried and tested, 3 = recommended
  status: 1,
  description: `
    <p>
      A way to navigate between sections or features of a service. You may also 
      want to look at <a href="/example/navigation-secondary">secondary navigation</a> 
      and <a href="/example/tabs">tabs</a>.
    </p>
  `,
  whenToUse: `
    <p>
      The global navigation should only be used only when the linear, one thing 
      per page approach was found not to work.
    </p>
    <p>
      It is the primary way of users moving between features or sections that 
      are not closely related. Therefore the global navigation should be placed 
      under the global header bar in your service.
    </p>
    <p>
      To navigate between subsections, or to put a navigation menu in a page, 
      then the <a href="/example/navigation-secondary">secondary navigation</a> should be used instead.
    </p>
  `,
  whenNotToUse: `
    <p>
      Do not use the global navigation if you have not already tried the linear 
      one thing per page approach or existing patterns such as the task list.
    </p>
    <p>
      Do not use the global navigation inside the main tag of a page. For in 
      page navigation the <a href="/example/navigation-secondary">secondary navigation</a> should be used instead.
    </p>
  `,
  research: `
    <ul class="list list-bullet">
      <li>User type: Agents</li>
      <li>Accessibility: Tested on JAWS, Dragon, Zoomtext and Read&Write</li>
    </ul>
  `,
  howToUse: `
    <p>
      For prototyping, this navigation can be used by placing it in the 
      after_header block. Eg: <code class="language-js">{% block after_header %}...{% endblock %}</code>. 
      However, it should be noted that in production the navigation should be 
      inside of the header tag.
    </p>
  `,
  servicesUsing: `
    <ul class="list list-bullet">
      <li>Manage Bereavement Support Payment</li>
      <li>Access to work</li>
      <li>Support for Get your State Pension</li>
      <li>Manage a mortgage interest loan</li>
      <li>Move to Universal Credit</li>
    </ul>
  `,
  discussion: {
    linkText: 'Discuss global navigation on GitHub',
    linkURL: 'https://github.com/dwp/design-examples/issues/4'
  }
}
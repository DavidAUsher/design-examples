module.exports = {
    h1: 'Header - for internal services',
    // status: 1 = experimental, 2 = tried and tested, 3 = recommended
    status: 1,
    description: `
      <p>
       All services have a header, for internal services we use a slight variation on the one from GOV.UK
      </p>

      <p> For public facing services see the <a href="https://design-system.service.gov.uk/styles/page-template/">page template</a> within the design system.
    
      `,
    whenToUse: `
      <p>
      For internal services. For some services it may be approriate to break the 960px width for the header container.
      </p>
    `,
    whenNotToUse: `
    <p>
      Do not use this for external services, if it is on GOV.UK it should have a crown.
    </p>
  `,
    howToUse: `
      <p>If your using this in the GOV.UK prototype kit you can override the 'proposition_header' in the layout.html</p> see <a href="https://design-system.service.gov.uk/styles/page-template/">page template</a>.
    `,
    research: `
    <p>When it’s being used on an internal service, staff know they work for DWP. There wasn’t anywhere different for it to link to, so in most cases it was going to the service landing page, which the service name right next to it was also doing, so it was adding repeating links in.</p>
    `,
    stillToDo: ``,
    servicesUsing: `
    <ul class="list list-bullet">
      <li>Prepare for UC</li>
    </ul>
  `,
    discussion: {
      linkText: 'Discuss headers on GitHub',
      linkURL: 'https://github.com/dwp/design-examples/issues'
    }
  }
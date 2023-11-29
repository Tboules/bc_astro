![Boules Consulting Logo](./src/assets/logos/Boules-Consulting-Logo.svg)

### Boules Constuling Astro Site

**Problem with Current Site:**

1.  The site is built in Gatsby
2.  The site uses Chakra, which is nice, but not
3.  The site's deps are super out dated
4.  The site is
5.  It would be boring

&nbsp;

---

### Astro Proposition

The plan is the convert the site into an Astro site built in Vercel.
Instead of using Chakra we are going to use good old tailwind with Tailwind UI.
Also we will sparingly use React components for any client side heavy items like
carousels and menus. I would love to create a nice dropdown modal for the header
in the services navigator.

**Challenges**

1. Replicating server logic for mailchimp and emails.
2. Removing graphql and replacing with new query protocol
3. Making sure rich text editor translates over well
4. Small Design upgrades to give the site new life (I am not a designer)

&nbsp;

---

### Todo List

- [ ] Query all pages and content
- [ ] Setup tailwind and incorporate Tailwind UI Comps
- [ ] Create Site Layout
- [ ] Create Redesign mockups and for pages from site rewrite document
- [ ] Update Contentful data model to incorporate new changes
- [ ] Build out each major page
- [ ] Build out Blog page template and dynamic route logic
- [ ] Set up server side endpoints for sending emails
- [ ] Restore SEO deps like google and fb tag manager

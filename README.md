![Boules Consulting Logo](./src/assets/logos/Boules-Consulting-Logo.svg)

### Boules Constuling Astro Site

**Problem with Current Site:**

1.  The site is built in Gatsby
2.  The site uses Chakra, which is nice, but not...
3.  The site's deps are super out dated
4.  The site is hosted in Netlify
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

- [x] Generate Types for all Contentful Data
- [ ] Query all pages and content
- [x] Setup tailwind and incorporate Tailwind UI Comps
- [x] Create Site Layout
- [x] Create Redesign mockups and for pages from site rewrite document
- [x] Update Contentful data model to incorporate new changes
- [ ] Build out each major page
- [ ] Build out Blog page template and dynamic route logic
- [x] Set up server side endpoints for sending emails
- [ ] Restore SEO deps like google and fb tag manager

## &nbsp;

## Problem Notes

### **Generating Types**

When trying to generate types or write them manually, I noticed that there was an issue with
the type suggestions on reference entries.

For example:

```javascript
export interface TypeAboutUsFields {
  slug?: EntryFieldTypes.Symbol;
  aboutUsBanner: EntryFieldTypes.EntryLink<TypeBannerSkeleton>;
  whatWeDo: EntryFieldTypes.EntryLink<TypeTextAndImageSkeleton>;
  ourTeam: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeEmployeeCardSkeleton>
  >;
  carouselImages?: EntryFieldTypes.EntryLink<TypeCarouselImagesSkeleton>;
}
```

> With the above EntryFieldTypes.EntryLink, the data model would return the full entry, but the types
> were not being suggested instead only the link type of sys was suggested but it was missing the actual fields from
> the entry (the most important part).

solution:

use

```javascript
contentfulClient.withoutUnresolvableLinks.getEntries();
```

instead of

```javascript
contentfulClient.getEntries();
```

helpful resources:  
[Github Issue](https://github.com/contentful/contentful.js/issues/1932)  
[Contentful Typescript Readme](https://github.com/contentful/contentful.js/blob/master/TYPESCRIPT.md)

### **UI Change Decision**

> In order to speed up development and facilitate better learning, I have decided to use shadcn ui.
> In the set up of the library, be careful that you choose the proper alias names in your components.json.
> If it's off even a little, the whole library falls apart.

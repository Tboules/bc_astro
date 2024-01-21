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
- [x] Query all pages and content
- [x] Setup tailwind and incorporate Tailwind UI Comps
- [x] Create Site Layout
- [x] Create Redesign mockups and for pages from site rewrite document
- [x] Update Contentful data model to incorporate new changes
- [x] Build out each major page
- [x] Build out Blog page template and dynamic route logic
- [x] Set up server side endpoints for sending emails
- [x] Restore SEO deps like google and fb tag manager
- [x] Setup Mailchimp Integration

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

---

### Accessing Files Vercel API adapter

> In order to access files from our vercel serverless api functions, we need to make sure that we place those files in the proper location
> I ended up learning that you need to place the files in the public folder and also you need to
> make sure that those files are available in the vercel adapter configuration like so:

```javascript
  //astro.config.mjs
  adapter: vercel({
    includeFiles: ["./public/MNC.pdf"],
  }),
```

** Warning This is Broken [github issue I opened](https://github.com/withastro/astro/issues/9743) **

As an interim solution, I decided to make the file available when they hit the submit button directly from the clientside, it also subscribes them to mailchimp

### Documentation for Mailchimp

[Mailchimp Docs](https://mailchimp.com/developer/marketing/guides/create-your-first-audience/?_gl=1*1o5w5nh*_up*MQ..*_ga*MTE5Nzg4MjkzNC4xNzA1Nzk1MTM4*_ga_N5HD1RTH6E*MTcwNTc5NTEzNy4xLjEuMTcwNTc5NTE2OC4wLjAuMA..#add-a-contact-to-an-audience)

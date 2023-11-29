import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeAboutUsFields {
  slug?: EntryFieldTypes.Symbol;
  aboutUsBanner: EntryFieldTypes.EntryLink<TypeBannerSkeleton>;
  whatWeDo: EntryFieldTypes.EntryLink<TypeTextAndImageSkeleton>;
  ourTeam: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeEmployeeCardSkeleton>
  >;
  carouselImages?: EntryFieldTypes.EntryLink<TypeCarouselImagesSkeleton>;
}

export type TypeAboutUsSkeleton = EntrySkeletonType<
  TypeAboutUsFields,
  "aboutUs"
>;
export type TypeAboutUs<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeAboutUsSkeleton, Modifiers, Locales>;

export function isTypeAboutUs<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeAboutUs<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === "aboutUs";
}

export interface TypeBannerFields {
  heading: EntryFieldTypes.Symbol;
  subHeader?: EntryFieldTypes.Symbol;
  backgroundImage: EntryFieldTypes.AssetLink;
}

export type TypeBannerSkeleton = EntrySkeletonType<TypeBannerFields, "banner">;
export type TypeBanner<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeBannerSkeleton, Modifiers, Locales>;

export function isTypeBanner<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeBanner<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === "banner";
}

export interface TypeBlogPostFields {
  slug: EntryFieldTypes.Symbol;
  image: EntryFieldTypes.AssetLink;
  title: EntryFieldTypes.Symbol;
  cardDescription: EntryFieldTypes.Symbol;
  articleBody: EntryFieldTypes.RichText;
}

export type TypeBlogPostSkeleton = EntrySkeletonType<
  TypeBlogPostFields,
  "blogPost"
>;
export type TypeBlogPost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeBlogPostSkeleton, Modifiers, Locales>;

export function isTypeBlogPost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeBlogPost<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === "blogPost";
}

export interface TypeButtonFields {
  buttonText?: EntryFieldTypes.Symbol;
  buttonLink?: EntryFieldTypes.Symbol;
}

export type TypeButtonSkeleton = EntrySkeletonType<TypeButtonFields, "button">;
export type TypeButton<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeButtonSkeleton, Modifiers, Locales>;

export function isTypeButton<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeButton<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === "button";
}

export interface TypeCarouselImagesFields {
  images: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

export type TypeCarouselImagesSkeleton = EntrySkeletonType<
  TypeCarouselImagesFields,
  "carouselImages"
>;
export type TypeCarouselImages<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeCarouselImagesSkeleton, Modifiers, Locales>;

export function isTypeCarouselImages<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeCarouselImages<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === "carouselImages";
}

export interface TypeCommunityPageFields {
  slug?: EntryFieldTypes.Symbol;
  communityBanner?: EntryFieldTypes.EntryLink<TypeBannerSkeleton>;
  newsCards?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeImageCardsSkeleton>
  >;
  blogCards?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeImageCardsSkeleton>
  >;
  communityCards?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeImageCardsSkeleton>
  >;
}

export type TypeCommunityPageSkeleton = EntrySkeletonType<
  TypeCommunityPageFields,
  "communityPage"
>;
export type TypeCommunityPage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeCommunityPageSkeleton, Modifiers, Locales>;

export function isTypeCommunityPage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeCommunityPage<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === "communityPage";
}

export interface TypeContactFields {
  slug: EntryFieldTypes.Symbol;
  contactBanner?: EntryFieldTypes.EntryLink<TypeBannerSkeleton>;
}

export type TypeContactSkeleton = EntrySkeletonType<
  TypeContactFields,
  "contact"
>;
export type TypeContact<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeContactSkeleton, Modifiers, Locales>;

export function isTypeContact<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeContact<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === "contact";
}

export interface TypeEmployeeCardFields {
  name: EntryFieldTypes.Symbol;
  jobTitle: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Text;
  employeeImage: EntryFieldTypes.AssetLink;
  cardSize: EntryFieldTypes.Symbol<"Large" | "Small">;
}

export type TypeEmployeeCardSkeleton = EntrySkeletonType<
  TypeEmployeeCardFields,
  "employeeCard"
>;
export type TypeEmployeeCard<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeEmployeeCardSkeleton, Modifiers, Locales>;

export function isTypeEmployeeCard<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeEmployeeCard<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === "employeeCard";
}

export interface TypeGeneralCardFields {
  title: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Text;
  icon?: EntryFieldTypes.AssetLink;
  internalLink?: EntryFieldTypes.Symbol;
}

export type TypeGeneralCardSkeleton = EntrySkeletonType<
  TypeGeneralCardFields,
  "generalCard"
>;
export type TypeGeneralCard<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeGeneralCardSkeleton, Modifiers, Locales>;

export function isTypeGeneralCard<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeGeneralCard<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === "generalCard";
}

export interface TypeHomePageFields {
  slug: EntryFieldTypes.Symbol;
  homeBanner: EntryFieldTypes.EntryLink<TypeBannerSkeleton>;
  belowHero: EntryFieldTypes.EntryLink<TypeTextAndImageSkeleton>;
  ctaStack?: EntryFieldTypes.EntryLink<TypeStackSkeleton>;
  howWeHelpStack?: EntryFieldTypes.EntryLink<TypeStackSkeleton>;
  testimonialSlides?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeTestimonialSlideSkeleton>
  >;
  carouselImages?: EntryFieldTypes.EntryLink<TypeCarouselImagesSkeleton>;
}

export type TypeHomePageSkeleton = EntrySkeletonType<
  TypeHomePageFields,
  "homePage"
>;
export type TypeHomePage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeHomePageSkeleton, Modifiers, Locales>;

export function isTypeHomePage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeHomePage<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === "homePage";
}

export interface TypeImageCardsFields {
  title: EntryFieldTypes.Symbol;
  text: EntryFieldTypes.Text;
  image: EntryFieldTypes.AssetLink;
  button?: EntryFieldTypes.EntryLink<TypeButtonSkeleton>;
}

export type TypeImageCardsSkeleton = EntrySkeletonType<
  TypeImageCardsFields,
  "imageCards"
>;
export type TypeImageCards<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeImageCardsSkeleton, Modifiers, Locales>;

export function isTypeImageCards<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeImageCards<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === "imageCards";
}

export interface TypeServicesPageFields {
  slug?: EntryFieldTypes.Symbol;
  servicesBanner?: EntryFieldTypes.EntryLink<TypeBannerSkeleton>;
  serviceCards: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeGeneralCardSkeleton>
  >;
}

export type TypeServicesPageSkeleton = EntrySkeletonType<
  TypeServicesPageFields,
  "servicesPage"
>;
export type TypeServicesPage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeServicesPageSkeleton, Modifiers, Locales>;

export function isTypeServicesPage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeServicesPage<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === "servicesPage";
}

export interface TypeStackFields {
  text?: EntryFieldTypes.Text;
  image?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  text2?: EntryFieldTypes.Text;
  image2?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  cards?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<
      TypeEmployeeCardSkeleton | TypeGeneralCardSkeleton
    >
  >;
}

export type TypeStackSkeleton = EntrySkeletonType<TypeStackFields, "stack">;
export type TypeStack<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeStackSkeleton, Modifiers, Locales>;

export function isTypeStack<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeStack<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === "stack";
}

export interface TypeTestimonialSlideFields {
  name: EntryFieldTypes.Symbol;
  jobTitle: EntryFieldTypes.Symbol;
  companyName?: EntryFieldTypes.Symbol;
  testimony: EntryFieldTypes.Text;
  image: EntryFieldTypes.AssetLink;
}

export type TypeTestimonialSlideSkeleton = EntrySkeletonType<
  TypeTestimonialSlideFields,
  "testimonialSlide"
>;
export type TypeTestimonialSlide<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeTestimonialSlideSkeleton, Modifiers, Locales>;

export function isTypeTestimonialSlide<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeTestimonialSlide<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === "testimonialSlide";
}

export interface TypeTextAndImageFields {
  text: EntryFieldTypes.Text;
  image: EntryFieldTypes.AssetLink;
  title?: EntryFieldTypes.Symbol;
}

export type TypeTextAndImageSkeleton = EntrySkeletonType<
  TypeTextAndImageFields,
  "textAndImage"
>;
export type TypeTextAndImage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeTextAndImageSkeleton, Modifiers, Locales>;

export function isTypeTextAndImage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeTextAndImage<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === "textAndImage";
}

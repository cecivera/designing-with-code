# Designing with code

**[View the Storybook](https://6ad355a31aa6572453b3566f-tvubzrbneu.chromatic.com/)**

A design system where Figma and code stay in parity. The base is [Evergreen](https://github.com/bobbydotdesign/evergreen), an open-source framework by Robert Renteria (MIT). Everything below was added on top of it by Cecilia Vera.

## What's added

- **Full shadcn/ui catalog** in code, with Tailwind v4.
- **Three Figma libraries**: components, icons and foundations (colour, radius, spacing, typography), with the tokens read from `src/app/globals.css`.
- **Figma Code Connect** templates for every component and icon, so Dev Mode shows the real code.
- **Storybook** with docs and stories in English, published with Chromatic.
- **Product components** such as ProductCard and ProductTag, matched to the Figma card.
- **Parity rules** between Figma and code (for example, square corners everywhere).

## Stack

Next.js, TypeScript, shadcn/ui, Tailwind CSS v4, lucide-react, Storybook, Figma Code Connect.

## Credits

Based on [Evergreen](https://github.com/bobbydotdesign/evergreen) by Robert Renteria, MIT licence.

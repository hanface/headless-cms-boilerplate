# Colosl White Label

## Getting Started

### In Prismic Create an `article` type

From the repository page, create a new **custom type**:

-   The name should be `article`.

Next, add these fields (you don't have to modify the settings unless specified):

-   `slug` - **UID** field.
-   `title` - **Title** field
-   `introduction` - **Rich Text** field, turn off multiple paragraphs on this one
-   `subtitle` - **Title** field
-   `image` - **Image** field
-   `content` - **Rich Text** field

### Then set each variable on `.env.local`:

-   `REACT_PRISMIC_TOKEN` should be the **Permanent access token**
-   `REACT_PRISMIC_URL` is the name of your repository (the one in the URL)

## Finally, run the development server:

```bash
npm run dev
```

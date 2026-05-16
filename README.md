# Hights Co. Website

Marketing site for Hights Co. Ltd — London-based digital consultancy.

Live: https://www.hights.co.uk

## Stack

- Static HTML, hosted on GitHub Pages
- Tailwind CSS via CDN (with custom design tokens in `assets/tailwind.js`)
- Geist + Inter via Google Fonts, Material Symbols icons
- Contact form opens the visitor's email client (mailto: hello@hights.co.uk)

## Pages

- `index.html` — home
- `services.html` — services overview (E-Commerce, Technology, Brand & Marketing)
- `contact.html` — contact form + office details

## Local preview

Open `index.html` directly in a browser, or serve the directory:

```sh
python3 -m http.server 8000
```

## Contact form

The form on `contact.html` composes a mailto: link from the visitor's input
and opens their default email client addressed to `hello@hights.co.uk`. No
third-party service or backend required. To swap to a hosted form provider
later (Formspree, Getform, Web3Forms), replace the `submit` handler in
`assets/nav.js` and set `action` on the form in `contact.html`.

## Deployment

GitHub Pages is configured to publish from the `main` branch root.
The `CNAME` file sets the custom domain to `www.hights.co.uk`.

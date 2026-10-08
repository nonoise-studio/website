# nonoise studio

Landing site for [nonoisestudio.nl](https://nonoisestudio.nl), built with Astro and deployed to GitHub Pages.

```sh
npm install
npm run dev
```

## GitHub Pages

On push to `main`, `.github/workflows/deploy.yml` builds the site and publishes `dist/`.

In the repo: **Settings → Pages → Source: GitHub Actions**, custom domain `nonoisestudio.nl`.

At Greenhost, point the domain at GitHub Pages:

- Apex `A` records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- Optional `www` `CNAME` → `nonoise-studio.github.io`

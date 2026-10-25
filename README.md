# Kaivalya Khairnar — Personal Portfolio

A minimal, responsive, static portfolio built with plain HTML, CSS, and JavaScript. It is ready to host on GitHub Pages and requires no build step or dependencies.

## Files

- `index.html` — page structure and sections
- `styles.css` — minimal responsive styling; dark mode is the default
- `script.js` — timeline and selected-work content, link slots, theme toggle, and active navigation

## Preview locally

Open `index.html` directly in a browser, or serve the folder using any simple local HTTP server.

## Add work links

Open `script.js`. Search for `url: ""` in the `timelineItems` and `selectedWork` arrays and replace each empty value with the matching Google Drive or Notion URL. Example:

```js
material: {
  label: "View case study",
  url: "https://drive.google.com/drive/folders/YOUR_FOLDER_ID"
}
```

When a URL is present, the text automatically becomes a clickable link. When it is empty, the page shows a subtle “link to add” note rather than a broken `#` link.

The current learning entry for NextLeap deliberately describes partial coursework rather than a completed fellowship or certificate. QuickVerse is omitted as a claimed internship because it was previously described as fabricated; add only a truthful project/experience description if there is genuine work to show.

## Publish on GitHub Pages

1. Create a GitHub repository, for example `kaivalya-khairnar.github.io` (this repository name gives the matching `https://kaivalya-khairnar.github.io/` site URL).
2. Upload `index.html`, `styles.css`, `script.js`, and `README.md` to the repository root.
3. Open **Settings → Pages**.
4. Under build and deployment, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Wait for GitHub Pages to publish and open the URL shown on the Pages settings screen.

You can also use any repository name and enable Pages from `main` / root, in which case the site URL will usually include the repository name.

## Before publishing

- Add the real Drive/Notion links, and check sharing access in a private/incognito window.
- Replace any text or metrics that you cannot substantiate.
- Confirm contact details and the LinkedIn URL.
- Check the site on both mobile and desktop.

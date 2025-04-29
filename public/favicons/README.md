# Favicon Files for Beyond The Face

## Files to Upload

Please upload the following favicon files to this folder:

1. `favicon.ico` - The main favicon file (16x16, 32x32)
2. `apple-touch-icon.png` - For iOS devices (180x180)
3. `favicon-32x32.png` - Standard favicon (32x32)
4. `favicon-16x16.png` - Small favicon (16x16)
5. `android-chrome-192x192.png` - For Android devices (192x192)
6. `android-chrome-512x512.png` - For Android devices (512x512)
7. `safari-pinned-tab.svg` - For Safari pinned tabs (SVG format)
8. `mstile-150x150.png` - For Microsoft Tiles (150x150)

## How to Generate Favicons

You can generate these favicon files from your logo using online tools such as:

- [RealFaviconGenerator](https://realfavicongenerator.net/)
- [Favicon.io](https://favicon.io/)

## Implementation

After uploading the files, add the following code to the `<head>` section of your `index.html` file:

```html
<!-- Favicon -->
<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png">
<link rel="manifest" href="/favicons/site.webmanifest">
<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5">
<link rel="shortcut icon" href="/favicons/favicon.ico">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="msapplication-config" content="/favicons/browserconfig.xml">
<meta name="theme-color" content="#ffffff">
```

## Additional Configuration Files

Also included in this folder are:

- `site.webmanifest` - Web app manifest file
- `browserconfig.xml` - Configuration for Microsoft browsers

These files are pre-configured but may need to be updated with your specific branding colors.

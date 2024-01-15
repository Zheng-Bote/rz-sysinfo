<div id="top" align="center">

# rz-footer

A Web Component for HTML footer

defines a 3-column footer with contact|copyright|legal-notice

</div>

## Authors

- [@Zheng-Bote](https://www.github.com/Zheng-Bote)

## Version

v0.2.0

## License

[MIT](https://choosealicense.com/licenses/mit/)

Icons:
[Ionic Open Source Icons](https://ionic.io/ionicons)

## API Reference

#### Parameters

```
    <rz-footer></rz-footer>
```

```
    <rz-footer
      name="ZHENG Robert"
      created="2016"
      version="v0.2.0"
      link_left="/contact.html"
      link_right="/legal-notice.html"
    >
    </rz-footer>
```

| Parameter    | Type     | Description                                                             |
| :----------- | :------- | :---------------------------------------------------------------------- |
| `name`       | `string` | **Optional**. "name-of-copyright-holder" default: "ZHENG Robert"        |
| `created`    | `string` | **Optional**. "YYYY" default: "2016"                                    |
| `version`    | `string` | **Optional**. "v0.0.0" default: "v0.1.0"                                |
| `link_left`  | `string` | **Optional**. "link-to-contact-page" default: "/contact.html"           |
| `link_right` | `string` | **Optional**. "link-to-legal-notice-page" default: "/legal-notice.html" |

## Installation

used folder structure

```bash
.
├── assets
│   ├── css
│   │   └── index.css
│   ├── img
│   │   ├── information-outline.svg
│   │   ├── mail-open-outline.svg
│   └── js
│       └── rz-footer.js
├── favicon.ico
└── index.html

```

## Usage/Examples

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="ZHENG Robert" />

    <title>Web Component</title>

    <meta name="description" content="Web Component for HTML footer" />
    <meta name="version" content="v0.1.0" />
    <meta name="author" content="ZHENG Robert" />
    <meta name="date" content="2016-01-02T01:30:00+01:00" />

    <link rel="alternate icon" href="/assets/favicon.ico" />
    <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon" />

    <link href="./assets/css/index.css" rel="stylesheet" type="text/css" />
  </head>

  <body id="body">
    <main id="main">
      <h1>Hello World 你好世界 Hola Mundo Привет мир Hallo Welt!</h1>
    </main>
    <rz-footer
      name="ZHENG Robert"
      created="2016"
      version="v0.2.0"
      link_left="/contact.html"
      link_right="/legal-notice.html"
    ></rz-footer>

    <script src="./assets/js/rz-footer.js"></script>
  </body>
</html>
```

## Screenshots

  <img src="https://raw.githubusercontent.com/Zheng-Bote/rz-footer/main/assets/img/Screenshot.png" width="100%" height="auto" />

## Used By

This web component is used by the following web sites:

- [hase-zheng.net: Micro-Frontends and Microservices](https://www.hase-zheng.net)
- [Robert Zheng Landing Page](https://www.robert.hase-zheng.net)
- [Points of Interest: Geo-Coordinates and Photos of POI's](https://www.flag-me.info/)
- [ZHENG Bote: private travel photos](https://www.bote.hase-zheng.net/)
- [DigiDocuDev: web-based documentation management](https://www.digidocu.dev/)

### the end

:vulcan_salute:

<p align="right">(<a href="#top">back to top</a>)</p>

<div id="top" align="center">

# rz-sysinfo

A Web Component to provide some Sysinfo

provides some sys info as JSON data

</div>

## Authors

- [@Zheng-Bote](https://www.github.com/Zheng-Bote)

## Version

v0.1.0

## License

[MIT](https://choosealicense.com/licenses/mit/)

## API Reference

#### Parameters

```
    <rz-sysinfo
      network_info="y"
      sys_info="y"
      browser_info="y"
    >
    </rz-sysinfo>
```

| Parameter      | Type     | Description |
| :------------- | :------- | :---------- | :-- |
| `network_info` | `string` | y           | n   |
| `sys_info`     | `string` | y           | n   |
| `browser_info` | `string` | y           | n   |

## Installation

used folder structure

```bash
.
├── assets
│   ├── css
│   │   └── index.css
│   ├── img
│   │   ├── Screenshot
│   └── js
│       └── rz-sysinfo.js
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

    <meta name="description" content="Web Component for some sys info" />
    <meta name="version" content="v0.1.0" />
    <meta name="author" content="ZHENG Robert" />
    <meta name="date" content="2016-01-02T01:30:00+01:00" />

    <link rel="alternate icon" href="/assets/favicon.ico" />
    <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon" />

    <link
      href="./assets/css/index.css"
      rel="stylesheet"
      type="text/css"
      preload
    />
  </head>

  <body id="body">
    <main id="body">
      <h1>Web Component &raquo; rz-sysinfo &laquo;</h1>
      <article>
        <h2>A Web Component to provide some Sysinfo</h2>
        <p class="brief">provides some sys info as JSON data</p>
        <section>
          <h3>default</h3>

<pre>
&lt;rz-sysinfo id="sysinfo"
  network_info="y"
  sys_info="y"
  browser_info="y"
  data-result="{&quot;effectiveType&quot;:&quot;4g&quot;,&quot;rtt&quot;:null,&quot;downLink&quot;:10,&quot;downlinkMax&quot;:null,&quot;saveData&quot;:null,&quot;type&quot;:null,&quot;userLang&quot;:&quot;de&quot;,&quot;mem&quot;:8,&quot;cores&quot;:6}"&gt;
&lt;/rz-sysinfo&gt;
</pre>

<h4>Syntax</h4>
        <p>
            <pre class="code">&lt;rz-sysinfo id="sysinfo" network_info="y" sys_info="y" browser_info="y"&gt;&lt;/rz-sysinfo&gt;</pre>
        </p>
      </section>

      </article>
    </main>

    <rz-sysinfo id="sysinfo" network_info="y" sys_info="y" browser_info="y"></rz-sysinfo>
    <script src="./assets/js/rz-sysinfo.js" defer></script>

  </body>
</html>

```

## Screenshots

  <img src="https://raw.githubusercontent.com/Zheng-Bote/rz-sysinfo/main/assets/img/Screenshot.png" width="100%" height="auto" />

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

/* eslint-disable prefer-template, max-len */

const getDeferScript = src =>
  src ? `<script defer src="${src}"></script>` : ''

export default vo => `

<!DOCTYPE html>
<html lang="en">

  <head>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta charSet='utf-8' />
    <meta httpEquiv="Content-Language" content="en" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="${vo.description}">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/4.2.0/normalize.min.css">
    <link rel="stylesheet" type="text/css" href="/fonts.css"/>
    ${vo.mainCSSBundle
      ? '<link rel="stylesheet" type="text/css" href="' +
        vo.mainCSSBundle +
        '">'
      : ''}

    <title>${vo.title}</title>
    <script async src="https://www.googletagmanager.com/gtag/js?id=${vo.googleTrackingId}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', '${vo.googleTrackingId}');
    </script>


  </head>

  <body>
    <div id="root"><div>${vo.root}</div></div>
    ${getDeferScript(vo.manifestJSBundle)}
    ${getDeferScript(vo.vendorJSBundle)}
    ${getDeferScript(vo.mainJSBundle)}
  </body>

</html>

`

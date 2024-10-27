export type ComponentHeadArgs = {
    pageTitle: string;
};

export function componentHead(args: ComponentHeadArgs): string {
    const pageTitle = args.pageTitle ? ` - ${args.pageTitle}` : '';

    return `<head>
    <title>yellowFloppyDrive${pageTitle}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="icon" type="image/png" href="/logo.png"/>
    <link rel="stylesheet" href="/styles.css"/>
  
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZPPYF1DZ3P"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-ZPPYF1DZ3P');
    </script>
</head>`;
}

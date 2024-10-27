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
  
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-NL79F7VB');</script>
    <!-- End Google Tag Manager -->
</head>`;
}

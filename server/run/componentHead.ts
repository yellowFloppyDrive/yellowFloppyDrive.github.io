import {importGoogleAnalyticsScripts} from "./importGoogleAnalyticsScripts";
import {importMonotonFont} from "./importMonotonFont";

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
  
    ${importGoogleAnalyticsScripts()}
    
    ${importMonotonFont()}
</head>`;
}

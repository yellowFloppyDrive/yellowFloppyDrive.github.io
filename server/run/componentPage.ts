export type PageArgs = {
    headHtml: string;
    bodyHtml: string;
};

export function componentPage(args: PageArgs): string {
    return `<html lang="en">
  ${args.headHtml}

  <body>
    ${args.bodyHtml}
  </body>
</html>`;
}

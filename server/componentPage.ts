import { PageArgs } from "./PageArgs";

export function componentPage(args: PageArgs): string {
  return `<html lang="en">
  ${args.headHtml}

  <body>
    ${args.bodyHtml}
  </body>
</html>`;
}

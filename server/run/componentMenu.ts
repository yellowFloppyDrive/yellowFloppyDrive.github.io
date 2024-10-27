import {MenuLinkArgs} from "../type/MenuLinkArgs";
import {componentMenuLink} from "./componentMenuLink";

export function componentMenu(): string {
    const links: MenuLinkArgs[] = [
        {href: "/", text: "Start"},
        {href: "/blog", text: "Blog"},
    ];

    const linksHtml = links
        .map((link) => `<div>${componentMenuLink(link)}</div>`)
        .join("\n");

    return `<div style="background: #5c6a91; padding: 1rem 0; position: sticky; top: 0">
  <div class="container">
    <div
      style="
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 1rem;
      "
    >${linksHtml}</div>
  </div>
</div>
<div style="height: 3rem;"></div>`;
}

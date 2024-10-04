import { MenuLinkArgs } from "./MenuLinkArgs";

export function componentMenuLink(args: MenuLinkArgs): string {
  return `<a href="${args.href}" style="color: #f9f8f1; font-weight: bold">${args.text}</a>`;
}

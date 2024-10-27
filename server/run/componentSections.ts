import {componentSectionDivider} from "./componentSectionDivider";

export function componentSections(items: string[]): string {
    const itemsHtml = items.join(componentSectionDivider());

    return `<div style="display: grid; gap: 2rem" class="container">${itemsHtml}</div>`;
}

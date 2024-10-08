import { componentCookbooksList } from "./componentCookbooksList";
import { componentFooter } from "./componentFooter";
import { componentHead } from "./componentHead";
import { componentHero } from "./componentHero";
import { componentMenu } from "./componentMenu";
import { componentPage } from "./componentPage";
import { componentScript } from "./componentScript";
import { componentSections } from "./componentSections";


export function pageCookbooks(): string {
    const headHtml = componentHead({ pageTitle: "Cookbooks" });

    const bodyHtml = [
        componentHero(),
        componentMenu(),
        componentSections([componentCookbooksList()]),
        componentFooter(),
        componentScript(),
    ].join("\n");

    return componentPage({ headHtml, bodyHtml });
}


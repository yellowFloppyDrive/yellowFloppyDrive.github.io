import {componentFooter} from "./componentFooter";
import {componentHead} from "./componentHead";
import {componentHero} from "./componentHero";
import {componentIntro} from "./componentIntro";
import {componentMenu} from "./componentMenu";
import {componentPage} from "./componentPage";
import {componentScript} from "./componentScript";
import {componentSections} from "./componentSections";
import {componentSocials} from "./componentSocials";
import {componentGtmBody} from "./componentGtmBody";

export function pageIndex(): string {
    const headHtml = componentHead({pageTitle: ""});

    const bodyHtml = [
        componentGtmBody(),
        componentHero(),
        componentMenu(),
        componentSections([componentSocials(), componentIntro()]),
        componentFooter(),
        componentScript(),
    ].join("\n");

    return componentPage({headHtml, bodyHtml});
}
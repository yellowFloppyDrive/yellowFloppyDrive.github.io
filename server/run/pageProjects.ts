import {componentFooter} from "./componentFooter";
import {componentHead} from "./componentHead";
import {componentHero} from "./componentHero";
import {componentMenu} from "./componentMenu";
import {componentPage} from "./componentPage";
import {componentProjects} from "./componentProjects";
import {componentScript} from "./componentScript";
import {componentSections} from "./componentSections";

export function pageProjects(): string {
    const headHtml = componentHead({pageTitle: "Projects"});

    const bodyHtml = [
        componentHero(),
        componentMenu(),
        componentSections([componentProjects()]),
        componentFooter(),
        componentScript(),
    ].join("\n");

    return componentPage({headHtml, bodyHtml});
}

import {componentBlogPosts} from "./componentBlogPosts";
import {componentFooter} from "./componentFooter";
import {componentHead} from "./componentHead";
import {componentHero} from "./componentHero";
import {componentMenu} from "./componentMenu";
import {componentPage} from "./componentPage";
import {componentScript} from "./componentScript";
import {componentSections} from "./componentSections";

export function pageBlog(): string {
    const headHtml = componentHead({pageTitle: "Blog"});

    const bodyHtml = [
        componentHero(),
        componentMenu(),
        componentSections([componentBlogPosts()]),
        componentFooter(),
        componentScript(),
    ].join("\n");

    return componentPage({headHtml, bodyHtml});
}

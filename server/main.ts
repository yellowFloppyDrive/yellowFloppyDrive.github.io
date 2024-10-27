import fs from "node:fs/promises";
import path from "node:path";
import {pageIndex} from "./run/pageIndex";
import {pageBlog} from "./run/pageBlog";
import {pageCookbooks} from "./run/pageCookbooks";
import {exportHtml} from "./run/exportHtml";
import {pageProjects} from "./run/pageProjects";

export async function main(): Promise<void> {
    await fs.writeFile(
        path.resolve(__dirname, "../public/index.html"),
        pageIndex(),
    );

    await exportHtml({html: pageBlog(), pageDir: "blog"});
    await exportHtml({html: pageCookbooks(), pageDir: "cookbooks"});
    await exportHtml({html: pageProjects(), pageDir: "projects"});
}

main();

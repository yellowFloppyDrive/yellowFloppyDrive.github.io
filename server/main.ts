import fs from "node:fs/promises";
import path from "node:path";
import {pageIndex} from "./run/pageIndex";
import {pageBlog} from "./run/pageBlog";
import {exportHtml} from "./run/exportHtml";

export async function main(): Promise<void> {
    await fs.writeFile(
        path.resolve(__dirname, "../public/index.html"),
        pageIndex(),
    );

    await exportHtml({html: pageBlog(), pageDir: "blog"});
}

main();

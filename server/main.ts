import fs from "node:fs/promises";
import path from "node:path";
import { pageIndex } from "./pageIndex";
import { pageBlog } from "./pageBlog";
import { pageCookbooks } from "./pageCookbooks";
import { runExportHtml } from "./runExportHtml";
import { pageProjects } from "./pageProjects";

export async function main(): Promise<void> {
  await fs.writeFile(
    path.resolve(__dirname, "../public/index.html"),
    pageIndex(),
  );

  await runExportHtml({ html: pageBlog(), pageDir: "blog" });
  await runExportHtml({ html: pageCookbooks(), pageDir: "cookbooks" });
  await runExportHtml({ html: pageProjects(), pageDir: "projects" });
}

main();

import path from "node:path";
import fs from "node:fs/promises";
import { ExportHtmlArgs } from "./ExportHtmlArgs";

export async function runExportHtml(args: ExportHtmlArgs): Promise<void> {
  const pageDirPath = path.resolve(__dirname, `../public/${args.pageDir}/`);

  try {
    await fs.access(pageDirPath);
  } catch (e) {
    await fs.mkdir(pageDirPath);
  }

  await fs.writeFile(path.resolve(pageDirPath, "index.html"), args.html);
}

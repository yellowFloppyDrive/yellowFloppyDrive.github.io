import { componentSectionDivider } from "./componentSectionDivider";

export function componentHero(): string {
  const divider = componentSectionDivider();

  return `<div style="background: #ffda1f; padding: 2rem 0; text-align: center">
  <img src="/floppy.svg" />
  <h1 style="color: #23273c">yellowFloppyDrive</h1>
</div>
${divider}`;
}


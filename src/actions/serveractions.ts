"use server";
import { promises as fs } from "fs";

export const SaveFile = async (file: string) => {
  try {
    const promises = [
      fs.writeFile(process.cwd() + "/src/app/(routes)/test/test.txt", file),
      fs.writeFile(process.cwd() + "/src/app/(routes)/test/page.mdx", file),
    ];
    await Promise.all(promises);
  } catch (error) {
    console.log(error);
  }
};

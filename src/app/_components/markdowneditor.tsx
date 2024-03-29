"use client";

import { SaveFile } from "@/actions/serveractions";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/shadcn/ui/menubar";
import { Textarea } from "@/shadcn/ui/textarea";
import { useEffect, useRef, useState } from "react";

export default function MarkdownEditor({ file }: { file: string }) {
  const [text, setText] = useState(file);
  const data = useRef(text);
  const saveFile = async (event: KeyboardEvent) => {
    if (event.metaKey && event.key === "s") {
      event.preventDefault();
      console.log("CMD S Clicked!");
      await SaveFile(data.current);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", saveFile);
    return () => {
      window.removeEventListener("keydown", saveFile);
    };
  }, []);
  return (
    <div>
      <MenubarComponent file={data.current} />
      <Textarea
        autoFocus
        onFocus={(e) => {
          // Move cursor to the end.
          var temp = e.target.value;
          e.target.value = "";
          e.target.value = temp;
        }}
        value={text}
        onChange={(e) => {
          // Window Event listeners receive a snapshot of text when the component is mounted so need to set a ref to the text instead in order for the value to be updated.
          data.current = e.target.value;
          setText(e.target.value);
        }}
        placeholder="Enter markdown"
      />
      <span>{text}</span>
    </div>
  );
}

const MenubarComponent = ({ file }: { file: string }) => (
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.10505 12C4.70805 12 4.4236 11.912 4.25171 11.736C4.0839 11.5559 4 11.2715 4 10.8827V4.11733C4 3.72033 4.08595 3.43588 4.25784 3.26398C4.43383 3.08799 4.71623 3 5.10505 3C6.42741 3 8.25591 3 9.02852 3C10.1373 3 11.0539 3.98153 11.0539 5.1846C11.0539 6.08501 10.6037 6.81855 9.70327 7.23602C10.8657 7.44851 11.5176 8.62787 11.5176 9.48128C11.5176 10.5125 10.9902 12 9.27734 12C8.77742 12 6.42626 12 5.10505 12ZM8.37891 8.00341H5.8V10.631H8.37891C8.9 10.631 9.6296 10.1211 9.6296 9.29877C9.6296 8.47643 8.9 8.00341 8.37891 8.00341ZM5.8 4.36903V6.69577H8.17969C8.53906 6.69577 9.27734 6.35939 9.27734 5.50002C9.27734 4.64064 8.48047 4.36903 8.17969 4.36903H5.8Z"
            fill="currentColor"
          ></path>
        </svg>
      </MenubarTrigger>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>File</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          New Tab <MenubarShortcut>⌘T</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          New Window <MenubarShortcut>⌘N</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem onClick={() => SaveFile(file)}>
          Save <MenubarShortcut>⌘S</MenubarShortcut>
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>Edit</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          Undo <MenubarShortcut>⌘Z</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarSub>
          <MenubarSubTrigger>Find</MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem>Search the web</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Find...</MenubarItem>
            <MenubarItem>Find Next</MenubarItem>
            <MenubarItem>Find Previous</MenubarItem>
          </MenubarSubContent>
        </MenubarSub>
        <MenubarSeparator />
        <MenubarItem>Cut</MenubarItem>
        <MenubarItem>Copy</MenubarItem>
        <MenubarItem>Paste</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>View</MenubarTrigger>
      <MenubarContent>
        <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
        <MenubarCheckboxItem checked>Always Show Full URLs</MenubarCheckboxItem>
        <MenubarSeparator />
        <MenubarItem inset>
          Reload <MenubarShortcut>⌘R</MenubarShortcut>
        </MenubarItem>
        <MenubarItem disabled inset>
          Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem inset>Toggle Fullscreen</MenubarItem>
        <MenubarSeparator />
        <MenubarItem inset>Hide Sidebar</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>Profiles</MenubarTrigger>
      <MenubarContent>
        <MenubarRadioGroup value="benoit">
          <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
          <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
          <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
        </MenubarRadioGroup>
        <MenubarSeparator />
        <MenubarItem inset>Edit...</MenubarItem>
        <MenubarSeparator />
        <MenubarItem inset>Add Profile...</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
);

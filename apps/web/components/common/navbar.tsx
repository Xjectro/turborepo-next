import React from "react";

import Link from "next/link";
import { EllipsisVerticalIcon } from "lucide-react";

import { useTheme } from "next-themes";
import { Button } from "@xjectro/react/components/button";
import {
  Navbar as NavbarRoot,
  NavbarContent,
  NavbarItem,
} from "@xjectro/react/components/navbar";
import { Typography } from "@xjectro/react/components/typography";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@xjectro/react/components/dropdown-menu";

export function Navbar() {
  const { setTheme, themes, theme } = useTheme();

  const themeKeys = {
    dark: "Dark Mode",
    light: "Light Mode",
    system: "System Theme",
  };

  return (
    <NavbarRoot shouldHideOnScroll isBackground variant="floating">
      <NavbarContent justify="start">
        <NavbarItem>
          <Link href="/">
            <Typography
              color="primary"
              variant="shiny"
              as="h1"
              weight="bold"
              size="2xl"
            >
              {process.env.NEXT_PUBLIC_APP_TITLE}
            </Typography>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <EllipsisVerticalIcon className="size-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Theme Mode</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuRadioGroup
                      value={theme}
                      onValueChange={setTheme}
                    >
                      {themes.map((theme) => (
                        <DropdownMenuRadioItem value={theme} key={theme}>
                          {themeKeys[theme as "dark"]}
                        </DropdownMenuRadioItem>
                      ))}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>
        </NavbarItem>
      </NavbarContent>
    </NavbarRoot>
  );
}

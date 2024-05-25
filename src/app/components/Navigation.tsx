'use client'

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>Vacunapp</NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link href="#" color="foreground">Acerca de</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href="#" radius="md" variant="flat" className="bg-primary-btn text-[#fafafa] text-base">
            Iniciar sesión
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Button as={Link} href="#" radius="md" variant="flat" className="bg-primary-btn text-[#fafafa] text-base">
            Iniciar sesión
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" className="w-full" href="#" size="lg">
            Acerca de
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
        <Link
          color="danger"
          className="w-full"
          href="#"
          size="lg"
        >Salir</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}
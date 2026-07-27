#!/bin/bash
pacman -S --needed base-devel
git clone https://aur.archlinux.org/paru.git
cd paru
makepkg -si
cd ..
paru -S mommy gamescope-session-cachyos mangoapp 
echo prep done rebooting now
systemctl reboot --firmware-setup --when=+30sec
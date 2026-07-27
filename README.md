# lenovo-300e-linux-tablet-fixes
fixes for tablet mode and other random stuff for the lenovo chromebook 300e 

---
- Device Model: Lenovo 300e/500e 2nd Gen (PHASER360)
- Firmware: MrChromebox UEFI (Full ROM).

copy [this](/etc/libinput/local-overrides.quirks) file to /etc/libinput/ and reboot.

or just run the install script if you can
## what this fixes
currently this fixes the volume buttons not working in tablet mode and the touchpad occasionally not working after switching out of tablet mode (normally requiring a restart each time)
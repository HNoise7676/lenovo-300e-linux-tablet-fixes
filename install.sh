#!/bin/bash
sudo cp etc/libinput/local-overrides.quirks /etc/libinput/local-overrides.quirks
echo "install complete rebooting now"
sudo systemctl reboot
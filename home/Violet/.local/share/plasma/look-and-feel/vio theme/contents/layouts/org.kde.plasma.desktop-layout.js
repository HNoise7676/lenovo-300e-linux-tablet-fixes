var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometries-1366x768": "",
                    "ItemGeometries-768x1366": "",
                    "ItemGeometriesHorizontal": "",
                    "ItemGeometriesVertical": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.slideshow"
                },
                "/ConfigDialog": {
                    "DialogHeight": "697",
                    "DialogWidth": "1366"
                },
                "/General": {
                    "ToolBoxButtonState": "topcenter",
                    "ToolBoxButtonX": "798"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///usr/share/wallpapers/PastelHills/contents/images/1920x1080.jpg"
                },
                "/Wallpaper/org.kde.slideshow/General": {
                    "Image": "file:///usr/share/wallpapers/cachyos-wallpapers/GreenNekoLady.png",
                    "SlidePaths": "/home/vi/.local/share/wallpapers/,/usr/share/wallpapers/",
                    "UncheckedSlides": "/home/vi/.local/share/wallpapers/ChromeOS/,/usr/share/wallpapers/cachyos-wallpapers/Abstract.png,/usr/share/wallpapers/cachyos-wallpapers/BlueFeathers.png,/usr/share/wallpapers/cachyos-wallpapers/Cachy depths 5K.png,/usr/share/wallpapers/cachyos-wallpapers/Cachy_Topography.jpg,/usr/share/wallpapers/cachyos-wallpapers/Cachy_Topography1.jpg,/usr/share/wallpapers/cachyos-wallpapers/Cachy_Topography2.jpg,/usr/share/wallpapers/cachyos-wallpapers/Cachy_Topography3.jpg,/usr/share/wallpapers/cachyos-wallpapers/Cachy_Topography4.jpg,/usr/share/wallpapers/cachyos-wallpapers/Cachy_Topography5.jpg,/usr/share/wallpapers/cachyos-wallpapers/Cachy_Topography6.jpg,/usr/share/wallpapers/cachyos-wallpapers/CachyAdventure169.png,/usr/share/wallpapers/cachyos-wallpapers/Cachyadventure219.png,/usr/share/wallpapers/cachyos-wallpapers/cachygalaxy99.jpg,/usr/share/wallpapers/cachyos-wallpapers/CachyOS_GreenSpace.png,/usr/share/wallpapers/cachyos-wallpapers/CachyOS_Moon.jpg,/usr/share/wallpapers/cachyos-wallpapers/cachysurf3.jpg,/usr/share/wallpapers/cachyos-wallpapers/cachysurf4.jpg,/usr/share/wallpapers/cachyos-wallpapers/DarkStreaks.png,/usr/share/wallpapers/cachyos-wallpapers/Dimensions.png,/usr/share/wallpapers/cachyos-wallpapers/Dracula.png,/usr/share/wallpapers/cachyos-wallpapers/GreenFeathers.png,/usr/share/wallpapers/cachyos-wallpapers/limine-splash.png,/usr/share/wallpapers/cachyos-wallpapers/Lines.png,/usr/share/wallpapers/cachyos-wallpapers/Liquid.png,/usr/share/wallpapers/cachyos-wallpapers/Metal.png,/usr/share/wallpapers/cachyos-wallpapers/north.png,/usr/share/wallpapers/cachyos-wallpapers/OrangeFeathers.png,/usr/share/wallpapers/cachyos-wallpapers/paper.png,/usr/share/wallpapers/cachyos-wallpapers/PurpleFeathers.png,/usr/share/wallpapers/cachyos-wallpapers/Skyscraper.png,/usr/share/wallpapers/cachyos-wallpapers/Spectrum.png,/usr/share/wallpapers/cachyos-wallpapers/splash.png,/usr/share/wallpapers/cachyos-wallpapers/wave.png,/usr/share/wallpapers/cachyos-wallpapers/wave2.png,/usr/share/wallpapers/Next/"
                }
            },
            "wallpaperPlugin": "org.kde.slideshow"
        }
    ],
    "panels": [
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1",
                            "popupHeight": "517",
                            "popupWidth": "677"
                        },
                        "/General": {
                            "favoritesPortedToKAstats": "true"
                        },
                        "/Shortcuts": {
                            "global": "Alt+F1"
                        }
                    },
                    "plugin": "org.kde.plasma.kickoff"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/General": {
                            "launchers": "preferred://browser,applications:equibop.desktop,preferred://filemanager,applications:systemsettings.desktop"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "60"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 2.2777777777777777,
            "hiding": "normal",
            "lengthMode": "fill",
            "location": "bottom",
            "maximumLength": 75.88888888888889,
            "minimumLength": 75.88888888888889,
            "offset": 0,
            "opacity": "adaptive"
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);

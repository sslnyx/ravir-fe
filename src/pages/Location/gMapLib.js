import logo from "/src/assets/img/location/ra-map-logo.svg";
import trainIcon from "/src/assets/img/location/skytrain.svg";

// A marker with a with a URL pointing to a PNG.
const siteLogo = document.createElement("img");

siteLogo.src = logo;
siteLogo.width = 50;

const siteCenter = { lat: 49.239085814542705, lng: -122.86339723574926 };
const colors = [
    "#E5B535",
    "#3EA4BA",
    "#C762A2",
    "#5EBC6D",
];


export const createMap = (mapRef, Map) => {
    return new Map(mapRef.current, {
        mapId: "43ff4a51f0394bfb",
        center: siteCenter,
        zoom: 14,
        disableDefaultUI: true,
    });
};

export const createCSMaker = async (map) => {
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    return new AdvancedMarkerElement({
        map,
        content: siteLogo,
        position: siteCenter,
        zIndex: 9999,
    });
};

export const createMarkers = (bounds, map, legend, currentMarkers, currentInfoWindow) => {
    // const otherMarkers = legend.slice(0, -1);

    // console.log(legend.entries())

    for (const [i, { category, markers }] of legend.entries()) {
        if (!currentMarkers[category]) {
            currentMarkers[category] = [];
        }
        if (!currentInfoWindow[category]) {
            currentInfoWindow[category] = [];
        }
        for (const [j, markerData] of markers.entries()) {
            const iconImage =
                i === 4
                    ? { url: trainIcon, scaledSize: new google.maps.Size(30, 30) }
                    : { path: google.maps.SymbolPath.CIRCLE };

            const marker = new google.maps.Marker({
                map,
                label: i === 4 ? null : { text: j + 1 + "", color: "white" },
                icon: {
                    fillColor: colors[i],
                    fillOpacity: 1,
                    strokeColor: "white",
                    strokeWeight: 2,
                    scale: 12, // Adjust the size of the circle as needed
                    ...iconImage,
                },
                title: `${i + 1}. ${markerData.title}`,
                // content: pin.element,

                position: {
                    lat: markerData.coordinate[0],
                    lng: markerData.coordinate[1],
                },
                // zIndex: 12,
                gmpClickable: true,
            });
            const contentString = `
        <span>${markerData.title}</span>
        `;
            const infoWindow = new google.maps.InfoWindow({
                content: contentString,
            });

            // // Add a click listener for each marker, and set up the info window.
            // marker.addListener("click", ({ domEvent, latLng }) => {
            //     const { target } = domEvent;

            //     infoWindow.close();
            //     infoWindow.setContent(contentString);
            //     infoWindow.open(marker.map, marker);
            // });


            // Extend the bounds with each marker's position
            bounds.extend(marker.position);

            currentMarkers[category].push(marker);
            currentInfoWindow[category].push(infoWindow);
        }
    }
};

export const clearInfoWindows = (currentInfoWindow) => {
    for (const iws of Object.values(currentInfoWindow)) {
        for (const iw of iws) {
            iw.close();
        }
    }
};

export const createInfoWindows = (map, currentMarkers, currentInfoWindow) => {
    // console.log(currentMarkers)
    // console.log("first")

    // Create a container to store listener handles
    const listenerHandles = {};

    const windowPop = (cat, i, marker) => {
        clearInfoWindows(currentInfoWindow);
        currentInfoWindow[cat][i].open({
            anchor: marker,
            map,
        });
    }

    for (const [cat, markers] of Object.entries(currentMarkers)) {
        listenerHandles[cat] = []; // Initialize an array for each category

        for (const [i, marker] of markers.entries()) {
            let handle

            if (window.innerWidth > 768)
                handle = marker.addListener("mouseover", () => windowPop(cat, i, marker));

            console.log(window.innerWidth)
            if (window.innerWidth <= 768)
                handle = marker.addListener("click", () => windowPop(cat, i, marker));


            listenerHandles[cat][i] = handle;
        }
    }

    // Function to remove event listeners
    const removeEventListeners = () => {
        console.log("remove")
        for (const [cat, handlesArray] of Object.entries(listenerHandles)) {
            for (const handle of handlesArray) {
                google.maps.event.removeListener(handle); // Use the stored handle to remove listener
            }
        }
    };

    return removeEventListeners; // Return the function to allow listener removal

}



export const drawLine = (map) => {
    // Define a symbol using SVG path notation, with an opacity of 1.
    const lineSymbol = {
        path: "M 0,-1 0,1",
        strokeOpacity: 1,
        strokeColor: "#0098db",
        scale: 4,
    };

    const line = new google.maps.Polyline({
        path: [
            { lat: 49.168111, lng: -123.136548 },
            { lat: 49.174796, lng: -123.136796 },
            { lat: 49.184638, lng: -123.1365 },
            { lat: 49.191965, lng: -123.129495 },
            {
                lat: 49.193802,
                lng: -123.129477,
            },
            {
                lat: 49.193846,
                lng: -123.129522,
            },
            {
                lat: 49.1955122,
                lng: -123.1259952,
            },
            {
                lat: 49.197689,
                lng: -123.120845,
            },
            {
                lat: 49.200029,
                lng: -123.118082,
            },
            {
                lat: 49.208143,
                lng: -123.117268,
            },
            {
                lat: 49.20899,
                lng: -123.117012,
            },
            {
                lat: 49.212085,
                lng: -123.11689,
            },
        ],
        strokeOpacity: 0,
        icons: [
            {
                icon: lineSymbol,
                offset: "0",
                repeat: "20px",
            },
        ],
        map: map,
    });
}
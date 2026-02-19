var map = L.map('map', {
    maxBounds: [[(-87.113), (-377.57)], [(89.511), (699.68)]],
    maxBoundsViscosity: 0.9
}).setView([12.41, 71.71], 1);

// To prevent 404 error when zooming out too far, we will use a custom tile layer that returns blank tiles outside the valid range of coordinates.
const TILE_LIMITS = {
  1: { maxX: 4,   maxY: 1   },
  2: { maxX: 8,   maxY: 3   },
  3: { maxX: 16,  maxY: 7  },
  4: { maxX: 32,  maxY: 15  },
  5: { maxX: 65,  maxY: 31  },
  6: { maxX: 131,  maxY: 63  },
  7: { maxX: 263,  maxY: 126  },
  8: { maxX: 526,  maxY: 253  },
  9: { maxX: 1053, maxY: 507 }
};

const SafeTileLayer = L.TileLayer.extend({
  createTile: function (coords, done) {
    const z = coords.z;
    const lim = TILE_LIMITS[z];

    if (lim) {
      if (coords.x < 0 || coords.y < 0 || coords.x > lim.maxX || coords.y > lim.maxY) {
        // Return a blank tile instantly (no network request)
        const tile = document.createElement('canvas');
        const size = this.getTileSize();
        tile.width = size.x;
        tile.height = size.y;
        done(null, tile);
        return tile;
      }
    }

    // Otherwise, load normal tile
    return L.TileLayer.prototype.createTile.call(this, coords, done);
  }
});


new SafeTileLayer('Leaflet_Tiles/{z}/{x}/{y}.png', {
  maxZoom: 9,
  minZoom: 1,
  zoomSnap: 0.2,
  noWrap: true,
  errorTileUrl: 'Leaflet_Tiles/empty.png',
  attribution: '&copy; Devolution'
}).addTo(map);


// Copy the coordinates of a clicked point to the clipboard (for debugging purposes)
// map.on('click', async (e) => {
//   const x = e.latlng.lng;
//   const y = e.latlng.lat;

//   const text = `${y.toFixed(2)}, ${x.toFixed(2)}`;

//   try {
//     await navigator.clipboard.writeText(text);
//     console.log('Copied:', text);
//   } catch {
//     const ta = document.createElement('textarea');
//     ta.value = text;
//     document.body.appendChild(ta);
//     ta.select();
//     document.execCommand('copy');
//     document.body.removeChild(ta);
//     console.log('Copied (fallback):', text);
//   }
// });


// remove original Leaflet attribution (will be added to Credits)
map.attributionControl.setPrefix(false);
// add individual attribution
//map.attributionControl.addAttribution(`<a onclick="sidebar.open('privacy')" href="#">Privacy Policy</a> &VerticalLine; <a onclick="sidebar.open('imprint')" href="#">Imprint</a>`);

L.control.mousePosition().addTo(map);

//var sidebar = L.control.sidebar('sidebar').addTo(map);
var sidebar = L.control.sidebar({
    autopan: true,       // whether to maintain the centered map point when opening the sidebar
    closeButton: true,    // whether t add a close button to the panes
    container: 'sidebar', // the DOM container or #ID of a predefined sidebar container that should be used
    position: 'left',     // left or right
}).addTo(map);

// auto-open sidebar at start
sidebar.open(('devolution'));
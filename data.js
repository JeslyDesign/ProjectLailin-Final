var APP_DATA = {
  "scenes": [
    {
      "id": "0-altar",
      "name": "Altar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2990111295847875,
          "pitch": 0.5116022347810603,
          "rotation": 0,
          "target": "1-livingroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-livingroom",
      "name": "Livingroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9118424944515731,
          "pitch": 0.30734990698916675,
          "rotation": 5.497787143782138,
          "target": "0-altar"
        },
        {
          "yaw": -0.914683624229987,
          "pitch": 0.3430828910846717,
          "rotation": 0.7853981633974483,
          "target": "2-dining-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining-area",
      "name": "Dining Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.83495995761524,
          "pitch": 0.4460702670411578,
          "rotation": 0.7853981633974483,
          "target": "1-livingroom"
        },
        {
          "yaw": -0.3856846250164985,
          "pitch": 0.1641507757284124,
          "rotation": 0,
          "target": "5-gf-bedroom"
        },
        {
          "yaw": 1.6188991526668683,
          "pitch": 0.3642345292366205,
          "rotation": 0.7853981633974483,
          "target": "3-stair-view"
        },
        {
          "yaw": 2.1179629334884336,
          "pitch": 0.2192407704745456,
          "rotation": 6.283185307179586,
          "target": "7-1floor-view1"
        },
        {
          "yaw": 2.6519309782580063,
          "pitch": 0.33481853578351206,
          "rotation": 4.71238898038469,
          "target": "4-gf-wall-view"
        },
        {
          "yaw": 2.9416021877687157,
          "pitch": 0.1284165959543948,
          "rotation": 0,
          "target": "6-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-stair-view",
      "name": "Stair View",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6882987382775418,
          "pitch": -0.44031854069157106,
          "rotation": 4.71238898038469,
          "target": "7-1floor-view1"
        },
        {
          "yaw": -2.861763179410662,
          "pitch": 0.4093080996948295,
          "rotation": 0,
          "target": "2-dining-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-gf-wall-view",
      "name": "GF Wall View",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.745075881159238,
          "pitch": 0.16182444600103985,
          "rotation": 4.71238898038469,
          "target": "6-kitchen"
        },
        {
          "yaw": -2.8165571306884907,
          "pitch": 0.39062841979029095,
          "rotation": 7.0685834705770345,
          "target": "2-dining-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-gf-bedroom",
      "name": "GF Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7173073835855508,
          "pitch": 0.3767390197075784,
          "rotation": 0,
          "target": "2-dining-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4661507968614096,
          "pitch": 0.31288690898142946,
          "rotation": 0,
          "target": "2-dining-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-1floor-view1",
      "name": "1Floor View1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7394833988962741,
          "pitch": 0.4257938992272301,
          "rotation": 0,
          "target": "9-1floor-view3"
        },
        {
          "yaw": 3.1258716859130384,
          "pitch": 0.5295290955646017,
          "rotation": 0.7853981633974483,
          "target": "8-1floor-view2"
        },
        {
          "yaw": 1.068279483704746,
          "pitch": 0.22516336564537198,
          "rotation": 0,
          "target": "16-1f-room2"
        },
        {
          "yaw": 3.129057407616318,
          "pitch": 0.16467426158543574,
          "rotation": 0,
          "target": "15-1f-room1"
        },
        {
          "yaw": -0.7644736254553752,
          "pitch": -0.07439355285517557,
          "rotation": 0,
          "target": "18-2f-hall-view"
        },
        {
          "yaw": -2.058472259893911,
          "pitch": 0.8984182440708235,
          "rotation": 0.7853981633974483,
          "target": "2-dining-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-1floor-view2",
      "name": "1Floor View2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0476088062761875,
          "pitch": 0.43843537041969505,
          "rotation": 4.71238898038469,
          "target": "7-1floor-view1"
        },
        {
          "yaw": 1.5545005493079582,
          "pitch": 0.18544756123575468,
          "rotation": 0,
          "target": "15-1f-room1"
        },
        {
          "yaw": -2.272100719782003,
          "pitch": 0.41903367326013097,
          "rotation": 0,
          "target": "10-master-view1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-1floor-view3",
      "name": "1Floor View3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.09223660084119345,
          "pitch": 0.6804450523220495,
          "rotation": 0,
          "target": "17-1f-room3"
        },
        {
          "yaw": -1.8102107978877058,
          "pitch": 0.24259665134550445,
          "rotation": 4.71238898038469,
          "target": "16-1f-room2"
        },
        {
          "yaw": -1.4937894583629863,
          "pitch": 0.3644515038294607,
          "rotation": 0,
          "target": "7-1floor-view1"
        },
        {
          "yaw": -1.5460505550901331,
          "pitch": 0.20707206221661423,
          "rotation": 1.5707963267948966,
          "target": "8-1floor-view2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-master-view1",
      "name": "Master View1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0921500389849523,
          "pitch": 0.34678237352067853,
          "rotation": 0.7853981633974483,
          "target": "11-master-view2"
        },
        {
          "yaw": -0.17324548614774749,
          "pitch": 0.10612495477565886,
          "rotation": 0,
          "target": "8-1floor-view2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-master-view2",
      "name": "Master View2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5994809686481837,
          "pitch": 0.4699186866322673,
          "rotation": 5.497787143782138,
          "target": "10-master-view1"
        },
        {
          "yaw": -1.9906008381525062,
          "pitch": 0.21937653747728092,
          "rotation": 0,
          "target": "12-master-closet-view1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-master-closet-view1",
      "name": "Master Closet View1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2672696283831009,
          "pitch": 0.648029781542224,
          "rotation": 0,
          "target": "13-master-closet-view2"
        },
        {
          "yaw": 1.6163951373051813,
          "pitch": 0.6575389183200002,
          "rotation": 0,
          "target": "14-masters-bathroom"
        },
        {
          "yaw": -3.1282121828630913,
          "pitch": 0.7481256919931027,
          "rotation": 0,
          "target": "11-master-view2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-master-closet-view2",
      "name": "Master Closet View2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.893159263205476,
          "pitch": 0.7301808554741953,
          "rotation": 4.71238898038469,
          "target": "12-master-closet-view1"
        },
        {
          "yaw": -2.875474016623391,
          "pitch": 0.4600064835402282,
          "rotation": 0,
          "target": "14-masters-bathroom"
        },
        {
          "yaw": -2.5318410021474254,
          "pitch": 0.19664497138554182,
          "rotation": 0.7853981633974483,
          "target": "11-master-view2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-masters-bathroom",
      "name": "Master's Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.28431057875137355,
          "pitch": 0.6239871691753294,
          "rotation": 0.7853981633974483,
          "target": "12-master-closet-view1"
        },
        {
          "yaw": -0.5333423037812075,
          "pitch": 0.2515018735414678,
          "rotation": 0,
          "target": "11-master-view2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-1f-room1",
      "name": "1F Room1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7112985482451926,
          "pitch": 0.3300217693972609,
          "rotation": 0,
          "target": "8-1floor-view2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-1f-room2",
      "name": "1F Room2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9076793089914936,
          "pitch": 0.2271844992994545,
          "rotation": 0,
          "target": "7-1floor-view1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-1f-room3",
      "name": "1F Room3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1785100053430675,
          "pitch": 0.4185791529891745,
          "rotation": 0,
          "target": "9-1floor-view3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-2f-hall-view",
      "name": "2F Hall View",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5019665065304366,
          "pitch": 0.1439342409975204,
          "rotation": 0,
          "target": "19-2f-closet"
        },
        {
          "yaw": -0.4448669410318722,
          "pitch": 0.052407841886832784,
          "rotation": 0,
          "target": "20-2f-bedroom"
        },
        {
          "yaw": -1.6658170509390455,
          "pitch": 0.600487072421636,
          "rotation": 0,
          "target": "7-1floor-view1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-2f-closet",
      "name": "2F Closet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9064120328032903,
          "pitch": 0.44534357269317404,
          "rotation": 0,
          "target": "18-2f-hall-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-2f-bedroom",
      "name": "2F Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.298439673410119,
          "pitch": 0.29083803324286883,
          "rotation": 0,
          "target": "18-2f-hall-view"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Lailin Final",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};

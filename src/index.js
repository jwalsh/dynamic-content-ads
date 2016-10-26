const adTypes = [
  // 1. Static or single layer creative ad units
  // 2. Ad units with images and texts
  // 3. Ad units with simple animation using core HTML5 technologies like CSS or JS or SVG
  // 4. Ad units with single video engagement that plays in banner
  // 5. Ad units with single “click out” user engagement
  // 6. Dynamic Video—delivered via VPAID or other creative in VAST
];

const assetType = {
  // 1. html
  HTML: {
    weight: 0, // K weight of HTML in KB
    filename: '' // Name of the html file
  }
  // 2. javascript
  // 3. css
  // 4. image (png, jpeg)
  // 5. animatedImage (gif) (can this be
  // image)
  // 6. media - for audio and video
  // 7. svgImage
  // 8. webGl
  // 9. dataFeed
  // 10. assetFeed
  // 11. Text
  // 12. Fonts
  // 13. URI*
  // 14. custom
};

const componentType = [
  // logo,
  // background image,
  // display URL,
  // price
];

const sourceTypes = [
  // URI
  // relative
  // embedded
];

const targetTypes = [
  // audience,
  // weather,
  // location
];
const adSchema = {
  id: '',
  name: '',
  advertiser: '',
  adUnits: [
    {
      id: '',
      name: '',
      size: ''
    }
  ],
  creativeComponents: [
    {
      id: '',
      name: '',
      assetType: assetType,
      componentType: componentType,
      adUnit: [
        // ad unit ids
      ],
      assets: [
        {
          id: '',
          name: '',
          source: '',
          sourceType: '',
          fallback: false,
          target: targetTypes[0],
          assetGroupIds: [], // Array of ids
          attributes: {
            "weight": "29.6MB",
            "aspect ratio": "16:9",
            "codec": "H264",
            "resolution": "low"
          }

        }
      ]
    }
    ]

}

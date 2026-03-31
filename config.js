var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiaGVpbGFuZG9vIiwiYSI6ImNtbXVwYXZhZTIxaGwycnIwdG9sYmNxeHMifQ.ypcTVPtTt_UV7j6MNaRYag',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Stories of resistance along the H2Med pipeline',
    subtitle: 'Why communities are resisting, what they think of the future of energy, how they percieve the impacts.',
    byline: 'by kollektiv gazpacho',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'pipeline-intro',
            alignment: 'left',
            hidden: false,
            title: 'Extracting energy from south to north, powering a never ending growth paradigm',
            // image: './assets/arcelor-mittal-surf.JPG',
            description: 'In the name of the "green" transition, Europe is building new energy corridors from south to north. The oversized H2Med pipeline promises to transport vast amounts of green hydrogen from iberian peninsula to central-northern Europe. Yet along its route, this vision is challenged by communities who question its impacts, its benefits, and its underlying assumptions. The pipeline’s journey reveals not just a technological project, but a struggle over competing vision of the future.',
            location: {
                center: [-5.59574, 42.50743],
                zoom: 5,
                pitch: 53.9,
                bearing: 12.3
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'h2med-line',
                     opacity: 1
                 }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'hydrogen-overview',
            alignment: 'right',
            hidden: true,
            title: 'The H2Med pipeline',
            // image: './assets/washington-dc.jpg',
            // description: 'The second chapter flies to Washington, D.C., updates the camera pitch, and slowly rotates. <br>  <br> Washington, D.C., the capital of the United States, is a vibrant city known for its iconic landmarks, including the White House, the U.S. Capitol, and the Washington Monument. It serves as the political heart of the nation and a center for history, culture, and international diplomacy.',
            location: {
                center: [-2.813, 45.916],
                zoom: 3.9,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'h2med-line',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'h2med-line',
                    opacity: 0
                }
            ]
        },
        {
            id: 'hydrogen-overviewmap',
            alignment: 'right',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [-2.813, 45.916],
                zoom: 3.9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'pipeline-xixon',
            alignment: 'left',
            hidden: false,
            title: 'In the port of Xixón, Asturias',
            image: './assets/IMG_3135.JPG',
            description: 'Even the very spirit of the hydrogen plan is problematic. Instead of focusing on hydrogen that is produced and used locally, close to where it is needed, the strategy once again prioritizes exports and the construction of large transport infrastructures. These projects include new pipelines, storage facilities, and other large-scale systems that mainly benefit major energy corporations, which are interested above all in expanding their own infrastructure networks.',
            location: {
              center: [-5.71677, 43.56260],
              zoom: 12.52,
              pitch: 70,
              bearing: 160.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'pipeline-impact',
            alignment: 'right',
            hidden: false,
            title: 'title',
            image: '',
            description: 'description...',
            location: {
                center: [-5.6739, 41.3394],
                zoom: 15.5,
                pitch: 61,
                bearing: 70
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'hydrogen-use',
            alignment: 'left',
            hidden: false,
            title: 'Green growth for northern Europe?',
            image: '',
            description: 'hydrogen can be smart to be used for decarbonisation of some specific, necessary energy sectors, but current plans are heavily oversized, hydrogen boom is powered by increasing militarisation and "green" military [Greening the armies](https://www.consilium.europa.eu/media/69640/art_greening_-armies_web.pdf)...',
            location: {
                center: [6.71702, 51.48923],
                zoom: 13.6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'hydrogen-colonialism1',
            alignment: 'left',
            hidden: false,
            title: 'title',
            image: '',
            description: 'description...',
            location: {
                center: [-6.09843, 40.11613],
                zoom: 11.8,
                pitch: 58.5,
                bearing: 30.3
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'hydrogen-colonialism2',
            alignment: 'left',
            hidden: false,
            title: 'title',
            image: '',
            description: 'description...',
            location: {
                center: [-6.37464, 46.19577],
                zoom: 4.4,
                pitch: 44,
                bearing: 67.26
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'transition-fail1',
            alignment: 'left',
            hidden: false,
            title: 'title',
            image: '',
            description: 'description...',
            location: {
                center: [2.85208, 58.61225],
                zoom: 16.4,
                pitch: 65,
                bearing: -164.8
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'transition-fail2',
            alignment: 'left',
            hidden: false,
            title: 'The energy transition is failing.',
            image: '',
            description: 'Activists argue that current legislations fail to keep pace with the rapid rollout of energy infrastructures, resulting in a transition that is neither properly regulated nor democratically governed. While activists demand a public debate on what the energy transition should look like, they observe the rapid future-making through the construction of energy infrastructure. All this without any serious debate on how the system should be designed and work in the future. A recurring critique by activists is that large-scale energy projects are being developed in a disordered and uncoordinated manner, without adequate spatial planning or strategic oversight by the state.',
            location: {
                center: [1, 55],
                zoom: 0.7,
                pitch: 0,
                bearing: 156
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'resistance-grow',
            alignment: 'left',
            hidden: false,
            title: 'Resistance is growing',
            image: '',
            description: 'description...',
            location: {
                center: [-7, 37.24286],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'alternatives-exist',
            alignment: 'left',
            hidden: false,
            title: 'title',
            image: '',
            description: 'description...',
            location: {
                center: [-6.26011, 43.56791],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};

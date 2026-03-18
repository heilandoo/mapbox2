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
    title: 'Hydrogen hype?!',
    subtitle: 'Why the H2Med pipeline is not bringing clean and just futures.',
    byline: 'by kollektiv gazpacho',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'pipeline-intro',
            alignment: 'left',
            hidden: false,
            title: 'May we introduce? The H2Med pipeline!!',
            // image: './assets/arcelor-mittal-surf.JPG',
            description: 'In the name of a green transition, Europe is building new energy corridors to secure its future. The H2Med pipeline promises to transport green hydrogen from southern Spain to central Europe, connecting regions through a shared infrastructure vision. Yet along its route, this vision is challenged by communities who question its impacts, its benefits, and its underlying assumptions. The pipeline’s journey reveals not just a technological project, but a struggle over competing imaginaries of the future.',
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
            id: 'pipeline-overview',
            alignment: 'right',
            hidden: true,
            title: 'The H2Med-pipeline',
            // image: './assets/washington-dc.jpg',
            // description: 'The second chapter flies to Washington, D.C., updates the camera pitch, and slowly rotates. <br>  <br> Washington, D.C., the capital of the United States, is a vibrant city known for its iconic landmarks, including the White House, the U.S. Capitol, and the Washington Monument. It serves as the political heart of the nation and a center for history, culture, and international diplomacy.',
            location: {
                center: [0.43752, 44.83533],
                zoom: 3.5,
                pitch: 0,
                bearing: 0,
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
            id: 'xixon',
            alignment: 'left',
            hidden: false,
            title: 'Port of Xixón',
            image: './assets/IMG_3135.JPG',
            description: 'Even the very spirit of the hydrogen plan is problematic. Instead of focusing on hydrogen that is produced and used locally, close to where it is needed, the strategy once again prioritizes exports and the construction of large transport infrastructures. These projects include new pipelines, storage facilities, and other large-scale systems that mainly benefit major energy corporations, which are interested above all in expanding their own infrastructure networks. In many cases, these infrastructures may later turn out to be unnecessary or unjustified. Nevertheless, huge amounts of public money are already being invested in them. Ultimately, these costs will likely be passed on to energy consumers in each country. For these reasons, this approach is deeply concerning and difficult to justify.',
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
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Buenos Aires',
            image: './assets/buenos-aires.jpg',
            description: 'Buenos Aires, the capital of Argentina, is a dynamic city known for its European-inspired architecture, vibrant tango culture, and rich culinary scene. Often called the "Paris of South America," it blends historic charm with modern energy.  You can add as many chapters as you need, just copy the JSON data and make changes.',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};

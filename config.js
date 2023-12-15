var config = {
    style: 'mapbox://styles/muhammadrifqy/clf0v0keg003w01pe1pysoc2r',
    accessToken: 'pk.eyJ1IjoibXVoYW1tYWRyaWZxeSIsImEiOiJjbGptenU2Z2QwdzJjM2xyN2Rham1ndXhoIn0.5_qenbJijy4l7c8xhJBkkQ',
    showMarkers: true,
    markerColor: '#3256a8',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'GEOGRAPHICAL RESUMÉ of MUHAMMAD RIFQY',
    subtitle: '',
    byline: '',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template with <a href="https://mamedrifqy.github.io/earthy-nav/" target="_blank">Earthy-Nav</a> basemap by myself. | <a href="https://linkedin.com/m/muhammad-rifqy">LinkedIn</a> | <a href="https://github.com/mamedrifqy">Github</a> | Background by <a href="https://www.freepik.com/free-vector/white-topographic-lines-background_5269459.htm#query=contour%20background&position=7&from_view=search&track=ais">Freepik</a>',
    chapters: [
        {
            id: 'aboutme',
            alignment: 'center',
            hidden: false,
            sectiontitle: 'About Me',
            image: 'https://mamedrifqy.github.io/assets/img/-n0xl5q__1_-removebg-preview (1).png',
            description: 'I recently received my bachelor’s degree in environmental geography from Universitas Gadjah Mada. A conscientious individual who is willing to collaborate with others and learn new abilities. Has a strong interest in environmental studies and geospatial analysis. Currently in charge of the GLMB Landslide School’s course content for geostatistical and geocomputational learning.',
            location: {
                center: [117.97038, -2.49319],
                zoom: 3.97,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'tool',
            alignment: 'center',
            hidden: false,
            sectiontitle: 'TOOLS',
            image: 'https://mamedrifqy.github.io/assets/img/app2.png',
            description: '<li>ArcGIS, QGIS, SAGA GIS, Global Mapper, Surfer (Data Processing)</li><li>Adobe Illustrator (Data Visualization)</li>',
            location: {
                center: [117.97038, -2.49319],
                zoom: 3.97,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            speed: 2,
            curve: 1,
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'proglang',
            alignment: 'center',
            hidden: false,
            sectiontitle: 'PROGRAMMING LANGUAGE',
            image: 'https://mamedrifqy.github.io/assets/img/app3.png',
            description: 'Python (geopandas, folium, etc) | R (ggplot2, tmap, etc)',
            location: {
                center: [117.97038, -2.49319],
                zoom: 3.97,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            speed: 2,
            curve: 1,
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'progapp',
            alignment: 'center',
            hidden: false,
            sectiontitle: 'PROGRAMMING APPS',
            image: 'https://mamedrifqy.github.io/assets/img/app (1).png',
            description: 'Jupyter Notebook | R Studio | Visual Studio Code',
            location: {
                center: [117.97038, -2.49319],
                zoom: 3.97,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            speed: 2,
            curve: 1,
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'education',
            alignment: 'full',
            hidden: false,
            sectiontitle: 'EDUCATION',
            description: 'Where i have done my studies?',
            location: {
                center: [117.97038, -2.49319],
                zoom: 3.97,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            speed: 2,
            curve: 1,
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'shs',
            alignment: 'right',
            hidden: false,
            title: 'Senior High School - SMAN 01 Dumai',
            image: 'https://mamedrifqy.github.io/assets/img/C0m9XdN1_400x400-removebg-preview.png',
            description: '',
            location: {
                center: [101.43531, 1.61958],
                zoom: 16,
                pitch: 45,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'college',
            alignment: 'left',
            hidden: false,
            title: 'College Time - Universitas Gadjah Mada',
            image: 'https://mamedrifqy.github.io/assets/img/Tipografi.png',
            description: 'Got a S.Si. degree (Equivalent to B.Sc. in Environmental Geography) with a GPA of 3.49/4.00',
            location: {
                center: [110.37761, -7.76625],
                zoom: 18,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            speed: 2,
            curve: 1,
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'work-experience',
            alignment: 'full',
            hidden: false,
            sectiontitle: 'WORK EXPERIENCE',
            description: 'Here is my work experience.',
            location: {
                center: [110.37761, -7.76625],
                zoom: 18,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            speed: 2,
            curve: 1,
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'first-internship',
            alignment: 'left',
            hidden: false,
            title: 'First Internship',
            image: 'https://mamedrifqy.github.io/assets/img/logo.png',
            description: 'My first internship was at <b>Pusat Pengendalian Pembangunan Ekoregion Jawa</b>. Right there I assisted the process of updating data on the carrying capacity of the environment in West Java Province. Focused on 2 regencies, which are Bogor and Cirebon Regency.',
            location: {
                center: [110.33745236196702, -7.760439974001881],
                zoom: 18,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'first-internship2',
            alignment: 'left', 
            hidden: false,
            title: 'First Internship',
            description: 'Snipset of the data that i digitized (Bogor Regency) <iframe src="https://mamedrifqy.github.io/resume/bogor.html" width="320" height="500" allowfullscreen="allowfullscreen"></iframe>',
            location: {
                center: [106.79575, -6.57153],
                zoom: 8,
                pitch: 3,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'first-internship3',
            alignment: 'left',
            hidden: false,
            title: 'First Internship',
            description: 'Snipset of the data that i digitized (Cirebon Regency) <iframe src="https://mamedrifqy.github.io/resume/cirebon.html" width="320" height="500" allowfullscreen="allowfullscreen"></iframe>',
            location: {
                center: [108.55902, -6.71029],
                zoom: 8,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'first-assistant',
            alignment: 'right',
            hidden: false,
            title: 'First Assistant Work - Laboratory Assistant',
            image: 'https://mamedrifqy.github.io/assets/img/Screenshot 2023-08-08 000320.png',
            description: 'At <b>Laboratory of Environmental Geomorphology and Disaster Mitigation, Universitas Gadjah Mada</b>, i assisted several courses which are: <li>GEL0102‑Geomorphology</li> <li>GEL0103‑Mineralogy‑Petrography</li> <li>GEL0107‑Geomorphological Survey Mapping</li> <li>GEL0108‑Land Survey, Erosion, and Conservation Planning</li> <br> I provided practicum material and assessment during the practicum process, both in behavior; knowledge; and activity during the teaching and learning process.',
            location: {
                center: [110.37794, -7.76646],
                zoom: 18,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fieldwork',
            alignment: 'full',
            hidden: false,
            sectiontitle: 'FIELDWORK',
            description: 'Some of fieldwork that i have ever done',
            location: {
                center: [110.37761, -7.76625],
                zoom: 18,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            speed: 2,
            curve: 1,
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fieldwork2',
            alignment: 'left',
            hidden: false,
            title: 'Fieldwork 2 GEL UGM',
            image: 'https://mamedrifqy.github.io/assets/img/portfolio/KKL2/Slide1.PNG',
            description: 'Fieldwork 2 is one of the compulsary course that occurs at Environmental Geography Department. Click <a href="https://mamedrifqy.github.io/Activity-details2.html">Here</a> to find out what we did at Fieldwork 2.',
            location: {
                center: [110.63355, -7.78314],
                zoom: 18,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fieldwork3',
            alignment: 'left',
            hidden: false,
            title: 'Fieldwork 3 GEL UGM',
            image: 'https://mamedrifqy.github.io/assets/img/portfolio/Fieldwork%203/Slide1.PNG',
            description: 'Being one of the "Land Survey" team at the Fieldwork 3 GEL UGM Class 2017. The fieldwork occur at the riparian area of Lake Rawapening. Our goals is to measure and calculate the land use and land cover change across this area from 2020-2021 and base on this data we calculated the ecosystem services and the environmental degradation that being occurs. Click <a href="https://mamedrifqy.github.io/fieldwork3.html">Here</a> to see what we did.',
            location: {
                center: [110.41672, -7.27992],
                zoom: 14,
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
            id: 'fieldwork3-1',
            alignment: 'fully',
            hidden: false,
            title: 'B',
            image: './path/to/image/source.png',
            description: 'Snipset of the dataset that have been collected in this project. ',
            location: {
                center: [110.41672, -7.27992],
                zoom: 18,
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
            id: 'research',
            alignment: 'full',
            hidden: false,
            sectiontitle: 'RESEARCH AND RECENT PROJECT',
            description: 'Some of research that i have ever done and also recent project that i make',
            location: {
                center: [110.37761, -7.76625],
                zoom: 18,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            speed: 2,
            curve: 1,
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'c',
            alignment: 'fully',
            hidden: false,
            title: 'GLMB Landslide School',
            image: './path/to/image/source.png',
            description: '<li>Creating the coursework material for ”Geomorphological Science Data with R” and ”Opensource Softwares for Geomorphology Analysis” courses.</li> <li>The coursework material consist of: Tutorial Modul, Tutorial Data, and Presentation.</li>',
            location: {
                center: [110.37761, -7.76625],
                zoom: 8.5,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'c',
            alignment: 'fully',
            hidden: false,
            title: 'med/rif maps',
            image: 'assets/medrifmaps.png',
            description: '<li>A medium to share my creatures (maps, tutorial, etc.). Click <a href="https://www.instagram.com/medrifmaps/">Here</a> to find out!</li>',
            location: {
                center: [110.37761, -7.76625],
                zoom: 8.5,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'd',
            alignment: 'fully',
            hidden: false,
            title: 'A Geographic Perspective: The Use and Spatial Distribution of Acehnese Language Use in the City of Dumai',
            image: 'https://mamedrifqy.github.io/undergraduate-thesis-data/img/Acehnese Immigrants Route_1_1.png',
            description: 'The purpose of this study is to determine and analyse the trends in Acehnese language usage in Dumai City. For the dataset you can check <a href="https://mamedrifqy.github.io/undergraduate-thesis-data-">Here</a> and <a href="https://studio.foursquare.com/public/0f6dca35-9a4c-4be7-baab-2b0e1d7eeb3e/embed">Here</a>',
            location: {
                center: [101.38578, 1.72177],
                zoom: 10,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'portfolio',
            alignment: 'full',
            hidden: false,
            sectiontitle: 'Portfolio',
            image: 'https://mamedrifqy.github.io/assets/img/aaa.png',
            description: 'Click <a href="https://mamedrifqy.github.io" target="_blank">here</a>',
            location: {
                center: [117.97038, -2.49319],
                zoom: 3.97,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            speed: 2,
            curve: 1,
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};

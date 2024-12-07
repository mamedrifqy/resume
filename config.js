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
            title: 'About Me',
            image: 'https://mamedrifqy.github.io/assets/img/-n0xl5q__1_-removebg-preview (1).png',
            description: 'Dedicated <b>Environmental Geography</b> graduate with a strong foundation in <b>GIS</b> and <b>Cartography</b>, complemented by hands-on experience as a <b>Technical Facilitator</b> for the <b>M4CR</b> Project focused on <b>mangrove rehabilitation</b>. Skilled in <b>utilizing geospatial technologies</b> to analyze environmental data and support sustainable practices. Passionate about leveraging my expertise to contribute to innovative geospatial solutions that address environmental challenges. Eager to apply my knowledge and skills in a geospatial-related role to drive impactful projects and promote ecological sustainability.',
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
            title: 'TOOLS',
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
            title: 'PROGRAMMING LANGUAGE',
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
            title: 'PROGRAMMING APPS',
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
            title: 'EDUCATION',
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
            title: 'WORK EXPERIENCE',
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
            id: 'first-job',
            alignment: 'left',
            hidden: false,
            title: 'FIRST JOB',
            subtitle: 'Mangrove Rehabilitation Technical Facilitator - PPIU M4CR Riau',
            sectiontitle: 'May 2024 - Now',
            image: 'https://mamedrifqy.github.io/resume/assets/Logo_M4CR_2024.png',
            skillset:'Skillset: GIS, Drone Mapping, Surveying, Mangrove Rehabilitation',
            description: 'As a Technical Staff in M4CR project, my primary role will be to leverage Geographic Information System (GIS) technology to analyze and present spatial data that will guide our mangrove restoration efforts. <b>KEY RESPONSIBILITIES</b>: <li><b>Data Collection and Analysis:</b> Collect, analyze, and interpret geographic data to create maps, graphs, and reports. This includes data on mangrove health, soil composition, water quality, and local climate conditions.</li> <li><b>Mangrove Mapping:</b> Use remote sensing techniques to create detailed maps of mangrove forests. This includes identifying areas of healthy growth and areas in need of rehabilitation.</li> <li><b>Restoration Planning:</b> Work with the project team to develop restoration plans. This includes identifying suitable species for planting, optimal planting locations, and monitoring strategies.</li> <li><b>Monitoring and Evaluation:</b> Monitor the progress of the rehabilitation efforts and evaluate their effectiveness using GIS and remote sensing techniques. Make recommendations for adjustments as necessary.</li> <li><b>Collaboration:</b> Collaborate with field teams, environmental scientists, and local communities to gather data and understand the context of the project.</li>',
            location: {
                center: [101.4595, 0.4922],
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
            id: 'first-internship',
            alignment: 'left',
            hidden: false,
            title: 'FIRST INTERNSHIP',
            subtitle: '',
            sectiontitle: 'March 2020 - May 2020',
            image: 'https://mamedrifqy.github.io/assets/img/logo.png',
            skillset: 'Skillset: Digitation, Field Identification',
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
            id: 'first-assistant',
            alignment: 'right',
            hidden: false,
            title: 'First Assistant Work - Laboratory Assistant',
            skillset: 'Skillset: Coding: Python and R',
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
            title: 'FIELDWORK',
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
            skillset: 'Skillset: Surveying',
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
            id: 'recent',
            alignment: 'full',
            hidden: false,
            title: 'SIDE PROJECT',
            description: 'What i do now?',
            location: {
                center: [110.37761, -7.76625],
                zoom: 9,
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
            id: 'activism',
            alignment: 'left',
            hidden: false,
            title: 'Extinction Rebellion Indonesia - Riau -- Media and Design',
            skillset: 'Skillset: Media Design',
            image: 'https://mamedrifqy.github.io/resume/assets/WhatsApp Image 2023-08-29 at 6.46.14 PM.jpeg',
            description: '<li>Design and create visual materials for demonstrations, enhancing audience engagement and understanding.</li> <li>Develop climate infographics to effectively communicate complex environmental data.</li> <li>Document projects through high-quality photography and videography, capturing key moments and insights.</li>',
            location: {
                center: [101.4473588, 0.517668],
                zoom: 9,
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
            id: 'activism2',
            alignment: 'left',
            hidden: false,
            title: 'Extinction Rebellion Indonesia - Riau -- Media and Design',
            image: 'https://mamedrifqy.github.io/resume/assets/medrifmaps1.png',
            description: 'Here is what i made at XR Riau',
            location: {
                center: [101.4473588, 0.517668],
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
            id: 'research',
            alignment: 'full',
            hidden: false,
            title: 'RESEARCH AND RECENT PROJECT',
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
            title: 'med/rif maps',
            image: 'https://mamedrifqy.github.io/resume/assets/medrifmaps.png',
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
            id: 'portfolio',
            alignment: 'full',
            hidden: false,
            title: 'Portfolio',
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

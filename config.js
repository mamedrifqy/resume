var config = {
    style: 'mapbox://styles/muhammadrifqy/clf0v0keg003w01pe1pysoc2r',
    accessToken: 'pk.eyJ1IjoibXVoYW1tYWRyaWZxeSIsImEiOiJjbGptenU2Z2QwdzJjM2xyN2Rham1ndXhoIn0.5_qenbJijy4l7c8xhJBkkQ',
    showMarkers: true,
    markerColor: '#2a9090',
    inset: true,
    theme: 'light',
    use3dTerrain: false,
    auto: false,
    title: 'GEOGRAPHICAL RESUMÉ',
    subtitle: 'Muhammad Rifqy · Cartographer · GIS · Spatial Map Visualizer',
    byline: '',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> with <a href="https://mamedrifqy.github.io/earthy-nav/" target="_blank">Earthy-Nav</a> basemap. | <a href="https://linkedin.com/in/muhammadrifqy" target="_blank">LinkedIn</a> | <a href="https://github.com/mamedrifqy" target="_blank">Github</a>',
    chapters: [
        {
            id: 'aboutme',
            alignment: 'center',
            hidden: false,
            title: '',
            description: `<div class="li-profile">
  <div class="li-body">
    <div class="li-avatar-row">
      <div class="li-avatar-wrap">
        <img class="li-avatar" src="https://mamedrifqy.github.io/assets/img/-n0xl5q__1_-removebg-preview (1).png" alt="Muhammad Rifqy">
      </div>
      <div class="li-top-actions">
        <a href="https://mamedrifqy.github.io/resume/Muhammad%20Rifqy_CV_15012026.pdf" target="_blank" class="li-btn li-btn-primary">⬇ Download CV</a>
        <a href="https://linkedin.com/in/muhammadrifqy" target="_blank" class="li-btn li-btn-ghost">in Connect</a>
      </div>
    </div>
    <div class="li-info">
      <h2 class="li-name">Muhammad Rifqy</h2>
      <div class="li-headline">Cartographer &nbsp;·&nbsp; GIS Specialist &nbsp;·&nbsp; Spatial Map Visualizer</div>
      <div class="li-location">📍 Pekanbaru, Riau, Indonesia</div>
    </div>
    <p class="li-summary">Mangrove spatial planner and GIS professional with 3+ years of hands‑on experience in coastal ecosystem analysis, spatial data management, and
conservation program implementation. Deeply committed to sustainable marine and fisheries resource management, with direct field experience
supporting mangrove rehabilitation across 5,800+ hectares in collaboration with government agencies, multi‑stakeholder platforms, and local
communities. Proficient in integrating remote sensing (Sentinel‑1/2, Google Earth Engine), geospatial analysis, and science‑based approaches to
inform mangrove conservation planning. Skilled in producing technical spatial products, monitoring reports, and communication materials to
support policy advocacy and programmatic goals.</p>
    <div class="li-divider"></div>
    <div class="li-stats">
      <div class="li-stat"><span class="li-stat-num">5,800+</span><span class="li-stat-lbl">Hectares mapped</span></div>
      <div class="li-stat"><span class="li-stat-num">100+</span><span class="li-stat-lbl">Community groups</span></div>
      <div class="li-stat"><span class="li-stat-num">4.00</span><span class="li-stat-lbl">Current GPA</span></div>
    </div>
    <div class="li-divider"></div>
    <div class="li-links">
      <a href="mailto:muhammadrifqy.work@gmail.com" class="li-link">✉ muhammadrifqy.work@gmail.com</a>
      <a href="https://mamedrifqy.github.io" target="_blank" class="li-link">⌂ mamedrifqy.github.io</a>
      <a href="https://github.com/mamedrifqy" target="_blank" class="li-link">⌥ github.com/mamedrifqy</a>
    </div>
  </div>
</div>`,
            location: { center: [117.97038, -2.49319], zoom: 3.97, pitch: 45, bearing: 0 },
            mapAnimation: 'flyTo', rotateAnimation: false, callback: '',
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: 'skills',
            alignment: 'center',
            hidden: false,
            title: 'Skills & Tools',
            description: `<div class="skill-groups">
  <div class="skill-group"><div class="sg-label">Geographical</div>
    <div class="skill-row"><span class="skill-badge">Map Making</span><span class="skill-badge">GIS</span><span class="skill-badge">Land Surveying</span><span class="skill-badge">Digital Mapping</span></div>
  </div>
  <div class="skill-group"><div class="sg-label">Geospatial Programming</div>
    <div class="skill-row"><span class="skill-badge">R (sf, terra, ggplot2, rayshader)</span><span class="skill-badge">Python (Geopandas, Folium)</span><span class="skill-badge">Google Earth Engine</span></div>
  </div>
  <div class="skill-group"><div class="sg-label">Software</div>
    <div class="skill-row"><span class="skill-badge">ArcGIS</span><span class="skill-badge">QGIS</span><span class="skill-badge">SAGA</span><span class="skill-badge">Global Mapper</span><span class="skill-badge">RStudio</span><span class="skill-badge">VS Code</span><span class="skill-badge">Jupyter</span></div>
  </div>
  <div class="skill-group"><div class="sg-label">Web Mapping</div>
    <div class="skill-row"><span class="skill-badge">Mapbox Studio</span><span class="skill-badge">kepler.gl</span><span class="skill-badge">QGIStoWeb</span><span class="skill-badge">ArcGIS Online</span></div>
  </div>
  <div class="skill-group"><div class="sg-label">Languages</div>
    <div class="skill-row"><span class="skill-badge">Indonesian (Native)</span><span class="skill-badge">English</span></div>
  </div>
</div>`,
            location: { center: [117.97038, -2.49319], zoom: 3.97, pitch: 45, bearing: 0 },
            mapAnimation: 'flyTo', rotateAnimation: true, callback: '',
            onChapterEnter: [], onChapterExit: []
        },

        /* ── EDUCATION ── */
        {
            id: 'education-sec',
            alignment: 'full', hidden: false,
            title: 'EDUCATION',
            description: 'Academic journey across Indonesia',
            location: { center: [112.0, -3.0], zoom: 5.5, pitch: 40, bearing: 0 },
            mapAnimation: 'flyTo', rotateAnimation: false, callback: '',
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: 'education',
            alignment: 'left', hidden: false,
            title: 'Education',
            description: `
<div class="vtab-wrap">
  <div class="vtab-nav">
    <button class="vtab-btn active" onclick="switchTab(event,'edu','edu-unri',101.3758463, 0.4839435)">
      <span class="vtab-year">2025–</span>
      <span class="vtab-name">Universitas Riau</span>
      <span class="vtab-active-dot"></span>
    </button>
    <button class="vtab-btn" onclick="switchTab(event,'edu','edu-ugm',110.37761,-7.76625,16)">
      <span class="vtab-year">2017–22</span>
      <span class="vtab-name">Univ. Gadjah Mada</span>
    </button>
  </div>
  <div class="vtab-content">
    <div id="edu-unri" class="vtab-panel active">
      <div class="vt-header">
        <div>
          <div class="tl-inst">Universitas Riau</div>
          <div class="tl-loc">Riau, Indonesia</div>
          <img src="https://mamedrifqy.github.io/assets/img/idhN3mkERF_1773677826112.png" style="height:32px;object-fit:contain;flex-shrink:0;" alt="UNRI">
        </div>
        <span class="edu-gpa">cGPA 4.00/4.00</span>
      </div>
      <div class="tl-deg">M.M.B. — Master of Disaster Management<br><small>Specialized in Peatland &amp; Coastal Disaster</small></div>
      <div class="tl-period">Aug 2025 – Present</div>
      <ul>
        <li>Mangrove Conservation, Flood and Abration</li>
        <li>Forest and Peatland Fires, Peatland Ecological Disaster Studies</li>
        <li>Disaster Management Information System and GIS</li>
      </ul>
    </div>
    <div id="edu-ugm" class="vtab-panel">
      <div class="vt-header">
        <div>
          <div class="tl-inst">Universitas Gadjah Mada</div>
          <div class="tl-loc">D.I. Yogyakarta</div>
<img src="https://mamedrifqy.github.io/assets/img/Tipografi.png" style="height:32px;object-fit:contain;flex-shrink:0;" alt="UGM">

        </div>
        <span class="edu-gpa">GPA 3.49/4.00</span>
      </div>
      <div class="tl-deg">S.Si. — Environmental Geography (B.Sc. Equivalent)</div>
      <div class="tl-period">Aug 2017 – Nov 2022</div>
      <ul>
        <li>🏅 Riau Province Scholarship Awardee (Penelusuran Bibit Unggul Kemitraan)</li>
        <li>Geomorphological Survey Mapping, Environmental Geomorphology</li>
        <li>Ecology &amp; Environmental Study, Tropical Landscape Ecology, Environmental Management</li>
      </ul>
    </div>
  </div>
</div>`,
            location: { center: [101.3758463, 0.4839435], zoom: 14, pitch: 45, bearing: 0 },
            mapAnimation: 'flyTo', rotateAnimation: false, callback: '',
            onChapterEnter: [], onChapterExit: []
        },

        /* ── WORK EXPERIENCE ── */
        {
            id: 'experience-sec',
            alignment: 'full', hidden: false,
            title: 'WORK EXPERIENCE',
            description: 'Field roles across Riau and Yogyakarta',
            location: { center: [112.0, -2.0], zoom: 5.0, pitch: 40, bearing: 0 },
            mapAnimation: 'flyTo', rotateAnimation: false, callback: '',
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: 'work-all',
            alignment: 'left', hidden: false,
            title: 'Work Experience',
            description: `
<div class="vtab-wrap">
  <div class="vtab-nav">
    <button class="vtab-btn active" onclick="switchTab(event,'work','work-m4cr',101.4595,0.4922,12)">
      <span class="vtab-year">2024–</span>
      <span class="vtab-name">M4CR Project</span>
      <span class="vtab-active-dot"></span>
    </button>
    <button class="vtab-btn" onclick="switchTab(event,'work','work-lab',110.37794,-7.76646,17)">
      <span class="vtab-year">2021–24</span>
      <span class="vtab-name">UGM Laboratory</span>
    </button>
    <button class="vtab-btn" onclick="switchTab(event,'work','work-xr',101.4473588,0.517668,14)">
      <span class="vtab-year">2023–25</span>
      <span class="vtab-name">XR Riau</span>
    </button>
    <button class="vtab-btn" onclick="switchTab(event,'work','work-p3e',110.33745,-7.76044,17)">
      <span class="vtab-year">2020</span>
      <span class="vtab-name">P3E Jawa</span>
    </button>
  </div>
  <div class="vtab-content">
    <div id="work-m4cr" class="vtab-panel active">
      <div class="vt-header">
        <div>
          <div class="tl-inst">Mangrove For Coastal Resilience (M4CR)</div>
          <div class="tl-loc">Pekanbaru, Riau</div>
        </div>
        <img src="https://mamedrifqy.github.io/resume/assets/Logo_M4CR_2024.png" style="height:32px;object-fit:contain;flex-shrink:0;" alt="M4CR">
      </div>
      <div class="tl-deg">Technical Mangrove Rehabilitation Facilitator</div>
      <div class="tl-period">May 2024 – Present &nbsp;·&nbsp; KEMENHUT–World Bank</div>
      <ul>
        <li>Designed a centralized <strong>Shapefile Database System</strong> for <strong>100+ community groups</strong></li>
        <li>Managed spatial analysis for <strong>5,800+ hectares</strong> of rehabilitation areas</li>
        <li>Produced high-precision thematic maps compliant with Ministry standards <em>(P.6/PKTL/SETDIT/2017)</em></li>
        <li>Developed and applied a Google Earth Engine (GEE) workflow integrating Sentinel‑1 SAR (double‑bounce mangrove detection, flood inundation
depth) and Sentinel‑2 (NDWI, EVI, MVI) to produce a 5‑class mangrove suitability map — supporting ecosystem‑based spatial decision‑making
for habitat restoration and coastal resilience planning</li>
        <li>Engineered a remote‑sensing monitoring workflow combining Sentinel‑2 spectral analysis with UAV‑based instance segmentation (YOLOv8)
to automate detection of invasive fern species (Acrostichum aureum) with 90.4% precision across 1,400 hectares of new planting sites (2025),
supporting adaptive management.</li>

      </ul>
    </div>
    <div id="work-lab" class="vtab-panel">
      <div class="vt-header">
        <div>
          <div class="tl-inst">Laboratory of Environmental Geomorphology &amp; Disaster Mitigation, UGM</div>
          <div class="tl-loc">D.I. Yogyakarta</div>
<img src="https://mamedrifqy.github.io/assets/img/Screenshot%202023-08-08%20000320.png" style="height:32px;object-fit:contain;flex-shrink:0;" alt="UGM">

        </div>
      </div>
      <div class="tl-deg">Laboratory Assistant</div>
      <div class="tl-period">2021 – 2024</div>
      <ul>
        <li>Developed landslide analysis using Multinomial Logistic Regression – Regression Kriging</li>
        <li>Prepared geocomputational-geostatistics training module for landslide studies in R</li>
        <li>Courses: Geomorphology, Mineralogy-Petrography, Geomorphological Survey Mapping, Land Survey &amp; Erosion</li>
      </ul>
    </div>
    <div id="work-xr" class="vtab-panel">
      <div class="vt-header">
        <div>
          <div class="tl-inst">Extinction Rebellion Chapter Riau</div>
          <div class="tl-loc">Pekanbaru, Riau</div>
<img src="https://mamedrifqy.github.io/resume/assets/WhatsApp%20Image%202023-08-29%20at%206.46.14%20PM.jpeg" style="height:32px;object-fit:contain;flex-shrink:0;" alt="XR Riau">
        </div>
      </div>
      <div class="tl-deg">Graphic &amp; Data Visualizer · Volunteer</div>
      <div class="tl-period">Aug 2023 – Jul 2025</div>
      <ul>
        <li>Visualized spatial data for environmental issues in climate action activities</li>
        <li>Produced posters and maps for climate activism campaigns</li>
      </ul>
    </div>
    <div id="work-p3e" class="vtab-panel">
      <div class="vt-header">
        <div>
          <div class="tl-inst">Pusat Pengendalian Pembangunan Ekoregion Jawa</div>
          <div class="tl-loc">D.I. Yogyakarta</div>
          <img src="https://mamedrifqy.github.io/assets/img/logo.png" style="height:32px;object-fit:contain;flex-shrink:0;" alt="P3E">
        </div>
      </div>
      <div class="tl-deg">Student Intern — Land Use Analyst</div>
      <div class="tl-period">Mar – May 2020</div>
      <ul>
        <li>Updated environmental carrying capacity data for West Java — Bogor &amp; Cirebon</li>
        <li>Delineated <strong>5,000+ land-use polygons</strong> at detail scale (below 1:5,000)</li>
      </ul>
    </div>
  </div>
</div>`,
            location: { center: [101.4595, 0.4922], zoom: 12, pitch: 45, bearing: 0 },
            mapAnimation: 'flyTo', rotateAnimation: false, callback: '',
            onChapterEnter: [], onChapterExit: []
        },

        /* ── SHOWCASE ── */
        {
            id: 'showcase-sec',
            alignment: 'full', hidden: false,
            title: 'SHOWCASE',
            description: 'Interactive geospatial projects — click to explore',
            location: { center: [104.2, 0.5], zoom: 5.5, pitch: 40, bearing: 0 },
            mapAnimation: 'flyTo', rotateAnimation: false, callback: '',
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: 'showcase',
            alignment: 'center', hidden: false,
            title: 'Project Showcase',
            description: `
<div class="showcase-grid">
  <div class="showcase-card" onclick="openShowcase('https://mamedrifqy.github.io/inundationmap','InundationMap V2','GEE · Sentinel-1 SAR · Sentinel-2 · FABDEM')">
    <div class="showcase-thumb">
      <div class="showcase-map-preview" style="background:linear-gradient(135deg,#0a3d5c 0%,#0e6b8a 40%,#1a9090 70%,#2ab5b5 100%)">
        <div class="sc-map-grid"></div>
        <div class="sc-map-icon">🌊</div>
        <div class="sc-map-label">SAR · S2 · FABDEM</div>
      </div>
      <div class="showcase-hover-overlay">
        <span class="sc-open-btn">▶ Open Project</span>
      </div>
    </div>
    <div class="showcase-info">
      <div class="showcase-tag">GEE · Remote Sensing</div>
      <div class="showcase-title">InundationMap V2</div>
      <div class="showcase-desc">Multi-sensor satellite analysis (Sentinel-1 SAR, Sentinel-2, FABDEM) to map inundation, flooding, and stress zones for mangrove rehabilitation planning in Riau — PRM M4CR Project.</div>
      <div class="showcase-stack">
        <span class="sc-pill">Google Earth Engine</span>
        <span class="sc-pill">Sentinel-1 SAR</span>
        <span class="sc-pill">Mapbox GL JS</span>
        <span class="sc-pill">Python API</span>
      </div>
    </div>
  </div>

  <div class="showcase-card showcase-card-coming" onclick="openShowcase('https://mamedrifqy.github.io','Portfolio','Full GIS project portfolio')">
    <div class="showcase-thumb">
      <div class="showcase-map-preview" style="background:linear-gradient(135deg,#1a3a2a 0%,#2a6b3a 50%,#3a9050 100%)">
        <div class="sc-map-grid"></div>
        <div class="sc-map-icon">🗺️</div>
        <div class="sc-map-label">Maps · Cartography · GIS</div>
      </div>
      <div class="showcase-hover-overlay">
        <span class="sc-open-btn">▶ Open Portfolio</span>
      </div>
    </div>
    <div class="showcase-info">
      <div class="showcase-tag">Cartography · GIS</div>
      <div class="showcase-title">Digital Portfolio</div>
      <div class="showcase-desc">Full curated repository of GIS workflows, cartographic designs, land use analyses, disaster mitigation studies, and web-map development projects.</div>
      <div class="showcase-stack">
        <span class="sc-pill">R · Python</span>
        <span class="sc-pill">ArcGIS · QGIS</span>
        <span class="sc-pill">Mapbox</span>
      </div>
    </div>
  </div>
</div>
<p style="font-size:11px;color:#8a9ab0;text-align:center;margin-top:14px;">Click any project card to open it</p>`,
            location: { center: [104.2, 0.5], zoom: 5.5, pitch: 30, bearing: 0 },
            mapAnimation: 'flyTo', rotateAnimation: true, callback: '',
            onChapterEnter: [], onChapterExit: []
        },

        /* ── COURSES ── */
        {
            id: 'courses-sec',
            alignment: 'full', hidden: false,
            title: 'COURSES & CERTIFICATIONS',
            description: 'Continuous learning in geospatial technology',
            location: { center: [117.97038, -2.49319], zoom: 4.5, pitch: 30, bearing: 0 },
            mapAnimation: 'flyTo', rotateAnimation: false, callback: '',
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: 'courses',
            alignment: 'center', hidden: false,
            title: 'Courses & Certifications',
            description: `<div class="courses-grid">
  <div class="course-item"><span class="course-year">2025</span><div><div class="course-name">Bootcamp WebGIS Development</div><div class="course-org">MAPID</div></div></div>
  <div class="course-item"><span class="course-year">2024</span><div><div class="course-name">Bootcamp QGIS: Pemrosesan dan Aplikasi Citra Satelit Resolusi Tinggi</div><div class="course-org">Geoaccess Indonesia</div></div></div>
  <div class="course-item"><span class="course-year">2024</span><div><div class="course-name">Pelatihan GEE Tematik: Pemetaan Lahan Mangrove dan Carbon Stock</div><div class="course-org">Geoaccess Indonesia</div></div></div>
  <div class="course-item"><span class="course-year">2024</span><div><div class="course-name">Pelatihan GEE Tematik: Monitoring Perubahan Garis Pantai dan Prediksinya</div><div class="course-org">Geoaccess Indonesia</div></div></div>
  <div class="course-item"><span class="course-year">2022</span><div><div class="course-name">Cartography · Going Places with Spatial Analysis · Do-It-Yourself Geo Apps</div><div class="course-org">ESRI MOOC</div></div></div>
  <div class="course-item"><span class="course-year">2021</span><div><div class="course-name">R Fundamental for Data Science · Python Fundamental for Data Science</div><div class="course-org">DQLab</div></div></div>
</div>`,
            location: { center: [117.97038, -2.49319], zoom: 4.5, pitch: 30, bearing: 0 },
            mapAnimation: 'flyTo', rotateAnimation: true, callback: '',
            onChapterEnter: [], onChapterExit: []
        },

        /* ── PUBLICATIONS ── */
        {
            id: 'research-sec',
            alignment: 'full', hidden: false,
            title: 'PUBLICATIONS & RESEARCH',
            description: 'Peer-reviewed papers and research outputs',
            location: { center: [102.0, 0.5], zoom: 7, pitch: 40, bearing: 0 },
            mapAnimation: 'flyTo', rotateAnimation: false, callback: '',
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: 'pub1',
            alignment: 'left', hidden: false,
            title: 'Publications',
            description: `<div class="pub-card">
  <div class="pub-type">Preprint · Jan 2025</div>
  <div class="pub-journal">ResearchGate</div>
  <div class="pub-title">Pemanfaatan Inovasi Geospasial Berbasis Sentinel-2 dan UAV untuk Optimalisasi Rehabilitasi Mangrove dalam Kerangka Program M4CR di Provinsi Riau</div>
  <p style="font-size:12px;color:#5a6a7a;margin:8px 0 6px;">Geospatial workflow integrating Sentinel-2 and UAV-based YOLOv8 instance segmentation to automate detection of <em>Acrostichum aureum</em> with <strong>90.4% precision</strong>.</p>
  <div class="pub-doi">DOI: <a href="https://doi.org/10.13140/RG.2.2.21992.53762" target="_blank">10.13140/RG.2.2.21992.53762</a></div>
</div>
<div class="pub-card" style="margin-top:12px">
  <div class="pub-type">Paper · Oct 2022</div>
  <div class="pub-journal">Jurnal GEA</div>
  <div class="pub-title">Assessment of Ecosystem Services and Environmental Degradation by Using Landscape Approach in The Riparian Area of Lake Rawapening</div>
  <p style="font-size:12px;color:#5a6a7a;margin:8px 0 6px;">Spatial distribution of ecosystem services via geomorphological approach; degradation across 2016 and 2020.</p>
  <div class="pub-doi">DOI: <a href="https://doi.org/10.17509/gea.v22i1.39976" target="_blank">10.17509/gea.v22i1.39976</a></div>
</div>`,
            location: { center: [101.4595, 1.5], zoom: 8, pitch: 40, bearing: 0 },
            mapAnimation: 'flyTo', rotateAnimation: false, callback: '',
            onChapterEnter: [], onChapterExit: []
        },
        {
            id: 'awards-projects',
            alignment: 'center', hidden: false,
            title: 'Awards & Projects',
            description: `<div class="awards-row">
  <div class="award-item"><span class="award-year">2022</span><div><div class="award-title">🏆 Best Map — Spatialnode Map of the Week</div><div class="award-sub">Global Recognition</div></div></div>
  <div class="award-item"><span class="award-year">2017–21</span><div><div class="award-title">🎓 Riau Province Scholarship Awardee</div><div class="award-sub">Penelusuran Bibit Unggul Kemitraan Program</div></div></div>
</div>
<div class="section-divider-mini"></div>
<div class="tl-wrap">
  <div class="tl-item">
    <div class="tl-dot-col"><div class="tl-dot active-dot"></div><div class="tl-line"></div></div>
    <div class="tl-body">
      <div class="tl-inst">med/rif maps</div>
      <div class="tl-deg">Independent Geospatial Research &amp; Visualization</div>
      <div class="tl-period">Oct 2023 – Present</div>
      <p style="font-size:12px;margin:4px 0 0">Experiments with R, Python, GEE. <a href="https://www.instagram.com/medrifmaps/" target="_blank">@medrifmaps</a></p>
    </div>
  </div>
  <div class="tl-item">
    <div class="tl-dot-col"><div class="tl-dot"></div></div>
    <div class="tl-body">
      <div class="tl-inst">Digital Technical Portfolio</div>
      <div class="tl-deg">Centralized GIS Project Repository</div>
      <div class="tl-period">2017 – Present</div>
      <p style="font-size:12px;margin:4px 0 0"><a href="https://mamedrifqy.github.io" target="_blank">mamedrifqy.github.io</a></p>
    </div>
  </div>
</div>`,
            location: { center: [117.97038, -2.49319], zoom: 4.0, pitch: 45, bearing: 0 },
            mapAnimation: 'flyTo', rotateAnimation: true, callback: '',
            onChapterEnter: [], onChapterExit: []
        },

        /* ── PORTFOLIO / CV ── */
        {
            id: 'portfolio',
            alignment: 'full', hidden: false,
            title: 'PORTFOLIO & CV',
            description: `Explore the full project gallery and download the CV
<div class="cta-row">
  <a href="https://mamedrifqy.github.io" target="_blank" class="cta-btn cta-primary">⌂ View Portfolio</a>
  <a href="https://mamedrifqy.github.io/resume/Muhammad%20Rifqy_CV_15012026.pdf" target="_blank" download class="cta-btn cta-secondary">⬇ Download CV</a>
</div>`,
            location: { center: [117.97038, -2.49319], zoom: 3.97, pitch: 45, bearing: 0 },
            mapAnimation: 'flyTo', rotateAnimation: true, callback: '',
            onChapterEnter: [], onChapterExit: []
        }
    ]
};

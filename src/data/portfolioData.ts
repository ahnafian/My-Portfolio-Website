import {
  EducationItem,
  SkillCategory,
  LanguageItem,
  CertificationItem,
  ExperienceItem,
  ResearchPaper,
  AppliedProject,
  ServiceItem,
  CoCurricularItem,
} from '../types';

export const personalInfo = {
  name: 'Ahnaf Tazwar',
  firstName: 'Ahnaf',
  lastName: 'Tazwar',
  title: 'Electrical & Electronics Engineering Graduate | Aspiring Engineering Associate',
  shortTitle: 'Electrical & Electronics Engineer',
  avatarUrl: '/src/assets/images/ahnaf_headshot_1787754985226.jpg',
  email: 'ahnaft01@gmail.com',
  phone: '+88 01840127107',
  location: 'Pahartali, Chattogram, Bangladesh',
  linkedinUrl: 'https://linkedin.com/in/the-ahnafian',
  linkedinHandle: 'linkedin.com/in/the-ahnafian',
  institution: 'International Islamic University Chittagong (IIUC)',
  department: 'Department of Electrical and Electronic Engineering (EEE)',
  bio: `Ahnaf Tazwar is a final-year Electrical and Electronics Engineering student at International Islamic University Chittagong (IIUC), with a strong academic record and hands-on research experience across power systems, antenna design, and embedded AI. He is the author of an undergraduate thesis on rooftop solar PV feasibility and a contributor to three ongoing research papers. Driven by strong technical knowledge, analytical rigor, and clear communication, he is now seeking to begin his career as an Engineering Associate — with a long-term goal of pursuing further study and research abroad, deepening his expertise, and building a more impactful and successful engineering career.`,
  careerStageNote: 'Recent EEE Graduate actively pursuing an entry-level Engineering Associate position in Power Systems, Renewable Energy, or Industrial Automation.',
};

export const educationData: EducationItem[] = [
  {
    id: 'bsc-eee',
    degree: 'BSc in Electrical and Electronics Engineering',
    institution: 'International Islamic University Chittagong (IIUC)',
    period: 'Jan 2022 – Present',
    result: '3.10 / 4.00',
    resultType: 'CGPA',
    description:
      'Rigorous engineering curriculum spanning Power Systems, Industrial Automation, Renewable Energy, RF/Microwaves, Signals & Systems, and Embedded Systems.',
    highlights: [
      'Undergraduate Thesis on Rooftop Solar PV feasibility using PVsyst',
      'Hands-on lab work in PLC, SCADA, Power Electronics & Machines',
      'Active leadership in Departmental EEE Club and IEEE activities',
    ],
  },
  {
    id: 'hsc',
    degree: 'Higher Secondary Certificate (HSC) — Science',
    institution: 'Omargani M.E.S. College, Chattogram',
    period: '2020',
    result: '5.00 / 5.00',
    resultType: 'GPA (Golden A+)',
    description: 'Focused on Higher Mathematics, Physics, and Chemistry with top academic distinction.',
    highlights: ['Perfect GPA 5.00', 'Strong analytical and mathematical foundation'],
  },
  {
    id: 'ssc',
    degree: 'Secondary School Certificate (SSC) — Science',
    institution: 'Shaheen Academy School & College, Feni',
    period: '2018',
    result: '4.78 / 5.00',
    resultType: 'GPA',
    description: 'Secondary education with core focus on General Science and Mathematics.',
    highlights: ['Academic excellence in science stream', 'Foundational STEM coursework'],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'simulation',
    title: 'Engineering Design & Simulation',
    icon: 'Cpu',
    description: 'Software platforms for circuit simulation, solar modeling, CAD layouts, and mathematical analysis.',
    skills: [
      'MATLAB & Simulink',
      'AutoCAD Electrical',
      'PVsyst Solar Modeling',
      'Proteus Design Suite',
      'NI Multisim',
      'Siemens TIA Portal / STEP 7',
      'Automation Studio',
    ],
  },
  {
    id: 'automation',
    title: 'Industrial Automation & Control',
    icon: 'Sliders',
    description: 'Hardware controllers, drive systems, motor sequencing, sensor integration, and industrial distribution.',
    skills: [
      'PLC Programming (Ladder Logic)',
      'HMI Design & Interfacing',
      'SCADA Systems',
      'Motor Control Centers (MCC)',
      'Variable Frequency Drives (VFD)',
      'RLC Circuits & Filtering',
      'Encoders & Position Sensors',
      'Actuators & Industrial Sensors',
      'Servo & Stepper Drives/Motors',
    ],
  },
  {
    id: 'tools',
    title: 'Office & Project Tools',
    icon: 'FileText',
    description: 'Engineering documentation, spreadsheet modeling, technical presentation, and multidisciplinary coordination.',
    skills: [
      'MS Excel (Engineering Modeling)',
      'MS Word (Technical Writing)',
      'MS PowerPoint',
      'Technical Documentation',
      'Engineering Reporting',
      'Project Coordination & Scheduling',
    ],
  },
];

export const languageData: LanguageItem[] = [
  {
    language: 'Bangla',
    proficiency: 'Native / Mother Tongue',
    levelBadge: 'Native',
    description: 'Fluent in spoken and written communications across technical and corporate settings.',
  },
  {
    language: 'English',
    proficiency: 'Professional Working Proficiency',
    levelBadge: 'Professional',
    description: 'Proficient in technical research papers, academic presentations, and professional engineering discourse.',
  },
  {
    language: 'German',
    proficiency: 'Basic (A1/A2 Elementary)',
    levelBadge: 'Elementary',
    description: 'Basic conversational and technical vocabulary in preparation for future international research and study.',
  },
];

export const certificationData: CertificationItem[] = [
  {
    id: 'cert-auto-bd',
    title: 'Industrial Automation & Control Systems',
    issuer: 'Automation BD',
    date: 'August 2026',
    credentialId: 'ABD-IACS-2026-08',
    status: 'Completed',
    description:
      'Comprehensive hands-on professional certification covering Siemens PLC ladder programming, HMI screen development, SCADA integration, VFD parameterization, and industrial safety interlocks.',
    skillsCovered: [
      'Siemens S7-1200 / S7-300 PLC',
      'TIA Portal & Ladder Logic (LAD)',
      'HMI Screen Configuration & Tags',
      'VFD & Three-Phase Induction Motors',
      'Sensors (Inductive, Capacitive, Optical)',
      'Safety Relays & Emergency Interlocks',
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'abul-khair-steel',
    role: 'Engineering Intern (Industrial Electrical Systems)',
    company: 'Abul Khair Steel Melting Limited',
    location: 'Sitakunda / Chattogram, Bangladesh',
    period: 'May 2026 – July 2026',
    type: 'Industrial Internship',
    summary:
      'Gained practical industrial exposure to heavy-industry steel melting processes, high-voltage distribution networks, electric arc furnaces, and large-scale industrial electrical systems.',
    responsibilities: [
      'Observed and analyzed high-power electrical distribution, step-down transformers, and switchgear operations in an active steel manufacturing plant.',
      'Studied Motor Control Centers (MCC) and heavy industrial motor drive systems powering heavy overhead cranes, ladles, and billet casters.',
      'Assisted plant electrical engineers with preventive maintenance routines, thermal inspections, and electrical safety protocol auditing.',
      'Documented daily operational logs and power factor correction (PFC) capacitor bank performance.',
    ],
    technologies: [
      'High Voltage Switchgear',
      'Transformers & Substation',
      'MCC & Heavy VFDs',
      'Power Factor Correction',
      'Industrial Safety Protocols',
    ],
  },
  {
    id: 'eastern-cables',
    role: 'Production Intern (Electrical Cable Manufacturing)',
    company: 'Eastern Cables Limited',
    location: 'Patenga / Chattogram, Bangladesh',
    period: 'Feb 2026 – April 2026',
    type: 'Industrial Internship',
    summary:
      'Hands-on engineering training in conductor drawing, stranding, XLPE/PVC insulation extrusion, and rigorous high-voltage quality assurance testing of industrial cables.',
    responsibilities: [
      'Monitored the end-to-end production lifecycle of copper and aluminum power cables, from wire drawing to final jacketing.',
      'Participated in routine high-voltage breakdown, insulation resistance (Megger), and conductor resistance testing in the QA/QC testing facility.',
      'Examined automated extrusion line control panels, speed synchronizers, and take-up capstan drive motors.',
      'Prepared detailed weekly production quality reports and compliance documentation aligned with BSTI and IEC standards.',
    ],
    technologies: [
      'Cable Extrusion Lines',
      'High Voltage QA Testing',
      'Insulation Resistance Testers',
      'IEC / BSTI Standards',
      'Quality Control Documentation',
    ],
  },
];

export const researchPapersData: ResearchPaper[] = [
  {
    id: 'solar-thesis',
    title: 'Feasibility Assessment of a Rooftop Solar PV System for the FSE Building, IIUC Kumira: A PVsyst-Based Technical, Economic, and Environmental Analysis',
    category: 'Undergraduate Thesis',
    status: 'Completed Thesis',
    statusColor: 'emerald',
    role: 'Lead Author & Researcher (Undergraduate Thesis)',
    abstract:
      'A comprehensive techno-economic and environmental feasibility study for installing a grid-tied rooftop solar photovoltaic (PV) array on the Faculty of Science and Engineering (FSE) building at International Islamic University Chittagong (IIUC). Utilizing PVsyst 7.x simulation modeling with site-specific meteorological datasets from Meteonorm and NASA SSE, the study assesses energy generation, performance ratio (PR), levelized cost of energy (LCOE), payback period, and annual CO2 emission offsets.',
    highlights: [
      'Detailed solar shading analysis and 3D rooftop scene modeling in PVsyst',
      'Calculated annual energy yield (MWh/year), Performance Ratio (PR), and system losses',
      'Economic financial modeling including Net Present Value (NPV), IRR, and simple payback',
      'Environmental impact evaluation demonstrating significant greenhouse gas mitigation',
    ],
    keywords: ['Solar PV', 'PVsyst Simulation', 'Techno-Economic Analysis', 'Grid-Tied Inverters', 'Renewable Energy', 'LCOE'],
    toolsUsed: ['PVsyst', 'AutoCAD Electrical', 'Meteonorm', 'MS Excel Modeling'],
  },
  {
    id: 'antenna-brain-tumor',
    title: 'Design and Analysis of Ring-Slot Antenna with Embedded Polygonal Slot for Brain Tumor Detection',
    category: 'Antenna & RF',
    status: 'Under Review',
    statusColor: 'amber',
    role: 'Co-Author & Simulation Contributor',
    abstract:
      'Proposes a compact, ultra-wideband (UWB) ring-slot microstrip antenna embedded with a polygonal slot resonator engineered specifically for non-invasive microwave imaging and brain tumor detection. The design achieves high gain, wide bandwidth, and low specific absorption rate (SAR) characteristics suitable for biomedical head phantom penetration.',
    highlights: [
      'Engineered antenna geometry with polygonal slot perturbation for enhanced bandwidth',
      'Conducted electromagnetic simulations for reflection coefficient (S11), radiation patterns, and gain',
      'Validated tumor contrast detection sensitivity in multi-layered dielectric head models',
    ],
    keywords: ['Microstrip Antenna', 'Ring-Slot Resonator', 'Brain Tumor Detection', 'Microwave Imaging', 'Biomedical RF', 'Specific Absorption Rate (SAR)'],
    toolsUsed: ['Electromagnetic Simulation Tools', 'MATLAB', 'Technical Manuscript Writing'],
  },
  {
    id: 'green-hydrogen',
    title: 'Machine Learning-Based Prediction of Solar PV-Powered Green Hydrogen Production with Storage System',
    category: 'Renewable Energy & AI',
    status: 'Manuscript in Preparation',
    statusColor: 'blue',
    role: 'Co-Author & Data Analyst',
    abstract:
      'Investigates the dynamic coupling of solar photovoltaic power generation with PEM (Proton Exchange Membrane) water electrolyzers for decentralized green hydrogen production. Develops supervised machine learning models to accurately forecast hydrogen production yields based on solar irradiance, ambient temperature, electrolyzer efficiency curves, and storage tank pressure dynamics.',
    highlights: [
      'Formulated predictive regression models for green hydrogen flow rate and efficiency',
      'Optimized solar PV direct-coupling versus DC-DC converter driven electrolysis',
      'Assessed hydrogen compression and high-pressure storage capacity optimization',
    ],
    keywords: ['Green Hydrogen', 'Solar PV', 'PEM Electrolyzer', 'Machine Learning Prediction', 'Energy Storage', 'Decarbonization'],
    toolsUsed: ['Python / MATLAB', 'ML Regression Algorithms', 'PVsyst Data', 'MS Excel'],
  },
  {
    id: 'tiny-bci',
    title: 'TinyBCI: Quality-Gated Adaptive Inference for Energy-Efficient Motor-Imagery Decoding on Microcontrollers',
    category: 'Embedded AI & BCI',
    status: 'Manuscript in Preparation',
    statusColor: 'purple',
    role: 'Co-Author & Embedded Systems Contributor',
    abstract:
      'Introduces TinyBCI, an ultra-low-power edge-AI architecture that executes adaptive, quality-gated neural network inference for Brain-Computer Interface (BCI) motor-imagery EEG classification directly on resource-constrained microcontrollers (MCUs). The approach dynamically scales computational precision to minimize battery power consumption while preserving classification accuracy.',
    highlights: [
      'Designed a lightweight quantization pipeline optimized for Cortex-M microcontrollers',
      'Implemented signal quality gating to skip redundant neural computations during noisy EEG epochs',
      'Demonstrated substantial energy savings with negligible drop in motor-imagery decoding accuracy',
    ],
    keywords: ['TinyML', 'Brain-Computer Interface (BCI)', 'Motor Imagery', 'Edge Computing', 'Microcontrollers', 'Low-Power AI'],
    toolsUsed: ['Embedded C', 'TinyML Frameworks', 'MATLAB / Python', 'Microcontroller Toolchains'],
  },
];

export const appliedProjectsData: AppliedProject[] = [
  {
    id: 'boiler-automation',
    title: 'Industrial Boiler Automation System',
    category: 'Industrial Automation & PLC',
    platform: 'Siemens S7 PLC & TIA Portal',
    summary:
      'Designed and simulated a comprehensive Siemens PLC-based control system to automate and monitor industrial boiler operations, featuring multi-stage temperature/pressure regulation, automated burner sequence, and rigorous safety interlock logic.',
    systemLogic:
      'Constructed modular Ladder Logic (LAD) programs with dedicated function blocks for drum level water regulation (PID-based analog feedback), fuel-air ratio control, exhaust flue gas temperature monitoring, and fail-safe trip mechanisms for over-pressure or low-water anomalies.',
    features: [
      'Automated burner purge and ignition sequencing with flame sensor validation',
      'Continuous drum water level monitoring with low/high water alarm interlocks',
      'Pressure transmitter scaling and over-pressure relief valve actuation logic',
      'Emergency Stop (E-Stop) hardwired and software fail-safe routine',
      'HMI visualization layout for real-time temperature, pressure, and valve statuses',
    ],
    technologies: ['Siemens TIA Portal', 'Ladder Logic (LAD)', 'PID Control', 'HMI Interface', 'Safety Interlocks'],
    hmiFeatures: ['Real-time steam pressure & drum temperature gauges', 'Interactive start/stop sequencing buttons', 'Visual alarm banners with historical fault logging'],
  },
  {
    id: 'washing-machine-automation',
    title: 'Automated Industrial Washing Machine Cycle Control',
    category: 'Industrial Automation & PLC',
    platform: 'Siemens PLC & HMI Simulation',
    summary:
      'Developed a full-cycle automated control system for a commercial washing machine simulating wash, rinse, drain, and high-speed spin extraction sequencing driven by Siemens PLC ladder logic and HMI-based operator interface.',
    systemLogic:
      'Utilized sequential state-machine logic in Ladder programming with precision software timers (TON/TOF), bidirectional motor drive control for gentle wash agitation vs. high-velocity spin extraction, water inlet/drain solenoid valve sequencing, and door interlock safety monitoring.',
    features: [
      'Complete 4-stage cycle management: Pre-wash, Main Wash, Rinse, and Centrifugal Spin',
      'Water level sensor integration (Low, Medium, High preset thresholds)',
      'Directional reversing timer for washing drum agitation',
      'High-speed centrifugal spin cycle with dynamic unbalance detection',
      'Safety door lock interlock preventing operation while unlatched',
    ],
    technologies: ['Siemens S7 PLC', 'Ladder Diagram (LAD)', 'HMI Touchscreen Design', 'Timer & Counter Logic', 'Solenoid & Drive Control'],
    hmiFeatures: ['Cycle selection (Normal, Heavy, Quick)', 'Live countdown timer and current cycle phase indicator', 'Manual override & diagnostics panel'],
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'solar-service',
    title: 'PV/Solar System Design & Analysis',
    subtitle: 'PVsyst-Based Feasibility & Engineering Studies',
    icon: 'Sun',
    description:
      'Expert simulation and techno-economic assessment for rooftop and ground-mounted solar PV installations. Complete energy yield projections, shading analysis, and system loss breakdowns.',
    deliverables: [
      'Comprehensive PVsyst simulation report with annual energy yields (MWh)',
      'Performance Ratio (PR) & System Loss Diagram calculations',
      'Financial ROI, LCOE, NPV, and payback period calculations',
      'Solar array layout planning and string sizing recommendations',
    ],
    keyTools: ['PVsyst 7.x', 'AutoCAD Electrical', 'Meteonorm Data', 'MS Excel Financial Modeling'],
  },
  {
    id: 'automation-service',
    title: 'Industrial Automation & PLC/SCADA Programming',
    subtitle: 'Siemens PLC, HMI Development & Control Logic',
    icon: 'Cpu',
    description:
      'End-to-end industrial control system design including ladder logic programming, HMI operator dashboards, sensor integration, VFD motor control, and safety interlocks.',
    deliverables: [
      'Clean, modular Siemens PLC ladder logic programs (TIA Portal / STEP 7)',
      'Intuitive HMI graphical interface and alarm management screens',
      'I/O mapping, electrical wiring diagrams, and sensor selection',
      'System sequencing logic and emergency interlock documentation',
    ],
    keyTools: ['Siemens TIA Portal', 'Ladder Logic (LAD)', 'HMI Design', 'Automation Studio', 'Proteus'],
  },
  {
    id: 'research-service',
    title: 'Research Collaboration & Academic Writing',
    subtitle: 'Technical Papers, Simulation Modeling & Documentation',
    icon: 'BookOpen',
    description:
      'Collaborative engineering research, simulation data processing, literature reviews, and rigorous technical paper drafting in power systems, RF/antenna, and edge AI.',
    deliverables: [
      'In-depth literature reviews and state-of-the-art benchmarking',
      'Simulation design, parametric sweeps, and data visualization in MATLAB',
      'Structured manuscript drafting aligned with IEEE / standard journal formats',
      'Technical reporting and comprehensive thesis documentation',
    ],
    keyTools: ['MATLAB & Simulink', 'LaTeX / MS Word', 'Reference Management', 'Data Analytics'],
  },
];

export const coCurricularData: CoCurricularItem[] = [
  {
    id: 'eee-club-secretary',
    role: 'Secretary, Press & Publicity Committee',
    organization: 'IIUC EEE Club (International Islamic University Chittagong)',
    period: 'Autumn 2025',
    type: 'Leadership',
    description:
      'Led the communications, event publicity, and digital outreach for all major departmental seminars, technical workshops, and intra-university engineering competitions.',
    responsibilities: [
      'Spearheaded promotional campaigns reaching 1,000+ engineering students and faculty members.',
      'Authored official press releases, event announcements, and technical event briefs.',
      'Coordinated multimedia teams for live event coverage and executive reporting.',
    ],
  },
  {
    id: 'ieee-activities',
    role: 'Active Participant & Member',
    organization: 'IEEE Seminars, Technical Workshops & Awareness Programs',
    period: '2022 – Present',
    type: 'Professional Engagement',
    description:
      'Consistently attended and engaged in technical symposiums, renewable energy workshops, and career mentorship sessions organized under IEEE student branches.',
    responsibilities: [
      'Participated in hands-on workshops on Smart Grid Technologies and Power Electronics.',
      'Engaged in renewable energy transitions and green industrial automation seminars.',
      'Built a strong network with industry mentors and fellow academic researchers.',
    ],
  },
];

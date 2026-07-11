export const crimeTypes = [
  'Bike Theft',
  'Phone Snatching',
  'Robbery',
  'Cyber Crime',
  'Fraud',
  'Vehicle Theft',
  'Kidnapping',
  "Women's Safety",
];

export const dashboardKPIs = [
  { label: 'Total Crimes', value: 12483, change: '+12.4%', trend: 'up' },
  { label: 'Bike Theft', value: 3421, change: '+8.2%', trend: 'up' },
  { label: 'Phone Snatching', value: 2156, change: '-4.1%', trend: 'down' },
  { label: 'Robbery', value: 982, change: '+2.3%', trend: 'up' },
  { label: 'Cyber Crime', value: 1874, change: '+28.6%', trend: 'up' },
  { label: 'Fraud', value: 1432, change: '+15.2%', trend: 'up' },
  { label: 'Vehicle Theft', value: 1654, change: '+6.7%', trend: 'up' },
  { label: 'Kidnapping', value: 124, change: '-18.4%', trend: 'down' },
  { label: "Women's Safety", value: 876, change: '-7.9%', trend: 'down' },
  { label: 'Solved Cases', value: 7842, change: '+9.5%', trend: 'up' },
  { label: 'Pending Cases', value: 4641, change: '-3.2%', trend: 'down' },
  { label: 'Risk Score', value: 72, change: '+5', trend: 'up', isScore: true },
  { label: 'Weekly Growth', value: 11.3, change: '+1.8%', trend: 'up', suffix: '%' },
  { label: 'Monthly Growth', value: 14.7, change: '+3.4%', trend: 'up', suffix: '%' },
];

export const cityData = [
  {
    name: 'Delhi',
    lat: 28.6139,
    lng: 77.209,
    crimes: 4521,
    solved: 2890,
    pending: 1631,
    risk: 86,
    trend: '+14%',
    recommendation: 'Deploy additional patrol units in North-West district. Cybercrime cell requires reinforcement.',
    breakdown: { bikeTheft: 1120, phoneSnatching: 980, robbery: 320, cyberCrime: 980, fraud: 420, vehicleTheft: 560, kidnapping: 41, womenSafety: 100 },
  },
  {
    name: 'Agra',
    lat: 27.1767,
    lng: 78.0081,
    crimes: 1843,
    solved: 1240,
    pending: 603,
    risk: 64,
    trend: '+5%',
    recommendation: 'Tourist zones need enhanced CCTV coverage. Increase foot patrols near Taj Ganj area.',
    breakdown: { bikeTheft: 520, phoneSnatching: 310, robbery: 110, cyberCrime: 180, fraud: 210, vehicleTheft: 190, kidnapping: 12, womenSafety: 301 },
  },
  {
    name: 'Lucknow',
    lat: 26.8467,
    lng: 80.9462,
    crimes: 2456,
    solved: 1620,
    pending: 836,
    risk: 71,
    trend: '+9%',
    recommendation: 'Gomti Nagar cyber hub shows fraud spike. Recommend dedicated white-collar crime task force.',
    breakdown: { bikeTheft: 610, phoneSnatching: 420, robbery: 170, cyberCrime: 390, fraud: 280, vehicleTheft: 260, kidnapping: 18, womenSafety: 308 },
  },
  {
    name: 'Kanpur',
    lat: 26.4499,
    lng: 80.3319,
    crimes: 1987,
    solved: 1280,
    pending: 707,
    risk: 67,
    trend: '+6%',
    recommendation: 'Industrial belt vehicle thefts rising. Coordinate with RTO for stolen vehicle database sync.',
    breakdown: { bikeTheft: 480, phoneSnatching: 350, robbery: 140, cyberCrime: 210, fraud: 190, vehicleTheft: 320, kidnapping: 15, womenSafety: 282 },
  },
  {
    name: 'Varanasi',
    lat: 25.3176,
    lng: 82.9739,
    crimes: 1320,
    solved: 910,
    pending: 410,
    risk: 58,
    trend: '-2%',
    recommendation: 'Pilgrimage season crowd control and pickpocketing prevention recommended.',
    breakdown: { bikeTheft: 310, phoneSnatching: 280, robbery: 80, cyberCrime: 120, fraud: 110, vehicleTheft: 150, kidnapping: 8, womenSafety: 261 },
  },
  {
    name: 'Noida',
    lat: 28.5355,
    lng: 77.391,
    crimes: 2356,
    solved: 1580,
    pending: 776,
    risk: 74,
    trend: '+11%',
    recommendation: 'Metro corridor phone snatching cluster detected. Increase plainclothes deployment.',
    breakdown: { bikeTheft: 430, phoneSnatching: 610, robbery: 150, cyberCrime: 420, fraud: 260, vehicleTheft: 240, kidnapping: 11, womenSafety: 235 },
  },
];

export const monthlyCrimeData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    { label: 'Total Crimes', data: [980, 1040, 1120, 1080, 1150, 1220, 1300, 1280, 1350, 1420, 1380, 1463] },
    { label: 'Solved Cases', data: [620, 680, 720, 710, 760, 800, 850, 830, 890, 940, 910, 982] },
  ],
};

export const crimeDistributionData = {
  labels: ['Bike Theft', 'Phone Snatching', 'Robbery', 'Cyber Crime', 'Fraud', 'Vehicle Theft', 'Kidnapping', "Women's Safety"],
  data: [3421, 2156, 982, 1874, 1432, 1654, 124, 876],
};

export const cityComparisonData = {
  labels: ['Delhi', 'Agra', 'Lucknow', 'Kanpur', 'Varanasi', 'Noida'],
  data: [86, 64, 71, 67, 58, 74],
};

export const radarData = {
  labels: ['Detection', 'Response', 'Prevention', 'Forensics', 'Intelligence', 'Community'],
  data: [82, 74, 68, 88, 91, 64],
};

export const aiInsights = [
  'Vehicle theft increased by 28% in the NCR industrial corridor.',
  'Delhi is now a high-risk district with 86/100 risk score.',
  'Repeat offender detected in 14 active robbery cases across Agra.',
  'Additional patrol recommended in Noida Metro corridor between 18:00–22:00.',
  'Cyber crime reports surged 28.6% this month, primarily UPI fraud.',
  'Weekend crime prediction indicates 18% higher incident probability on Saturdays.',
  'Pattern detected: bike thefts concentrated near metro stations between 06:00–09:00.',
];

export const alerts = [
  { id: 1, type: 'Critical', message: 'High-risk suspect spotted near Sector 18 Noida', time: '2 min ago', area: 'Noida' },
  { id: 2, type: 'Warning', message: 'Cyber fraud cluster detected in Gomti Nagar', time: '14 min ago', area: 'Lucknow' },
  { id: 3, type: 'Info', message: 'Stolen vehicle recovered in Kanpur industrial belt', time: '32 min ago', area: 'Kanpur' },
  { id: 4, type: 'Critical', message: 'Gang activity suspected in North-West Delhi', time: '55 min ago', area: 'Delhi' },
];

export const news = [
  'CrimeVision AI shortlisted for National Police Tech Innovation Award',
  'Uttar Pradesh Police deploys 500 new AI-enabled CCTV cameras',
  'Delhi Police integrates predictive hot-spot module with CrimeVision',
  'New cyber crime unit launched in Lucknow with neural fraud detection',
  'Ministry of Home Affairs reviews CrimeVision dashboard for national rollout',
];

export const criminals = [
  { id: 1, name: 'Rahul Verma', age: 32, gender: 'Male', crime: 'Robbery', area: 'Karol Bagh, Delhi', station: 'Karol Bagh PS', risk: 92, repeat: true, lastSeen: '2 hrs ago', fir: 'DEL/2024/08921', status: 'Wanted', image: '/assets/images/criminal-01.jpg', lat: 28.652, lng: 77.188 },
  { id: 2, name: 'Ajay Mishra', age: 45, gender: 'Male', crime: 'Vehicle Theft', area: 'Indirapuram, Ghaziabad', station: 'Indirapuram PS', risk: 88, repeat: true, lastSeen: '5 hrs ago', fir: 'GZB/2024/03214', status: 'Absconding', image: '/assets/images/criminal-02.jpg', lat: 28.645, lng: 77.362 },
  { id: 3, name: 'Pooja Sharma', age: 28, gender: 'Female', crime: 'Cyber Fraud', area: 'Gomti Nagar, Lucknow', station: 'Gomti Nagar PS', risk: 74, repeat: false, lastSeen: '1 day ago', fir: 'LKO/2024/01472', status: 'Under Surveillance', image: '/assets/images/criminal-01.jpg', lat: 26.845, lng: 80.996 },
  { id: 4, name: 'Vikram Singh', age: 36, gender: 'Male', crime: 'Phone Snatching', area: 'Sector 18, Noida', station: 'Sector 18 PS', risk: 81, repeat: true, lastSeen: '8 hrs ago', fir: 'NOI/2024/00563', status: 'Wanted', image: '/assets/images/criminal-02.jpg', lat: 28.570, lng: 77.326 },
  { id: 5, name: 'Suresh Yadav', age: 52, gender: 'Male', crime: 'Kidnapping', area: 'Taj Ganj, Agra', station: 'Taj Ganj PS', risk: 95, repeat: true, lastSeen: '3 days ago', fir: 'AGR/2024/00291', status: 'Absconding', image: '/assets/images/criminal-01.jpg', lat: 27.160, lng: 78.042 },
  { id: 6, name: 'Neha Gupta', age: 24, gender: 'Female', crime: 'Fraud', area: 'Hazratganj, Lucknow', station: 'Hazratganj PS', risk: 62, repeat: false, lastSeen: '12 hrs ago', fir: 'LKO/2024/01934', status: 'Bailed', image: '/assets/images/criminal-01.jpg', lat: 26.848, lng: 80.942 },
  { id: 7, name: 'Mohammad Asif', age: 39, gender: 'Male', crime: 'Bike Theft', area: 'Lajpat Nagar, Delhi', station: 'Lajpat Nagar PS', risk: 78, repeat: true, lastSeen: '4 hrs ago', fir: 'DEL/2024/09112', status: 'Wanted', image: '/assets/images/criminal-02.jpg', lat: 28.568, lng: 77.243 },
  { id: 8, name: 'Kiran Patel', age: 30, gender: 'Female', crime: 'Cyber Crime', area: 'Rajajipuram, Lucknow', station: 'Rajajipuram PS', risk: 70, repeat: false, lastSeen: '2 days ago', fir: 'LKO/2024/01655', status: 'Under Investigation', image: '/assets/images/criminal-01.jpg', lat: 26.870, lng: 80.900 },
  { id: 9, name: 'Deepak Kumar', age: 27, gender: 'Male', crime: 'Robbery', area: 'Kalyanpur, Kanpur', station: 'Kalyanpur PS', risk: 85, repeat: true, lastSeen: '6 hrs ago', fir: 'KNP/2024/00741', status: 'Wanted', image: '/assets/images/criminal-02.jpg', lat: 26.500, lng: 80.250 },
  { id: 10, name: 'Anil Chaudhary', age: 41, gender: 'Male', crime: 'Vehicle Theft', area: 'Sikandra, Agra', station: 'Sikandra PS', risk: 80, repeat: true, lastSeen: '1 day ago', fir: 'AGR/2024/00384', status: 'Absconding', image: '/assets/images/criminal-01.jpg', lat: 27.210, lng: 77.950 },
  { id: 11, name: 'Sunita Devi', age: 34, gender: 'Female', crime: 'Fraud', area: 'Vaishali, Ghaziabad', station: 'Vaishali PS', risk: 66, repeat: false, lastSeen: '9 hrs ago', fir: 'GZB/2024/02876', status: 'Bailed', image: '/assets/images/criminal-01.jpg', lat: 28.640, lng: 77.340 },
  { id: 12, name: 'Ravi Shankar', age: 29, gender: 'Male', crime: 'Phone Snatching', area: 'Rohini, Delhi', station: 'Rohini PS', risk: 84, repeat: true, lastSeen: '3 hrs ago', fir: 'DEL/2024/09233', status: 'Wanted', image: '/assets/images/criminal-02.jpg', lat: 28.735, lng: 77.067 },
  { id: 13, name: 'Faizal Khan', age: 37, gender: 'Male', crime: 'Bike Theft', area: 'Aliganj, Lucknow', station: 'Aliganj PS', risk: 76, repeat: true, lastSeen: '7 hrs ago', fir: 'LKO/2024/02011', status: 'Under Surveillance', image: '/assets/images/criminal-02.jpg', lat: 26.890, lng: 80.960 },
  { id: 14, name: 'Priya Mehta', age: 26, gender: 'Female', crime: 'Cyber Fraud', area: 'Sector 62, Noida', station: 'Sector 62 PS', risk: 72, repeat: false, lastSeen: '15 hrs ago', fir: 'NOI/2024/00612', status: 'Under Investigation', image: '/assets/images/criminal-01.jpg', lat: 28.620, lng: 77.360 },
  { id: 15, name: 'Arjun Thakur', age: 43, gender: 'Male', crime: 'Robbery', area: 'Civil Lines, Agra', station: 'Civil Lines PS', risk: 89, repeat: true, lastSeen: '10 hrs ago', fir: 'AGR/2024/00405', status: 'Absconding', image: '/assets/images/criminal-02.jpg', lat: 27.200, lng: 78.000 },
];

export const criminalProfile = {
  id: 1,
  name: 'Rahul Verma',
  alias: 'RV / Kalu',
  age: 32,
  gender: 'Male',
  height: '5\'9"',
  build: 'Medium',
  distinguishingMarks: 'Scar on left forearm, tattoo of cobra on right bicep',
  crime: 'Armed Robbery, Snatching',
  area: 'Karol Bagh, Delhi',
  station: 'Karol Bagh Police Station',
  risk: 92,
  repeat: true,
  lastSeen: '2 hrs ago',
  fir: 'DEL/2024/08921',
  status: 'Wanted',
  image: '/assets/images/criminal-01.jpg',
  lat: 28.652,
  lng: 77.188,
  history: [
    { date: '2019-08-14', event: 'First arrest for petty theft', outcome: '6 months imprisonment' },
    { date: '2021-03-22', event: 'Arrested for bike theft', outcome: 'Acquitted due to lack of evidence' },
    { date: '2022-11-05', event: 'Named suspect in armed robbery case', outcome: 'Warrant issued' },
    { date: '2024-01-30', event: 'Detected in CCTV near Karol Bagh metro', outcome: 'Identification confirmed' },
    { date: '2024-06-12', event: 'Active in 6 robbery FIRs across Delhi', outcome: 'High-priority target' },
  ],
  associates: [
    { name: 'Ajay Mishra', relation: 'Accomplice', risk: 88 },
    { name: 'Ravi Shankar', relation: 'Gang Member', risk: 84 },
    { name: 'Mohammad Asif', relation: 'Fence', risk: 78 },
    { name: 'Vikram Singh', relation: 'Known Associate', risk: 81 },
  ],
  prediction: 'High probability (87%) of repeat robbery in commercial districts within 72 hours. Pattern indicates weekend activity in Karol Bagh and Rajendra Place.',
  movementPath: [
    { lat: 28.652, lng: 77.188, time: '08:00' },
    { lat: 28.658, lng: 77.195, time: '09:30' },
    { lat: 28.645, lng: 77.203, time: '11:00' },
    { lat: 28.640, lng: 77.210, time: '13:15' },
    { lat: 28.635, lng: 77.205, time: '15:00' },
    { lat: 28.632, lng: 77.198, time: '16:45' },
  ],
};

export const networkNodes = [
  { id: 'Rahul Verma', group: 'target', risk: 92 },
  { id: 'Ajay Mishra', group: 'associate', risk: 88 },
  { id: 'Ravi Shankar', group: 'gang', risk: 84 },
  { id: 'Mohammad Asif', group: 'associate', risk: 78 },
  { id: 'Vikram Singh', group: 'associate', risk: 81 },
  { id: 'Deepak Kumar', group: 'gang', risk: 85 },
  { id: 'Suresh Yadav', group: 'associate', risk: 95 },
  { id: 'Vehicle Owner: Prem Auto', group: 'vehicle', risk: 45 },
  { id: 'Phone: +91-98XXX-11221', group: 'contact', risk: 38 },
  { id: 'Phone: +91-88XXX-33445', group: 'contact', risk: 52 },
];

export const networkLinks = [
  { source: 'Rahul Verma', target: 'Ajay Mishra', value: 8 },
  { source: 'Rahul Verma', target: 'Ravi Shankar', value: 7 },
  { source: 'Rahul Verma', target: 'Mohammad Asif', value: 5 },
  { source: 'Rahul Verma', target: 'Vikram Singh', value: 6 },
  { source: 'Rahul Verma', target: 'Deepak Kumar', value: 4 },
  { source: 'Ajay Mishra', target: 'Suresh Yadav', value: 3 },
  { source: 'Ravi Shankar', target: 'Vehicle Owner: Prem Auto', value: 4 },
  { source: 'Mohammad Asif', target: 'Phone: +91-98XXX-11221', value: 6 },
  { source: 'Vikram Singh', target: 'Phone: +91-88XXX-33445', value: 5 },
  { source: 'Deepak Kumar', target: 'Ravi Shankar', value: 4 },
];

export const officers = [
  { name: 'DCP Ananya Rao', role: 'District Commissioner', station: 'Delhi HQ', cases: 1240 },
  { name: 'Inspector Rohit Mehra', role: 'Cyber Crime Unit', station: 'Lucknow', cases: 856 },
  { name: 'SI Priya Nair', role: 'Investigation Officer', station: 'Noida', cases: 642 },
  { name: 'SI Arjun Yadav', role: 'Patrol Supervisor', station: 'Agra', cases: 518 },
];

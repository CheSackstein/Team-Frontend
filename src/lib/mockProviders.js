const BeautyProviders = [
  {
    phone: '12354546',
    address: 'fake st. 1234',
    email: '222@22',
    category: 'beauty',
    type: 'Salon',
    description: 'we cut hair and do nails',
    appointments: [],
    daysOff: 'Friday',
    workingHours: '9to5',
    availableServices: [
      { name: 'manicure', price: 100, duration: 45 },
      { name: 'pedicure', price: 100, duration: 45 },
      { name: 'hair cut', price: 150, duration: 30 }
    ],
    banner: 'URL',
    profilePicture: 'URL',
    staffAvailable: 1,
    OwnerID: 1,
    companyName: 'el nail salon'
  },
  {
    phone: '12354546',
    address: 'fake st. 1234',
    email: '222@22',
    category: 'beauty',
    type: 'Nails',
    description: 'vanonoawniowrnv av wavakawvnawoi',
    appointments: [],
    daysOff: 'Friday',
    workingHours: '9to5',
    availableServices: [
      { name: manicure, price: 100, duration: 45 },
      { name: pedicure, price: 100, duration: 45 }
    ],
    banner: 'URL',
    profilePicture: 'URL',
    staffAvailable: 1,
    OwnerID: 1,
    companyName: 'el nail salon'
    }
]

const HealthProviders = [
  {
    phone: '12354546',
    address: 'fake st. 1234',
    email: '222@22',
    category: 'health',
    type: 'Dentist',
    description: 'we remove teeth',
    appointments: [],
    daysOff: 'Friday',
    workingHours: '9to5',
    availableServices: [
      { name: 'regular visit', price: 100, duration: 45 },
      { name: 'root canal', price: 100, duration: 45 },
    ],
    banner: 'URL',
    profilePicture: 'URL',
    staffAvailable: 1,
    OwnerID: 1,
    companyName: 'Dr. happy Teeth'
  },
  {
    phone: '12354546',
    address: 'fake st. 1234',
    email: '222@22',
    category: 'health',
    type: 'Nails',
    description: 'vanonoawniowrnv',
    appointments: [],
    daysOff: 'Friday',
    workingHours: '9to5',
    availableServices: [
      { name: manicure, price: 100, duration: 45 },
      { name: pedicure, price: 100, duration: 45 }
    ],
    banner: 'URL',
    profilePicture: 'URL',
    staffAvailable: 1,
    OwnerID: 1,
    companyName: 'Dr. Bone Cracker'
  }
];


module.exports = {
  HealthProviders,
  BeautyProviders
};
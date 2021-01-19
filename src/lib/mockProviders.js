const BeautyProviders = [
  {
    _id: '1',
    phone: '12354546',
    address: 'fake st. 1234',
    email: '222@22',
    category: 'beauty',
    type: 'Salon',
    description: 'We cut hair and do nails',
    appointments: [],
    daysOff: 'Friday',
    workingHours: '9to5',
    availableServices: [
      { name: 'manicure', price: 100, duration: 45 },
      { name: 'pedicure', price: 100, duration: 45 },
      { name: 'hair cut', price: 150, duration: 30 }
    ],
    banner: 'URL',
    profilePicture: '/hairsalon1.jpg',
    staffAvailable: 1,
    OwnerID: 1,
    companyName: 'El hair salon'
  },
  {
    _id: '2',
    phone: '12354546',
    address: 'fake st. 1234',
    email: '222@22',
    category: 'beauty',
    type: 'Nails',
    description: 'get your nails done with style',
    appointments: [],
    daysOff: 'Friday',
    workingHours: '9to5',
    availableServices: [
      { name: 'manicure', price: 100, duration: 45 },
      { name: 'pedicure', price: 100, duration: 45 }
    ],
    banner: 'URL',
    profilePicture: '/hairsalon1.jpg',
    staffAvailable: 1,
    OwnerID: 1,
    companyName: 'El nail salon'
  }
];

const HealthProviders = [
  {
    _id: '3',
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
      { name: 'root canal', price: 100, duration: 45 }
    ],
    banner: 'URL',
    profilePicture: '/public/doctor1.jpg',
    staffAvailable: 1,
    OwnerID: 1,
    companyName: 'Dr. happy Teeth'
  },
  {
    _id: '4',
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
      { name: 'manicure', price: 100, duration: 45 },
      { name: 'pedicure', price: 100, duration: 45 }
    ],
    banner: 'URL',
    profilePicture: '/public/doctor1.jpg',
    staffAvailable: 1,
    OwnerID: 1,
    companyName: 'Dr. Bone Cracker'
  }
];


module.exports = {
  HealthProviders,
  BeautyProviders
};
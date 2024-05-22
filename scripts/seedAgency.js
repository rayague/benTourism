import firestore from '@react-native-firebase/firestore';
import faker from 'faker';

const seedAgency = async () => {
  try {
    const agencies = Array.from({ length: 10 }, () => ({
      id: faker.datatype.uuid(),
      name: faker.company.companyName(),
      description: faker.company.catchPhrase(),
      email: faker.internet.email(),
      address: faker.address.streetAddress(),
      number: faker.phone.phoneNumber(),
      logo: faker.image.imageUrl(),
      password: faker.internet.password(),
    }));

    const batch = firestore().batch();
    const agencyRef = firestore().collection('agency');

    agencies.forEach(agency => {
      const newAgencyRef = agencyRef.doc();
      batch.set(newAgencyRef, agency);
    });

    await batch.commit();
    console.log('Agency data seeded successfully');
  } catch (error) {
    console.error('Error seeding agency data:', error);
  }
};

export default seedAgency;

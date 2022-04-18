import React from 'react';
import service1 from '../../images/services/home/course1.png';
import service2 from '../../images/services/home/course2.png';
import service3 from '../../images/services/home/course3.png';
import chekout1 from '../../images/services/checkout/checkout1.png';
import chekout2 from '../../images/services/checkout/checkout2.png';
import chekout3 from '../../images/services/checkout/checkout3.png';

const useServices = () => {
    const services = [
        {
            name: 'Arabic For Kids Course',
            id: 1,
            description: 'You will see a visible difference in the performance of your kids after taking a few classes.',
            img: [service1, chekout1],
            price: 300,
            benifits: ['Correct identification of alphabets', 'Makhariji pronunciation of Arabic letters', 'Training of praying five prayers']
        },
        {
            name: 'Arabic Reading Course',
            id: 2,
            description: "It's very important to point to be noted for a Muslim to seek knowledge of the Quran and Islam.",
            img: [service2, chekout2],
            price: 500,
            benifits: ['Makhariji pronunciation of Arabic letters', 'Basic knowledge about Islam and Prophets of Allah', 'Memorizing six Kalimas']
        },
        {
            name: 'Quran Tajweed Course',
            id: 3,
            description: 'The word Tajweed has come from an Arabic word "Jayyid" which means "to do something proficiently and effectively".',
            img: [service3, chekout3],
            price: 1000,
            benifits: ['Makhariji pronunciation of Arabic letters', 'Learning Masnoon Duas', 'Memorizing six Kalimas']
        }
    ]
    return services;
};

export default useServices;
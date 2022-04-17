import React from 'react';
import service1 from '../../images/services/home/course1.png'
import service2 from '../../images/services/home/course2.png'
import service3 from '../../images/services/home/course3.png'

const useServices = () => {
    const services = [
        {name: 'Arabic For Kids Course', id: 'q-akc-qt', description: 'You will see a visible difference in the performance of your kids after taking a few classes.', img: service1, price: 300, benifits:['Correct identification of alphabets', 'Makhariji pronunciation of Arabic letters', 'Training of praying five prayers'] },
        {name: 'Arabic Reading Course', id: 'q-arc-qt', description: "It’s very important to point to be noted for a Muslim to seek knowledge of the Quran and Islam.", img: service2, price: 500, benifits: ['Makhariji pronunciation of Arabic letters','Basic knowledge about Islam and Prophets of Allah', 'Memorizing six Kalimas'] },
        {name: 'Arabic Tajweed Course', id: 'q-arc-qt', description: 'The word Tajweed has come from an Arabic word ‘’Jayyid’’ which means ‘’to do something proficiently and effectively’’.', img: service3, price: 1000, benifits: ['Makhariji pronunciation of Arabic letters','Learning Masnoon Duas', 'Memorizing six Kalimas'] }
    ]
    return (
        <div>
            <h1>Total service: {services.length}</h1>
        </div>
    );
};

export default useServices;
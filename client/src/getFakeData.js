import { faker } from '@faker-js/faker';
export const generateFakeCardData= (n) => {
    const data = [];
    for (let index = 0; index < n; index++) {
        const item = {
           text: faker.lorem.sentence({ min: 4, max: 8 }) 
        }
        data.push(item);
        
    }
    return data;
}
export const generateFakeList= (n) => {
    const data = [];
    for (let index = 0; index < n; index++) {
        const item = {
           title: faker.music.songName()
        }
        data.push(item);
        
    }
    return data;
}
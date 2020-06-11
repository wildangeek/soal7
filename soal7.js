const biodata = {
    name: 'Laila Ali',
    age: 20,
    college: 'University of Indonesia',
    hobbies: {
        hoby1: 'hiking',
        hoby2: 'running',
        hoby3: 'sleeping',
        hoby4: 'shopping'
    },
    address: {
        street: 'Kemang Raya',
        province: 'Jakarta Selatan',
        country: 'Indonesia',
    },
    contact: {
        email: 'laila@gmail.com',
        phone: {
            countryCode: 021,
            number: 153138,
            
        },
    },
    skills: {
        language: 'english',
        programming: {
            language: 'javascript',
            framework1: 'react.js',
            language2: 'java',
            language3: 'C++',
        },
    },
};

console.log(`Hai, my name is ${biodata.name}, I studied in ${biodata.college}. My programming skills are ${biodata.skills.programming.language} including using its framework ${biodata.skills.programming.framework1}, ${biodata.skills.programming.language2} and ${biodata.skills.programming.language3}`)

console.log(`During school, I compete in many sports including ${biodata.hobbies.hoby1} and ${biodata.hobbies.hoby2}`)

console.log(`My Hobbies are ${biodata.hobbies.hoby3} and also ${biodata.hobbies.hoby4}`)

console.log(`Rigth now I live at ${biodata.address.street}, ${biodata.address.province}, ${biodata.address.country}`)

console.log(`you can reach me on my email ${biodata.contact.email}`)
console.log(`or my number ${biodata.contact.phone.countryCode}-${biodata.contact.phone.number}`)
console.log('Thank you and have a nice day')
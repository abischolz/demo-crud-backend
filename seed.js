const {Student, Campus } = require('./db/models')
const db = require('./db');

const seed = async () => {
    try {

            const jess = await Student.create({
                firstName: 'Jess',
                lastName: 'McDonald',
                email: 'jess.mac@yahoo.com',
                imageUrl: "https://st2.depositphotos.com/1594308/12210/i/450/depositphotos_122104490-stock-photo-smiing-female-college-student.jpg",
                gpa: 3.15,
            })
        
            const luz = await Student.create({
                firstName: 'Luz',
                lastName: 'Marx',
                email: 'luzzzzzzz@gmail.com',
                imageUrl: "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=800",
                gpa: 3.9,
               
            })
            
            const kevin = await Student.create({
                firstName: 'Kevin',
                lastName: 'Chen',
                email: 'chen.kevin@hotmail.com',
                imageUrl: "https://images.pexels.com/photos/1329494/pexels-photo-1329494.jpeg?auto=compress&cs=tinysrgb&w=800",
                gpa: 2.9, 
            })
            
            const malik = await Student.create({
                firstName: 'Malik',
                lastName: 'Rodriquez',
                email: 'mr.malik.rodriguez@aol.com',
                imageUrl: "https://images.pexels.com/photos/2325729/pexels-photo-2325729.jpeg?auto=compress&cs=tinysrgb&w=800",
                gpa: 3.01,
            })
        
            
            const silpa = await Student.create({
                firstName: 'Silpa',
                lastName: 'Moscovitz',
                email: 'smosco@host.com',
                imageUrl: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800",
                gpa: 3.91
            })
        
        
            await silpa.createCampus({
                name: 'Staten Island Campus',
                description: "Located in the picturesque borough of Staten Island, New York, this college campus offers a serene and idyllic setting for students to pursue their academic goals. Surrounded by natural beauty, the campus features well-maintained grounds, tranquil gardens, and panoramic views that create an atmosphere conducive to learning and reflection. With modern facilities, innovative classrooms, and a strong sense of community, the campus provides a nurturing environment where students can thrive both academically and personally.",
                imageUrl: "https://images.pexels.com/photos/207729/pexels-photo-207729.jpeg?auto=compress&cs=tinysrgb&w=800",
                address: "123 Evergreen Avenue Staten Island, NY 10304"
            }); 
        
            await malik.createCampus({
                name: 'Bronx Campus',
                description: "Nestled in the vibrant borough of the Bronx, New York, this college campus embodies a rich cultural heritage and a strong sense of community. The campus is adorned with impressive architecture and sprawling green spaces, providing students with an inspiring environment for learning and personal growth. State-of-the-art facilities, engaging classrooms, and a diverse range of extracurricular activities contribute to a holistic educational experience that prepares students for success in their academic and professional endeavors.",
                imageUrl: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800",
                address: "1745 EASTBURN AVE BRONX NY 10457-6950 USA"
            })
        
            await kevin.createCampus({
                name: 'Manhattan Campus',
                description: "Situated in the heart of Manhattan, New York, this college campus stands as an emblem of academic prowess and urban vitality. The campus seamlessly blends into the bustling cityscape, with its contemporary architecture and well-manicured outdoor spaces providing a harmonious balance between education and metropolitan life. Within its walls, cutting-edge facilities, advanced laboratories, and collaborative study areas foster a vibrant learning environment for students from all walks of life.",
                imageUrl: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
                address: "315 W 137TH ST NEW YORK NY 10030-2421 USA"
            })
        
            await luz.createCampus({
                name: 'Queens Campus',
                description: "Located in the vibrant borough of Queens, New York, this college campus thrives amidst a rich tapestry of cultures and communities. With its modern architecture and expansive grounds, the campus offers a welcoming environment for students to learn and connect. State-of-the-art facilities, well-designed classrooms, and ample green spaces contribute to a dynamic academic experience.",
                imageUrl: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
                address: "9110 34TH AVE JACKSON HEIGHTS NY 11372-3714 USA"
            })
        
            await jess.createCampus({
                name: 'Brooklyn Campus',
                address: '1386 E 2ND ST BROOKLYN NY 11230-5581 USA',
                imageUrl: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=800',
                description: "Nestled in the vibrant borough of Brooklyn, New York, this college campus exudes an atmosphere of creativity and diversity. Lush green spaces dotted with benches and trees provide a serene environment for students to study and unwind, while state-of-the-art buildings house modern classrooms, well-equipped laboratories, and dynamic communal areas for collaboration. The campus buzzes with the energy of passionate students engaged in a wide range of academic pursuits, with the backdrop of Brooklyn's cultural offerings just beyond its boundaries.",
            })


    
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = seed; 
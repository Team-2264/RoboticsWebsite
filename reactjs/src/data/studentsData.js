const studentData = [
    {
        name: "Andrea Bierman",
        title: "Head Captain",
        desc: "",
        imgSrc: "/studentImages/andreaBierman2024.jpeg",
        year: "2021"
    },
    {    
        name: "Jack Rivera",
        title: "Electrical Captain",
        desc: "",
        imgSrc: "/studentImages/jackRivera.jpeg",
        year: "2021"
    },
    {    
        name: "Dilshan Rajan",
        title: "Captain",
        desc: "",
        imgSrc: "/mentorImages/dilshanRajan.jpg",
        year: "2021"
    },
    {    
        name: "Aditi Edpuganti",
        title: "Marketing Captain",
        desc: "",
        imgSrc: "/studentImages/aditiEdpuganti2025.jpg",
        year: "2021"
    },
    {    
        name: "Cameron",
        title: "Programming Captain",
        desc: "",
        imgSrc: "/studentImages/wayzata.png",
        year: "2021"
    },
    {
        name: "Dilshan Rajan",
        title: "Head Captain",
        desc: "",
        imgSrc: "/mentorImages/dilshanRajan.jpg",
        year: "2022"
    },
    {   
        name: "Neev Mangal",
        title: "Programming Captain",
        desc: "",
        imgSrc: "/studentImages/neevMangal.jpg",
        year: "2022"  
    },
    {    
        name: "Vennela Dupati",
        title: "Electrical Captain",
        desc: "",
        imgSrc: "/studentImages/vennellaDupati.png",
        year: "2022"
    },
    {
        name: "Aditi Edpuganti",
        title: "Marketing Captain",
        desc: "",
        imgSrc: "/studentImages/aditiEdpuganti2025.jpg",
        year: "2022"   
    },
    {     
        name: "Tanvi Gorripati",
        title: "Captain",
        desc: "",
        imgSrc: "/studentImages/tanviGorripati.jpg",
        year: "2022"
    },
    {    
        name: "Tarun Gorripati",
        title: "Mechanical Captain",
        desc: "",
        imgSrc: "/studentImages/tarunGorripati2025.jpg",
        year: "2022"
    },
    {
        name: "Neev Mangal",
        title: "Co-Captain",
        desc: "",
        imgSrc: "/studentImages/neevMangal.jpg",
        year: "2023"
    },
    {  
        name: "Stephen Baran",
        title: "Co-Captain",
        desc: "",
        imgSrc: "/studentImages/stevenBaran.jpg",
        year: "2023"
    },
    {  
        name: "Vennela Dupati",
        title: "Co-Captain",
        desc: "",
        imgSrc: "/studentImages/vennellaDupati.png",
        year: "2023"
    },
    {  
        name: "Aditi Edpuganti",
        title: "Marketing Captain",
        desc: "",
        imgSrc: "/studentImages/aditiEdpuganti2025.jpg",
        year: "2023"
    },
    {  
        name: "Tanvi Gorripati",
        title: "Captain",
        desc: "",
        imgSrc: "/studentImages/tanviGorripati.jpg",
        year: "2023"
    },
    {  
        name: "Tarun Gorripati",
        title: "Mechanical Captain",
        desc: "",
        imgSrc: "/studentImages/tarunGorripati2025.jpg",
        year: "2023"
    },
    {    
        name: "Rukshan Rajan",
        title: "Head Co-Captain",
        desc: "Rukshan has been doing robotics since he was in elementary school and loves working with his hands. In his free time he loves to mountain bike and participate in boy scouts.",
        imgSrc: "/studentImages/rukshanRajan.jpg",
        year: "2024"
    },
    {
         name: "Beck Bjella",
         title: "Head Co-Captain",
         desc: "Beck has always had a strong passion for programming and is instrumental as of leading the programming team year after year. In his free time he loves to code and play pickleball.",
         imgSrc: "/studentImages/beck.jpg",
         year: "2024"
    },
    {
        name: "Yoojin Nam",
        title: "Outreach Captain",
        desc: "Yoojin is the driving force behind the social media presence of this team. She has implemented innovative methods to captivate the attention of our audience. She also led the development of our first ever outreach team!",
        imgSrc: "/studentImages/yoojinNam.jpg",
        year: "2024"
    },
    {
         name: "Evan Hsieh",
         title: "Webmaster",
         desc: "Evan is a brilliant designer with expertise in website design. He played a pivotal role in assisting Avi in creating the new Trojan Robotics website. In addition to his design skills, Evan enjoys playing Valorant and competing in violin competitions.",
         imgSrc: "/studentImages/evanHsieh.JPG",
         year: "2024"
    },
    {
         name: "Neev Zeroni",
         title: "Mechanical Co-Captain",
         desc: "Neev has been with the team for 4 years now and enjoys teaching people about mechanical engineering. Outside of school Neev is a big advocate against gun violence and loves to ski.",
         imgSrc: "/studentImages/neevZeroni.jpg",
         year: "2024"
    },
    {
        name: "Ankush Nayak",
        title: "Mechanical Co-Captain",
        desc: "Ankush is a stellar robotics member that everyone can go to when they need help on a project or just with personel advice. In his free time he likes to play basketball.",
        imgSrc: "/studentImages/ankushNayak.jpg",
        year: "2024"
    },
    {
         name: "Viswas Vallabaneni",
         title: "Marketing Co-Captain",
         desc: "Viswas has been with the team for two years now and loves creating new connections. In the future viswas plans to major in communications and sales.",
         imgSrc: "/studentImages/viswasValla.jpg",
         year: "2024"
    },
    {
        name: "Lakshmi Kandikonda",
        title: "Marketing Co-Captain",
        desc: "Lakshmi has been instrumental to our team's marketing success and in the future hopes to pursue a major in the stem field. In her free time she loves to hang out with her friends and bake.",
        imgSrc: "/studentImages/lakshmiKandikonda.jpg",
        year: "2024"
    },
    {
        name: "Eva Roberts",
        title: "Safety Captain",
        desc: "Eva always love creating something out of seemingly nothing, especially with a team. She aspires to be an aerospace engineer one day!",
        imgSrc: "/studentImages/evaRoberts.jpg",
        year: "2024"
    },
    {
        name: "Jake Deininger",
        title: "Programming Captain",
        desc: "Jake has been with the team for 2 years now and loves to code. In his free time he likes to play video games and hang out with his friends.",
        imgSrc: "/studentImages/jakeDeininger.jpg",
        year: "2024"
    },
    {
        name: "Rukshan Rajan",
        title: "Head Captain, Senior",
        desc: "Rukshan has been doing robotics since he was in elementary school. He is an avid mountain biker and an Eagle scout. He is planning to study biomedical engineering in collge and do research for cancer treatments. He likes to make rings and fix bikes in his free time.",
        imgSrc: "/studentImages/rukshanRajan2025.jpg",
        year: "2025"
    },
    {
        name: "Yoojin Nam",
        title: "Head Captain, Senior",
        desc: "Yoojin has been with the robotics team for four years. She is the driving force behind the social media presence of this team and has lead the developement of our first ever outreach team. She is planning to study biomedical engineering in college with a long term goal of winning a Nobel Peace prize for her discoveries!",
        imgSrc: "/studentImages/yoojinNam2025.jpg",
        year: "2025"
    },
    {
        name: "Ankush Nayak",
        title: "Mechanical Captain, Senior",
        desc: "Ankush has been with the team for three years. He is planning to study computer engineering in college and plans to own a company/run a company. He likes to play basketball and video games in his free time.",
        imgSrc: "/studentImages/ankushNayak2025.jpg",
        year: "2025"
    },
    {
        name: "Lakshmi Kandikonda",
        title: "Marketing Captain, Senior",
        desc: "Lakshmi has been instrumental to our team's marketing success and in the future hopes to pursue a major in the STEM field. She wants to work at NASA and eventually become an astronaut. In her free time, she loves to hang out with her friends and bake.",
        imgSrc: "/studentImages/lakshmiKandikonda2025.jpg",
        year: "2025"
    },
    {
        name: "Jennifer (Sieun) Sung",
        title: "Programming Captain, Senior",
        desc: "Jennifer loves to inspire and encourage people to join STEM. She wishes to pursue computer science in the future and own a balery store. She enjoys watching movies in her free time.",
        imgSrc: "/studentImages/jenniferSung2025.jpg",
        year: "2025"
    },
    {
        name: "Akshath Mahesh",
        title: "Safety Captain, Junior",
        desc: "Akshath is into building things and enjoys hands-on work. Akshath's dream is to build something that'll make everyone's life easier! He wishes to travel the world and likes to play board games in his free time.",
        imgSrc: "/studentImages/akshathMahesh2025.jpg",
        year: "2025"
    },
    {
        name: "Pughazhendhi (Pughazh) Saravanan",
        title: "Safety Captain, Junior",
        desc: "As an engineer at heart, Pughazh loves anything physics, chemistry, and working with his hands. He wants to become a mechanical engineer and help improve people's lives. He is also part of the school's jazz band and enjoys playing the saxophone.",
        imgSrc: "/studentImages/pughazhSaravanan2025.jpg",
        year: "2025"
    },
    {
        name: "Sreya Divakaruni",
        title: "Marketing Lead, Sophomore",
        desc: "Sreya had been part of FLL from grades 4-7, FTC in 8th grade, and now is a member of our robotics team. She wants to become a biomedical engineer and to end up helping people around the world. She enjoys spending time with family and friends, rollerblading, and playing tennis and pickelball.",
        imgSrc: "/studentImages/sreyaDivakaruni2025.jpg",
        year: "2025"
    },
    {
        name: "Axel Johnson",
        title: "Mechanical Lead, Junior",
        desc: "Some of Axel's intrests include math, science, and engineering, and he enjoys working on complex projects. Axel hopes to end up is a career like mechanical or electrical engineering.",
        imgSrc: "/studentImages/axelJohnson2025.jpg",
        year: "2025"
    },
    {
        name: "Eva Roberts",
        title: "Mechanical Lead, Junior",
        desc: "Eva always love creating something out of seemingly nothing, especially with a team. She aspires to be an aerospace engineer one day! She likes drawing, sculpture, and writing graphic novels in her free time.",
        imgSrc: "/studentImages/evaRoberts2025.jpg",
        year: "2025"
    },
     {
        name: "Axel Johnson",
        title: "Head Captain, Senior",
        desc: "Some of Axel's interests include math, physics, and engineering. He enjoys working on complex projects. Axel hopes to pursue a career in mechanical or electrical engineering and get involved in research.",
        imgSrc: "/studentImages/Axel.jpg",
        year: "2026"
    },
     {
        name: "Akshath Mahesh",
        title: "Mechanical Captain, Senior",
        desc: "Akshath is a third year member of our team! He leads the Mechanical Team this year. He loves to read, play volleyball, and go on runs with his dog. He wants to use his interest in robotics to create robots that can help humans in a variety of fields and make life easier overall.",
        imgSrc: "/studentImages/Akshath.jpeg",
        year: "2026"
    },
     {
        name: "Naman Brahmbhatt",
        title: "Saftey Captain, Senior",
        desc: "He enjoys practicing karate, finding it both challenging and fun. He also likes working on projects at home; currently, he is working on a 3D-printed helmet.",
        imgSrc: "/studentImages/Naman.jpeg",
        year: "2026"
    },
     {
        name: "Sreya Divakaruni",
        title: "Marketing Captain, Junior",
        desc: "Sreya had been part of FLL from grades 4-7, FTC in 8th grade, and now is a member of our FRC team. She enjoys spending time with family and friends, rollerblading, and playing tennis and pickleball.",
        imgSrc: "/studentImages/Sreya.jpeg",
        year: "2026"
    },
    {
        name: "Pranusha Udhayakumar",
        title: "Outreach Captain, Junior",
        desc: "Pranusha is interested in robotics because she enjoys collaborating with her teammates and fundraising for the team. She enjoys reading books, playing the flute, and running.",
        imgSrc: "/studentImages/Pranusha.jpg",
        year: "2026"
    },
     {
        name: "Shubham Panchal",
        title: "Programming, Junior",
        desc: "Shubham enjoys playing basketball and spending time with his family. He is interested in robotics due to the nature of combining both mechanical engineering and computer science to solve a task as efficiently as possible.",
        imgSrc: "/studentImages/shubhamPanchal.jpg",
        year: "2026"
    },
    

    
   
   
    {
        name: "Vishnu Chandrashekar",
        title: "Marketing/Outreach, Sophomore",
        desc: "Vishnu is a member of the Marketing and Outreach team at Trojan Robotics. He enjoys spending time with friends and watching sports, particularly basketball and Formula 1. His passion for cars and motorsports inspired him to join robotics, as he wanted to learn and explore the field of engineering.",
        imgSrc: "/studentImages/Vishnu.jpeg",
        year: "2026"
    },
    {
        name: "Jas Thephanonxay",
        title: "Mechanical, Sophomore",
        desc: "Jas enjoys hanging out with friends, playing sports, cooking new recipes, and building computers. He is interested in robotics, especially the mechanical side because he has enjoyed building computers and robots since he was young.",
        imgSrc: "/studentImages/Jas.jpeg",
        year: "2026"
    },
    {
        name: "Parth Rana",
        title: "Programming, Sophomore",
        desc: "Parth Rana loves playing basketball, mountain climbing, and listening to music in his free time. He's drawn to robotics because he gets to apply programming to build robots that can solve problems.",
        imgSrc: "/studentImages/Parth.jpg",
        year: "2026"
    },
    {
        name: "Nikhila Kodali",
        title: "Outreach/Marketing, Junior",
        desc: "Nikhila is passionate about spreading STEM to younger generations. She enjoys working with kids and hopes to pursue a career in biomedical engineering. In her free time, she likes to read and hang out with friends.",
        imgSrc: "/studentImages/NikhilaKodali.png",
        year: "2026"
    },
    {
        name: "Joseph David",
        title: "Marketing/Outreach, Sophomore",
        desc: "Joseph likes to draw with pencils, listen to music and hangout with his friends in his free time. He is interested in robotics because of his love for creativity.",
        imgSrc: "/studentImages/Joseph.png",
        year: "2026"
    },
     {
        name: "Conor Bonesteel",
        title: "Mechanical, Sophomore",
        desc: "Conor Bonesteel spends his free time with his family, swimming, and traveling. He’s drawn to robotics simply because he finds it really rewarding to watch a complex build work perfectly in the end.",
        imgSrc: "/studentImages/Conor.jpeg",
        year: "2026"
    },
     {
        name: "Kieran Finnegan",
        title: "Programming, Sophomore",
        desc: "Outside of robotics, Kieran enjoys playing basketball and running. He is interested in robotics because he likes engineering.",
        imgSrc: "/studentImages/Kieran.jpeg",
        year: "2026"
    },
    
    
     {
        name: "Tahmid Reza",
        title: "Mechanical, Junior",
        desc: "Tahmid has many different hobbies like playing piano and video games. He’s interested in robotics because he’s always liked building things.",
        imgSrc: "/studentImages/Tahmid.jpeg",
        year: "2026"
    },
    
     {
        name: "Arnav Gupta ",
        title: "Mechanical, Freshman",
        desc: "Arnav Gupta is a curious and dedicated individual whose hobbies center around DIY projects and tinkering with various items. His strong interest in robotics stems from the fascination with combining these hands-on skills to design, build, and optimize complex mechanical and computational systems.",
        imgSrc: "/studentImages/Arnav.jpg",
        year: "2026"
    },
     {
        name: "Aarav Gupta",
        title: "Mechanical, Freshman",
        desc: "He is passionate about cars, planes, and engineering, always fascinated by how things work and how they can be improved. His interest in robotics comes from a desire to combine creativity and technology to design machines that make life easier and more efficient.",
        imgSrc: "/studentImages/Aarav.jpeg",
        year: "2026"
    },
     {
        name: "David He",
        title: "Mechanical, Sophomore",
        desc: "David has many passions he likes to play hockey and listen to music. And he is very interested in STEM related things like engineering or robotics.",
        imgSrc: "/studentImages/David.jpeg",
        year: "2026"
    },
     {
        name: "Vedamaalya Viswanathan ",
        title: "Marketing/Outreach, Sophomore",
        desc: "Vedamaalya Viswanathan is a member of the Marketing/Outreach team on Trojan Robotics. Some hobbies that Veda participates in are Dancing, Playing the Piano, Volunteering, and many more. She joined Robotics because of her admiration and strive to learn more in the field of STEM and the construction of machines.",
        imgSrc: "/studentImages/Veda.jpg",
        year: "2026"
    },
     {
        name: "Reyansh Chandra",
        title: "Programming, Sophomore",
        desc: "Reyansh is on the programming team this year and he has always been interested in robotics as he loves build and collaborate as a team. Some other things he likes to do is to play soccer, snowboard, and spend time with his friends.",
        imgSrc: "/studentImages/Reyansh.jpeg",
        year: "2026"
    },
    {
        name: "Audrey Kinnear",
        title: "Mechanical, Junior",
        desc: "",
        imgSrc: "/studentImages/Audrey.png",
        year: "2026"
    },


]

export default studentData;
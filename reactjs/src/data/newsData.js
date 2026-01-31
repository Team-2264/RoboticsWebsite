const newsData = [
    {
        title: "Supporting Team Atlantic",
        desc: "",
        article: "Today, Trojan Robotics had the pleasure of assisting Team Atlantic with their robotics and project presentation! They presented their project idea to us, and we provided feedback to help them improve their presentation. We were impressed with their work and enjoyed the opportunity to collaborate with them. We wish Team Atlantic the best of luck in their competition on January 12th!",
        date: "December 18, 2024",
        srcOfImage: "/assets/images/blogpost/Team_Atlantic_2024.jpg",
        author: "",
        year:"2024",

    },
    {
        title: "Outreach and Preseason Update",
        desc: "",
        article: "Trojan Robotics has been busy with outreach and preseason preparations! Our t-shirt cannon robot has been a hit at the Wayzata football games, launching t-shirts into the crowd of cheering fans. We also had a booth at the Block Party where we shared information about upcoming events and hosted a fun ring toss game. To bond as a team, we enjoyed a movie night watching \"The Wild Robot.\" In preseason news, our marketing team is focusing on innovative approaches to engage a more diverse team. The mechanical team is training with CAD and is immersed in preparations for the build season. The programming team has continued improving the t-shirt cannon robot's codebase and working on our training robot, and new drivers have tested their skills, creating a list of potential drivers for upcoming competitions.",
        date: "October 23, 2024",
        srcOfImage: "/assets/images/blogpost/Outreach_Preseasonupdate_2024.png",
        author: "",
        year:"2024",

    },
    {
        title: "Summer Outreach & Preseason Kickoff",
        desc: "",
        article: "This summer, Trojan Robotics has been busy with outreach and preparing for the new season! We had the opportunity to engage with our school community at the Back to Business event at Wayzata High School. We also connected with the broader community at the State Fair, where we shared our passion for FRC and gave kids the chance to learn about robotics. As we head into the preseason, our marketing team has already kicked things off with fun activities, team building, and outreach to help spread the word about robotics. The mechanical team is gearing up the t-shirt shooting robot to support Wayzata football, and we've started training the next generation on SolidWorks to prepare for a winning robot design!",
        date: "September 18, 2024",
        srcOfImage: "/assets/images/blogpost/Summer_Outreach_Preseason_Kickoff_2024.jpg",
        author: "",
        year:"2024",

    },
    {
        title: "Asian Fair at Hilde Performance Center",
        desc: "",
        article: "This past weekend, Trojan Robotics had the amazing opportunity to participate in the Asian Fair at the Hilde Performance Center! We were thrilled to engage with the Plymouth community and showcase the exciting world of FRC. It was a fantastic experience to share our passion for robotics, and we enjoyed demonstrating how our robots work to people of all ages. Events like these help strengthen our connection with the community and allow us to spread the word about the fun and innovation involved with FIRST Robotics.",
        date: "June 1, 2024",
        srcOfImage: "/assets/images/blogpost/Asian_Fair_2024.jpg",
        author: "",
        year:"2024",

    },
    {
        title: "Trojan Robotics at Plymouth City Council",
        desc: "",
        article: "On April 23rd at 6:30 PM, Trojan Robotics had the honor of presenting to the Plymouth City Council. It was a great opportunity to introduce our team, showcase our robot, and share the impact of our work within the community. We were excited to discuss the importance of STEM education and how FIRST Robotics is inspiring the next generation of innovators. We appreciate the support of the Plymouth City Council and look forward to continuing to represent our city!",
        date: "April 23, 2024",
        srcOfImage: "/assets/images/blogpost/Plymouth_City_Council_2024.jpeg",
        author: "",
        year:"2024",

    },
    {
        title: "End-of-Season Update",
        desc: "",
        article: "As our season draws to a close, we're reflecting on all that we've accomplished. This year, we focused on efficiency, utilizing tools to save time and money during prototyping and the build season. Our team members learned to use SolidWorks to create accurate game pieces and a simulated testing environment. We also prioritized training new members on tooling, teamwork, and design principles. Thanks to active fundraising and collaboration with Minnesota companies, we raised $13,250! In addition, our team has partnered with the community to raise an additional $700. While we're proud of our efforts, we're still working towards meeting our budget needs. We're committed to continued collaboration to ensure a successful financial start next year!",
        date: "April 22, 2024",
        srcOfImage: "/assets/images/blogpost/End_of_Season_2024.jpg",
        author: "",
        year:"2024",

    },
    {
        title: "Discover Plymouth",
        desc: "",
        article: "This past week, Trojan Robotics had the opportunity to meet with professionals at Discover Plymouth! We also had the honor of meeting with city council members to discuss the impact of robotics on our lives and the broader Plymouth community. It was a fantastic experience to share our passion for STEM and highlight how robotics is making a positive difference in our city. We appreciate the support of Discover Plymouth and the city council, and we look forward to continuing to engage with our community.",
        date: "March 23, 2024",
        srcOfImage: "/assets/images/blogpost/STEM_Plymouth_2024.jpg",
        author: "",
        year:"2024",

    },
    {
        title: "3M Facility Tour",
        desc: "",
        article: "Trojan Robotics is incredibly grateful to 3M for inviting us to their facility for a tour and presentation on March 22nd! It was an amazing experience to see their operations firsthand and learn about the innovative work they do. The tour provided invaluable insight into real-world engineering and manufacturing, and the presentation was both informative and inspiring. We'd like to thank 3M for this incredible opportunity and for supporting STEM education!",
        date: "March 22, 2024",
        srcOfImage: "/assets/images/blogpost/3M_Facility_Tour_2024.jpg",
        author: "",
        year:"2024",

    },
    {
        title: "Sunset Hill Elementary STEM Night",
        desc: "",
        article: "Trojan Robotics was excited to participate in Wayzata's Sunset Hill Elementary School's first-ever STEM night on March 21st! From 5-7pm, we had the opportunity to engage with students and families, sharing our passion for robotics and STEM. It was a great experience showcasing our robot and answering questions, sparking curiosity and inspiring the next generation of engineers and innovators. We're always happy to connect with the community and support STEM education!",
        date: "March 21, 2024",
        srcOfImage: "/assets/images/blogpost/Sunset_Hill_Elementary_STEM_Night_2024.jpg",
        author: "",
        year:"2024",

    },
    {
        title: "Duluth Regional Competition 2024",
        desc: "Read about our yearly Duluth regional!",
        article: "And that’s a wrap on the 2024 FRC Northern Lights Regional! We had a blast meeting and competing with other teams! It was an electric experience and we are all very proud of what we were able to display. Not only did we put forth a competitive performance, but we also had fun. As a result, our team's bond became stronger because of all the great memories we created. Thank you so much to our mentors, FRC volunteers and staff, and other teams for making this happen! Now we are charged up for the upcoming State Tournament!!",
        date: "March 4, 2024",
        srcOfImage: "/assets/images/blogpost/duluth2024.jpg",
        author: "Lakshmi Kandikonda",
        year:"2023"
    },
    {
        title: "Northern Lights Regional Competition 2024",
        desc: "",
        article: "We just wrapped up the 2024 FRC Northern Lights Regional in Duluth! It was an amazing experience competing with 56 other teams from across the Midwest. We were thrilled to secure a spot in the playoffs as an alliance partner! It was great to see all of our hard work and dedication pay off, and we're incredibly proud of our team's performance. We also had a blast connecting with other teams and seeing all the incredible robots. Thanks to everyone who made this event so memorable!",
        date: "March 2, 2024",
        srcOfImage: "/assets/images/blogpost/Northern_Lights_Regional_Competition_2024.jpg",
        author: "",
        year:"2024",

    },
    
    {
        title: "February Build Season Update",
        desc: "",
        article: "February has been a month of intense learning and growth for Trojan Robotics! As is common during build season, we've experienced our fair share of trial and error. While we've had many successes, we've also encountered a few engineering challenges that we've learned a lot from. We had to redesign and refabricate after miscalculating cutting dimensions, underestimating bumper interference, and assuming the wrong drive gear belt specifications. On the programming side, the team has been hard at work, writing new code to enable autonomous positioning using April tags and implementing a turbo-driving mode. Meanwhile, our marketing team is full steam ahead, creating some awesome team swag, including t-shirts! We're making great progress and are excited to see all of our hard work come together.",
        date: "February 10, 2024",
        srcOfImage: "/assets/images/blogpost/February_Build_Season_Update_2024.jpg",
        author: "",
        year:"2024",

    },
    {
        title: "Oakwood Elementary Science Fair",
        desc: "",
        article: "On February 1st, Trojan Robotics had a blast participating in the science fair at Oakwood Elementary School! We set up a booth where we introduced kids to the world of FIRST robotics, showcasing FLL, FTC, and FRC. We also had a fun DIY frisbee toss game that the kids really enjoyed! It was a great opportunity to engage with the younger generation and spark their interest in STEM. We especially enjoyed connecting with the elementary school's Lego League team and sharing our experiences with them.",
        date: "February 1, 2024",
        srcOfImage: "/assets/images/blogpost/Oakwood_Elementary_Science_Fair_2024.jpg",
        author: "",
        year:"2024",

    },
    {
        title: "Build Season Launch",
        desc: "",
        article: "On January 6th, 2024, Trojan Robotics officially kicked off the build season! We were all excited to begin working on this year's challenge. Since then, we've had continuous meetings collaborating closely with our amazing mentors. Their guidance and expertise are invaluable as we navigate the design, build, and programming phases of the competition. We're incredibly grateful for their support and dedication as we work towards another successful season!",
        date: "January 6, 2024",
        srcOfImage: "/assets/images/blogpost/Build_Season_Launch_2024.jpg",
        author: "",
        year:"2024",

    },
    {
        title: "Medtronic Jumpstart Event",
        desc: "",
        article: "This past week, Trojan Robotics had the privilege of presenting at the Medtronic Jumpstart event. We covered two important topics: \"diversity and inclusion\" and \"fabrication and organization.\" It was an honor to share our team's experiences and insights with the attendees. We believe that a diverse and inclusive environment is crucial for success, and we were excited to discuss the importance of these values within the context of robotics. Additionally, we presented our strategies for efficient fabrication and organization, which are essential for a well-functioning team. Thank you to Medtronic for having us!",
        date: "October 28, 2023",
        srcOfImage: "/assets/images/blogpost/Medtronic_Jumpstart_2023.jpg",
        author: "",
        year:"2023",
    },
    {
        title: "Trojan Robotics at the World Championship",
        desc: "Read about our competition in Houston!",
        article: "Following our success at the Iowa Regionals, our team packed our bags and headed to Houston, Texas, for the highly anticipated FRC Worlds Championship! This marked the pinnacle of our robotics season, giving us a unique opportunity to engage with diverse teams from around the globe and make meaningful connections, expanding our network of friends within the robotics community.",
        date: "April 30, 2023",
        srcOfImage: "/assets/images/blogpost/teamHoustonPic.jpg",
        author: "Lakshmi Kandikonda",
        year:"2023"
    },
    {
        title: "Iowa State Competition 2023",
        desc: "We qualified for the world championship in Houston!",
        article: "In 2023, our team attended the FRC Iowa Regionals for the first time. With this being our second regional of the year, we had gotten our bearings and were ready. Remarkably, we secured first place and the role of alliance captain, a triumph that took us to the World Championships in Houston. ",
        date: "March 23, 2023",
        srcOfImage: "/assets/images/blogpost/trojanRoboticsIowa2023.jpg",
        author: "Lakshmi Kandikonda",
        year:"2023",
    },
    {


        
    }
]
export default newsData;
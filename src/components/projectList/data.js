import me from '../../img/papame.png'
import me2 from '../../img/me&moon.jpg'
import me3 from '../../img/AOTAyn.jpg'
import GearUp from '../../img/projects/GearUp/1GearUp.jpg'
import BMS from '../../img/projects/BMS/BMS1.jpg'
import TAMA from '../../img/projects/tama/1TAMA.png'
import LOONZ from '../../img/projects/Loons/Loonz1.jpg'
import READYSASTER from '../../img/projects/Readysaster/Readysaster1.jpg'
export const projects = [
    {
        id: 1,
        type: "portait",
        role: "Backend/Frontend",
        link: "https://github.com/MrSevilla1022/ecommerce-ite5.git ",
        tech: "Angular, MySql",
        title: "GearUp",
        desc: "GEARUP IS AN E-COMMERCE WEB APPLICATION MADE FOR RIDERS. THIS WEB APPLICATION IS USED TO SELL MOTORCYCLE AND BICYCLE PARTS AND GEARS ONLINE.",
        img: { img: GearUp }
    },
    {
        id: 2,
        type: "landscape",
        role: "Backend/Sub-system Lead Developer",
        link: "Private",
        tech: "Angular, MySql",
        title: "Barangay Management System",
        desc: "The Electronic Barangay Management System is an automated process of managing a barangay that is faster and more secure compared to the usual process. It increases efficiency in profiling, issuing barangay clearances, generating reports and other barangay-centric features.",
        img: { img: BMS }
    },
    {
        id: 3,
        type: "landscape",
        role: "Backend/Frontend",
        link: "https://github.com/AynUson/ITelective4-project.git",
        tech: "Angular, Ionic, MySql",
        title: "TAMA: Task Management App",
        desc: "Listing and Scheduling system to help the user manage their time. Once the list is created, the app will help to organize and prioritize the items. Gamified function for the additional entertainment and motivation boost. The app would be able to help to support the mental health status of the user by giving reminder to the user to take a break.",
        img: { img: TAMA }
    }
    ,
    {
        id: 4,
        type: "landscape",
        role: "Lead Developer",
        link: "N/A",
        tech: "Python/Pygame",
        title: "LOONZ",
        desc: "This game is inspired by the classic letter guessing game called Hangman. You are shown a set of blank letters that match a word based on a category and you have to guess what these letters are to reveal the hidden word. One hint is given for every word. If you pick a letter that is in the word, that letter is revealed from the blank letters. With each wrong letter guess, the balloons pop one by one and player’s life will get deduction for each lost balloon. Losing all the balloons makes the player slowly fall into the lava.",
        img: { img: LOONZ }
    }
    ,
    {
        id: 5,
        type: "landscape",
        role: "Lead Developer",
        link: "https://github.com/AynUson/GameDevelopment-ITE6.git",
        tech: "Unity/C#",
        title: "ReadySaster",
        desc: "Ready-Saster is a 2D educational game. It focuses on disasters and educates its player regarding survival and what to do when there is a calamity. The player will be playing as Saster.A young boy trying to survive calamities to see his family.The player must lead Saster on his journey of seeing them again by answering questions related to the specific natural calamities every each level.",
        img: { img: READYSASTER }
    }
]
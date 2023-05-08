import { Center } from '@chakra-ui/react';
import GitHubCalendar from 'react-github-calendar';


import styles from "./GithubStats.module.css"
function GithubStats() {

    return (
        <div style={{marginTop:"40px"}}>
           <h1 style={{textAlign:"center",fontFamily: "Poppins Bold"}}> <span style={{color:"#e74d06",fontFamily: "Poppins Bold"}}>S</span>tatistics</h1>
           <div className={styles.static}>
            <div>
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=mohdashiq18&theme=dark"
              alt="Github Contributions"
              id="github-streak-stats"
            />
            </div>
            <div >
            <img
              src="https://github-readme-stats.vercel.app/api?username=mohdashiq18&theme=dark&show_icons=true&count_private=true"
              alt="Github Contributions"
            />
            </div>
           </div>

           <Center className={styles.calen}>
           <GitHubCalendar username="mohdashiq18" />
           </Center>
           </div>
    );
}

export default GithubStats;
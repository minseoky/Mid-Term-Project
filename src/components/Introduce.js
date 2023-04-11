import img1 from "../imgs/img1.jpeg"
import img2 from "../imgs/img2.jpeg"
import styles from "../css/Introduce.module.css"

function Introduce(){
    return(
        <div className={styles.container}>
            <h3>자기소개 페이지</h3>
            <p>저는 끊임없이 도전하고 성장하는 백엔드 개발자 <strong>최민석</strong>입니다. </p>
            <p>새로운 언어와 기술을 배우는 것을 즐기며, 항상 최신 개발 동향과 트렌드를 익히려 노력합니다.</p>
            <p>높은 호기심과 열정을 가지고 다양한 프로젝트에 도전하며 지속적인 개발자로 성장하고 있습니다.</p>

            <div className={styles.imgContainer}>
                <img alt="myImg1" src={img1} className={styles.img}/>
                <img alt="myImg1" src={img2} className={styles.img}/>
            </div>

            <p>관심 있는 기술 스택:</p>
            <ul className={styles.lists}>
                <li>
                    <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
                        <img alt="Node.js" src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white" className={styles.techImg} />
                    </a>
                </li>
                <li>
                    <a href="https://spring.io/" target="_blank" rel="noopener noreferrer">
                        <img alt="Spring" src="https://img.shields.io/badge/Spring-6DB33F?style=flat-square&logo=Spring&logoColor=white" className={styles.techImg} />
                    </a>
                </li>
                <li>
                    <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
                        <img alt="Express.js" src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white" className={styles.techImg} />
                    </a>
                </li>
                <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                        <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" className={styles.techImg} />
                    </a>
                </li>
                <li>
                    <a href="https://www.oracle.com/kr/java/" target="_blank" rel="noopener noreferrer">
                        <img alt="Java" src="https://img.shields.io/badge/java-007396?style=flat-square&logo=java&logoColor=white" className={styles.techImg} />
                    </a>
                </li>
                <li>
                    <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
                        <img alt="MySQL" src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white" className={styles.techImg} />
                    </a>
                </li>
                <li>
                    <a href="https://graphql.org/" target="_blank" rel="noopener noreferrer">
                        <img alt="GraphQL" src="https://img.shields.io/badge/GraphQL-E10098?style=flat-square&logo=GraphQL&logoColor=white" className={styles.techImg} />
                    </a>
                </li>
                <li>
                    <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer">
                        <img alt="AWS" src="https://img.shields.io/badge/Amazon%20AWS-232F3E?style=flat-square&logo=amazonaws&logoColor=white" className={styles.techImg} />
                    </a>
                </li>
            </ul>

            <p>아래는 AWS에 대해 소개하는 간단한 영상입니다.</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/gv4m1fjuthU"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
            </iframe>

        </div>
    )
}

export default Introduce;

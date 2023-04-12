import img1 from "../imgs/img1.jpeg"
import img2 from "../imgs/img2.jpeg"
import styles from "../css/Introduce.module.css"
function Introduce(){
    return(
        <div>
            <h3>자기소개 페이지</h3>
            <p>저는 끊임없이 도전하고 성장하는 학생 개발자 최민석입니다. </p>
            <p>새로운 언어와 기술을 배우는 것을 즐기며, 항상 최신 개발 동향과 트렌드를 익히려 노력합니다.</p>
            <p>높은 호기심과 열정을 가지고 다양한 프로젝트에 도전하며 지속적인 개발자로 성장하고 있습니다.</p>
            <div className={styles.imgContainer}>
                <img alt="myImg1" src={img1} className={styles.img}/>
                <img alt="myImg1" src={img2} className={styles.img}/>
            </div>


        </div>
    )
}

export default Introduce;
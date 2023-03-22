import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const mockBreadcrumb = ['Roadmap List', 'Yopeso Portal App'];

const mockPath = {
    'Roadmap List': '/roadmaps'
};

const StandardBreadcrumb = props => {
    const navigateTo = useNavigate();

    const goTo = destination => navigateTo(mockPath[destination]);

    return (
        <nav aria-label="Standard Breadcrumb">
            <ol className={styles.bc_container}>
                {
                    mockBreadcrumb.map( (b, idx) => 
                        <li 
                            key={`bc_${idx}`} 
                            className={`${styles.bc_item} ${ mockBreadcrumb.length === idx + 1 && styles.active || '' }`}
                        >
                            <a href="#" onClick={() => goTo(b)}>{b}</a>
                        </li>
                    )
                }
            </ol>
        </nav>
    )
}

export default StandardBreadcrumb;
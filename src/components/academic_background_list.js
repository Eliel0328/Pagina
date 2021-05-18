import '../css/academic_background_list.scss'

const academic_background_list = ({title, active, setSelected, id}) => {
    return (  
        <li className={active ? "academic_background_list active" : "academic_background_list"}
            onClick={() => setSelected(id)}>
            {title}
        </li>
    );
}
 
export default academic_background_list;
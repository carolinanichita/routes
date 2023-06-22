import {useParams} from "react-router-dom";

const Book = () => {
    const params = useParams();
    return (
        <div>
            {`This is book number ${params.id}`}
        </div>
    )
}
export default Book

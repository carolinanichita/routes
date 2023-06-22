import BookDetails from "./BookDetails.ts";
import {Link} from "react-router-dom";

const books: BookDetails[] = [{
    id: 1,
    title: "Harry Potter"
}, {
    id: 2,
    title: "Lord of the Rings"
}]
const Booklist = () => {
    return (
        <ul>
            {
                books.map(book => (
                    <li>
                        <Link to={`${book.id}`}>{book.title}</Link>
                    </li>))
            }
        </ul>
    )
}
export default Booklist

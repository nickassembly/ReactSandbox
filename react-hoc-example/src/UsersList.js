
import HOC from './HOC';

const UsersList = ({ data }) => {
    // getting this info from HOC component
    // const [users, setUsers] = useState([]);
    // const [term, setTerm] = useState("");


    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         const res = await fetch("https://jsonplaceholder.typicode.com/users");
    //         const json = await res.json();
    //         setUsers(json);
    //         console.log(json);
    //     };
    //     fetchUsers();
    // }, []);

    let renderUsers = data.map((user) => {
        return (
            <div key={user.id}>
                <p>
                    <strong>{user.name}</strong>
                </p>
            </div>
        )
    });

    // HOC replaces
    // let filteredUsers = users.filter(({ name }) => {
    //     return name.toLowerCase().indexOf(term) >= 0;
    // }).map((user) => {
    //     return (
    //         <div key={user.id}>
    //             <p>
    //                 <strong>{user.name}</strong>
    //             </p>
    //         </div>
    //     )
    // });

    return (
        <div>
            <div>{renderUsers}</div>
        </div>
    );
};

// when passing into HOC this will return a new component
const SearchUsers = HOC(UsersList, "users");

export default SearchUsers;
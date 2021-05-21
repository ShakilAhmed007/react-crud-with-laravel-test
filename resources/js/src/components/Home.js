import { post } from 'jquery';
import react, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import api from '../Api';

const Home = () => {
    const [names , setNames] = useState(null);

    const fetchData = () => {
        api.getAllNames().then(res => {
            const result = res.data;
            setNames(result.data);
        })
    }
    useEffect(() => {
        fetchData();
    }, [])
 

    const renderName = () => {

        if(!names){
            return (
                <tr>
                    <td>
                        loading data...
                    </td>
                </tr>
            )
        }
        if(names.length === 0){
            return (
                <tr>
                    <td>
                        no data found.
                    </td>
                </tr>
            ) 
        }

        if(names){
            return names.map((name) => (
                <tr key={name.id}>
                    <td>
                        {name.name}
                    </td>
                    <td>
                        <Link to={`/${name.id}/edit`} className="btn btn-primary mx-1">Edit</Link>
                        <Link className="btn btn-danger mx-1" onClick={ () =>
                            api.deleteName(name.id).then(fetchData())
                        }>Delete</Link>
                    </td>
                </tr>
            ));
        }
    }

    return ( 
        <div>
            <div className="col-md-6 offset-3">
            <div className="card">
                <div className="card-header"><h2>React Crud</h2> <Link to='/add' className="btn btn-dark">Add</Link></div>
                <div className="card-body">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Name Collaction</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderName()}
                    </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default Home;
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import api from "../Api";

const Edit = () => {
    const {id} = useParams();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");

    const onUpdateSubmit = async () => {
        setLoading(true);
        try {
            await api.updateName({ name }, id);
            history.push("/");
        } catch {
            alert("failed to add name");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        let mount = true;
        api.getOneName(id).then(res => {
            const result = res.data;
            setName(result.data.name);
        })
        return () => {
            mount = false;
        }
    }, [])


    return (
        <div className="Edit__container">
            <div className="col-md-6 offset-3">
                <div className="card">
                    <div className="card-header">
                        <h2>Edit Item</h2>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Edit</label>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <button disabled={loading} onClick={() => onUpdateSubmit()} type="button" className="btn btn-primary">
                                {loading ? 'loading...' : 'Update'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;

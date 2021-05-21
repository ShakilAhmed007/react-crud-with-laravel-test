import { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../Api";

const Add = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");

    const onAddSubmit = async () => {
        setLoading(true);
        try {
            await api.addName({ name });
            history.push("/");
        } catch {
            alert("failed to add name");
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="Add__container">
            <div className="col-md-6 offset-3">
                <div className="card">
                    <div className="card-header">
                        <h2>Add Item</h2>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Add</label>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <button disabled={loading} onClick={() => onAddSubmit()} type="button" className="btn btn-primary">
                                {loading ? 'loading...' : 'Add'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Add;

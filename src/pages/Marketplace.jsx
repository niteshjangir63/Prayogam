import React, { useEffect, useState } from "react";
import { getMillets } from "../api/milletApi";
import Loader from "../components/Loader";
import MilletCard from "../components/MilletCard";

function Marketplace() {

    const [millets, setMillets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    // FETCH MILLETS
    const fetchMillets = async () => {

        setLoading(true);

        try {

            const res = await getMillets();

            // backend response: { success, count, data }
            const data = res.data.data || [];

            setMillets(data);

        } catch (err) {

            console.log(err);
            alert("Failed to load millets");

        }

        setLoading(false);

    };

    useEffect(() => {
        fetchMillets();
    }, []);


    // SEARCH FILTER
    const filteredMillets = millets.filter((m) =>
        m.nameEnglish?.toLowerCase().includes(search.toLowerCase())
    );


    if (loading) return <Loader />;


    return (

        <div className="container py-4">

            {/* HEADER */}

            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>

                    <h2 className="fw-bold text-success">
                        🌾 Marketplace
                    </h2>

                    <p className="text-muted mb-0">
                        Browse fresh millets directly from farmers
                    </p>

                </div>

                <button
                    className="btn btn-outline-success"
                    onClick={fetchMillets}
                >
                    Refresh
                </button>

            </div>


            {/* SEARCH */}

            <input
                className="form-control mb-4"
                placeholder="Search millets..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />


            {/* MILLET LIST */}

            {filteredMillets.length === 0 ? (

                <div className="alert alert-warning">
                    No millets found
                </div>

            ) : (

                <div className="row g-4">

                    {filteredMillets.map((m) => (

                        <div key={m._id} className="col-sm-6 col-md-4 col-lg-3">

                            <MilletCard millet={m} />

                        </div>

                    ))}

                </div>

            )}

        </div>

    );

}

export default Marketplace;
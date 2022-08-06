import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api";

export const Photo = () => {
    let user = useParams().slug;

    const [photo, setPhoto] = useState<string[]>([]);

    const [loading, setLoading] = useState(false);

    const loadPosts = async () => {
        setLoading(true);
        let jsonPhoto = await api.getPhoto(user);
        setLoading(false);
        setPhoto(jsonPhoto.title);
    };

    useEffect(() => {
        loadPosts();
    }, []);

    const navigate = useNavigate();

    const handleBackButton = () => { 
        navigate(-1);
    };

    return (
        <div>
            {loading &&
                <div>Carregando...</div>
            }

            {!loading && photo.length > 0 &&
                <>
                    <div className="a">
                        <button onClick={handleBackButton}>Voltar</button>
                        <div className="my-3">
                            {photo}
                        </div>
                    </div>
                </>
            }

            {!loading && photo.length === 0 &&
                <div>Não há fotos para exibir.</div>
            }
        </div>
    );
}
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Photos } from "../types/Photos"
import { api } from "../api";
import { AlbumItem } from "../components/AlbumItem";

export const Albums = () => {
    let user = useParams().slug;

    const [loading, setLoading] = useState(false);

    const [photos, setPhotos] = useState<Photos[]>([]);

    const loadPosts = async () => {
        setLoading(true);
        let jsonPhotos = await api.getAllPhotos(user);
        setLoading(false);

        setPhotos(jsonPhotos);   
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

            {!loading && photos.length > 0 &&
                <>
                    <div className="a">
                        <button onClick={handleBackButton}>Voltar</button>
                
                        <AlbumItem photos={photos} />
                    
                    </div>
                </>
            }

            {!loading && photos.length === 0 &&
                <div>Não há fotos para exibir.</div>
            }
        </div>
    );
}
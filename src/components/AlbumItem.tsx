import { Photos } from '../types/Photos';
import { Link, useParams } from "react-router-dom";

type Props = {
	photos: Photos[];
}

export const AlbumItem = ({ photos }: Props) => {
	let user = useParams().slug;

	return (
		<div >
			<h4 className="font-bold">Album #{user}</h4>

			<div className='grid lg:grid-cols-5 md:grid-cols-3 gap-4 sm:grid-cols-2'>
				{photos.map((item, index) => (
					<Link className='border-2 border-black text-bla p-2' key={index} to={`/jsonplaceholder-axios-gallery/photos/${item.id}`}>
						{item.title}
					</Link>
				))}
			</div>
		</div>
	);
}
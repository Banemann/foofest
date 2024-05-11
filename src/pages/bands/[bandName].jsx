import { useRouter } from 'next/router';
import Image from 'next/image';
import Bands from '../../static/bands.json';

function BandPage() {
  const router = useRouter();
  const { bandName } = router.query;

  
  const band = Bands.find(b => b.name === bandName);

  if (!band) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <h1>{band.name}</h1>
      <Image src={`/logos/${band.logo}`} alt={band.name} width={200} height={200} />
      <p>{band.bio}</p>
      <p>Genre: {band.genre}</p>
      <p>Members: {band.members.join(', ')}</p>
    </div>
  );
}

export default BandPage;

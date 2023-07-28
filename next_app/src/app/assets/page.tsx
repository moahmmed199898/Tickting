import { snipe } from '@/Services/Snipe';

export default async function AssetsPage() {
    const assets = await snipe.hardware.get({limit: 50})
    return (
        <div className='font-bold'>
            {assets.map(a=>a.name)}
        </div>
    )
}
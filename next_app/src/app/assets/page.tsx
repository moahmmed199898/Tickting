import { snipe } from '@/Services/Snipe';
import { Snipe } from 'snipe-it.js';

export default async function AssetsPage() {
    const assets = await snipe.hardware.get({limit: 50})
    return (
        <div className='font-bold'>
            {assets.map(a=>a.name)}
        </div>
    )
}
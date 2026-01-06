import { useState } from 'react';
import Layer from '../../components/layer/Layer';
import './WhoAreWe.css';
import PhotoDescription from '../../components/photo-description/PhotoDescription';

function WhoAreWe() {
    const [whoAreWe, setWhoAreWe] = useState<any>();

    const onCollectionsLoaded = () => {
        setWhoAreWe(window.douxbermann.whoAreWe);
    };

    return (
        <Layer onDataLoaded={onCollectionsLoaded}>
            <div className='who-are-we-principal-container'>
                <div className='who-are-we-container'>
                    { whoAreWe && whoAreWe.map((whoAreWeInformations: any, index: number) => 
                        <PhotoDescription key={whoAreWeInformations.picture + '-' + index} whoAreWe={whoAreWeInformations} />
                    )}
                </div>
            </div>
        </Layer>
    );
}

export default WhoAreWe;
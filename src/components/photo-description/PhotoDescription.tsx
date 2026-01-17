import './PhotoDescription.css';

interface PhotoDescriptionProps {
    whoAreWe: any;
}

function PhotoDescription({whoAreWe }: PhotoDescriptionProps) {
    return (
        <div className={whoAreWe.picturePosition === 'right' ? 'photo-description picture-right' : 'photo-description'}>
            <img src={'/assets' + whoAreWe.picture}></img>
            <span className='text-xl'>{whoAreWe.text}</span>
        </div>
    );
}

export default PhotoDescription;
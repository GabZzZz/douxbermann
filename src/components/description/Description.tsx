import './Description.css';

function Description() {
    return (
        <div className='description-principal-container'>
            <div className='description-container'>
                <p className="text-muted-foreground text-xl">
                    {window.douxbermann.home.description}
                </p>
            </div>
        </div>
    );
}

export default Description;
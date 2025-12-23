import './LargePhoto.css';

function LargePhoto() {
    return (
        <div className="large-photo">
            <div className="large-photo-container">
                <div className="text-container">
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                        {window.douxbermann.home.title}
                    </h2>
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                        {window.douxbermann.home.subtitle}
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default LargePhoto;
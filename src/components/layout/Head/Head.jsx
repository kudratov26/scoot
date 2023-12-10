export const Head = ({ children, backImg }) => {
    return (
        <div className={`py-[62px] flex items-center`} style={{ backgroundImage: `url(${backImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
            <div className="container">
                <span className="text-[white] font-spaceMono text-[56px] font-bold leading-[100%]">{children}</span>
            </div>
        </div >
    )
}

const BtnActions = ({ children, handleClick, disabled }) => {
    return <button className={`px-5 py-2 rounded-full bg-primary-500 text-white text-[16px]
    hover:bg-primary-700 hover:cursor-pointer ${disabled? 'opacity-80 hover:cursor-not-allowed hover:bg-primary-500' : ''}`}
        onClick={handleClick}>
        {children}
    </button>
}

const BtnHref = ({ children, disabled }) => {
    return <div className={`px-5 py-2 rounded-full bg-primary-500 text-white text-[16px]
    hover:bg-primary-700 hover:cursor-pointer ${disabled? 'opacity-80 hover:cursor-not-allowed hover:bg-primary-500' : ''}`}>
        {children}
    </div>
}

export { BtnActions, BtnHref }
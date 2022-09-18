const BtnActions = ({ children, handleClick, disabled, id }) => {
    return <button id={id} className={`px-5 py-2 rounded-full bg-primary-500 text-white text-[16px]
    hover:bg-primary-700 hover:cursor-pointer w-fit ${disabled? 'opacity-80 hover:cursor-not-allowed hover:bg-primary-500' : ''}`}
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

const BtnInfo = ({ children, handleClick, disabled, id }) => {
    return <button id={id}  className={`px-5 py-2 rounded-full bg-info-500 text-white text-[16px]
    hover:bg-info-600 hover:cursor-pointer w-fit ${disabled? 'opacity-80 hover:cursor-not-allowed hover:bg-info-500' : ''}`}
        onClick={handleClick}>
        {children}
    </button>
}

const BtnSuccess = ({ children, handleClick, disabled, id }) => {
    return <button id={id} className={`px-5 py-2 rounded-full bg-success-500 text-white text-[16px]
    hover:bg-success-900 hover:cursor-pointer w-fit ${disabled? 'opacity-80 hover:cursor-not-allowed hover:bg-succcess-500' : ''}`}
        onClick={handleClick}>
        {children}
    </button>
}

const BtnDanger = ({ children, handleClick, disabled, id }) => {
    return <button id={id} className={`px-5 py-2 rounded-full bg-danger-500 text-white text-[16px]
    hover:bg-danger-800 hover:cursor-pointer w-fit ${disabled? 'opacity-80 hover:cursor-not-allowed hover:bg-succcess-500' : ''}`}
        onClick={handleClick}>
        {children}
    </button>
}



export { BtnActions, BtnHref, BtnInfo, BtnSuccess, BtnDanger }
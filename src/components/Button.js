
export default function Button({isDisabled, counter, onClick}){

    return(
        <>
            <button disabled={isDisabled} onClick={onClick}>
                Like {counter}
            </button>
        </>
    )
}
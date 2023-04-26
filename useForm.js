import { useState } from "react";

export const useForm = ( initialForm = {}) => {


    const [fomrState, setFormState] = useState(initialForm)

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...fomrState,
            [ name ]: value
        })

    }

    const onResetForm = () => {
        setFormState(initialForm)
    }

    return {
        ...fomrState,
        fomrState,
        onInputChange,
        onResetForm
    }
}

import React from "react";
import { useForm, ValidationError } from '@formspree/React';

function Form() {
    const [state, handleSubmit] = useForm("")

    if(state.succeeded){
        return <p>Gracias!!</p>;
    }

    return (
        <div className="bg-white/40 outfit text-white flex items-center justify-center h-60 px-12 py-6 rounded-sm">
            <form className="w-full h-full flex flex-col" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                    <ValidationError prefix="email" fixeld="eamil" errors={state.errors} />
                </div>
                <div>
                    <textarea name="message" id="message"/>
                    <ValidationError prefix="message" fixeld="message" errors={state.errors} />
                </div>
                <div className="w-full flex items-center justify-center pt-4">
                    <button 
                    type="submit" disabled={state.submitting}
                    className="w-full h-[40px] rounded-lg bg-blue-400">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form

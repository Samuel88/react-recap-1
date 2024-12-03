import { useState } from "react"

const formDataInitial = {
    titolo: '',
    contenuto: '',
    tags: [],
    published: true,
}

export default function Form() {
    const [formData, setFormData] = useState(formDataInitial);

    const updateFormData = (name, value) => {
        setFormData(formData => ({
                ...formData,
                [name]: value
        }));
    };

    const onInputTextChange = (event) => {
        const { name, value } = event.target;
        updateFormData(name, value);
    };

    const onInputRadioChange = (event) => {
        const { name } = event.target;
        const value = event.target.value === 'true' ? true : false;
        updateFormData(name, value);
    }

    const onInputCheckboxChange = (event) => {
        const { name, checked, value } = event.target;
        setFormData(({ [name]: checkboxArr, ...other }) => {
            if (checked) {
                checkboxArr = [...checkboxArr, value];
            } else {
                checkboxArr = checkboxArr.filter(arrValue => arrValue !== value);
            }
            return {
                ...other,
                [name]: checkboxArr,
            }
        });

    }

    return (
        <form action="">
            <pre>
                {JSON.stringify(formData)}
            </pre>
            <input type="text" name="titolo" value={formData.titolo} onChange={onInputTextChange}/>
            <textarea name="contenuto" value={formData.contenuto} onChange={onInputTextChange}></textarea>
            <div>
                <input type="checkbox" name="tags" value={'tag1'} checked={formData.tags.includes('tag1')} onChange={onInputCheckboxChange}/>
                <input type="checkbox" name="tags" value={'tag2'} checked={formData.tags.includes('tag2')} onChange={onInputCheckboxChange}/>
                <input type="checkbox" name="tags" value={'tag3'} checked={formData.tags.includes('tag3')} onChange={onInputCheckboxChange}/>
            </div>
            <div>
                <input type="radio" name="published" value={true} checked={formData.published} onChange={onInputRadioChange}/>
                <input type="radio" name="published" value={false} checked={!formData.published} onChange={onInputRadioChange}/>
            </div>
        </form>
    )
}
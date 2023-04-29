import React from "react"
import styles from './FormsControl.module.css'

const FormControl = ({input, meta, child, ...props}) => {
    const error = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (
            error ? styles.error : '')} >
            <div>
                {props.children}
            </div>
            {error && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    return (<FormControl 
        {...props}><textarea {...input} {...restProps}/>
    </FormControl>  
    ) 
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return (<FormControl 
    {...props}><input {...input} {...restProps}/>
</FormControl>  
    )
}
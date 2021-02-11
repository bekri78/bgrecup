import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../components/controls/Controls";
import { useForm, Form } from '../../components/useForm';
import * as employeeService from "../../services/employeeService";


const genderItems = [
    { id: 'male', title: 'Bande Graphique' },  
]

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    machine: '',
    city: '',
    gender: 'male',
    departmentId: '',
    retrait:'',
    hireDate: new Date(),
    // isPermanent: false,
}
 console.log("employersFormes", initialFValues.hireDate)

export default function EmployeeForm(props) {
    const { addOrEdit, recordForEdit } = props

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        // if ('email' in fieldValues)
        //     temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('machine' in fieldValues)
            temp.machine = fieldValues.machine.length > 4 ? "" : " 5 nombres minimum requis."
        if ('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId.length !== 0 ? "" : "This field is required."
        setErrors({
            ...temp
        })
        if ("RETRAIT" in fieldValues)
        temp.RETRAIT = fieldValues.RETRAIT.length !== 0 ? "" : "Champs Requis.";
      setErrors({
        ...temp
      });

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            addOrEdit(values, resetForm);
        }
    }

    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit])
    
    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                   <Controls.DatePicker
                       name="hireDate"
                       label="Date du premier train"
                       value={values.hireDate}
                       onChange={handleInputChange}
                   />
                        <Controls.Input
                            label="Numero Engin"
                            name="machine"
                            value={values.engin}
                            onChange={handleInputChange}
                             error={errors.machine}
                        />
                      <Controls.Select
            name="RETRAIT"
            label="RETRAIT"
            value={values.RETRAIT}
            onChange={handleInputChange}
            options={employeeService.retraite()}
            error={errors.RETRAIT}
          />
                  
                    <Controls.Input
                        label="Motif de non retrait"
                        name="city"
                        value={values.city}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        name="fullName"
                        label="Votre Nom"
                        value={values.fullName}
                        onChange={handleInputChange}
                        // error={errors.fullName}
                    />

                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name="gender"
                        label="Type"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                    <Controls.Select
                        name="departmentId"
                        label="Specifier"
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentCollection()}
                        error={errors.departmentId}
                    />
                  

                    <div>
                        <Controls.Button
                            type="submit"
                            text="Envoyer" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}

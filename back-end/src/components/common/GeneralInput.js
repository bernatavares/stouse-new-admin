import React, { Component } from 'react'
import { AvField, AvForm } from 'availity-reactstrap-validation';

const GeneralInput = ({ label, name, placeholder }) => (
    <div className="form-group">
        <label className="mb-0">{label} </label>
        <div className="form-field">
            <AvField className="form-control" name={name} type="text" placeholder={placeholder} required />
        </div>
        <div className="valid-feedback">Invalid</div>
    </div>
)

export default GeneralInput;
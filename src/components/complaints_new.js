import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import { createComplaint } from '../actions/index';

import 'react-widgets/dist/css/react-widgets.css';
import DropdownList from 'react-widgets/lib/DropdownList';

//import Calendar from 'react-widgets/lib/Calendar';
//import Globalize from 'globalize';
//import GlobalizePlugin from 'globalize-webpack-plugin';
//import globalizeLocalizer from 'react-widgets/lib/localizers/globalize';

class ComplaintsNew extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit (props) {
        this.props.createComplaint(props)
            .then( () => {
                this.context.router.push('/');
            });
    }

    render() {

        const { fields: {name, phone, email, branch, dateLogged, loggedBy, status, 
            description}, handleSubmit, createComplaint } = this.props;
        const branches = ['Lilongwe', 'Limbe', 'Malangalanga', 'Mzuzu'];
        const complaintStatus = ['Unattended', 'Customer Contacted', 'Resolved', 'Closed']


        return (
            <div>
                <h3 className="text-center">Enter complaint</h3>
                <form className="form-horizontal" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <div className={`form-group ${name.touched && name.invalid ? 'has-error' : '' }`}>
                        <label className="col-sm-2 control-label">Customer's Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" {...name}  />
                        </div>
                        <div className="text-help col-sm-10 col-sm-offset-2">
                            {name.touched ? name.error : ""}
                        </div>
                    </div>
                    <div className={`form-group ${phone.touched && phone.invalid ? 'has-error' : '' }`}>
                        <label className="col-sm-2 control-label">Phone(s)</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" {...phone} />
                        </div>
                        <div className="text-help col-sm-10 col-sm-offset-2">
                            {phone.touched ? phone.error : ""}
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" {...email} />
                        </div>
                    </div>

                    <div className={`form-group ${branch.touched && branch.invalid ? 'has-error' : '' }`}>
                        <label className="col-sm-2 control-label">Branch</label>
                        <div className="col-sm-10">
                            <DropdownList data={branches} {...branch} />
                        </div>
                        <div className="text-help col-sm-10 col-sm-offset-2">
                            {branch.touched ? branch.error : ""}
                        </div>   
                    </div>
                    
                    <div className={`form-group ${dateLogged.touched && dateLogged.invalid ? 'has-error' : '' }`}>
                        <label className="col-sm-2 control-label">Logging Date</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" {...dateLogged}  />
                        </div>
                        <div className="text-help col-sm-10 col-sm-offset-2">
                            {dateLogged.touched ? dateLogged.error : ""}
                        </div> 
                    </div>
                    <div className="form-group">
                        <div className="col-sm-10">
                            <input type="text" value="Customer Care Agent" className="form-control hidden" {...loggedBy} />
                        </div>
                    </div>

                    <div className={`form-group ${status.touched && status.invalid ? 'has-error' : '' }`}>
                        <label className="col-sm-2 control-label">Status</label>
                        <div className="col-sm-10">
                            <DropdownList data={complaintStatus} defaultValue={"Unattended"} {...status} />
                        </div>
                        <div className="text-help col-sm-10 col-sm-offset-2">
                            {status.touched ? status.error : ""}
                        </div>     
                    </div>
                    <div className={`form-group ${description.touched && description.invalid ? 'has-error' : '' }`}>
                        <label className="col-sm-2 control-label">Description</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" {...description} />
                        </div>
                        <div className="text-help col-sm-10 col-sm-offset-2">
                            {description.touched ? description.error : ""}
                        </div> 
                    </div>

                    <div className="col-sm-9 col-sm-offset-2">                    
                        <button type="submit" className="btn btn-primary">Save</button>
                        <Link to="/">
                            <button className="btn btn-danger" >Cancel</button>
                        </Link>
                    </div>
                </form>
                
            </div>
        );
    }
}

function validate (values) {
    const errors = {};

    if (!values.name) {
        errors.name = "Enter the name of the customer";
    }

    if (!values.phone) {
        errors.phone = "Enter the customer's phone number(s)";
    }

    if (!values.branch) {
        errors.branch = "Select the branch where the complaint was raised";
    }

    if (!values.dateLogged) {
        errors.dateLogged = "Enter the date the complaint was raised";
    }

    if (!values.status) {
        errors.status = "Select the status of the complaint";
    }

    if (!values.description) {
        errors.description = "Enter the detials of the complaint";
    }

    return errors;
}

export default reduxForm({
    form: 'ComplaintsNewForm',
    fields: ['name', 'phone', 'email', 'branch', 'dateLogged', 'loggedBy', 'status', 'description'],
    validate
}, 
null, { createComplaint })(ComplaintsNew);

